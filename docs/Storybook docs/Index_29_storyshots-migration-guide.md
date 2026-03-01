<document index="29">
    <source>storyshots-migration-guide.md</source>
    <document_content>
# Storyshots migration guide

ℹ️ We're actively integrating community feedback to improve the tooling and documentation for snapshot testing with Storybook. If you're interested in participating in this process and helping us improve it. Please fill out this form to share your feedback.

This guide will teach you how to migrate your snapshot tests from the Storyshots addon to Storybook's test-runner or portable stories. Also, you will be able to understand the differences between them and set up, configure, and run snapshot tests using the available tooling provided by Storybook.

## Migrating tests from Storyshots

### Prerequisites

Before you begin the migration process, ensure that you have:

- A fully functional Storybook configured with one of the supported frameworks running the latest stable version (i.e., 7.6 or higher).
- Familiarity with your current Storybook and its testing setup.

### With the test-runner

Storybook test-runner turns all of your stories into executable tests. Powered by Jest and Playwright. It's a standalone, framework-agnostic utility that runs parallel to your Storybook. It enables you to run multiple testing patterns in a multi-browser environment, including component testing with the play function, DOM snapshot, and accessibility testing.

#### Setup

To get started with the migration process from the Storyshots addon to the test-runner, we recommend that you remove the Storyshots addon and similar packages (i.e., storybook/addon-storyshots-puppeteer ) from your project, including any related configuration files. Then, follow the test-runner's setup instructions to install, configure and run it.

#### Extend your test coverage

The Storyshots addon offered a highly customizable testing solution, allowing users to extend testing coverage in various ways. However, the test-runner provides a similar experience but with a different API. Below, you will find additional examples of using the test-runner to achieve results similar to those you achieved with Storyshots.

#### Enable DOM snapshot testing with the test-runner

To enable DOM snapshot testing with the test-runner, you can extend the test-runner's configuration file and use the available hooks and combine them with Playwright's built-in APIs to generate DOM snapshots for each story in your project. For example:

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

💡 If you've set up DOM snapshot tests in your project with the test-runner and enabled the index.json mode via CLI flag, tests are generated in a temporary folder outside your project, and snapshots get stored alongside them. You'll need to extend the test-runner's configuration and provide a custom snapshot resolver to allow a different location for the snapshots. See the Troubleshooting section for more information.

#### Run image snapshot tests with the test-runner

By default, the test-runner provides you with the option to run multiple testing patterns (e.g., DOM snapshot testing, accessibility) with minimal configuration. However, if you want, you can extend it to run visual regression testing alongside your other tests. For example:

```typescript
// .storybook/test-runner.ts
import { TestRunnerConfig, waitForPageReady } from '@storybook/test-runner';
 
import { toMatchImageSnapshot } from 'jest-image-snapshot';
 
const customSnapshotsDir = `${process.cwd()}/__snapshots__`;
 
const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postVisit(page, context) {
    // Waits for the page to be ready before taking a screenshot to ensure consistent results
    await waitForPageReady(page);
 
    // To capture a screenshot for for different browsers, add page.context().browser().browserType().name() to get the browser name to prefix the file name
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
    });
  },
};
export default config;
```

### With Portable Stories

Storybook provides a composeStories utility that helps convert stories from a story file into renderable elements that can be reused in your Node tests with JSDOM. It also allows you to apply other Storybook features that you have enabled in your project (e.g., decorators, args), which allows your component to render correctly. This is what is known as portable stories.

#### Setup

We recommend you turn off your current storyshots tests to start the migration process. To do this, rename the configuration file (i.e., storybook.test.ts|js or similar) to storybook.test.ts|js.old. This will prevent the tests from being detected, as you'll create a new testing configuration file with the same name. By doing this, you'll be able to preserve your existing tests while transitioning to portable stories before removing the Storyshots addon from your project.

#### Import project-level annotations from Storybook

If you need project-level annotations (e.g., decorators, args, styles) enabled in your ./storybook/preview.js|ts included in your tests, adjust your test set up file to import the annotations as follows:

```typescript
// setupTest.ts
import { beforeAll } from 'vitest';
// 👇 If you're using Next.js, import from @storybook/nextjs
//   If you're using Next.js with Vite, import from @storybook/experimental-nextjs-vite
import { setProjectAnnotations } from '@storybook/react';
// 👇 Import the exported annotations, if any, from the addons you're using; otherwise remove this
import * as addonAnnotations from 'my-addon/preview';
import * as previewAnnotations from './.storybook/preview';
 
const annotations = setProjectAnnotations([previewAnnotations, addonAnnotations]);
 
// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);
```

#### Configure the testing framework for portable stories

To help you migrate from Storyshots addon to Storybook's portable stories with the composeStories helper API, we've prepared examples to help you get started. Listed below are examples of two of the most popular testing frameworks: Jest and Vitest. We recommend placing the code in a newly created storybook.test.ts|js file and adjusting the code accordingly, depending on your testing framework. Both examples below will:

- Import all story files based on a glob pattern
- Iterate over these files and use composeStories on each of their modules, resulting in a list of renderable components from each story
- Cycle through the stories, render them, and snapshot them

