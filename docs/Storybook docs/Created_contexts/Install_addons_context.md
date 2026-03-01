<document index="18">
    <source>mocking-network-requests.md</source>
    <document_content>
## Mocking network requests

For components that make network requests (e.g. fetching data from a REST or GraphQL API), you can mock those requests using a tool like Mock Service Worker (MSW). MSW is an API mocking library, which relies on service workers to capture network requests and provides mocked data in response.

The MSW addon brings this functionality into Storybook, allowing you to mock API requests in your stories. Below is an overview of how to set up and use the addon.

### Set up the MSW addon

First, if necessary, run this command to install MSW and the MSW addon:

```bash
npm install msw msw-storybook-addon --save-dev
```

If you're not already using MSW, generate the service worker file necessary for MSW to work:

```bash
npx msw init public/
```

Then ensure the staticDirs property in your Storybook configuration will include the generated service worker file (in /public, by default):

```typescript
// .storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public', '../static'],
};
 
export default config;
```

Finally, initialize the addon and apply it to all stories with a project-level loader:

```typescript
// .storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue, etc.)
import { Preview } from '@storybook/your-renderer';
 
import { initialize, mswLoader } from 'msw-storybook-addon';
 
/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();
 
const preview: Preview = {
  // ... rest of preview configuration
  loaders: [mswLoader], // 👈 Add the MSW loader to all stories
};
 
export default preview;
```

### Mocking REST requests

If your component fetches data from a REST API, you can use MSW to mock those requests in Storybook. As an example, consider this document screen component:

```typescript
// YourPage.tsx
import React, { useState, useEffect } from 'react';
 
import { PageLayout } from './PageLayout';
import { DocumentHeader } from './DocumentHeader';
import { DocumentList } from './DocumentList';
 
// Example hook to retrieve data from an external endpoint
function useFetchData() {
  const [status, setStatus] = useState<string>('idle');
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    setStatus('loading');
    fetch('https://your-restful-endpoint')
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setStatus('success');
        setData(data);
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);
 
  return {
    status,
    data,
  };
}
 
export function DocumentScreen() {
  const { status, data } = useFetchData();
 
  const { user, document, subdocuments } = data;
 
  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'error') {
    return <p>There was an error fetching the data!</p>;
  }
  return (
    <PageLayout user={user}>
      <DocumentHeader document={document} />
      <DocumentList documents={subdocuments} />
    </PageLayout>
  );
}
```

ℹ️
This example uses the fetch API to make network requests. If you're using a different library (e.g. axios), you can apply the same principles to mock network requests in Storybook.

With the MSW addon, we can write stories that use MSW to mock the REST requests. Here's an example of two stories for the document screen component: one that fetches data successfully and another that fails.

```typescript
// YourPage.stories.ts|tsx
// Replace your-framework with the name of your framework (e.g. nextjs, vue3-vite)
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { http, HttpResponse, delay } from 'msw';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: DocumentScreen,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
// 👇 The mocked data that will be used in the story
const TestData = {
  user: {
    userID: 1,
    name: 'Someone',
  },
  document: {
    id: 1,
    userID: 1,
    title: 'Something',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'approved',
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
  ],
};
 
export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://your-restful-endpoint/', () => {
          return HttpResponse.json(TestData);
        }),
      ],
    },
  },
};
 
export const MockedError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://your-restful-endpoint', async () => {
          await delay(800);
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};
```

### Mocking GraphQL requests

GraphQL is another common way to fetch data in components. You can use MSW to mock GraphQL requests in Storybook. Here's an example of a document screen component that fetches data from a GraphQL API:

```typescript
// YourPage.tsx
import { useQuery, gql } from '@apollo/client';
 
import { PageLayout } from './PageLayout';
import { DocumentHeader } from './DocumentHeader';
import { DocumentList } from './DocumentList';
 
const AllInfoQuery = gql`
  query AllInfo {
    user {
      userID
      name
    }
    document {
      id
      userID
      title
      brief
      status
    }
    subdocuments {
      id
      userID
      title
      content
      status
    }
  }
`;
 
interface Data {
  allInfo: {
    user: {
      userID: number;
      name: string;
      opening_crawl: boolean;
    };
    document: {
      id: number;
      userID: number;
      title: string;
      brief: string;
      status: string;
    };
    subdocuments: {
      id: number;
      userID: number;
      title: string;
      content: string;
      status: string;
    };
  };
}
 
function useFetchInfo() {
  const { loading, error, data } = useQuery<Data>(AllInfoQuery);
 
  return { loading, error, data };
}
 
export function DocumentScreen() {
  const { loading, error, data } = useFetchInfo();
 
  if (loading) {
    return <p>Loading...</p>;
  }
 
  if (error) {
    return <p>There was an error fetching the data!</p>;
  }
 
  return (
    <PageLayout user={data.user}>
      <DocumentHeader document={data.document} />
      <DocumentList documents={data.subdocuments} />
    </PageLayout>
  );
}
```

ℹ️
This example uses GraphQL with Apollo Client to make network requests. If you're using a different library (e.g. URQL or React Query), you can apply the same principles to mock network requests in Storybook.

The MSW addon allows you to write stories that use MSW to mock the GraphQL requests. Here's an example demonstrating two stories for the document screen component. The first story fetches data successfully, while the second story fails.

```typescript
// YourPage.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { graphql, HttpResponse, delay } from 'msw';
 
import { DocumentScreen } from './YourPage';
 
const mockedClient = new ApolloClient({
  uri: 'https://your-graphql-endpoint',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});
 
//👇The mocked data that will be used in the story
const TestData = {
  user: {
    userID: 1,
    name: 'Someone',
  },
  document: {
    id: 1,
    userID: 1,
    title: 'Something',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'approved',
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
  ],
};
const meta: Meta<typeof DocumentScreen> = {
  component: DocumentScreen,
  decorators: [
    (Story) => (
      <ApolloProvider client={mockedClient}>
        <Story />
      </ApolloProvider>
    ),
  ],
};
 
export default meta;
type Story = StoryObj<typeof SampleComponent>;
 
export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        graphql.query('AllInfoQuery', () => {
          return HttpResponse.json({
            data: {
              allInfo: {
                ...TestData,
              },
            },
          });
        }),
      ],
    },
  },
};
 
export const MockedError: Story = {
  parameters: {
    msw: {
      handlers: [
        graphql.query('AllInfoQuery', async () => {
          await delay(800);
          return HttpResponse.json({
            errors: [
              {
                message: 'Access denied',
              },
            ],
          });
        }),
      ],
    },
  },
};
```

### Configuring MSW for stories

In the examples above, note how each story is configured with parameters.msw to define the request handlers for the mock server. Because it uses parameters in this way, it can also be configured at the component or even project level, allowing you to share the same mock server configuration across multiple stories.
    </document_content>
</document>

<document index="26">
    <source>visual-tests.md</source>
    <document_content>
# Visual tests

Visual tests catch bugs in UI appearance. They work by taking screenshots of every story and comparing them to previous versions to identify visual changes. This is ideal for verifying layout, color, size, contrast, and any other visual aspect of your UI.

Storybook supports cross-browser visual testing natively using Chromatic, a cloud service made by the Storybook team. When you enable visual testing, every story is automatically turned into a test. This gives you instant feedback on UI bugs directly in Storybook.

## Install the addon

Add visual tests to your project by installing @chromatic-com/storybook, the official addon by Storybook maintainers:

```bash
npx storybook@latest add @chromatic-com/storybook
```

ℹ️ Storybook 7.6 or higher is required. Read the migration guide to upgrade your project.

## Enable visual tests

When you start Storybook, you'll see a new addon panel for Visual Tests where you can run tests and view results.

To enable visual testing, sign up for Chromatic and create a project. This will give you access to a fleet of cloud browsers.

Select a project from your project list to finish setup. If you're setting up the addon for the first time, the configuration files and necessary project identifiers will be added for you automatically.

## Configure

The addon includes configuration options covering most use cases by default. You can also fine-tune the addon configuration to match your project's requirements via the `./chromatic.config.json` file. Below are the available options and examples of how to use them.

| Option | Description |
|--------|-------------|
| projectId | Automatically configured. Sets the value for the project identifier<br>`"projectId": "Project:64cbcde96f99841e8b007d75"` |
| buildScriptName | Optional. Defines the custom Storybook build script<br>`"buildScriptName": "deploy-storybook"` |
| debug | Optional. Output verbose debugging information to the console.<br>`"debug": true` |
| zip | Optional. Recommended for large projects. Configures the addon to deploy your Storybook to Chromatic as a zip file.<br>`"zip": true` |

