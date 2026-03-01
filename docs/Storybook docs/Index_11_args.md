<document index="11">
    <source>args.md</source>
    <document_content>
## Args

A story is a component with a set of arguments that define how the component should render. "Args" are Storybook's mechanism for defining those arguments in a single JavaScript object. Args can be used to dynamically change props, slots, styles, inputs, etc. It allows Storybook and its addons to live edit components. You do not need to modify your underlying component code to use args.

When an arg's value changes, the component re-renders, allowing you to interact with components in Storybook's UI via addons that affect args.

Learn how and why to write stories in the introduction. For details on how args work, read on.

### Args object

The args object can be defined at the story, component and global level. It is a JSON serializable object composed of string keys with matching valid value types that can be passed into a component for your framework.

#### Story args

To define the args of a single story, use the args CSF story key:

```typescript
// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
```

These args will only apply to the story for which they are attached, although you can reuse them via JavaScript object reuse:

```typescript
// Button.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
 
export const PrimaryLongName: Story = {
  args: {
    ...Primary.args,
    label: 'Primary with a really long name',
  },
};
```

In the above example, we use the object spread feature of ES 2015.

#### Component args

You can also define args at the component level; they will apply to all the component's stories unless you overwrite them. To do so, use the args key on the default CSF export:

```typescript
// Button.stories.ts|tsx
import type { Meta } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Creates specific argTypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
```

#### Global args

You can also define args at the global level; they will apply to every component's stories unless you overwrite them. To do so, define the args property in the default export of preview.js|ts:

```typescript
// .storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/your-renderer';
 
const preview: Preview = {
  // The default value of the theme arg for all stories
  args: { theme: 'light' },
};
 
export default preview;
```

💡
For most uses of global args, globals are a better tool for defining globally-applied settings, such as a theme. Using globals enables users to change the value with the toolbar menu.

### Args composition

You can separate the arguments to a story to compose in other stories. Here's how you can combine args for multiple stories of the same component.

```typescript
// Button.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
 
export const Secondary: Story = {
  args: {
    ...Primary.args,
    primary: false,
  },
};
```

💡
If you find yourself re-using the same args for most of a component's stories, you should consider using component-level args.

Args are useful when writing stories for composite components that are assembled from other components. Composite components often pass their arguments unchanged to their child components, and similarly, their stories can be compositions of their child components stories. With args, you can directly compose the arguments:

```typescript
// Page.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { Page } from './Page';
 
//👇 Imports all Header stories
import * as HeaderStories from './Header.stories';
 
const meta: Meta<typeof Page> = {
  component: Page,
};
 
export default meta;
type Story = StoryObj<typeof Page>;
 
export const LoggedIn: Story = {
  args: {
    ...HeaderStories.LoggedIn.args,
  },
};
```

### Args can modify any aspect of your component

You can use args in your stories to configure the component's appearance, similar to what you would do in an application. For example, here's how you could use a footer arg to populate a child component:

```typescript
// Page.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { Page } from './Page';
 
type PagePropsAndCustomArgs = React.ComponentProps<typeof Page> & { footer?: string };
 
const meta: Meta<PagePropsAndCustomArgs> = {
  component: Page,
  render: ({ footer, ...args }) => (
    <Page {...args}>
      <footer>{footer}</footer>
    </Page>
  ),
};
export default meta;
 
type Story = StoryObj<PagePropsAndCustomArgs>;
 
export const CustomFooter: Story = {
  args: {
    footer: 'Built with Storybook',
  },
};
```

### Setting args through the URL

You can also override the set of initial args for the active story by adding an args query parameter to the URL. Typically you would use the Controls addon to handle this. For example, here's how you could set a size and style arg in the Storybook's URL:

```
?path=/story/avatar--default&args=style:rounded;size:100
```

As a safeguard against XSS attacks, the arg's keys and values provided in the URL are limited to alphanumeric characters, spaces, underscores, and dashes. Any other types will be ignored and removed from the URL, but you can still use them with the Controls addon and within your story.

The args param is always a set of key: value pairs delimited with a semicolon ;. Values will be coerced (cast) to their respective argTypes (which may have been automatically inferred). Objects and arrays are supported. Special values null and undefined can be set by prefixing with a bang !. For example, args=obj.key:val;arr[0]:one;arr[1]:two;nil:!null will be interpreted as:

```json
{
  obj: { key: 'val' },
  arr: ['one', 'two'],
  nil: null
}
```

Similarly, special formats are available for dates and colors. Date objects will be encoded as !date(value) with value represented as an ISO date string. Colors are encoded as !hex(value), !rgba(value) or !hsla(value). Note that rgb(a) and hsl(a) should not contain spaces or percentage signs in the URL.

Args specified through the URL will extend and override any default values of args set on the story.

### Setting args from within a story

Interactive components often need to be controlled by their containing component or page to respond to events, modify their state and reflect those changes in the UI. For example, when a user toggles a switch component, the switch should be checked, and the arg shown in Storybook should reflect the change. To enable this, you can use the useArgs API exported by @storybook/preview-api:

```typescript
// my-component/component.stories.ts|tsx
import { StoryObj, Meta } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { Checkbox } from './checkbox';
 
const meta: Meta<typeof Checkbox> = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
};
export default meta;
 
type Story = StoryObj<typeof Checkbox>;
 
export const Example: Story = {
  args: {
    isChecked: false,
    label: 'Try Me!',
  },
  /**
   * 👇 To avoid linting issues, it is recommended to use a function with a capitalized name.
   * If you are not concerned with linting, you may use an arrow function.
   */
  render: function Render(args) {
    const [{ isChecked }, updateArgs] = useArgs();
 
    function onChange() {
      updateArgs({ isChecked: !isChecked });
    }
 
    return <Checkbox {...args} onChange={onChange} isChecked={isChecked} />;
  },
};
```

### Mapping to complex arg values

Complex values such as JSX elements cannot be serialized to the manager (e.g., the Controls addon) or synced with the URL. Arg values can be "mapped" from a simple string to a complex type using the mapping property in argTypes to work around this limitation. It works in any arg but makes the most sense when used with the select control type.

```typescript
// Example.stories.ts|tsx
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import type { Meta } from '@storybook/your-renderer';
 
import { Example } from './Example';
 
const meta: Meta<typeof Example> = {
  component: Example,
  argTypes: {
    label: {
      options: ['Normal', 'Bold', 'Italic'],
      mapping: {
        Bold: <b>Bold</b>,
        Italic: <i>Italic</i>,
      },
    },
  },
};
 
export default meta;
```

Note that mapping does not have to be exhaustive. If the arg value is not a property of mapping, the value will be used directly. Keys in mapping always correspond to arg values, not their index in the options array.

### Using args in addons
    </document_content>
</document>