##### Vitest

If you're using Vitest as your testing framework, you can begin migrating your snapshot tests to Storybook's portable stories with the composeStories helper API by referring to the following example. You will need to modify the code in your storybook.test.ts|js file as follows:

```typescript
// @vitest-environment jsdom
 
// Replace your-framework with one of the supported Storybook frameworks (react, vue3)
import type { Meta, StoryFn } from '@storybook/your-framework';
 
import { describe, expect, test } from 'vitest';
 
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
  // Place the glob you want to match your story files
  const storyFiles = Object.entries(
    import.meta.glob<StoryFile>('./stories/**/*.(stories|story).@(js|jsx|mjs|ts|tsx)', {
      eager: true,
    }),
  );
 
  return storyFiles.map(([filePath, storyFile]) => {
    const storyDir = path.dirname(filePath);
    const componentName = path.basename(filePath).replace(/\.(stories|story)\.[^/.]+$/, '');
    return { filePath, storyFile, componentName, storyDir };
  });
}
 
// Recreate similar options to Storyshots. Place your configuration below
const options = {
  suite: 'Storybook Tests',
  storyKindRegex: /^.*?DontTest$/,
  storyNameRegex: /UNSET/,
  snapshotsDirName: '__snapshots__',
  snapshotExtension: '.storyshot',
};
 
describe(options.suite, () => {
  getAllStoryFiles().forEach(({ storyFile, componentName, storyDir }) => {
    const meta = storyFile.default;
    const title = meta.title || componentName;
 
    if (options.storyKindRegex.test(title) || meta.parameters?.storyshots?.disable) {
      // Skip component tests if they are disabled
      return;
    }
 
    describe(title, () => {
      const stories = Object.entries(compose(storyFile))
        .map(([name, story]) => ({ name, story }))
        .filter(({ name, story }) => {
          // Implements a filtering mechanism to avoid running stories that are disabled via parameters or that match a specific regex mirroring the default behavior of Storyshots.
          return !options.storyNameRegex?.test(name) && !story.parameters.storyshots?.disable;
        });
 
      if (stories.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module, without a disable parameter, or add parameters.storyshots.disable in the default export of this file.`,
        );
      }
 
      stories.forEach(({ name, story }) => {
        // Instead of not running the test, you can create logic to skip it, flagging it accordingly in the test results.
        const testFn = story.parameters.storyshots?.skip ? test.skip : test;
 
        testFn(name, async () => {
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

When your test is executed with Vitest, it will generate a single snapshot file (i.e., storybook.test.ts|js.snap) with all the stories in your project. However, if you want to generate individual snapshot files, you can use Vitest's toMatchFileSnapshot API. For example:

```typescript
// storybook.test.js|ts
// ...Code omitted for brevity
 
describe(options.suite, () => {
  // 👇 Add storyDir in the arguments list
  getAllStoryFiles().forEach(({ filePath, storyFile, storyDir }) => {
    // ...Previously existing code
    describe(title, () => {
      // ...Previously existing code
      stories.forEach(({ name, story }) => {
        // ...Previously existing code
        testFn(name, async () => {
          await story.run();
          // Ensures a consistent snapshot by waiting for the component to render by adding a delay of 1 ms before taking the snapshot.
          await new Promise((resolve) => setTimeout(resolve, 1));
 
          // 👇 Define the path to save the snapshot to:
          const snapshotPath = path.join(
            storyDir,
            options.snapshotsDirName,
            `${componentName}${options.snapshotExtension}`
          );
          await expect(document.body.firstChild).toMatchFileSnapshot(snapshotPath);
        });
      });
    });
  });
});
```

##### Jest

If you're using Jest as your testing framework, you can begin migrating your snapshot tests to Storybook's portable stories with the composeStories helper API by referring to the following example. You will need to modify the code in your storybook.test.ts|js file as follows:

```typescript
// storybook.test.ts
import path from 'path';
import * as glob from 'glob';
 
// Replace your-framework with one of the supported Storybook frameworks (react, vue3)
import type { Meta, StoryFn } from '@storybook/your-framework';
 
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
    return { filePath, storyFile };
  });
}
 
// Recreate similar options to Storyshots. Place your configuration below
const options = {
  suite: 'Storybook Tests',
  storyKindRegex: /^.*?DontTest$/,
  storyNameRegex: /UNSET/,
  snapshotsDirName: '__snapshots__',
  snapshotExtension: '.storyshot',
};
 
describe(options.suite, () => {
  getAllStoryFiles().forEach(({ storyFile, componentName }) => {
    const meta = storyFile.default;
    const title = meta.title || componentName;
 
    if (options.storyKindRegex.test(title) || meta.parameters?.storyshots?.disable) {
      // Skip component tests if they are disabled
      return;
    }
 
    describe(title, () => {
      const stories = Object.entries(compose(storyFile))
        .map(([name, story]) => ({ name, story }))
        .filter(({ name, story }) => {
          // Implements a filtering mechanism to avoid running stories that are disabled via parameters or that match a specific regex mirroring the default behavior of Storyshots.
          return !options.storyNameRegex.test(name) && !story.parameters.storyshots?.disable;
        });
 
      if (stories.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module, without a disable parameter, or add parameters.storyshots.disable in the default export of this file.`,
        );
      }
 
      stories.forEach(({ name, story }) => {
        // Instead of not running the test, you can create logic to skip it, flagging it accordingly in the test results.
        const testFn = story.parameters.storyshots?.skip ? test.skip : test;
 
        testFn(name, async () => {
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

When your test is executed with Jest, it will generate a single snapshot file (i.e., __snapshots__/storybook.test.ts|js.snap) with all the stories in your project. However, if you want to generate individual snapshot files, you can use the jest-specific-snapshot package. For example:

```typescript
// storybook.test.js|ts
// 👇 Augment expect with jest-specific-snapshot
import 'jest-specific-snapshot';
 
// ...Code omitted for brevity
 
describe(options.suite, () => {
  //👇 Add storyDir in the arguments list
  getAllStoryFiles().forEach(({ filePath, storyFile, storyDir }) => {
    // ...Previously existing code
    describe(title, () => {
      // ...Previously existing code
      stories.forEach(({ name, story }) => {
        // ...Previously existing code
        testFn(name, async () => {
          await story.run();
          // Ensures a consistent snapshot by waiting for the component to render by adding a delay of 1 ms before taking the snapshot.
          await new Promise((resolve) => setTimeout(resolve, 1));
 
          //👇 Define the path to save the snapshot to:
          const snapshotPath = path.join(
            storyDir,
            options.snapshotsDirName,
            `${componentName}${options.snapshotExtension}`,
          );
          expect(document.body.firstChild).toMatchSpecificSnapshot(snapshotPath);
        });
      });
    });
  });
});
```

#### Known limitations

If you opt to use portable stories in your tests, you'll have a single test file that can run in a JSDOM environment, rendering and snapshotting all your stories. However, as your project grows, you may run into the limitations you had with Storyshots previously:

- You are not testing against a real browser.
- You must mock many browser utilities (e.g., canvas, window APIs, etc).
- Your debugging experience will not be as good, given you can't access the browser as part of your tests.

Alternatively, you may want to consider migrating to the other available option for snapshot testing with Storybook: the test-runner for a more robust solution that runs tests against a real browser environment with Playwright.

## Troubleshooting

As running snapshot tests with Storybook and the test-runner can lead to some technical limitations that may prevent you from setting up or running your tests successfully, we've prepared a set of instructions to help you troubleshoot any issues you may encounter.

### The test-runner reports an error when running snapshot tests

If you're experiencing intermittent test failures with the test-runner, uncaught errors may occur when your tests run in the browser. These errors might not have been caught if you were using the Storyshots addons previously. The test-runner will, by default, consider these uncaught errors as failed tests. However, if these errors are expected, you can ignore them by enabling custom story tags in your stories and test-runner configuration files. For more information, please refer to the test-runner documentation.

### The test-runner does not generate snapshot files in the expected directory

If you've configured the test-runner to run snapshot tests, you may notice that the paths and names of the snapshot files differ from those previously generated by the Storyshots addon. This is because the test-runner uses a different naming convention for snapshot files. Using a custom snapshot resolver, you can configure the test-runner to use the same naming convention you used previously.

Run the following command to generate a custom configuration file for the test-runner that you can use to configure Jest:

```bash
npm run test-storybook -- --eject
```

Update the file and enable the snapshotResolver option to use a custom snapshot resolver:

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

Finally, create a snapshot-resolver.js file to implement a custom snapshot resolver:

```javascript
// ./snapshot-resolver.js
import path from 'path';
 
export default {
  resolveSnapshotPath: (testPath) => {
    const fileName = path.basename(testPath);
    const fileNameWithoutExtension = fileName.replace(/\.[^/.]+$/, '');
    const modifiedFileName = `${fileNameWithoutExtension}.storyshot`;
 
    // Configure Jest to generate snapshot files using the following naming convention (__snapshots__/Button.storyshot)
    return path.join(path.dirname(testPath), '__snapshots__', modifiedFileName);
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    path.basename(snapshotFilePath, snapshotExtension),
  testPathForConsistencyCheck: 'example.storyshot',
};
```

### The format of the snapshot files is different from the ones generated by the Storyshots addon

By default, the test-runner uses jest-serializer-html to serialize HTML snapshots. This may cause differences in formatting compared to your existing snapshots, even if you're using specific CSS-in-JS libraries like Emotion, Angular's ng attributes, or other similar libraries that generate hash-based identifiers for CSS classes. However, you can configure the test-runner to use a custom snapshot serializer to solve this issue by overriding the random class names with a static one that will be the same for each test run.

Run the following command to generate a custom configuration file for the test-runner that you can use to provide additional configuration options.

```bash
npm run test-storybook -- --eject
```

Update the file and enable the snapshotSerializers option to use a custom snapshot resolver. For example:

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

Finally, create a snapshot-serializer.js file to implement a custom snapshot serializer:

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

When the test-runner executes your tests, it will introspect the resulting HTML and replace any dynamically generated attributes with the static ones provided by the regex expression before snapshotting the component.
</document_content>
</document>