```json
// ./chromatic.config.json
{
  "buildScriptName": "deploy-storybook",
  "debug": true,
  "projectId": "Project:64cbcde96f99841e8b007d75",
  "zip": true
}
```

## Run visual tests

Click the ▶️ Play button in the Storybook sidebar to run visual tests. This will send your stories to the cloud to take snapshots and detect visual changes.

## Review changes

If there are visual changes in your stories, they will be 🟡 highlighted in the sidebar. Click the story and go to the Visual Tests addon panel to see which pixels changed.

If the changes are intentional, ✅ accept them as baselines locally. If the changes aren't intentional, fix the story and rerun the tests using the ▶️ Play button.

When you finish accepting changes as baselines in the addon, you're ready to push the code to your remote repository. This will sync baselines to the cloud for anyone who checks out your branch.

## Automate with CI

The addon is designed to be used in tandem with CI. We recommend using the addon to check for changes during development and then running visual tests in CI as you get ready to merge.

Changes you accept as baselines in the addon will get auto-accepted as baselines in CI so you don't have to review twice.

1. Add a step to your CI workflow to run Chromatic.
   - GitHub Actions
   - GitLab Pipelines
   - Bitbucket Pipelines
   - CircleCI
   - Travis CI
   - Jenkins
   - Azure Pipelines
   - Custom CI provider
2. Configure your CI to include environment variables to authenticate with Chromatic (project token).

## PR checks

Once you successfully set up Chromatic in CI, your pull/merge requests will be badged with a UI Tests check. The badge notifies you of test errors or UI changes that need to be verified by your team. Make the check required in your Git provider to prevent accidental UI bugs from being merged.

## What's the difference between visual tests and snapshot tests?

Snapshot tests compare the rendered markup of every story against known baselines. This means the test compares blobs of HTML and not what the user actually sees. Which in turn, can lead to an increase in false positives as code changes don't always yield visual changes in the component.

Visual tests compare the rendered pixels of every story against known baselines. Because you're testing the same thing your users actually experience, your tests will be richer and easier to maintain.

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

<document index="30">
<source>test-runner.md</source>
<document_content>
# Test runner

Storybook test runner turns all of your stories into executable tests. It is powered by Jest and Playwright.

- For those without a play function: it verifies whether the story renders without any errors.
- For those with a play function: it also checks for errors in the play function and that all assertions passed.

These tests run in a live browser and can be executed via the command line or your CI server.

## Setup

The test-runner is a standalone, framework-agnostic utility that runs parallel to your Storybook. You will need to take some additional steps to set it up properly. Detailed below is our recommendation to configure and execute it.

Run the following command to install it.

```
npm install @storybook/test-runner --save-dev
```

Update your package.json scripts and enable the test runner.

```json
// package.json
{
  "scripts": {
    "test-storybook": "test-storybook"
  }
}
```

Start your Storybook with:

```
npm run storybook
```

> 💡 Storybook's test runner requires either a locally running Storybook instance or a published Storybook to run all the existing tests.

Finally, open a new terminal window and run the test-runner with:

```
npm run test-storybook
```

## Configure

Test runner offers zero-config support for Storybook. However, you can run `test-storybook --eject` for more fine-grained control. It generates a `test-runner-jest.config.js` file at the root of your project, which you can modify. Additionally, you can extend the generated configuration file and provide `testEnvironmentOptions` as the test runner also uses jest-playwright under the hood.

## CLI Options

The test-runner is powered by Jest and accepts a subset of its CLI options (for example, `--watch`, `--maxWorkers`). If you're already using any of those flags in your project, you should be able to migrate them into Storybook's test-runner without any issues. Listed below are all the available flags and examples of using them.

| Options | Description |
| ------- | ----------- |
| `--help` | Output usage information<br>`test-storybook --help` |
| `-s, --index-json` | Run in index json mode. Automatically detected (requires a compatible Storybook)<br>`test-storybook --index-json` |
| `--no-index-json` | Disables index json mode<br>`test-storybook --no-index-json` |
| `-c, --config-dir [dir-name]` | Directory where to load Storybook configurations from<br>`test-storybook -c .storybook` |
| `--watch` | Run in watch mode<br>`test-storybook --watch` |
| `--watchAll` | Watch files for changes and rerun all tests when something changes.<br>`test-storybook --watchAll` |
| `--coverage` | Runs coverage tests on your stories and components<br>`test-storybook --coverage` |
| `--coverageDirectory` | Directory where to write coverage report output<br>`test-storybook --coverage --coverageDirectory coverage/ui/storybook` |
| `--url` | Define the URL to run tests in. Useful for custom Storybook URLs<br>`test-storybook --url http://the-storybook-url-here.com` |
| `--browsers` | Define browsers to run tests in. One or multiple of: chromium, firefox, webkit<br>`test-storybook --browsers firefox chromium` |
| `--maxWorkers [amount]` | Specifies the maximum number of workers the worker-pool will spawn for running tests<br>`test-storybook --maxWorkers=2` |
| `--testTimeout [amount]` | Defines the maximum time in milliseconds that a test can run before it is automatically marked as failed. Useful for long-running tests<br>`test-storybook --testTimeout=60000` |
| `--no-cache` | Disable the cache<br>`test-storybook --no-cache` |
| `--clearCache` | Deletes the Jest cache directory and then exits without running tests<br>`test-storybook --clearCache` |
| `--verbose` | Display individual test results with the test suite hierarchy<br>`test-storybook --verbose` |
| `-u, --updateSnapshot` | Use this flag to re-record every snapshot that fails during this test run<br>`test-storybook -u` |
| `--eject` | Creates a local configuration file to override defaults of the test-runner<br>`test-storybook --eject` |
| `--json` | Prints the test results in JSON. This mode will send all other test output and user messages to stderr.<br>`test-storybook --json` |
| `--outputFile` | Write test results to a file when the --json option is also specified.<br>`test-storybook --json --outputFile results.json` |
| `--junit` | Indicates that test information should be reported in a junit file.<br>`test-storybook --junit` |
| `--ci` | Instead of the regular behavior of storing a new snapshot automatically, it will fail the test and require Jest to be run with --updateSnapshot.<br>`test-storybook --ci` |
| `--shard [index/count]` | Requires CI. Splits the test suite execution into multiple machines<br>`test-storybook --shard=1/8` |
| `--failOnConsole` | Makes tests fail on browser console errors<br>`test-storybook --failOnConsole` |
| `--includeTags` | Experimental feature<br>Defines a subset of stories to be tested if they match the enabled tags.<br>`test-storybook --includeTags="test-only, pages"` |
| `--excludeTags` | Experimental feature<br>Prevents stories from being tested if they match the provided tags.<br>`test-storybook --excludeTags="no-tests, tokens"` |
| `--skipTags` | Experimental feature<br>Configures the test runner to skip running tests for stories that match the provided tags.<br>`test-storybook --skipTags="skip-test, layout"` |

Example:
```
npm run test-storybook -- --watch
```

## Run tests against a deployed Storybook

By default, the test-runner assumes that you're running it against a locally served Storybook on port 6006. If you want to define a target URL to run against deployed Storybooks, you can use the `--url` flag:

```
npm run test-storybook -- --url https://the-storybook-url-here.com
```

Alternatively, you can set the `TARGET_URL` environment variable and run the test-runner:

```
TARGET_URL=https://the-storybook-url-here.com yarn test-storybook
```

## Set up CI to run tests

You can also configure the test-runner to run tests on a CI environment. Documented below are some recipes to help you get started.

### Run against deployed Storybooks via Github Actions deployment

If you're publishing your Storybook with services such as Vercel or Netlify, they emit a `deployment_status` event in GitHub Actions. You can use it and set the `deployment_status.target_url` as the `TARGET_URL` environment variable. Here's how:

```yaml
# .github/workflows/storybook-tests.yml
name: Storybook Tests
 
on: deployment_status
 
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    if: github.event.deployment_status.state == 'success'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: '.nvmrc'
      - name: Install dependencies
        run: yarn
      - name: Install Playwright
        run: npx playwright install --with-deps
      - name: Run Storybook tests
        run: yarn test-storybook
        env:
          TARGET_URL: '${{ github.event.deployment_status.target_url }}'
```

