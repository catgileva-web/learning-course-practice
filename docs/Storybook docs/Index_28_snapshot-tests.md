<document index="28">
    <source>snapshot-tests.md</source>
    <document_content>
# Snapshot tests

Snapshot tests compare the rendered markup of every story against known baselines. It's a way to identify markup changes that trigger rendering errors and warnings.

Storybook is a helpful tool for snapshot testing because every story is essentially a test specification. Any time you write or update a story, you get a snapshot test for free.

ℹ️ If you're upgrading to Storybook 8.0 and were using the Storyshots addon for snapshot testing, it was officially deprecated and removed with this release. See the migration guide for more information.

## Automate snapshot tests with the test-runner

Storybook test-runner turns all of your stories into executable tests. Powered by Jest and Playwright. It's a standalone, framework-agnostic utility that runs parallel to your Storybook. It enables you to run multiple testing patterns in a multi-browser environment, including component testing with the play function, DOM snapshot, and accessibility testing.

### Setup

To enable snapshot testing with the test-runner, you'll need to take additional steps to set it up properly. We recommend you go through the test runner documentation before proceeding with the rest of the required configuration to learn more about the available options and APIs.

Add a new configuration file inside your Storybook directory with the following inside:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
 
const config: TestRunnerConfig = {
  async postVisit(page, context) {
    // the #storybook-root element wraps the story. In Storybook 6.x, the selector is #root
    const elementHandler = await page.$('#storybook-root');
    const innerHTML = await elementHandler.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};
 
export default config;
```

💡 The postVisit hook allows you to extend the test runner's default configuration. Read more about them here.

When you execute the test-runner (for example, with yarn test-storybook), it will run through all of your stories and run the snapshot tests, generating a snapshot file for each story in your project located in the __snapshots__ directory.

### Configure

Out of the box, the test-runner provides an inbuilt snapshot testing configuration covering most use cases. You can also fine-tune the configuration to fit your needs via test-storybook --eject or by creating a test-runner-jest.config.js file at the root of your project.

### Override the default snapshot directory

The test-runner uses a specific naming convention and path for the generated snapshot files by default. If you need to customize the snapshot directory, you can define a custom snapshot resolver to specify the directory where the snapshots are stored.

Create a snapshot-resolver.js file to implement a custom snapshot resolver:

```javascript
// ./snapshot-resolver.js
import path from 'path';
 
export default {
  resolveSnapshotPath: (testPath) => {
    const fileName = path.basename(testPath);
    const fileNameWithoutExtension = fileName.replace(/\.[^/.]+$/, '');
    // Defines the file extension for the snapshot file
    const modifiedFileName = `${fileNameWithoutExtension}.snap`;
 
    // Configure Jest to generate snapshot files using the following convention (./src/test/__snapshots__/Button.stories.snap)
    return path.join('./src/test/__snapshots__', modifiedFileName);
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    path.basename(snapshotFilePath, snapshotExtension),
  testPathForConsistencyCheck: 'example',
};
```

Update the test-runner-jest.config.js file and enable the snapshotResolver option to use the custom snapshot resolver:

```javascript
// ./test-runner-jest.config.js
import { getJestConfig } from '@storybook/test-runner';
 
const defaultConfig = getJestConfig();
 
const config = {
  // The default Jest configuration comes from @storybook/test-runner
  ...defaultConfig,
  snapshotResolver: './snapshot-resolver.js',
};
 
export default config;
```

When the test-runner is executed, it will cycle through all of your stories and run the snapshot tests, generating a snapshot file for each story in your project located in the custom directory you specified.

### Customize snapshot serialization

By default, the test-runner uses jest-serializer-html to serialize HTML snapshots. This may cause issues if you use specific CSS-in-JS libraries like Emotion, Angular's ng attributes, or similar libraries that generate hash-based identifiers for CSS classes. If you need to customize the serialization of your snapshots, you can define a custom snapshot serializer to specify how the snapshots are serialized.

Create a snapshot-serializer.js file to implement a custom snapshot serializer:

```javascript
// ./snapshot-serializer.js
// The jest-serializer-html package is available as a dependency of the test-runner
const jestSerializerHtml = require('jest-serializer-html');
 
const DYNAMIC_ID_PATTERN = /"react-aria-\d+(\.\d+)?"/g;
 
module.exports = {
  /*
   * The test-runner calls the serialize function when the test reaches the expect(SomeHTMLElement).toMatchSnapshot().
   * It will replace all dynamic IDs with a static ID so that the snapshot is consistent.
   * For instance, from <label id="react-aria970235672-:rl:" for="react-aria970235672-:rk:">Favorite color</label> to <label id="react-mocked_id" for="react-mocked_id">Favorite color</label>
   */
  serialize(val) {
    const withFixedIds = val.replace(DYNAMIC_ID_PATTERN, 'mocked_id');
    return jestSerializerHtml.print(withFixedIds);
  },
  test(val) {
    return jestSerializerHtml.test(val);
  },
};
```

Update the test-runner-jest.config.js file and enable the snapshotSerializers option to use the custom snapshot resolver:

```javascript
// ./test-runner-jest.config.js
import { getJestConfig } from '@storybook/test-runner';
 
const defaultConfig = getJestConfig();
 
const config = {
  ...defaultConfig,
  snapshotSerializers: [
    // Sets up the custom serializer to preprocess the HTML before it's passed onto the test-runner
    './snapshot-serializer.js',
    ...defaultConfig.snapshotSerializers,
  ],
};
 
export default config;
```

When the test-runner executes your tests, it will introspect the resulting HTML, replacing the dynamically generated attributes with the static ones provided by the regular expression in the custom serializer file before snapshotting the component. This ensures that the snapshots are consistent across different test runs.

## Snapshot tests with Portable Stories

Storybook provides a composeStories utility that helps convert stories from a test file into renderable elements that can be reused in your Node tests with JSDOM. It also allows you to apply other Storybook features that you have enabled your project (e.g., decorators, args) into your tests, enabling you to reuse your stories in your testing environment of choice (e.g., Jest, Vitest), ensuring your tests are always in sync with your stories without having to rewrite them. This is what we refer to as portable stories in Storybook.

⚠️ You must configure your test environment to use portable stories to ensure your stories are composed with all aspects of your Storybook configuration, such as decorators.

### Run tests on a single story

If you need to run tests on a single story, you can use the composeStories function from the appropriate framework to process it and apply any configuration you've defined in your stories (e.g., decorators, args) and combine it with your testing environment to generate a snapshot file. For example, if you're working on a component and you want to test its default state, ensuring the expected DOM structure doesn't change, here's how you could write your test:

```javascript
// test/Button.test.js|ts
import { composeStories } from '@storybook/react';
 
import * as stories from '../stories/Button.stories';
 
const { Primary } = composeStories(stories);
test('Button snapshot', async () => {
  await Primary.run();
  expect(document.body.firstChild).toMatchSnapshot();
});
```

### Execute tests on multiple stories

You can also use the composeStories function to test multiple stories. This is useful when you want to extend your test coverage to generate snapshots for the different states of the components in your project. To do so, you can write your test as follows:

```typescript
// storybook.test.ts
// Replace your-framework with one of the supported Storybook frameworks (react, vue3)
import type { Meta, StoryFn } from '@storybook/your-framework';
 
import path from 'path';
import * as glob from 'glob';
 
import { describe, test, expect } from '@jest/globals';
 
// Replace your-renderer with the renderer you are using (e.g., react, vue3, svelte, etc.)
import { composeStories } from '@storybook/your-renderer';
 
type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};
 
const compose = (entry: StoryFile): ReturnType<typeof composeStories<StoryFile>> => {
  try {
    return composeStories(entry);
  } catch (e) {
    throw new Error(
      `There was an issue composing stories for the module: ${JSON.stringify(entry)}, ${e}`,
    );
  }
};
 
function getAllStoryFiles() {
  // Place the glob you want to match your stories files
  const storyFiles = glob.sync(
    path.join(__dirname, 'stories/**/*.{stories,story}.{js,jsx,mjs,ts,tsx}'),
  );
 
  return storyFiles.map((filePath) => {
    const storyFile = require(filePath);
    const storyDir = path.dirname(filePath);
    const componentName = path.basename(filePath).replace(/\.(stories|story)\.[^/.]+$/, '');
 
    return { filePath, storyFile, storyDir, componentName };
  });
}
 
describe('Stories Snapshots', () => {
  getAllStoryFiles().forEach(({ storyFile, componentName }) => {
    const meta = storyFile.default;
    const title = meta.title || componentName;
 
    describe(title, () => {
      const stories = Object.entries(compose(storyFile)).map(([name, story]) => ({ name, story }));
 
      if (stories.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module.`,
        );
      }
 
      stories.forEach(({ name, story }) => {
        test(name, async () => {
          await story.run();
          // Ensures a consistent snapshot by waiting for the component to render by adding a delay of 1 ms before taking the snapshot.
          await new Promise((resolve) => setTimeout(resolve, 1));
          expect(document.body.firstChild).toMatchSnapshot();
        });
      });
    });
  });
});
```

When your tests are executed in your testing environment, they will generate a single snapshot file with all the stories in your project (i.e.,storybook.test.ts|js.snap). However, if you need, you can extend your test file to generate individual snapshot files for each story in your project with Vitest's toMatchFileSnapshot API or Jest's jest-specific-snapshot package. For example:

```typescript
// storybook.test.ts
// Replace your-framework with one of the supported Storybook frameworks (react, vue3)
import type { Meta, StoryFn } from '@storybook/your-framework';
 
import path from "path";
import * as glob from "glob";
 
//👇 Augment expect with jest-specific-snapshot
import "jest-specific-snapshot";
 
import { describe, test, expect } from "@jest/globals";
 
// Replace your-renderer with the renderer you are using (e.g., react, vue3, svelte, etc.)
import { composeStories } from '@storybook/your-renderer';
 
type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};
 
const compose = (
  entry: StoryFile
): ReturnType<typeof composeStories<StoryFile>> => {
  try {
    return composeStories(entry);
  } catch (e) {
    throw new Error(
      `There was an issue composing stories for the module: ${JSON.stringify(entry)}, ${e}`
    );
  }
};
 
function getAllStoryFiles() {
  // Place the glob you want to match your stories files
  const storyFiles = glob.sync(
    path.join(__dirname, 'stories/**/*.{stories,story}.{js,jsx,mjs,ts,tsx}'),
  );
 
  return storyFiles.map((filePath) => {
    const storyFile = require(filePath);
    const storyDir = path.dirname(filePath);
    const componentName = path
      .basename(filePath)
      .replace(/\.(stories|story)\.[^/.]+$/, "");
 
    return { filePath, storyFile, storyDir, componentName };
  });
}
 
describe("Stories Snapshots", () => {
  getAllStoryFiles().forEach(({ storyFile, componentName }) => {
    const meta = storyFile.default;
    const title = meta.title || componentName;
 
    describe(title, () => {
      const stories = Object.entries(compose(storyFile)).map(
        ([name, story]) => ({ name, story })
      );
 
      if (stories.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module.`
        );
      }
 
      stories.forEach(({ name, story }) => {
        test(name, async () => {
          await story.run();
          // Ensures a consistent snapshot by waiting for the component to render by adding a delay of 1 ms before taking the snapshot.
          await new Promise((resolve) => setTimeout(resolve, 1));
          // Defines the custom snapshot path location and file name
          const customSnapshotPath = `./__snapshots__/${componentName}.test.ts.snap`;
          expect(document.body.firstChild).toMatchSpecificSnapshot(customSnapshotPath);
        });
      });
    });
  });
});
```

## What's the difference between snapshot tests and visual tests?

Visual tests capture images of stories and compare them against image baselines. Snapshot tests take DOM snapshots and compare them against DOM baselines. Visual tests are better suited for verifying appearance. Snapshot tests are useful for smoke testing and ensuring the DOM doesn't change.

## Learn about other UI tests

* Component tests for user behavior simulation
* Visual tests for appearance
* Accessibility tests for accessibility
* Snapshot tests for rendering errors and warnings
* Test runner to automate test execution
* Test coverage for measuring code coverage
* End-to-end tests for simulating real user scenarios
* Unit tests for functionality
</document_content>
</document>