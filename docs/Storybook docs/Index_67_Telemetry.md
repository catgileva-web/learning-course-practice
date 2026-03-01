<document index="67">
<source>Telemetry.md</source>
<document_content>
Telemetry

Storybook collects completely anonymous data to help us improve user experience. Participation in this anonymous program is optional, and you may opt-out if you'd not like to share any information.

Why is telemetry collected?

Hundreds of thousands of developers use Storybook daily to build, test, and document components. Storybook is framework agnostic and integrates with the front-end ecosystem:

JavaScript frameworks such as React, Vue 3, Svelte and Solid
Libraries such as Styled-Components, Tailwind, Redux
Design tools such as Figma, Sketch, Zeplin and InVision
Workflow tools such as Notion, Confluence, and Jira
In the past, our improvement process relied on manually gathering feedback. But with a growing userbase and the need to support a wide variety of integrations, we need a more accurate method for gauging Storybook usage and pain points.

These telemetry data help us (the maintainers) to prioritize the highest impact projects. That allows us to keep up with trends in the front-end ecosystem and verify that our community's hard work achieves the intended result.

What is being collected?

We collect general usage details, including command invocation, Storybook version, addons, and the view layer.

Specifically, we track the following information in our telemetry events:

Timestamp of the occurrence.
Command invoked (e.g., init, upgrade, dev, build).
Storybook unique identifier: One-way hash generated during Storybook installation process.
One way hash of the IP address where the event occurred for spam detection.
Story count.
Storybook version.
Storybook metadata:
Language (e.g., TypeScript, JavaScript).
Supported view layers (e.g., React, Vue 3, Angular, Svelte).
Builder (e.g., Webpack5, Vite).
Meta framework (e.g., Next, Gatsby, CRA).
Addons (e.g., Essentials, Accessibility).
Testing tools (e.g. Jest, Vitest, Playwright).
Package manager information (e.g., npm, yarn).
Monorepo information (e.g., NX, Turborepo).
In-app events (e.g., Storybook guided tour, UI test run).
Access to the raw data is highly controlled, limited to select members of Storybook's core team who maintain the telemetry. We cannot identify individual users from the dataset: it is anonymized and untraceable back to the user.

What about sensitive information?

We take your privacy and our security very seriously. We perform additional steps to ensure that secure data (e.g., environment variables or other forms of sensitive data) do not make their way into our analytics. You can view all the information we collect by setting the STORYBOOK_TELEMETRY_DEBUG to 1 to print out the information gathered. For example:

npm
STORYBOOK_TELEMETRY_DEBUG=1 npm run storybook
Will generate the following output:

{
  "anonymousId": "8bcfdfd5f9616a1923dd92adf89714331b2d18693c722e05152a47f8093392bb",
  "eventType": "dev",
  "payload": {
    "versionStatus": "cached",
    "storyIndex": {
      "storyCount": 0,
      "componentCount": 0,
      "pageStoryCount": 0,
      "playStoryCount": 0,
      "autodocsCount": 0,
      "mdxCount": 0,
      "exampleStoryCount": 8,
      "exampleDocsCount": 3,
      "onboardingStoryCount": 0,
      "onboardingDocsCount": 0,
      "version": 5
    },
    "storyStats": {
      "factory": 0,
      "play": 0,
      "render": 1,
      "loaders": 0,
      "beforeEach": 0,
      "globals": 0,
      "storyFn": 5,
      "mount": 0,
      "moduleMock": 0,
      "tags": 0
    }
  },
  "metadata": {
    "generatedAt": 1689007841223,
    "hasCustomBabel": false,
    "hasCustomWebpack": false,
    "hasStaticDirs": false,
    "hasStorybookEslint": false,
    "refCount": 0,
    "portableStoriesFileCount": 0,
    "packageManager": {
      "type": "yarn",
      "version": "3.1.1"
    },
    "monorepo": "Nx",
    "framework": {
      "name": "@storybook/react-vite",
      "options": {}
    },
    "builder": "@storybook/builder-vite",
    "renderer": "@storybook/react",
    "storybookVersion": "7.1.0",
    "storybookVersionSpecifier": "^7.1.0",
    "language": "typescript",
    "storybookPackages": {
      "@storybook/blocks": {
        "version": "7.1.0"
      },
      "@storybook/react": {
        "version": "7.1.0"
      },
      "@storybook/react-vite": {
        "version": "7.1.0"
      },
      "@storybook/testing-library": {
        "version": "0.2.0"
      },
      "storybook": {
        "version": "7.1.0"
      }
    },
    "addons": {
      "@storybook/addon-essentials": {
        "version": "7.1.0"
      },
      "@storybook/addon-onboarding": {
        "version": "1.0.6"
      },
      "@storybook/addon-interactions": {
        "version": "7.1.0"
      }
    }
  }
}
Additionally, if Storybook's guided tour is enabled, it will generate the following output:

{
  "eventType": "addon-onboarding",
  "payload": {
    "step": "1:Welcome",
    "addonVersion": "1.0.6"
  },
  "metadata": {
    // See above for metadata that's collected.
  }
}
Will this data be shared?

The data we collect is anonymous, not traceable to the source, and only meaningful in aggregate form. No data we collect is personally identifiable. In the future, we plan to share relevant data with the community through public dashboards (or similar data representation formats).

How to opt-out

You may opt out of the telemetry within your Storybook configuration by setting the disableTelemetry configuration element to true.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
};
 
export default config;
If necessary, you can also turn off telemetry via the command line with the --disable-telemetry flag.

npm
npm run storybook -- --disable-telemetry
Or via the STORYBOOK_DISABLE_TELEMETRY environment variable.

STORYBOOK_DISABLE_TELEMETRY=1 yarn storybook
💡
There is a boot event containing no metadata (used to ensure the telemetry is working). It is sent prior to evaluating your Storybook configuration file (i.e., main.js|ts), so it is unaffected by the disableTelemetry option. If you want to ensure that the event is not sent, use the STORYBOOK_DISABLE_TELEMETRY environment variable.
Crash reports (disabled by default)

In addition to general usage telemetry, you may also choose to share crash reports. Storybook will then sanitize the error object (removing all user paths) and append it to the telemetry event. To enable crash reporting, you can set the enableCrashReports configuration element to true.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    enableCrashReports: true, // 👈 Appends the crash reports to the telemetry events
  },
};
 
export default config;
You can also enable crash reporting via the command line with the --enable-crash-reports flag.

npm
npm run storybook -- --enable-crash-reports
Or by setting the STORYBOOK_ENABLE_CRASH_REPORTS environment variable to 1.

STORYBOOK_ENABLE_CRASH_REPORTS=1 yarn storybook
Enabling any of the options will generate the following item in the telemetry event:

{
  stack: 'Error: Your button is not working\n' +
    '    at Object.<anonymous> ($SNIP/test.js:39:27)\n' +
    '    at Module._compile (node:internal/modules/cjs/loader:1103:14)\n' +
    '    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)\n' +
    '    at Module.load (node:internal/modules/cjs/loader:981:32)\n' +
    '    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n' +
    '    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)\n' +
    '    at node:internal/main/run_main_module:17:47',
  message: 'Your button is not working'
}
</document_content>
</document>