> 💡 The published Storybook must be publicly available for this example to work. We recommend running the test server using the recipe below if it requires authentication.

### Run against non-deployed Storybooks

You can use your CI provider (for example, GitHub Actions, GitLab Pipelines, CircleCI) to build and run the test runner against your built Storybook. Here's a recipe that relies on third-party libraries, that is to say, concurrently, http-server, and wait-on to build Storybook and run tests with the test-runner.

```yaml
# .github/workflows/storybook-tests.yml
name: 'Storybook Tests'
 
on: push
 
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: '.nvmrc'
      - name: Install dependencies
        run: yarn
      - name: Install Playwright
        run: npx playwright install --with-deps
      - name: Build Storybook
        run: yarn build-storybook --quiet
      - name: Serve Storybook and run tests
        run: |
          npx concurrently -k -s first -n "SB,TEST" -c "magenta,blue" \
            "npx http-server storybook-static --port 6006 --silent" \
            "npx wait-on tcp:127.0.0.1:6006 && yarn test-storybook"
```

> 💡 By default, Storybook outputs the build to the storybook-static directory. If you're using a different build directory, you'll need to adjust the recipe accordingly.

## What's the difference between Chromatic and Test runner?

The test-runner is a generic testing tool that can run locally or on CI and be configured or extended to run all kinds of tests.

Chromatic is a cloud-based service that runs visual and component tests (and soon accessibility tests) without setting up the test runner. It also syncs with your git provider and manages access control for private projects.

However, you might want to pair the test runner and Chromatic in some cases.

- Use it locally and Chromatic on your CI.
- Use Chromatic for visual and component tests and run other custom tests using the test runner.

## Advanced configuration

### Test hook API

The test-runner renders a story and executes its play function if one exists. However, certain behaviors are impossible to achieve via the play function, which executes in the browser. For example, if you want the test-runner to take visual snapshots for you, this is possible via Playwright/Jest but must be executed in Node.

The test-runner exports test hooks that can be overridden globally to enable use cases like visual or DOM snapshots. These hooks give you access to the test lifecycle before and after the story is rendered. Listed below are the available hooks and an overview of how to use them.

| Hook | Description |
| ---- | ----------- |
| `prepare` | Prepares the browser for tests<br>`async prepare({ page, browserContext, testRunnerConfig }) {}` |
| `setup` | Executes once before all the tests run<br>`setup() {}` |
| `preVisit` | Executes before a story is initially visited and rendered in the browser<br>`async preVisit(page, context) {}` |
| `postVisit` | Executes after the story is visited and fully rendered<br>`async postVisit(page, context) {}` |

> 💡 These test hooks are experimental and may be subject to breaking changes. We encourage you to test as much as possible within the story's play function.

To enable the hooks API, you'll need to add a new configuration file inside your Storybook directory and set them up as follows:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
 
