<document index="79">
<source>Environment variables.md</source>
<document_content>
Environment variables

React
Vue
Angular
Web Components
More
You can use environment variables in Storybook to change its behavior in different “modes”. If you supply an environment variable prefixed with STORYBOOK_, it will be available in process.env when using Webpack, or import.meta.env when using the Vite builder:

STORYBOOK_THEME=red STORYBOOK_DATA_KEY=12345 npm run storybook
💡
Do not store any secrets (e.g., private API keys) or other types of sensitive information in your Storybook. Environment variables are embedded into the build, meaning anyone can view them by inspecting your files.
Then we can access these environment variables anywhere inside our preview JavaScript code like below:

node-env
vite-env
console.log(process.env.STORYBOOK_THEME);
console.log(process.env.STORYBOOK_DATA_KEY);
You can also access these variables in your custom <head>/<body> using the substitution %STORYBOOK_X%, for example: %STORYBOOK_THEME% will become red.

💡
If using the environment variables as attributes or values in JavaScript, you may need to add quotes, as the value will be inserted directly, for example: <link rel="stylesheet" href="%STORYBOOK_STYLE_URL%" />.
Using .env files

You can also use .env files to change Storybook's behavior in different modes. For example, if you add a .env file to your project with the following:

STORYBOOK_DATA_KEY=12345
Then you can access this environment variable anywhere, even within your stories:

MyComponent.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const ExampleStory: Story = {
  args: {
    propertyA: process.env.STORYBOOK_DATA_KEY,
  },
};
With Vite

Out of the box, Storybook provides a Vite builder, which does not output Node.js globals like process.env. To access environment variables in Storybook (e.g., STORYBOOK_, VITE_), you can use import.meta.env. For example:

MyComponent.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const ExampleStory: Story = {
  args: {
    propertyA: import.meta.env.STORYBOOK_DATA_KEY,
    propertyB: import.meta.env.VITE_CUSTOM_VAR,
  },
};
ℹ️
You can also use specific files for specific modes. Add a .env.development or .env.production to apply different values to your environment variables.
You can also pass these environment variables when you are building your Storybook with build-storybook.

Then they'll be hardcoded to the static version of your Storybook.

Using Storybook configuration

Additionally, you can extend your Storybook configuration file (i.e., .storybook/main.js|.ts) and provide a configuration field that you can use to define specific variables (e.g., API URLs). For example:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  /*
   * 👇 The `config` argument contains all the other existing environment variables.
   * Either configured in an `.env` file or configured on the command line.
   */
  env: (config) => ({
    ...config,
    EXAMPLE_VAR: 'An environment variable configured in Storybook',
  }),
};
 
export default config;
When Storybook loads, it will enable you to access them in your stories similar as you would do if you were working with an env file:

MyComponent.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const Default: Story = {
  args: {
    exampleProp: process.env.EXAMPLE_VAR,
  },
};
Using environment variables to choose the browser

Storybook allows you to choose the browser you want to preview your stories. Either through a .env file entry or directly in your storybook script.

The table below lists the available options:

Browser	Example
Safari	BROWSER="safari"
Firefox	BROWSER="firefox"
Chromium	BROWSER="chromium"
💡
By default, Storybook will open a new Chrome window as part of its startup process. If you don't have Chrome installed, make sure to include one of the following options, or set your default browser accordingly.
Troubleshooting

Environment variables are not working

If you're trying to use framework-specific environment variables (e.g.,VUE_APP_), you may run into issues primarily due to the fact that Storybook and your framework may have specific configurations and may not be able to recognize and use those environment variables. If you run into a similar situation, you may need to adjust your framework configuration to make sure that it can recognize and use those environment variables. For example, if you're working with a Vite-based framework, you can extend the configuration file and enable the envPrefix option. Other frameworks may require a similar approach.
</document_content>
</document>