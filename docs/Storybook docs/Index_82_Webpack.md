<document index="82">
<source>Webpack.md</source>
<document_content>
Webpack

React
Vue
Angular
Web Components
More
Storybook Webpack builder is the default builder for Storybook. This builder enables you to create a seamless development and testing experience for your components and provides an efficient way to develop UI components in isolation allowing you to leverage your existing Webpack configuration with Storybook.

Configure

By default, Storybook provides zero-config support for Webpack and automatically sets up a baseline configuration created to work with the most common use cases. However, you can extend your Storybook configuration file (i.e., .storybook/main.js|ts) and provide additional options to improve your Storybook's performance or customize it to your needs. Listed below are the available options and examples of how to use them.

Option	Description
lazyCompilation	Enables Webpack's experimental lazy compilation
core: { builder: { options: { lazyCompilation: true } } }
fsCache	Configures Webpack's filesystem caching feature
core: { builder: { options: { fsCache: true } } }
.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
};
 
export default config;
Override the default configuration

Storybook's Webpack configuration is based on Webpack 5, allowing it to be extended to fit your project's needs. If you need to add a loader or a plugin, you can provide the webpackFinal configuration element in your .storybook/main.js|ts file. The configuration element should export a function that receives the baseline configuration as the first argument and Storybook's options object as the second argument. For example:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      // Modify config for development
    }
    if (configType === 'PRODUCTION') {
      // Modify config for production
    }
    return config;
  },
};
 
export default config;
When Storybook starts, it automatically merges the configuration into its own. However, when providing the webpackFinal configuration element, you're responsible for merging the configuration yourself. We recommend that you handle the changes to the config object responsibly, preserving both the entry and output properties.

Working with Webpack plugins

Another way to customize your Storybook configuration is to add a custom plugin or loader to help with code optimization, asset management, or other tasks. Nevertheless, since Storybook relies on the HtmlWebpackPlugin to generate the preview page, we recommend that you append the changes to the config.plugins array rather than overwriting it. For example:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async (config) => {
    config.plugins.push(/* ... */);
    return config;
  },
};
 
export default config;
Additionally, when working with Webpack loaders that don't explicitly include specific file extensions (i.e., via the test property), you should exclude the .ejs file extension for that loader.

Import a custom Webpack configuration

If you already have an existing Webpack configuration file that you need to reuse with Storybook, you can import it and merge it into the default configuration. For example:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
import custom from '../webpack.config.js'; // 👈 Custom Webpack configuration being imported.
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async (config) => {
    return {
      ...config,
      module: { ...config.module, rules: [...config.module.rules, ...custom.module.rules] },
    };
  },
};
 
export default config;
💡
Projects scaffolded based on generators may require that you import their specific Webpack configuration files. We suggest reading your generator's documentation for more information.
Debug Webpack configuration

If you intend to debug the Webpack configuration used by Storybook, you can use the Storybook CLI to help you. If you're running in development mode, you can use the following command:

npm
npm run storybook -- --debug-webpack
Additionally, if you're generating a static build of your Storybook, you can use the following command:

npm
npm run build-storybook -- --debug-webpack
Compiler support

Storybook takes a compiler-agnostic approach to bundling. This allows you to bring your own application bundler (e.g., Babel, SWC) and ensures compatibility within the vast ecosystem of Webpack 5-based projects.

SWC

If your project is built using SWC, use the @storybook/addon-webpack5-compiler-swc addon. This addon increases ecosystem compatibility with Webpack 5 projects while maintaining high performance. Run the following command to set up the addon automatically:

npm
npx storybook@latest add @storybook/addon-webpack5-compiler-swc
ℹ️
Additional options can be provided to customize the SWC configuration. See the SWC API documentation for more information.
When enabled, this addon adjusts the Webpack configuration to use the swc-loader for JavaScript and TypeScript files. Additionally, it will detect and use your project's SWC configuration.

Babel

If you're working with a project that relies on Babel's tooling to provide support for specific features, including TypeScript or other modern JavaScript features, you can use the @storybook/addon-webpack5-compiler-babel addon to allow you to include them in your Storybook to ensure compatibility with your project. Run the following command to set up the addon automatically:

npm
npx storybook@latest add @storybook/addon-webpack5-compiler-babel
ℹ️
Additional options can be provided to customize the Babel configuration. See the babel API documentation for more information, or if you're working on an addon, the babelDefault documentation for more information.
When enabled, the addon will adjust the Webpack configuration to use the babel-loader as the default loader for JavaScript and TypeScript files. Additionally, it will detect and use your project's Babel configuration.

Troubleshooting

TypeScript modules are not resolved within Storybook

Storybook's default Webpack configuration provides support for most project setups without the need for any additional configuration. Nevertheless, depending on your project configuration, or the framework of choice, you may run into issues with TypeScript modules not being resolved within Storybook when aliased from your tsconfig file. If you encounter this issue, you can use tsconfig-paths-webpack-plugin while extending Storybook's Webpack config as follows:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.plugins = [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        }),
      ];
    }
    return config;
  },
};
 
export default config;
However, if you're working with a framework that provides a default aliasing configuration (e.g., Next.js, Nuxt) and you want to configure Storybook to use the same aliases, you may not need to install any additional packages. Instead, you can extend the default configuration of Storybook to use the same aliases provided by the framework. For example, to set up an alias for the @ import path, you can add the following to your .storybook/main.js|ts file:

.storybook/main.ts
Typescript
import path from 'path';
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      };
    }
    return config;
  },
};
 
export default config;
Pre-bundled assets do not show in the Storybook UI

As Storybook relies on esbuild to build its internal manager, support for bundling assets with the managerWebpack will no longer have an impact on the Storybook UI. We recommend removing existing managerWebpack configuration elements from your Storybook configuration file and bundling assets other than images or CSS into JavaScript beforehand.

Storybook doesn't run with Webpack 4

Support for Webpack 4 has been removed and is no longer being maintained. If you're upgrading your Storybook, it will automatically use Webpack 5 and attempt to migrate your configuration. However, if you're working with a custom Webpack configuration, you may need to update it to work with Webpack 5. The migration process is necessary to ensure that your project runs smoothly with the latest version of Storybook. You can follow the instructions provided on the Webpack website to update your configuration.

Learn more about builders

Vite builder for bundling with Vite
Webpack builder for bundling with Webpack
Builder API for building a Storybook builder
</document_content>
</document>