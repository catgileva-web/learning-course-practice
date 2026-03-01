<document index="27">
    <source>accessibility-tests.md</source>
    <document_content>
# Accessibility tests

Accessibility is the practice of making websites inclusive to all. That means supporting requirements such as: keyboard navigation, screen reader support, touch-friendly, usable color contrast, reduced motion, and zoom support.

Accessibility tests audit the rendered DOM against a set of heuristics based on WCAG rules and other industry-accepted best practices. They act as the first line of QA to catch blatant accessibility violations.

## Accessibility checks with a11y addon

Storybook provides an official a11y addon. Powered by Deque's axe-core, which automatically catches up to 57% of WCAG issues.

## Set up the a11y addon

If you want to check accessibility for your stories using the addon, you'll need to add it to your Storybook. You can do this by running the following command:

```bash
npx storybook add @storybook/addon-a11y
```

ℹ️ The CLI's add command automates the addon's installation and setup. To install it manually, see our documentation on how to install addons.

Start your Storybook, and you will see some noticeable differences in the UI. A new toolbar icon and the accessibility panel where you can inspect the results of the tests.

## How it works

Storybook's a11y addon runs Axe on the selected story. Allowing you to catch and fix accessibility issues during development. For example, if you're working on a button component and included the following set of stories:

```typescript
// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
// This is an accessible story
export const Accessible: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};
 
// This is not
export const Inaccessible: Story = {
  args: {
    ...Accessible.args,
    backgroundColor: 'red',
  },
};
```

Cycling through both stories, you will see that the Inaccessible story contains some issues that need fixing. Opening the violations tab in the accessibility panel provides a clear description of the accessibility issue and guidelines for solving it.

## Configure

Out of the box, Storybook's accessibility addon includes a set of accessibility rules that cover most issues. You can also fine-tune the addon configuration or override Axe's ruleset to best suit your needs.

### Global a11y configuration

If you need to dismiss an accessibility rule or modify its settings across all stories, you can add the following to your storybook/preview.js|ts:

```typescript
// .storybook/preview.ts
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    a11y: {
      // Optional selector to inspect
      element: 'body',
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'image-alt',
            enabled: false,
          },
        ],
      },
      /*
       * Axe's options parameter
       * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
       * to learn more about the available options.
       */
      options: {},
    },
  },
  globals: {
    a11y: {
      // Optional flag to prevent the automatic check
      manual: true,
    },
  },
};
 
export default preview;
```

### Component-level a11y configuration

You can also customize your own set of rules for all stories of a component. Update the story file's default export and add parameters and globals with the required configuration:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  parameters: {
    a11y: {
      // Optional selector to inspect
      element: 'body',
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'image-alt',
            enabled: false,
          },
        ],
      },
      /*
       * Axe's options parameter
       * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
       * to learn more about the available options.
       */
      options: {},
    },
  },
  globals: {
    a11y: {
      manual: true,
    },
  },
};
 
export default meta;
```

### Story-level a11y configuration

Customize the a11y ruleset at the story level by updating your story to include a new parameter:

```typescript
// MyComponent.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const ExampleStory: Story = {
  parameters: {
    a11y: {
      element: 'body',
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'image-alt',
            enabled: false,
          },
        ],
      },
      /*
       * Axe's options parameter
       * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
       * to learn more about the available options.
       */
      options: {},
    },
  },
  globals: {
    a11y: {
      // Optional flag to prevent the automatic check
      manual: true,
    },
  },
};
```

### Turn off automated a11y tests

Disable automated accessibility testing for stories or components by adding the following globals to your story's export or component's default export:

```typescript
// MyComponent.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const NonA11yStory: Story = {
  globals: {
    a11y: {
      // This option disables all automatic a11y checks on this story
      manual: true,
    },
  },
};
```

## Test addon integration

The accessibility addon provides seamless integration with the Test addon, enabling you to run automated accessibility tests for all your tests in the background while you run component tests. If there are any violations, the test will fail, and you will see the results in the sidebar without any additional setup.

### Manual upgrade

If you enabled the addon and you're manually upgrading to Storybook 8.5 or later, you'll need to adjust your existing configuration (i.e., .storybook/vitest.setup.ts) to enable the integration as follows:

```typescript
// .storybook/vitest.setup.ts
import { beforeAll } from 'vitest';
 
