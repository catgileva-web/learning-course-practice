<document index="72">
<source>Images, fonts, and assets.md</source>
<document_content>
Images, fonts, and assets

React
Vue
Angular
Web Components
More
Components often rely on images, videos, fonts, and other assets to render as the user expects. There are many ways to use these assets in your story files.

Import assets into stories

You can import any media assets by importing (or requiring) them. It works out of the box with our default config. But, if you are using a custom webpack config, you’ll need to add the file loader to handle the required files.

Afterward, you can use any asset in your stories:

MyComponent.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
 
import imageFile from './static/image.png';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
const image = {
  src: imageFile,
  alt: 'my image',
};
 
export const WithAnImage: Story = {
  render: () => <img src={image.src} alt={image.alt} />,
};
Serving static files via Storybook Configuration

We recommend serving static files via Storybook to ensure that your components always have the assets they need to load. We recommend this technique for assets that your components often use, like logos, fonts, and icons.

Configure a directory (or a list of directories) where your assets live when starting Storybook. Use the staticDirs configuration element in your main Storybook configuration file (i.e., .storybook/main.js|ts) to specify the directories:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public', '../static'],
};
 
export default config;
Here ../public is your static directory. Now use it in a component or story like this.

MyComponent.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
// Assume image.png is located in the "public" directory.
export const WithAnImage: Story = {
  render: () => <img src="/image.png" alt="my image" />,
};
You can also pass a list of directories separated by commas without spaces instead of a single directory.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public', '../static'],
};
 
export default config;
Or even use a configuration object to define the directories:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: [{ from: '../my-custom-assets/images', to: '/assets' }],
};
 
export default config;
Reference assets from a CDN

Upload your files to an online CDN and reference them. In this example, we’re using a placeholder image service.

MyComponent.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const WithAnImage: Story = {
  render: () => (
    <img src="https://storybook.js.org/images/placeholders/350x150.png" alt="My CDN placeholder" />
  ),
};
Absolute versus relative paths

Sometimes, you may want to deploy your Storybook into a subpath, like https://example.com/storybook.

In this case, you need to have all your images and media files with relative paths. Otherwise, the browser cannot locate those files.

If you load static content via importing, this is automatic, and you do not have to do anything.

Suppose you are serving assets in a static directory along with your Storybook. In that case, you need to use relative paths to load images or use the base element.

Referencing Fonts in Stories

After configuring Storybook to serve assets from your static folder, you can reference those assets in Storybook. For example, you can reference and apply a custom font to your stories. To do this, create a preview-head.html file inside the configuration directory (i.e., .storybook) and add a <link /> tag to reference your font.

.storybook/preview-head.html
<!--
Pull in static files served from your Static directory or the internet
Example:
`main.js|ts` is configured with staticDirs: ['../public'] and your font is located in the `fonts`
directory inside your `public` directory
-->
<link rel="preload" href="/fonts/my-font.woff2" />
 
<!-- Or you can load custom head-tag JavaScript: -->
<script src="https://use.typekit.net/xxxyyy.js"></script>
<script>
  try {
    Typekit.load();
  } catch (e) {}
</script>
</document_content>
</document>