const config: TestRunnerConfig = {
  // Hook that is executed before the test runner starts running tests
  setup() {
    // Add your configuration here.
  },
  /* Hook to execute before a story is initially visited before being rendered in the browser.
   * The page argument is the Playwright's page object for the story.
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async preVisit(page, context) {
    // Add your configuration here.
  },
  /* Hook to execute after a story is visited and fully rendered.
   * The page argument is the Playwright's page object for the story
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async postVisit(page, context) {
    // Add your configuration here.
  },
};
 
export default config;
```

> 💡 Except for the `setup` function, all other functions run asynchronously. Both `preVisit` and `postVisit` functions include two additional arguments, a Playwright page and a context object which contains the id, title, and the name of the story.

When the test-runner executes, your existing tests will go through the following lifecycle:

1. The `setup` function is executed before all the tests run.
2. The context object is generated containing the required information.
3. Playwright navigates to the story's page.
4. The `preVisit` function is executed.
5. The story is rendered, and any existing play functions are executed.
6. The `postVisit` function is executed.

### (Experimental) Filter tests

When you run the test-runner on Storybook, it tests every story by default. However, if you want to filter the tests, you can use the tags configuration option. Storybook originally introduced this feature to generate automatic documentation for stories. But it can be further extended to configure the test-runner to run tests according to the provided tags using a similar configuration option or via CLI flags (e.g., `--includeTags`, `--excludeTags`, `--skipTags`), only available with the latest stable release (0.15 or higher). Listed below are the available options and an overview of how to use them.

| Option | Description |
| ------ | ----------- |
| `exclude` | Prevents stories if they match the provided tags from being tested. |
| `include` | Defines a subset of stories only to be tested if they match the enabled tags. |
| `skip` | Skips testing on stories if they match the provided tags. |

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
 
const config: TestRunnerConfig = {
  tags: {
    include: ['test-only', 'pages'],
    exclude: ['no-tests', 'tokens'],
    skip: ['skip-test', 'layout'],
  },
};
 
export default config;
```

ℹ️ Running tests with the CLI flags takes precedence over the options provided in the configuration file and will override the available options in the configuration file.

### Disabling tests

If you want to prevent specific stories from being tested by the test-runner, you can configure your story with a custom tag, enable it to the test-runner configuration file or run the test-runner with the `--excludeTags` CLI flag and exclude them from testing. This is helpful when you want to exclude stories that are not yet ready for testing or are irrelevant to your tests. For example:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  tags: ['no-tests'], // 👈 Provides the `no-tests` tag to all stories in this file
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const ExcludeStory: Story = {
  //👇 Adds the `no-tests` tag to this story to exclude it from the tests when enabled in the test-runner configuration
  tags: ['no-tests'],
};
```

### Run tests for a subset of stories

To allow the test-runner only to run tests on a specific story or subset of stories, you can configure the story with a custom tag, enable it in the test-runner configuration file or run the test-runner with the `--includeTags` CLI flag and include them in your tests. For example, if you wanted to run tests based on the `test-only` tag, you can adjust your configuration as follows:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  tags: ['test-only'], // 👈 Provides the `test-only` tag to all stories in this file
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const IncludeStory: Story = {
  //👇 Adds the `test-only` tag to this story to be included in the tests when enabled in the test-runner configuration
  tags: ['test-only'],
};
```

ℹ️ Applying tags for the component's stories should either be done at the component level (using meta) or at the story level. Importing tags across stories is not supported in Storybook and won't work as intended.

### Skip tests

If you want to skip running tests on a particular story or subset of stories, you can configure your story with a custom tag, enable it in the test-runner configuration file, or run the test-runner with the `--skipTags` CLI flag. Running tests with this option will cause the test-runner to ignore and flag them accordingly in the test results, indicating that the tests are temporarily disabled. For example:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  tags: ['skip-test'], // 👈 Provides the `skip-test` tag to all stories in this file
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const SkipStory: Story = {
  //👇 Adds the `skip-test` tag to this story to allow it to be skipped in the tests when enabled in the test-runner configuration
  tags: ['skip-test'],
};
```

### Authentication for deployed Storybooks

If you use a secure hosting provider that requires authentication to host your Storybook, you may need to set HTTP headers. This is mainly because of how the test runner checks the status of the instance and the index of its stories through fetch requests and Playwright. To do this, you can modify the test-runner configuration file to include the `getHttpHeaders` function. This function takes the URL of the fetch calls and page visits as input and returns an object containing the headers that need to be set.

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
 
const config: TestRunnerConfig = {
  getHttpHeaders: async (url) => {
    const token = url.includes('prod') ? 'prod-token' : 'dev-token';
    return {
      Authorization: `Bearer ${token}`,
    };
  },
};
 
export default config;
```

### Helpers

The test-runner exports a few helpers that can be used to make your tests more readable and maintainable by accessing Storybook's internals (e.g., args, parameters). Listed below are the available helpers and an overview of how to use them.

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext, waitForPageReady } from '@storybook/test-runner';
 
const config: TestRunnerConfig = {
  // Hook that is executed before the test runner starts running tests
  setup() {
    // Add your configuration here.
  },
  /* Hook to execute before a story is initially visited before being rendered in the browser.
   * The page argument is the Playwright's page object for the story.
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async preVisit(page, context) {
    // Add your configuration here.
  },
  /* Hook to execute after a story is visited and fully rendered.
   * The page argument is the Playwright's page object for the story
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);
 
    // This utility function is designed for image snapshot testing. It will wait for the page to be fully loaded, including all the async items (e.g., images, fonts, etc.).
    await waitForPageReady(page);
 
    // Add your configuration here.
  },
};
 
export default config;
```

### Accessing story information with the test-runner

If you need to access information about the story, such as its parameters, the test-runner includes a helper function named `getStoryContext` that you can use to retrieve it. You can then use it to customize your tests further as needed. For example, if you need to configure Playwright's page viewport size to use the viewport size defined in the story's parameters, you can do so as follows:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
 
const { MINIMAL_VIEWPORTS } = require('@storybook/addon-viewport');
 
const DEFAULT_VIEWPORT_SIZE = { width: 1280, height: 720 };
 
const config: TestRunnerConfig = {
  async preVisit(page, story) {
    // Accesses the story's parameters and retrieves the viewport used to render it
    const context = await getStoryContext(page, story);
    const viewportName = context.parameters?.viewport?.defaultViewport;
    const viewportParameter = MINIMAL_VIEWPORTS[viewportName];
 
    if (viewportParameter) {
      const viewportSize = Object.entries(viewportParameter.styles).reduce(
        (acc, [screen, size]) => ({
          ...acc,
          // Converts the viewport size from percentages to numbers
          [screen]: parseInt(size),
        }),
        {},
      );
      // Configures the Playwright page to use the viewport size
      page.setViewportSize(viewportSize);
    } else {
      page.setViewportSize(DEFAULT_VIEWPORT_SIZE);
    }
  },
};
 
export default config;
```

### Working with assets

If you're running a specific set of tests (e.g., image snapshot testing), the test-runner provides a helper function named `waitForPageReady` that you can use to ensure the page is fully loaded and ready before running the test. For example:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
 
import { waitForPageReady } from '@storybook/test-runner';
 
import { toMatchImageSnapshot } from 'jest-image-snapshot';
 
const customSnapshotsDir = `${process.cwd()}/__snapshots__`;
 
const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postVisit(page, context) {
    // Awaits for the page to be loaded and available including assets (e.g., fonts)
    await waitForPageReady(page);
 
    // Generates a snapshot file based on the story identifier
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
    });
  },
};
 
export default config;
```

### Index.json mode

The test-runner transforms your story files into tests when testing a local Storybook. For a remote Storybook, it uses the Storybook's index.json (formerly stories.json) file (a static index of all the stories) to run the tests.

#### Why?

Suppose you run into a situation where the local and remote Storybooks appear out of sync, or you might not even have access to the code. In that case, the index.json file is guaranteed to be the most accurate representation of the deployed Storybook you are testing. To test a local Storybook using this feature, use the `--index-json` flag as follows:

```
npm run test-storybook -- --index-json
```

> 💡 The index.json mode is not compatible with the watch mode.

If you need to disable it, use the `--no-index-json` flag:

```
npm run test-storybook -- --no-index-json
```

#### How do I check if my Storybook has a index.json file?

Index.json mode requires a index.json file. Open a browser window and navigate to your deployed Storybook instance (for example, https://your-storybook-url-here.com/index.json). You should see a JSON file that starts with a "v": 3 key, immediately followed by another key called "stories", which contains a map of story IDs to JSON objects. If that is the case, your Storybook supports index.json mode.

## Troubleshooting

### The test runner seems flaky and keeps timing out

If your tests time out with the following message:

```
Timeout - Async callback was not invoked within the 15000 ms timeout specified by jest.setTimeout
```

It might be that Playwright couldn't handle testing the number of stories you have in your project. Perhaps you have a large number of stories, or your CI environment has a really low RAM configuration. In such cases, you should limit the number of workers that run in parallel by adjusting your command as follows:

```json
// package.json
{
  "scripts": {
    "test-storybook:ci": "yarn test-storybook --maxWorkers=2"
  }
}
```

### The error output in the CLI is too short

By default, the test runner truncates error outputs at 1000 characters, and you can check the full output directly in Storybook in the browser. However, if you want to change that limit, you can do so by setting the `DEBUG_PRINT_LIMIT` environment variable to a number of your choosing, for example, `DEBUG_PRINT_LIMIT=5000 yarn test-storybook`.

### Run the test runner in other CI environments

As the test runner is based on Playwright, you might need to use specific docker images or other configurations depending on your CI setup. In that case, you can refer to the Playwright CI docs for more information.

### Tests filtered by tags are incorrectly executed

If you've enabled filtering tests with tags and provided similar tags to the include and exclude lists, the test-runner will execute the tests based on the exclude list and ignore the include list. To avoid this, make sure the tags provided to the include and exclude lists differ.

### The test runner doesn't support Yarn PnP out of the box

If you've enabled the test-runner in a project running on a newer version of Yarn with Plug'n'Play (PnP) enabled, the test-runner might not work as expected and may generate the following error when running tests:

```
PlaywrightError: jest-playwright-preset: Cannot find playwright package to use chromium
```

This is due to the test-runner using the community-maintained package jest-playwright-preset that still needs to support this feature. To solve this, you can either switch the nodeLinker setting to node-modules or install Playwright as a direct dependency in your project, followed by adding the browser binaries via the install command.

## Learn about other UI tests

- Component tests for user behavior simulation
- Visual tests for appearance
- Accessibility tests for accessibility
- Snapshot tests for rendering errors and warnings
- Test runner to automate test execution
- Test coverage for measuring code coverage
- End-to-end tests for simulating real user scenarios
- Unit tests for functionality
</document_content>
</document>

<document index="31">
<source>test-addon.md</source>
<document_content>
# Test addon

(⚠️ Experimental)

> 🧪 While this addon is experimental, it is published as the `@storybook/experimental-addon-test` package and the API may change in future releases. We welcome feedback and contributions to help improve this feature.

Storybook's Test addon allows you to test your components directly inside Storybook. On its own, it transforms your stories into component tests, which test the rendering and behavior of your components in a real browser environment. It can also calculate project coverage provided by your stories.

If your project is using other testing addons, such as the Visual tests addon or the Accessibility addon, you can run those tests alongside your component tests.

When tests are run for a story, the status is shown in the sidebar. The sidebar can be filtered to only show failing stories, and you can press the menu button on a failing story to see debugging options.

You can also run tests in watch mode, which will automatically re-run tests when you make changes to your components or stories. To activate, press the watch mode toggle (the eye icon) in the test module.

## Install and set up

Before installing, make sure your project meets the following requirements:

- Storybook ≥ 8.5
- A Storybook framework that uses Vite (e.g. vue3-vite, react-vite, 'sveltekit`, etc.), or the Storybook Next.js framework with Vite
- Vitest ≥ 2.1
  - If you're not yet using Vitest, it will be installed and configured for you when you install the addon
- (optional) MSW ≥ 2.0
  - If MSW is installed, it must be v2.0.0 or later to not conflict with Vitest's dependency

> ℹ️ **Using with Next.js** — The Test addon is supported in Next.js ≥ 14.1 projects, but you must be using the `@storybook/experimental-nextjs-vite` framework. When you run the setup command below, you will be prompted to install and use the framework if you haven't already.

If you're not yet using Storybook 8.5, you can upgrade your Storybook to the prerelease version:

```
npx storybook@next upgrade
```

### Automatic setup

Run the following command to install and configure the addon, which contains the plugin to run your stories as tests using Vitest:

```
npx storybook add @storybook/experimental-addon-test
```

That add command will install and register the test addon. It will also inspect your project's Vite and Vitest setup, and install and configure them with sensible defaults, if necessary. You may need to adjust the configuration to fit your project's needs. The full configuration options can be found in the API section, below.

### Manual setup

For some project setups, the add command may be unable to automate the addon and plugin setup and ask you to complete additional setup steps. Here's what to do:

1. Make sure Vite and Vitest are configured in your project.
2. Configure Vitest to use browser mode.
3. Install the addon, `@storybook/experimental-addon-test`, in your project and register it in your Storybook configuration.
4. Create a test setup file, `.storybook/vitest.setup.ts`. You can use the example setup file as a guide.
5. Adjust your Vitest configuration to include the plugin and reference the setup file. You can use the example configuration files as a guide.

**Example configuration files**

When the addon is set up automatically, it will create or adjust your Vitest configuration files for you. If you're setting up manually, you can use the following examples as a reference when configuring your project.

- Example Vitest setup file
- Example Vitest config file
- Example Vitest workspace file

## Usage

There are multiple ways to run tests using the addon.

We recommend (and configure, by default) running Vitest in browser mode, using Playwright's Chromium browser. Browser mode ensures your components are tested in a real browser environment, which is more accurate than simulations like JSDom or HappyDom. This is especially important for testing components that rely on browser APIs or features.

### Storybook UI

The easiest way to run tests is through the Storybook UI. With a click, you can run multiple types of tests for all stories in your project, a group of stories, or a single story.

To run all tests for your whole project, press the Run tests button in the test module at the bottom of the sidebar.

Alternatively, you can expand the test module to run specific types of tests individually. For those test types which have a watch mode (which will automatically re-run relevant tests upon code changes), you can toggle that on or off.

> ℹ️ If you have the Visual tests addon installed, you'll see an option to run Visual tests alongside Component tests.
> Other addons, such as a11y, may also provide test types that can be run from the test module and affect the status indicators on stories and components.

To run tests for a specific story or group of stories, press the menu button (three dots) that appears on hover of a sidebar item. You can then select the test type you want to run.

After running your tests, you will now see status indicators on stories and components for their pass, fail, or error state. You can press on the menu button when hovering a story to see the test results for that story. Selecting a result in the menu will navigate you to that story and open the appropriate debugging panel. For example, if a component test fails, you can jump straight to the failure in the Component tests addon panel. That panel provides an interactive debugger for your component test, allowing you to step through each simulated behavior or assertion.

> ℹ️ The Component tests addon panel replaces the Interactions addon panel when the Test addon is installed. While the testing mechanism is different, the functionality of the addon panel itself remains the same.

The test module will also show you the total number of tests run, the number of tests that passed, and the number of tests that failed or errored. You can press the failure number to filter the sidebar to only those stories that failed.

### CLI

You can also run tests using the Vitest CLI. We recommend adding a script to your package.json to make running tests easier. Here's an example of how to do that:

```json
// package.json
{
  "scripts": {
    "test": "vitest",
    "test-storybook": "vitest --project=storybook"
  }
}
```

In this example, we've added two scripts: `test` to run all tests in your project (you may already have this), and `test-storybook` to run only your Storybook tests. The `--project=storybook` flag tells Vitest to run the tests for the Storybook project.

Then, run this command to run your tests (in watch mode, by default) using the Vitest CLI:

```
npm run test-storybook
```

## Debugging

While the plugin does not require Storybook to run when testing, you may still want to run Storybook to debug your tests. To enable this, provide the `storybookScript` option in the plugin configuration. When you run Vitest in watch mode, the plugin will start Storybook using this script and provide links to the story in the output on test failures. This allows you to quickly jump to the story in Storybook to debug the issue.

You can also provide a `storybookUrl` option to the plugin configuration. When you're not using watch mode and tests fail, the plugin will provide a link to the story using this URL in the output. This is useful when running tests in CI or other environments where Storybook is not already running.

### Editor extension

Transforming your stories into Vitest tests with the plugin also enables you to run and debug tests using Vitest IDE integrations. This allows you to run tests directly from your editor, such as VSCode and JetBrains IDE.

This screenshot shows how you can run your Vitest tests in VSCode using the Vitest extension. Stories are annotated with the test status, and, when a test fails, a link to the story is provided for debugging.

### In CI

For the most part, running your Storybook tests in CI is done via the CLI. However, to have the test output link to your published Storybook on test failures, you need to provide the `storybookUrl` option in the plugin configuration.

Here's an example using GitHub Actions. The steps are similar for other CI providers, though details in the syntax or configuration may vary.

When actions for services like Vercel, Netlify and others run a deployment job, they follow a pattern of emitting a `deployment_status` event containing the newly generated URL under `deployment_status.target_url`. This is the URL to the published Storybook instance. We then pass that URL to the plugin configuration using an environment variable, `SB_URL`. Finally, we update the plugin configuration to use that environment variable in the `storybookUrl` option.

```yaml
# .github/workflows/test-storybook.yml
name: Storybook Tests
on: deployment_status
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    if: github.event.deployment_status.state == 'success'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18.x'
      - name: Install dependencies
        run: yarn
      - name: Run Storybook tests
        run: yarn test-storybook
        env:
          SB_URL: '${{ github.event.deployment_status.target_url }}'
```

```typescript
// vitest.workspace.ts
export default defineWorkspace([
  // ...
  {
    // ...
    {
      plugins: [
        storybookTest({
          // ...
          storybookScript: 'yarn storybook --ci',
          storybookUrl: process.env.SB_URL
        }),
      ],
    },
  },
])
```

## How it works

The Test addon works by using a Vitest plugin to transform your stories into Vitest tests using portable stories. It also configures Vitest to run those tests in browser mode, using Playwright's Chromium browser. Because it is built on top of Vitest, the addon requires a Vite-based Storybook framework.

Stories are tested in two ways: a smoke test to ensure it renders and, if a play function is defined, that function is run and any assertions made within it are validated.

When you run tests in the Storybook UI, the addon runs Vitest in the background and reports the results in the sidebar.

## Configuring tests

The tests run by the addon can be configured in two ways. You can toggle which test types are run and include, exclude, or skip stories from being tested.

### Toggling test types

In addition to component tests, the Test addon supports multiple types of tests, depending on which other addons you are using in your project. Some test types, like visual tests, are run independently. Others, like accessibility, must be run alongside component tests. For these dependent test types, you can toggle them on or off in the test module by pressing the edit button (pencil icon) and checking or unchecking the test types you want to run.

Note that you may not have all of the test types pictured, depending on which addons you have installed.

You can also access edit mode in the sidebar item menu for a story or group of stories:

Note that toggling test types in the menu's edit mode affects all tests, not only those for the selected story or group of stories. It is intended as a convenience for quickly toggling test types on or off.

### Including, excluding, or skipping tests

You can use tags to include, exclude, or skip stories from being tested. Included stories are tested, excluded stories are not tested, and skipped stories are not tested but are counted in the test results.

By default, the plugin will run all stories with the `test` tag. You can adjust this behavior by providing the tags option in the plugin configuration. This allows you to include, exclude, or skip stories based on their tags.

In this example, we'll apply the `stable` tag to all of the Button component's stories, except for `ExperimentalFeatureStory`, which will have the `experimental` tag:

```typescript
// Button.stories.ts
// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  // 👇 Applies to all stories in this file
  tags: ['stable'],
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
```

To connect those tags to our test behavior, we can adjust the plugin configuration to exclude the experimental tag:

```typescript
// vitest.workspace.ts
export default defineWorkspace([
  // ...
  {
    // ...
    {
      plugins: [
        storybookTest({
          // ...
          tags: {
            include: ['test'],
            exclude: ['experimental'],
          },
        }),
      ],
    },
  },
])
```

If the same tag is in both the include and exclude arrays, the exclude behavior takes precedence.

## Comparison to the test runner

The test runner requires a running Storybook instance to test your stories, because it visits each one, executes the play function, and listens for results. The Vitest plugin, however, transforms your stories into tests using Vite and portable stories, so it does not need to run Storybook to test your stories. Because of this reliance on Vite, the plugin can only be used with Storybook frameworks that use Vite (and Next.js). The test runner, on the other hand, can be used with any Storybook framework.

The test runner is only a CLI tool. It did not have a UI for running tests, nor did it have an editor extension. The addon, however, provides a UI in Storybook for running tests, and it enables you to run and debug tests using Vitest IDE integrations.

Additionally, the test runner ran your stories as orchestrated tests in Jest, and that orchestration came with some complexity. By comparison, this plugin transforms your stories into real tests and then runs them using Vitest, which is simpler and more configurable.

Finally, because of the simpler architecture and the use of Vitest, this plugin should be faster than the test runner for most projects. We'll do more benchmarking to quantify this in the future.

## FAQ

### What happens if Vitest itself has an error?

Sometimes tests can fail because of errors within Vitest itself. When this happens, the test module in the Storybook UI will alert you to the error, and you can click a link to view it in full. The error will also be logged to the console.

Vitest offers troubleshooting help for common errors.

### What happens when there are different test results in multiple environments?

When you run tests with this addon, they are run as Vitest tests with whatever configuration you have set up in your project. By default, they will run in browser mode, using Playwright's Chromium browser. Sometimes, tests will fail when run in the addon (or via CLI), but then pass when viewed in the Component tests addon panel (or vice versa). This can happen because the tests are run in different environments, which can have different behaviors.

### How do I debug my CLI tests in Storybook?

The plugin will attempt to provide links to the story in Storybook when tests fail in CLI, for debugging purposes.

If the URLs are not working when running tests in watch mode, you should check two configuration options:

- `storybookUrl`: Ensure this URL is correct and accessible. For example, the default is `http://localhost:6006`, which may not use the same port number you're using.
- `storybookScript`: Ensure this script is correctly starting Storybook.

If the URLs are not working when running tests in CI, you should ensure the Storybook is built and published before running the tests. You can then provide the URL to the published Storybook using the `storybookUrl` option. See the In CI section for an example.

### How do I ensure my tests can find assets in the public directory?

If your stories use assets in the public directory and you're not using the default public directory location (public), you need to adjust the Vitest configuration to include the public directory. You can do this by providing the `publicDir` option in the Vitest configuration file.

### How do I isolate Storybook tests from others?

Some projects might contain a test property in their Vite configuration. Because the Vitest configuration used by this plugin extends that Vite config, the test properties are merged. This lack of isolation can cause issues with your Storybook tests.

To isolate your Storybook tests from other tests, you need to move the test property from your Vite configuration to the Vitest configuration. The Vitest config used by the plugin can then safely extend your Vite config without merging the test property.

### Why do we recommend browser mode?

Vitest's browser mode runs your tests in a real browser (Chromium, via Playwright, in the default configuration). The alternative is a simulated browser environment, like JSDom or HappyDom, which can have differences in behavior compared to a real browser. For UI components, which can often depend on browser APIs or features, running tests in a real browser is more accurate.

For more, see Vitest's guide on using browser mode effectively.

### How do I use WebDriver instead of Playwright?

We recommend running tests in a browser using Playwright, but you can use WebDriverIO instead. To do so, you need to adjust the browser provider in the Vitest configuration file.

### How do I use a browser other than Chromium?

We recommend using Chromium, because it is most likely to best match the experience of a majority of your users. However, you can use other browsers by adjusting the browser name in the Vitest configuration file. Note that Playwright and WebDriverIO support different browsers.

### How do I customize a test name?

By default, the export name of a story is mapped to the test name. To create a more descriptive test description, you can provide a name property for the story. This allows you to include spaces, brackets, or other special characters.

```javascript
// Example.stories.js|ts
export const Story = {
  name: 'custom, descriptive name'
};
```

### How do I fix the m.createRoot is not a function error?

This error can occur when using the addon on a project that uses a React version other than 18. To work around the issue, you can provide an alias to ensure the correct React version is used. Here's an example of how to do that in the Vitest configuration file:

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
 
export default defineConfig({
  // ...
  resolve: {
    alias: {
      "@storybook/react-dom-shim": "@storybook/react-dom-shim/dist/react-16",
    },
  },
});
```

## API

### Exports

This addon has the following exports:

```javascript
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
```

### storybookTest

Type: function

A Vitest plugin that transforms your stories into tests. It accepts an options object for configuration.

#### Options

The plugin is configured using an options object. Here are the available properties:

##### configDir

Type: string

Default: `.storybook`

The directory where the Storybook configuration is located, relative to the current working directory.

If your Storybook configuration is not in the default location, you must specify the location here so the plugin can function correctly.

##### storybookScript

Type: string

Optional script to run Storybook. If provided, Vitest will start Storybook using this script when run in watch mode. Only runs if the Storybook in storybookUrl is not already available.

##### storybookUrl

Type: string

Default: `http://localhost:6006`

The URL where Storybook is hosted. This is used for internal checks and to provide a link to the story in the test output on failures.

##### tags

Type:
```typescript
{
  include: string[];
  exclude: string[];
  skip: string[];
}
```

Default:
```typescript
{
  include: ['test'],
  exclude: [],
  skip: [],
}
```

Tags to include, exclude, or skip. These tags are defined as annotations in your story, meta, or preview.

- include: Stories with these tags will be tested
- exclude: Stories with these tags will not be tested, and will not be counted in the test results
- skip: Stories with these tags will not be tested, and will be counted in the test results
</document_content>
</document>

<document index="32">
<source>test-coverage.md</source>
<document_content>
# Test coverage

Test coverage is the practice of measuring whether existing tests fully cover your code. That means surfacing areas which aren't currently being tested, such as: conditions, logic branches, functions and variables.

Coverage tests examine the instrumented code against a set of industry-accepted best practices. They act as the last line of QA to improve the quality of your test suite.

## With Storybook Test

When you run component tests with the Test addon, which is powered by Vitest, it can generate a coverage report. The result is summarized in the testing module, showing the percentage of statements covered by your tested stories.

## Set up

Coverage is included in the Test addon and, when enabled, will be calculated when running component tests for your project. To enable coverage, press the edit button (pencil icon) in the testing module and toggle coverage on:

Before coverage can be calculated, you may need to install a support package corresponding to your coverage provider:

```
# For v8
npm install --save-dev @vitest/coverage-v8
 
# For istanbul
npm install --save-dev @vitest/coverage-istanbul
```

Additionally (until Vitest 3.0.0 is released), the generated coverage report will include the stories files themselves and output from your built Storybook application. This is misleading and they should be excluded. To do this, you can add the following to your Vitest config:

```typescript
// vitest.config.ts
import { coverageConfigDefaults, defineConfig } from 'vitest/config';
 
export default defineConfig({
  // ...
  test: {
    coverage: {
      // 👇 Add this
      exclude: [
         ...coverageConfigDefaults.exclude,
         '**/.storybook/**',
         // 👇 This pattern must align with the `stories` property of your `.storybook/main.ts` config
         '**/*.stories.*',
         // 👇 This pattern must align with the output directory of `storybook build`
         '**/storybook-static/**',
       ], 
    }
  }
})
```

## Usage

Because coverage is built into the Test addon, you can use it everywhere you run your tests.

### Storybook UI

When you enable coverage in the Storybook UI, the coverage report will be generated and summarized in the testing module after you run your tests. You can see the percentage of statements covered by your tested stories, as well as whether the coverage meets the watermarks.

Additionally, the full coverage report will be served at the `/coverage/index.html` route of your running Storybook.

> ⚠️ **It's important to understand that the coverage reported in the Storybook UI has three important limitations:**
> - Coverage is calculated using the stories you've written, not the entire codebase. In other words, it will not include any other Vitest tests.
> - Coverage can only be calculated for all stories in your project, not for an individual story or a group of stories.
> - Coverage is not calculated while watch mode is activated. When coverage is enabled, enabling watch mode will disable coverage.

### CLI

Like the rest of Storybook Test, coverage is built on top of Vitest. Which means you can generate a coverage report using the Vitest CLI.

Assuming you run your tests with a package script like this:

```json
// package.json
{
  "scripts": {
    "test-storybook": "vitest --project=storybook"
  }
}
```

Then you can generate a coverage report with:

```
npm run test-storybook -- --coverage
```

The coverage report will be saved to the configured coverage reports directory (`./coverage`, by default) in your project.

> ℹ️ 
> - The above command will only calculate coverage for the stories you've written, not the entire codebase.
> - Because coverage is most accurate when accounting for all tests in your project, you can also run coverage for all tests in your project with:
>   ```
>   npx vitest --coverage
>   ```

### Editor extension

Coverage is also available through Vitest's IDE integrations. You can calculate and display coverage results directly in your editor.

> ℹ️ Note that this coverage will include all tests in your project, not just the stories you've written.

### CI

To generate coverage reports in your CI pipeline, you can use the CLI.

For example, here's a simplified GitHub Actions workflow that runs your tests and generates a coverage report:

```yaml
# .github/workflows/test-storybook.yml
name: Storybook Tests
on: push
jobs:
  test:
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20.x'
      - name: Install dependencies
        run: yarn
      - name: Run Storybook tests
        run: yarn test-storybook --coverage
