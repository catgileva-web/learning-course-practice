<document index="68">
<source>Framework support.md</source>
<document_content>
Framework support

React
Vue
Angular
Web Components
More
Frameworks are packages that auto-configure Storybook to work with most common environment setups. They simplify the setup process and reduce boilerplate by mirroring your framework's conventions to create applications.

How do frameworks work in Storybook?

You start by installing Storybook into an existing project. Then, it tries to detect the framework you're using and automatically configures Storybook to work with it. That means adding the necessary libraries as dependencies and adjusting the configuration. Finally, starting Storybook will automatically load the framework configuration before loading any existing addons to match your application environment.

Which frameworks are supported?

Storybook provides support for the leading industry builders and frameworks. However, that doesn't mean you can't use Storybook with other frameworks. Below is a list of currently supported frameworks divided by their builders.

Builder	Framework
Webpack	React, Angular, Vue 3, Web Components, NextJS, HTML, Ember, Preact, Svelte
Vite	React, Vue 3, Web Components, HTML, Svelte, SvelteKit, Qwik, Solid
What about feature support?

In addition to supporting the most popular frameworks in the industry, Storybook also tries to retain the same level of feature support for each framework, including the addon ecosystem. For more information, see Framework support for a comprehensive list of which features and addons are currently maintained with the community's help.

Configure

Every modern web application has unique requirements and relies on various tools and frameworks. By default, with Storybook, you get an out-of-the-box configuration generated to work with most frameworks. However, you can extend your existing configuration file (i.e., ./storybook/main.js|ts|cjs) and provide additional options. Below is an abridged table with available options and examples of configuring Storybook for your framework.

.storybook/main.ts
Typescript
// Replace react-vite with the framework you are using (e.g., react-webpack5)
import type { StorybookConfig } from '@storybook/react-vite';
 
const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {
      legacyRootApi: true,
    },
  },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
};
 
export default config;
Option	Description	Framework
nextConfigPath	Sets the default path for the NextJS configuration file
framework: { name: '@storybook/nextjs', options: { nextConfigPath: '../next.config.js'} }	NextJS
builder	Configures Webpack 5 builder options for NextJS
core: { builder: { name:'webpack5', options: { lazyCompilation: true} }}	NextJS
strictMode	Enables React's strict mode
framework: { name: '@storybook/react-webpack5', options: { strictMode: false } }	React
legacyRootApi	Requires React 18. Toggles support for React's legacy root API
framework: { name: '@storybook/react-webpack5', options: { legacyRootApi: true } }	React
enableIvy	Enabled by default with Angular 9+. Replaces the default compiler with the Ivy compiler
framework: { name: '@storybook/angular', options: { enableIvy: true } }	Angular
enableNgcc	Enabled by default with Angular 9+. Adds support for ngcc for backwards compatibility
framework: { name: '@storybook/angular', options: { enableNgcc: false } }	Angular
Troubleshooting

NextJS 13 doesn't work with Storybook

With the release of Next.js version 13, it introduced breaking changes (e.g., TurboPack, Server Components) that are not yet fully supported by Storybook. The Storybook team is working on adding support for these features. In the meantime, you can still use Storybook alongside your Next.js 13 project if you're not relying on them.

My framework doesn't work with Storybook

Out of the box, most frameworks work seamlessly with Storybook. However, some frameworks (e.g., CRACO) provide their own configuration that Storybook isn't prepared to handle without additional steps, either via addon or integration. To learn more, read our addons guide.

How do I build a Storybook framework?

Storybook is a framework-agnostic tool. It can be used with any framework. However, to make it easier for you to get started, we provide instructions that you can use to build your framework. To learn more, read our frameworks guide.

Legacy framework support

We're deprecating support for several frameworks, including Aurelia, Marionette, Mithril, Rax, and Riot. Nevertheless, we're always looking for help maintaining these frameworks. If you're working with one of them and you want to continue supporting them, visit the dedicated Storybook End-of-Life repository. To learn more about the sunsetting process and view instructions on how to contribute, read our documentation.

Learn about configuring Storybook

Theming to customize the look and feel of Storybook's UI
CSS to configure CSS support
Images & assets for static asset handling
Environment variables to configure environment variables
</document_content>
</document>