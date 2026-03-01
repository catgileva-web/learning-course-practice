<document index="71">
<source>TypeScript.md</source>
<document_content>
TypeScript

React
Vue
Angular
Web Components
More
Storybook provides an integrated TypeScript experience, including zero-configuration setup and built-in types for APIs, addons, and stories.

Configure Storybook with TypeScript

Storybook's configuration file (i.e., main.ts) is defined as an ESM module written in TypeScript, providing you with the baseline configuration to support your existing framework while enabling you stricter type-checking and autocompletion in your editor. Below is an abridged configuration file.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  // Required
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Optional
  addons: ['@storybook/addon-essentials'],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};
 
export default config;
See the main configuration API reference for more details and additional properties.

💡
See the Vite builder TypeScript documentation if using @storybook/builder-vite.
Extending the default configuration

Out of the box, Storybook is built to work with a wide range of third-party libraries, enabling you to safely access and document metadata (e.g., props) for your components without any additional configuration. It relies on react-docgen, a fast and highly customizable parser to process TypeScript files to infer the component's metadata and generate types automatically for improved performance and type safety. If you need to customize the default configuration for a specific use case scenario, you can adjust your Storybook configuration file and provide the required options. Listed below are the available options and examples of how to use them.

Option	Description
check	Available for Webpack-based projects.
Enables type checking within Storybook
typescript: { check: true },
checkOptions	Requires the check option to be enabled.
Configures the fork-ts-checker-webpack-plugin plugin
typescript: { checkOptions: {},},
reactDocgen	Configures the TypeScript parser used by Storybook.
Available options: react-docgen (default), react-docgen-typescript, false
typescript: { reactDocgen: 'react-docgen'},
reactDocgenTypescriptOptions	Requires the reactDocgenoption to be react-docgen-typescript.
Configures the react-docgen-typescript-plugin plugin per builder
typescript: { reactDocgen: 'react-docgen-typescript', reactDocgenTypescriptOptions: {},},
skipCompiler	Disables parsing Typescript files through the compiler
typescript: { skipCompiler:false,},
.storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    check: false,
    checkOptions: {},
    skipCompiler: false,
  },
};
 
export default config;
Additional options are available for the typescript configuration option. See the config.typescript API reference for more information.
Write stories with TypeScript

Storybook provides zero-config TypeScript support, allowing you to write stories using this language without additional configuration. You can use this format for improved type safety and code completion. For example, if you're testing a Button component, you could do the following in your story file:

Button.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
//👇 Throws a type error if the args don't match the component props
export const Primary: Story = {
  args: {
    primary: true,
  },
};
The example above uses the power of TypeScript in combination with the exported generic types (Meta and StoryObj) to tell Storybook how to infer the component's metadata and the type of the component's inputs (e.g., props). This can greatly improve the developer experience by letting your IDE show you what properties are injected by Storybook.

TypeScript 4.9 support

Assuming that you're working on a project that uses TypeScript 4.9+, you can update your component stories to use the new satisfies operator to ensure stricter type checking for your component stories. For example:

Button.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/<your-framework>';
 
import { Button } from './Button';
 
const meta = {
  component: Button,
} satisfies Meta<typeof Button>; // 👈 Satisfies operator being used for stricter type checking.
 
export default meta;
Now, when you define a story or update an existing one, you'll automatically get notified that you're missing a required arg. However, you're not limited to using the satisfies operator at the component level. If you need, you can also use it at the story level. For example:

Button.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta = {
  component: Button,
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Example = {
  args: {
    primary: true,
    label: 'Button',
  },
} satisfies Story;
Troubleshooting

The satisfies operator is not working as expected

Out of the box, Storybook supports the satisfies operator for almost every framework already using TypeScript version 4.9 or higher. However, due to the constraints of the Angular and Web Components framework, you might run into issues when applying this operator for additional type safety. This is primarily due to how both frameworks are currently implemented, making it almost impossible for Storybook to determine if the component property is required. If you encounter this issue, please open up a support request on GitHub Discussions.

Storybook doesn't create the required types for external packages

If your project relies on a third-party library and the expected types are not being generated, preventing you from accurately documenting your components, you can adjust the reactDocgen configuration option in your Storybook configuration file to use react-docgen-typescript instead and include the required options. For example:

.storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, react-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Filter out third-party props from node_modules except @mui packages.
      propFilter: (prop) =>
        prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
    },
  },
};
 
export default config;
The types are not being generated for my component

If you're working with a React project, type inference is automatically enabled for your components using the react-docgen library for improved build times and type safety. However, you may run into a situation where some options may not work as expected (e.g., Enums, React's forwardRef). This is primarily due to how the react-docgen package is implemented, making it difficult for Storybook to infer the component's metadata and generate types automatically. To solve this, you can update the typescript configuration option in your Storybook configuration file to use react-docgen-typescript instead. For example:

.storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, react-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    // Provide your own options if necessary.
    // See https://storybook.js.org/docs/configure/typescript for more information.
    reactDocgenTypescriptOptions: {},
  },
};
 
export default config;
If you're still encountering issues, we recommend reaching out to the community using the default communication channels (e.g., GitHub discussions).
</document_content>
</document>