```

For more on testing in CI, see the Test addon docs.

## Configuration

### Coverage provider

You can choose which provider, v8 (default) or Istanbul, to use for coverage calculation by setting the `coverage.provider` option in your Vitest config:

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
 
export default defineConfig({
  // ...
  test: {
    // ...
    coverage: {
      // ...
      provider: 'istanbul', // 'v8' is the default
    },
  },
});
```

### Watermarks

Both coverage providers support watermarks, which are threshold values for coverage. The low watermark is the minimum coverage required to pass the test, and the high watermark is the minimum coverage required to be considered good. A coverage percentage between the low and high watermarks will be considered acceptable but not ideal.

In the testing module, the coverage summary will show the percentage of statements covered by your tested stories, as well as whether the coverage meets the watermarks. Below the low watermark, the icon will be red, between the low and high watermarks, it will be orange, and above the high watermark, it will be green.

To configure the watermarks, you can adjust the Vitest config:

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
 
export default defineConfig({
  // ...
  test: {
    // ...
    coverage: {
      // ...
      watermarks: {
        // These are the default values
        statements: [50, 80],
      },
    },
  },
});
```

### Additional configuration

You can find more configuration options for coverage in the Vitest documentation.

When calculating coverage in the Storybook UI, the following options are always ignored:

- enabled
- clean
- cleanOnRerun
- reportOnFailure
- reporter
- reportsDirectory

## With the coverage addon

Storybook also provides a coverage addon. It is powered by Istanbul, which allows out-of-the-box code instrumentation for the most commonly used frameworks and builders in the JavaScript ecosystem.

### Set up

Engineered to work alongside modern testing tools (e.g., Playwright), the coverage addon automatically instruments your code and generates code coverage data. For an optimal experience, we recommend using the test runner alongside the coverage addon to run your tests.

Run the following command to install the addon.

```
npx storybook@latest add @storybook/addon-coverage
```

> ℹ️ The CLI's add command automates the addon's installation and setup. To install it manually, see our documentation on how to install addons.

Start your Storybook with:

```
npm run storybook
```

Finally, open a new terminal window and run the test-runner with:

```
npm run test-storybook -- --coverage
```

### Configure

By default, the `@storybook/addon-coverage` offers zero-config support for Storybook and instruments your code via istanbul-lib-instrument for Webpack, or vite-plugin-istanbul for Vite. However, you can extend your Storybook configuration file (i.e., `.storybook/main.js|ts`) and provide additional options to the addon. Listed below are the available options divided by builder and examples of how to use them.

```typescript
// .storybook/main.ts
// For Vite support add the following import
// import type { AddonOptionsVite } from '@storybook/addon-coverage';
 