import { setProjectAnnotations } from '@storybook/react';
 
// Import the a11y addon annotations
import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
 
// Optionally import your own annotations
import * as projectAnnotations from './preview';
 
const project = setProjectAnnotations([
  // Add the a11y addon annotations
  a11yAddonAnnotations,
  projectAnnotations,
]);
 
beforeAll(project.beforeAll);
```

## Configure accessibility tests with the test addon

You can configure accessibility tests with the parameters.a11y.test parameter, which determines the behavior of accessibility tests for a story and accepts the following values:

| Value | Description |
|-------|-------------|
| 'off' | Do not run accessibility tests (you can still manually verify via the addon panel) |
| 'todo' | Run accessibility tests; violations return a warning in the Storybook UI and a summary count in CLI/CI |
| 'error' | Run accessibility tests; violations return a failing test in the Storybook UI and CLI/CI |

Like other parameters, you can define it at the project level in .storybook/preview.js|ts, the component level in the default export of the story file, or the individual story level. For example, to fail on accessibility tests for all stories in a file except one:

```typescript
// Button.stories.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Meta, StoryObj } from '@storybook/your-renderer';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    a11y: { test: 'error' },
  },
};
export default meta;
 
type Story = StoryObj<typeof Button>;
 
// 👇 This story will use the 'error' value and fail on accessibility violations
export const Primary: Story = {
  args: { primary: true },
};
 
// 👇 This story will not fail on accessibility violations
//    (but will still run the tests and show warnings)
export const NoA11yFail: Story = {
  parameters: {
    a11y: { test: 'todo' },
  },
};
```

💡 Why is the value called "todo" instead of "warn"? This value is intended to serve as a literal TODO in your codebase. It can be used to mark stories that you know have accessibility issues but are not ready to fix yet. This way, you can keep track of them and address them later.

The 'off' value should only be used for stories that do not need to be tested for accessibility, such as one used to demonstrate an antipattern in a component's usage.

You can also disable individual rules when they are not applicable to your use case.

## Recommended workflow

You can use configuration to progressively work toward a more accessible UI by combining multiple test behaviors. For example, you can start with 'error' to fail on accessibility violations, then switch to 'todo' to mark components that need fixing, and finally remove the todos once all stories pass accessibility tests:

1. Update your project configuration to fail on accessibility violations by setting parameters.a11y.test to 'error'. This ensures that all new stories are tested to meet accessibility standards.

```typescript
// .storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-renderer';
 
const preview: Preview = {
  // ...
  parameters: {
    // 👇 Fail all accessibility tests when violations are found
    a11y: { test: 'error' },
  },
};
 
export default preview;
```

2. You will likely find that many components have accessibility failures (and maybe feel a bit overwhelmed!).
   
3. Take note of the components with accessibility issues and temporarily reduce their failures to warnings by applying the 'todo' parameter value. This keeps accessibility issues visible while not blocking development. This is also a good time to commit your work as a baseline for future improvements.

```typescript
// DataTable.stories.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Meta } from '@storybook/your-renderer';
 
import { DataTable } from './DataTable';
 
