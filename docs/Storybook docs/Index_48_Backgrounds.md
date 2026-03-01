<document index="48">
<source>Backgrounds.md</source>
<document_content>
Backgrounds

React
Vue
Angular
Web Components
More
The backgrounds toolbar addon allows you to set the background color on which the story renders in the UI:


🆕
globals API
This addon has been updated to use the globals API when the backgroundsStoryGlobals feature flag is enabled. With globals, when you specify a background value for a story, it cannot be overridden from the toolbar, which ensures a consistent experience while navigating between stories. This will be the default behavior and API in Storybook 9.
Configuration

By default, the backgrounds toolbar includes a light and dark background.

But you're not restricted to these backgrounds. You can configure your own set of colors with the backgrounds parameter in your .storybook/preview.js.

You can define the available background colors using the values property and set the initial background color using the default property:

.storybook/preview.ts
Typescript
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/your-renderer';
 
const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        // 👇 Default values
        { name: 'Dark', value: '#333' },
        { name: 'Light', value: '#F7F9F2' },
        // 👇 Add your own
        { name: 'Maroon', value: '#400' },
      ],
      // 👇 Specify which background is shown by default
      default: 'Light',
    },
  },
};
 
export default preview;
🆕
With the globals API
When using the globals API, you must define the available background colors using the options property. The initial background color can be set using the initialGlobals property, which accepts the same object properties as the globals for this addon.
.storybook/preview.ts
Typescript
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/your-renderer';
 
const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        // 👇 Default options
        dark: { name: 'Dark', value: '#333' },
        light: { name: 'Light', value: '#F7F9F2' },
        // 👇 Add your own
        maroon: { name: 'Maroon', value: '#400' },
      },
    },
  },
  initialGlobals: {
    // 👇 Set the initial background color
    backgrounds: { value: 'light' },
  },
};
 
export default preview;
Defining the background for a story

The Backgrounds addon enables you to change the background color applied to a story by selecting from the list of predefined background colors in the toolbar. If needed, you can set a story to default to a specific background color, by using the parameters.backgrounds.default parameter:

Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    backgrounds: {
      // 👇 Set default background value for all component stories
      default: 'Gray',
    },
  },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const OnDark: Story = {
  parameters: {
    backgrounds: {
      // 👇 Override default background value for this story
      default: 'Dark',
    },
  },
};
As implied by the name, this method only sets the default background color for a story. You can still change the background color using the toolbar when viewing the story.

🆕
With the globals API
When you specify a background color for a story (or a component's stories) using globals, the background color is applied and cannot be changed using the toolbar. This is useful when you want to ensure that a story is always rendered on a specific background color.
Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  globals: {
    // 👇 Set background value for all component stories
    backgrounds: { value: 'gray', grid: false },
  },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const OnDark: Story = {
  globals: {
    // 👇 Override background value for this story
    backgrounds: { value: 'dark' },
  },
};
Extending the configuration

You can also configure backgrounds on a per-component or per-story basis through parameter inheritance.

To set the available background colors, use the values property. In this example, we'll adjust the colors for all of the Button component's stories:

Button.stories.tsx
Typescript
import type { Meta } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    backgrounds: {
      default: 'Light',
      values: [
        // 👇 Add a new value
        { name: 'Gray', value: '#CCC' },
      ],
    },
  },
};
 
export default meta;
🆕
With the globals API
The available background colors are defined using the options property. In this example, we'll adjust the colors for all of the Button component's stories:
Button.stories.tsx
Typescript
import type { Meta } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    backgrounds: {
      options: {
        // 👇 Override the default `dark` option
        dark: { name: 'Dark', value: '#000' },
        // 👇 Add a new option
        gray: { name: 'Gray', value: '#CCC' },
      },
    },
  },
};
 
export default meta;
Disable backgrounds

If you want to turn off backgrounds in a story, you can do so by configuring the backgrounds parameter like so:

🆕
With the globals API
Note that the property has been renamed to disabled.
Without globals API
With globals API
Button.stories.ts|tsx
Typescript
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Meta, StoryObj } from '@storybook/your-renderer';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const Large: Story = {
  parameters: {
    backgrounds: { disable: true },
  },
};
Grid

The Backgrounds toolbar also includes a Grid selector, which allows you to quickly see if your components are aligned.

You don't need additional configuration to get started. But its properties are fully customizable; if you don't supply any value to any of its properties, they'll default to the following values:

Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
// To apply a set of backgrounds to all stories of Button:
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    backgrounds: {
      grid: {
        cellSize: 20,
        opacity: 0.5,
        cellAmount: 5,
        offsetX: 16, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        offsetY: 16, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      },
    },
  },
};
 
export default meta;
API

🆕
With the globals API
Globals

This addon contributes the following globals to Storybook, under the backgrounds namespace:
grid

Type: boolean
Whether the grid is displayed.
value

Type: string
When set, the background color is applied and cannot be changed using the toolbar. Must match the key of one of the available colors.
Parameters

This addon contributes the following parameters to Storybook, under the backgrounds namespace:

default

Type: string

Required: See description

Default background color. Must match the name property of one of the available colors defined in the values (or options) property.

disable

🆕
With the globals API
Note that the property has been renamed to disabled.
Type: boolean

Turn off this addon's behavior. If you wish to turn off this addon for the entire Storybook, you should do so when registering addon-essentials. See the essential addon's docs for more information.

This parameter is most useful to allow overriding at more specific levels. For example, if this parameter is set to true at the project level, it could be re-enabled by setting it to false at the meta (component) or story level.

grid

Type:

{
  cellAmount?: number;
  cellSize?: number;
  disable?: boolean;
  offsetX?: number;
  offsetY?: number;
  opacity?: number;
}
Configuration for the background grid.

grid.cellAmount
Type: number

Default: 5

Specify the size of the minor grid lines.

grid.cellSize
Type: number

Default: 20

Specify the size of the major grid lines.

grid.disable
Type: boolean

Turn off the grid.

grid.offsetX
Type: number

Default: 0 if story layout is 'fullscreen'; 16 if story layout is 'padded'

Horizontal offset of the grid.

grid.offsetY
Type: number

Default: 0 if story layout is 'fullscreen'; 16 if story layout is 'padded'

Vertical offset of the grid.

grid.opacity
Type: number

Default: 0.5

The opacity of the grid lines.

values

(Required, see description)

Type: { name: string; value: string }[]

Available background colors. See above for a usage example.

When defining the backgrounds parameter at the project level (in .storybook/preview.js|ts), you must define the values property.

🆕
With the globals API
options

(Required, see description)
Type:
{
  [key: string]: {
    name: string;
    value: string;
  };
}
Replaces: values
Available background colors. See above for a usage example.
When defining the backgrounds parameter at the project level (in .storybook/preview.js|ts), you must define the options property.
</document_content>
</document>