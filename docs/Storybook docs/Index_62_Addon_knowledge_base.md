<document index="62">
<source>Addon knowledge base.md</source>
<document_content>
Addon knowledge base

React
Vue
Angular
Web Components
More
Once you understand the basics of writing addons, there are a variety of common enhancements to make your addon better. This page details additional information about addon creation. Use it as a quick reference guide when creating your own addons.

Disable the addon panel

It’s possible to disable the addon panel for a particular story.

To make that possible, you need to pass the paramKey element when you register the panel:

/my-addon/manager.js
addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'My Addon',
    render: () => <div>Addon tab content</div>,
    paramKey: 'myAddon', // this element
  });
});
Then when adding a story, you can pass a disabled parameter.

Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  parameters: {
    myAddon: { disable: true }, // Disables the addon
  },
};
 
export default meta;
Style your addon

Storybook uses Emotion for styling. Alongside with a theme that you can customize!

We recommend using Emotion to style your addon’s UI components. That allows you to use the active Storybook theme to deliver a seamless developer experience. If you don’t want to use Emotion, you can use inline styles or another css-in-js lib. You can receive the theme as a prop by using Emotion's withTheme HOC. Read more about theming.

Storybook components

Addon authors can develop their UIs using any React library. But we recommend using Storybook’s UI components in @storybook/components to build addons faster. When you use Storybook components, you get:

Battle-tested off-the-shelf components
Storybook native look and feel
Built-in support for Storybook theming
Use the components listed below with your next addon.

Component	Source	Story
Action Bar	See component implementation	See component story
Addon Panel	See component implementation	N/A
Badge	See component implementation	See component story
Button	See component implementation	See component story
Form	See component implementation	See component story
Loader	See component implementation	See component story
PlaceHolder	See component implementation	See component story
Scroll Area	See component implementation	See component story
Space	See component implementation	See component story
Syntax Highlighter	See component implementation	See component story
Tabs	See component implementation	See component story
ToolBar	See component implementation	N/A
ToolTip	See component implementation	See component story
Zoom	See component implementation	See component story
Complementing the components, also included is a set of UI primitives. Use the content listed below as a reference for styling your addon.

Component	Source	Story
Color Palette (see note below)	See implementation	See story
Icon	See implementation	See story
Typography	See implementation	See story
ℹ️
The color palette implemented by @storybook/components is a high-level abstraction of the @storybook/theming package.
Build system

When you're developing your addon as a package, you can’t use npm link to add it to your project. List your addon as a local dependency into your package.json:

package.json
{
  "dependencies": {
    "@storybook/addon-controls": "file:///home/username/myrepo"
  }
}
ℹ️
Run either yarn or npm install to install the addon.
Hot module replacement

While developing your addon, you can configure HMR (hot module replacement) to reflect the changes made.

Standalone Storybook addons

If you're developing a standalone addon, add a new script to package.json with the following:

package.json
{
  "scripts": {
    "start": "npm run build -- --watch"
  }
}
Local Storybook addons

If you're developing a local Storybook addon built on top of an existing Storybook installation, HMR (hot module replacement) is available out of the box.

Composing addons in presets

If you're working on a preset that loads third-party addons, which you don't have control over, and you need access to certain features (e.g., decorators) or provide additional configurations. In that case, you'll need to update your preset to the following to allow you to load and configure the other addons:

my-preset/index.js
function managerEntries(entry = []) {
  return [...entry, require.resolve('my-other-addon/register')];
}
 
const config = (entry = [], options) => {
  return [...entry, require.resolve('my-other-addon/addDecorator')];
};
 
export default {
  managerEntries,
  config,
};
If you have control over the addons you want to customize. In that case, you can update your preset and implement a custom function to load any additional presets and provide the necessary configuration, similar to how it's implemented in the Essentials addon.
</document_content>
</document>