const meta: Meta<typeof DataTable> = {
  component: DataTable,
  parameters: {
    // 👇 This component's accessibility tests will not fail
    //    Instead, they display warnings in the Storybook UI
    a11y: { test: 'todo' },
  },
};
export default meta;
```

4. Pick a good starting point from the components you just marked 'todo' (we recommend something like Button, for its simplicity and likelihood of being used within other components). Fix the issues in that component using the suggestions in the addon panel to ensure it passes accessibility tests, then remove the parameter.

```typescript
// Button.stories.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Meta } from '@storybook/your-renderer';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    // 👇 Remove this once all stories pass accessibility tests
    // a11y: { test: 'todo' },
  },
};
export default meta;
```

5. Pick another component and repeat the process until you've covered all your components and you're an accessibility hero!

## Automate accessibility tests with test runner

The most accurate way to check accessibility is manually on real devices. However, you can use automated tools to catch common accessibility issues. For example, Axe, on average, catches upwards to 57% of WCAG issues automatically.

These tools work by auditing the rendered DOM against heuristics based on WCAG rules and other industry-accepted best practices. You can then integrate these tools into your test automation pipeline using the Storybook test runner and axe-playwright.

### Setup

To enable accessibility testing with the test runner, you will need to take additional steps to set it up properly. We recommend you go through the test runner documentation before proceeding with the rest of the required configuration.

Run the following command to install the required dependencies.

```bash
npm install axe-playwright --save-dev
```

Add a new configuration file inside your Storybook directory with the following inside:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y } from 'axe-playwright';
 
/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page) {
    await checkA11y(page, 'body', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};
 
export default config;
```

💡 preVisit and postVisit are convenient hooks that allow you to extend the test runner's default configuration. Read more about them here.

When you execute the test runner (for example, with yarn test-storybook), it will run the accessibility audit and any component tests you might have configured for each component story.

It starts checking for issues by traversing the DOM tree starting from the story's root element and generates a detailed report based on the issues it encountered.

### A11y config with the test runner

The test runner provides helper methods, allowing access to the story's information. You can use them to extend the test runner's configuration and provide additional options you may have for a specific story. For example:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
 
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';
 
/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);
 
    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });
 
    const element = storyContext.parameters?.a11y?.element ?? 'body';
    await checkA11y(page, element, {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};
 
export default config;
```

### Disable a11y tests with the test runner

Additionally, if you have already disabled accessibility tests for any particular story, you can also configure the test runner to avoid testing it as well. For example:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
 
import { injectAxe, checkA11y } from 'axe-playwright';
 
/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);
 
    // Do not run a11y tests on disabled stories.
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }
    await checkA11y(page, 'body', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};
 
export default config;
```

## What's the difference between browser-based and linter-based accessibility tests?

Browser-based accessibility tests, like those found in Storybook, evaluate the rendered DOM because that gives you the highest accuracy. Auditing code that hasn't been compiled yet is one step removed from the real thing, so you won't catch everything the user might experience.

## Troubleshooting

### Why are my tests failing in different environments?

If you enabled the experimental test addon (i.e.,@storybook/experimental-addon-test), your tests run in Vitest using your project's configuration with Playwright's Chromium browser. This can lead to inconsistent test results reported in the Storybook UI or CLI. The inconsistency can be due to axe-core reporting different results in different environments, such as browser versions or configurations. If you encounter this issue, we recommend reaching out using the default communication channels (e.g., GitHub discussions, Github issues).

### The addon panel does not show expected violations

Modern React components often use asynchronous techniques like Suspense or React Server Components (RSC) to handle complex data fetching and rendering. These components don't immediately render their final UI state. Storybook doesn't inherently know when an async component has fully rendered. As a result, the a11y checks sometimes run too early, before the component finishes rendering, leading to false negatives (no reported violations even if they exist).

To address this issue, we have introduced a feature flag: developmentModeForBuild. This feature flag allows you to set process.env.NODE_ENV to 'development' in built Storybooks, enabling development-related optimizations that are typically disabled in production builds. One of those development optimizations is React's act utility, which helps ensure that all updates related to a test are processed and applied before making assertions, like a11y checks.

To enable this feature flag, add the following configuration to your .storybook/main.js|ts file:

```typescript
// .storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  features: {
    developmentModeForBuild: true,
  },
};
 
export default config;
```

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