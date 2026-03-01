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