import type { AddonOptionsWebpack } from '@storybook/addon-coverage';
 
// Replace your-framework with the framework and builder you are using (e.g., react-webpack5, vue3-webpack5)
import type { StorybookConfig } from '@storybook/your-framework';
 
const coverageConfig: AddonOptionsWebpack = {
  istanbul: {
    include: ['**/stories/**'],
    exclude: ['**/exampleDirectory/**'],
  },
};
 
const config: StorybookConfig = {
  stories: [],
  addons: [
    // Other Storybook addons
    {
      name: '@storybook/addon-coverage',
      options: coverageConfig,
    },
  ],
};
 
export default config;
```

### What about other coverage reporting tools?

Out of the box, code coverage tests work seamlessly with Storybook's test-runner and the `@storybook/addon-coverage`. However, that doesn't mean you can't use additional reporting tools (e.g., Codecov). For instance, if you're working with LCOV, you can use the generated output (in `coverage/storybook/coverage-storybook.json`) and create your own report with:

```
npx nyc report --reporter=lcov -t coverage/storybook --report-dir coverage/storybook
```

## Troubleshooting

### Run test coverage in other frameworks

If you intend on running coverage tests in frameworks with special files like Vue 3 or Svelte, you'll need to adjust your configuration and enable the required file extensions. For example, if you're using Vue, you'll need to add the following to your nyc configuration file (i.e., `.nycrc.json` or `nyc.config.js`):

```javascript
// .nyc.config.js
export default {
  // Other configuration options
  extension: ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx', '.vue'],
};
```

### The coverage addon doesn't support optimized builds

If you generated a production build optimized for performance with the `--test` flag, and you're using the coverage addon to run tests against your Storybook, you may run into a situation where the coverage addon doesn't instrument your code. This is due to how the flag works, as it removes addons that have an impact on performance (e.g., Docs, coverage addon). To resolve this issue, you'll need to adjust your Storybook configuration file (i.e., `.storybook/main.js|ts`) and include the `disabledAddons` option to allow the addon to run tests at the expense of a slower build.

```typescript
// .storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
  ],
  build: {
    test: {
      disabledAddons: ['@storybook/addon-docs', '@storybook/addon-essentials/docs'],
    },
  },
};
 
