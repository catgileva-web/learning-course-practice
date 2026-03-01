<document index="77">
<source>Sidebar & URLS.md</source>
<document_content>
Sidebar & URLS

React
Vue
Angular
Web Components
More
Watch a video tutorial
Storybook’s sidebar lists all your stories grouped by component. When you have many components, you may also wish to group those components. To do so, you can add the / separator to the title of your CSF file, and Storybook will group the stories into groups based on common prefixes:

Storybook sidebar anatomy

We recommend using a nesting scheme that mirrors the filesystem path of the components. For example, if you have a file components/modals/Alert.js, name the CSF file components/modals/Alert.stories.js and title it Components/Modals/Alert.

Roots

By default, Storybook will treat your top-level nodes as “roots”. Roots are displayed in the UI as “sections” of the hierarchy. Lower level groups will show up as folders:

Storybook sidebar story roots

If you’d prefer to show top-level nodes as folders rather than roots, you can set the sidebar.showRoots option to false in ./storybook/manager.js:

./storybook/manager.js
import { addons } from '@storybook/manager-api';
 
addons.setConfig({
  sidebar: {
    showRoots: false,
  },
});
Permalink to stories

By default, Storybook generates an id for each story based on the component title and the story name. This id in particular is used in the URL for each story, and that URL can serve as a permalink (primarily when you publish your Storybook).

Consider the following story:

FooBar.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Foo } from './Foo';
 
const meta: Meta<typeof Foo> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Foo/Bar',
  component: Foo,
};
 
export default meta;
type Story = StoryObj<typeof Foo>;
 
export const Baz: Story = {};
Storybook's ID-generation logic will give this the id foo-bar--baz, so the link would be ?path=/story/foo-bar--baz.

It is possible to manually set the story's id, which is helpful if you want to rename stories without breaking permalinks. Suppose you want to change the position in the hierarchy to OtherFoo/Bar and the story name to Moo. Here's how to do that:

FooBar.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Foo } from './Foo';
 
const meta: Meta<typeof Foo> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'OtherFoo/Bar',
  component: Foo,
  id: 'Foo/Bar', // Or 'foo-bar' if you prefer
};
 
export default meta;
type Story = StoryObj<typeof Foo>;
 
export const Baz: Story = {
  name: 'Insert name here',
};
Storybook will prioritize the id over the title for ID generation if provided and prioritize the story.name over the export key for display.

CSF 3.0 auto-titles

Storybook 6.4 introduced CSF 3.0 as an experimental feature, allowing you to write stories more compactly. Suppose you're already using this format to write your stories. In that case, you can omit the title element from the default export and allow Storybook automatically infer it based on the file's physical location. For example, given the following configuration and story:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src'],
};
 
export default config;
When Storybook loads, the story can show up in the sidebar as components/My Component.

Auto-titles work with explicit titling options like the component's title and the story's name:

src/components/Button/Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<Button> = {
  // Sets the name for the stories container
  title: 'components/Button',
  // The component name will be used if `title` is not set
  component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
// The story variable name will be used if `name` is not set
const Primary: Story = {
  // Sets the name for that particular story
  name: 'Primary',
  args: {
    label: 'Button',
  },
};
Auto-title filename case

Starting with Storybook 6.5, story titles generated automatically no longer rely on Lodash's startCase. Instead, the file name casing is preserved, allowing additional control over the story title. For example, components/My Component will be defined as components/MyComponent.

If you need, you can revert to the previous pattern by adding the following configuration:

.storybook/manager.js
import { addons } from '@storybook/manager-api';
 
import startCase from 'lodash/startCase.js';
 
addons.setConfig({
  sidebar: {
    renderLabel: ({ name, type }) => (type === 'story' ? name : startCase(name)),
  },
});
Auto-title redundant filenames

In addition to improvements to the story file name casing, a new heuristic was introduced, removing redundant names in case the filename has the same name as the directory name, or if it's called index.stories.js|ts. For example, before components/MyComponent/MyComponent.stories.js was defined as Components/MyComponent/MyComponent in the sidebar. Now it will be defined as Components/MyComponent.

If you need to preserve the naming scheme, you can add the title element to the default export. For example:

components/MyComponent/MyComponent.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: MyComponent,
  title: 'components/MyComponent/MyComponent',
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const Default: Story = {
  args: {
    something: 'Something else',
  },
};
Auto-title prefixes

Additionally, if you customize your Storybook to load your stories based on a configuration object, including a titlePrefix, Storybook automatically prefixes all titles to matching stories. For example, assuming you have the following configuration:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: [
    {
      directory: '../src',
      titlePrefix: 'Custom', // 👈 Configure the title prefix
    },
  ],
};
 
export default config;
When Storybook generates the titles for all matching stories, they'll retain the Custom prefix.

Story Indexers

Story Indexers are a set of heuristics used by Storybook to crawl your filesystem based on a given glob pattern searching for matching stories, which is then used to generate an index.json (formerly stories.json) file responsible for populating the sidebar with the necessary information. By default, this heuristic will look for files that contain the following scheme *.stories.@(js|jsx|mjs|ts|tsx).

You can provide your own indexer to include stories with a different naming convention, adjust the automatic title generation beyond a prefix, and many other use cases. For more information, see the Story Indexers API reference.
</document_content>
</document>