export default config;
```

### The coverage addon doesn't support instrumented code

As the coverage addon is based on Webpack5 loaders and Vite plugins for code instrumentation, frameworks that don't rely upon these libraries (e.g., Angular configured with Webpack), will require additional configuration to enable code instrumentation. In that case, you can refer to the following repository for more information.

## Learn about other UI tests

- Component tests for user behavior simulation
- Visual tests for appearance
- Accessibility tests for accessibility
- Snapshot tests for rendering errors and warnings
- Test runner to automate test execution
- Test coverage for measuring code coverage
- End-to-end tests for simulating real user scenarios
- Unit tests for functionality
</document_content>
</document>

<document index="43">
<source>Design integrations.md</source>
<document_content>
Design integrations

React
Vue
Angular
Web Components
More
Storybook integrates with design tools to speed up your development workflow. That helps you debug inconsistencies earlier in the design process, discover existing components to reuse, and compare designs to stories.

Figma

Figma is a collaborative UI design tool that allows multiple people to work on the same design simultaneously in the browser. There are two ways to integrate Storybook and Figma.

Embed Storybook in Figma
Embed Figma in Storybook
Embed Storybook in Figma with the plugin

Storybook Connect is a Figma plugin that allows you to embed component stories in Figma. It’s powered by Storybook embeds and Chromatic, a publishing tool created by the Storybook team.


Install plugin

Before we begin, you must have a Storybook published to Chromatic. It provides the index, versions, and access control that back the plugin.

Go to Storybook Connect to install the plugin.

In Figma, open the command palette (in Mac OS, use Command + /, in Windows use Control + /) and type Storybook Connect to enable it.

Figma palette Storybook connect

Follow the instructions to connect and authenticate with Chromatic.

Link stories to Figma components

Link stories to Figma components, variants, and instances.

Go to a story in a Storybook published on Chromatic. Make sure it’s on the branch you want to link. Then copy the URL to the story.

In Figma, select the component, open the plugin, and paste the URL.

Story linked in Figma

Chromatic will automatically update your linked stories to reflect the most recent Storybook published on the branch you linked. That means the link persists even as you push new code.

💡
The plugin does not support linking stories to Figma layers.
View stories in Figma

Once they're connected, you'll be able to view the story by clicking the link in the sidebar. Click "View story". Alternatively, open the plugin by using the command palette (in Mac OS, use Command + /, in Windows, use Control + /), then type Storybook Connect.

Figma sidebar with story link

Embed Figma in Storybook with the addon

Designs addon allows you to embed Figma files and prototypes in Storybook.

Storybook addon figma

Install design addon

Run the following command to install the addon.

npm
npx storybook@latest add @storybook/addon-designs
ℹ️
The CLI's add command automates the addon's installation and setup. To install it manually, see our documentation on how to install addons.
Link Figma components to stories

In Figma, open the file you want to embed in Storybook. You can embed files, prototypes, components, and frames.

Embed a file or prototype, click the "Share" button to generate a unique URL for the file then click "Copy link".
Embed a component or frame check "Link to selected frame" in the Share dialog. Or right click on the frame and go to "Copy/Paste as" » "Copy link".
In Storybook, add a new parameter named design to your story and paste the Figma URL. For example:

MyComponent.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
 
import { MyComponent } from './MyComponent';
 
// More on default export: https://storybook.js.org/docs/writing-stories/#default-export
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const Example: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Sample-File',
    },
  },
};
View designs in Storybook

Click the "Design" tab in the addon panel to view the embedded Figma design.

Design addon panel

Zeplin

Zeplin is a design tool that generates styleguides from Sketch, Figma, and Adobe XD.

Use the Zeplin addon to connect Storybook. The addon displays designs from Zeplin alongside the currently selected story. It includes convenient tooling to overlay the design image atop the live component.

Zeplin's native app also supports links to published Storybooks.

Zeplin Storybook addon

Zeroheight

Zeroheight is a collaborative styleguide generator for design systems. It showcases design, code, brand, and copywriting documentation in one place. Users can easily edit that documentation with a WYSIWYG editor.

Zeroheight integrates with Storybook, enabling you to embed stories alongside your design specs.

Zeroheight Storybook integration

UXPin

UXPin is an interactive design tool that uses production code to generate prototypes.

UXPin allows you to use interactive stories to design user flows.


InVision Design System Manager

InVision DSM is a design system documentation tool. It helps design teams consolidate UX principles, user interface design, and design tokens in a shared workspace.

InVision allows you to embed Storybook in your design system documentation.

Invision DSM Storybook integration

Adobe XD

Adobe XD is a UI and UX design tool for creating wireframes, interactive designs, and prototypes.

Integrate Adobe XD with Storybook using the design addon. You can embed design specs alongside stories by following these instructions.

Build your own integration

Extend and customize Storybook by building an integration. Integrate with lower-level Storybook APIs or bootstrap an addon to customize Storybook's UI and behavior.

Addon documentation
Create an addon tutorial
</document_content>
</document>

<document index="46">
<source>Essential addons.md</source>
<document_content>
Essential addons

A major strength of Storybook are addons that extend Storybook’s UI and behavior. Storybook ships by default with a set of “essential” addons that add to the initial user experience. There are many third-party addons as well as “official” addons developed by the Storybook core team.

Actions
Backgrounds
Controls
Docs
Highlight
Measure & outline
Toolbars & globals
Viewport
Installation

If you ran npx storybook@latest init to include Storybook in your project, the latest version of the Essentials addon (@storybook/addon-essentials) is already installed and configured for you. You can go ahead and skip the rest of this section.

However, if you intend to install the Essentials addon manually into an existing Storybook instance, you can do so by running the following command in your terminal:

npm
npm install @storybook/addon-essentials --save-dev
Update your Storybook configuration (in .storybook/main.js|ts) to include the Essentials addon.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'], // 👈 Register addon-essentials
};
 
export default config;
Configuration

Essentials is "zero-config”. It comes with a recommended configuration out of the box.

If you need to reconfigure any of the individual Essentials addons, install them manually by following the installation instructions, and depending on the method of choice, register them in your Storybook configuration file (i.e., .storybook/main.js|ts) and adjust the configuration to suit your needs. For example:

npm
npm install @storybook/addon-actions --save-dev
.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-actions'],
};
 
export default config;
Below is an abridged configuration and table with all the available options for each addon.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
      options: {
        csfPluginOptions: null,
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [],
          },
        },
      },
    },
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
  ],
};
 
export default config;
Addon	Option	Description
@storybook/addon-actions	N/A	N/A
@storybook/addon-viewport	N/A	N/A
@storybook/addon-docs	csfPluginOptions	Provides additional configuration for Storybook's CSF plugin. Can be disabled with null.
mdxPluginOptions	Provides additional configuration options and plugin configuration for MDX documentation.
@storybook/addon-controls	N/A	N/A
@storybook/addon-backgrounds	N/A	N/A
@storybook/addon-toolbars	N/A	N/A
@storybook/addon-measure	N/A	N/A
When you start Storybook, your custom configuration will override the default.

Disabling addons

If you need to disable any of the Essential's addons, you can do it by changing your .storybook/main.js file.

For example, if you wanted to disable the backgrounds addon, you would apply the following change to your Storybook configuration:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false, // 👈 disable the backgrounds addon
      },
    },
  ],
};
 
export default config;
💡
You can use the following keys for each individual addon: actions, backgrounds, controls, docs, viewport, toolbars, measure, outline, and highlight.

</document_content>
</document>

<document index="51">
<source>Interactions.md</source>
<document_content>
Interactions

React
Vue
Angular
Web Components
More
The play function in Storybook allows you to simulate user interactions to run after a story renders. With the Interactions addon, you have a way to visualize and debug these interactions.

Play function for interactions

Stories isolate and capture component states in a structured manner. While developing a component, you can quickly cycle through the stories to verify the look and feel. Each story specifies all the inputs required to reproduce a specific state. You can even mock context and API calls, allowing you to handle most use cases of a component. But what about states that require user interaction?

For example, clicking a button to open/close a dialog box, dragging a list item to reorder it, or filling out a form to check for validation errors. To test those behaviors, you have to interact with the components as a user would. Interactive stories enable you to automate these interactions using a play function. They are small snippets of code that run once the story finishes rendering, emulating the exact steps a user would take to interact with the component.

Powered by Testing Library and Vitest

The interactions are written using a package called @storybook/test. It provides Storybook-instrumented versions of Testing Library and Vitest. That gives you a familiar developer-friendly syntax to interact with the DOM and make assertions, but with extra telemetry to help with debugging.

Set up the interactions addon

By default, the @storybook/addon-interactions is already installed and configured if you're adding Storybook for new projects. If you're migrating from a previous version of Storybook, you'll need to install it manually.

Run the following command to install the interactions addon and related dependencies.

npm
npm install @storybook/test @storybook/addon-interactions --save-dev
Next, update .storybook/main.js|ts to the following:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // Other Storybook addons
    '@storybook/addon-interactions', // 👈 Register the addon
  ],
};
 
export default config;
💡
Make sure to list @storybook/addon-interactions after the @storybook/addon-essentials addon (or the @storybook/addon-actions if you've installed it individually).
Now when you run Storybook, the Interactions addon will be enabled.

Storybook Interactions installed and registered

Write a component test

Interactions run as part of the play function of your stories. We rely on Testing Library to do the heavy lifting.

Make sure to import the Storybook wrappers for Vitest and Testing Library via @storybook/test rather than importing the original packages directly.

Form.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { userEvent, waitFor, within, expect, fn } from '@storybook/test';
 
import { Form } from './Form';
 
const meta: Meta<typeof Form> = {
  component: Form,
  args: {
    // 👇 Use `fn` to spy on the onSubmit arg
    onSubmit: fn(),
  },
};
 
export default meta;
type Story = StoryObj<typeof Form>;
 
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Submitted: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
 
    await step('Enter credentials', async () => {
      await userEvent.type(canvas.getByTestId('email'), 'hi@example.com');
      await userEvent.type(canvas.getByTestId('password'), 'supersecret');
    });
 
    await step('Submit form', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
 
    // 👇 Now we can assert that the onSubmit arg was called
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
  },
};
The above example uses the canvasElement to scope your element queries to the current story. It's essential if you want your play functions to eventually be compatible with Storybook Docs, which renders multiple components on the same page. Additionally, the step function can be used to create labeled groups of interactions.

While you can refer to the Testing Library documentation for details on how to use it, there's an important detail that's different when using the Storybook wrapper: method invocations must be await-ed. It allows you to step back and forth through your interactions using the debugger.

Any args that have been marked as an Action, either using the argTypes annotation or the argTypesRegex, will be automatically converted to a Jest mock function (spy). This allows you to make assertions about calls to these functions.

ℹ️
To mock functions in your Storybook stories for reliable and isolated component testing, use the named fn import from @storybook/test.
</document_content>
</document>

<document index="56">
<source>Install addons.md</source>
<document_content>
Install addons

React
Vue
Angular
Web Components
More
Storybook has hundreds of reusable addons packaged as NPM modules. Let's walk through how to extend Storybook by installing and registering addons.

Automatic installation

Storybook includes a storybook add command to automate the setup of addons. Several community-led addons can be added using this command, except for preset addons. We encourage you to read the addon's documentation to learn more about its installation process.

Run the storybook add command using your chosen package manager, and the CLI will update your Storybook configuration to include the addon and install any necessary dependencies.

npm
npx storybook@latest add @storybook/addon-a11y
⚠️
If you're attempting to install multiple addons at once, it will only install the first addon that was specified. This is a known limitation of the current implementation and will be addressed in a future release.
Manual installation

Storybook addons are always added through the addons configuration array in .storybook/main.js|ts. The following example shows how to manually add the Accessibility addon to Storybook.

Run the following command with your package manager of choice to install the addon.

npm
npm install @storybook/addon-a11y --save-dev
Next, update .storybook/main.js|ts to the following:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // Other Storybook addons
    '@storybook/addon-a11y', //👈 The a11y addon goes here
  ],
};
 
export default config;
When you run Storybook, the accessibility testing addon will be enabled.

Storybook addon installed and registered

Removing addons

To remove an addon from Storybook, you can choose to manually uninstall it and remove it from the configuration file (i.e., .storybook/main.js|ts) or opt-in to do it automatically via the CLI with the remove command. For example, to remove the Accessibility addon from Storybook with the CLI, run the following command:

npm
npx storybook@latest remove @storybook/addon-a11y
</document_content>
</document>