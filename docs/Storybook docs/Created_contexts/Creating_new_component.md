<document index="7">
    <source>whats-a-story.md</source>
    <document_content>
## What's a story?

A story captures the rendered state of a UI component. Developers write multiple stories per component that describe all the "interesting" states a component can support.

When you installed Storybook, the CLI created example components that demonstrate the types of components you can build with Storybook: Button, Header, and Page.

Each example component has a set of stories that show the states it supports. You can browse the stories in the UI and see the code behind them in files that end with `.stories.js|ts`. The stories are written in Component Story Format (CSF), an ES6 modules-based standard for writing component examples.

Let's start with the `Button` component. A story is an object that describes how to render the component in question. Here's how to render `Button` in the "primary" state and export a story called `Primary`.

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

View the rendered `Button` by clicking on it in the Storybook sidebar. Note how the values specified in `args` are used to render the component and match those represented in the Controls tab. Using `args` in your stories has additional benefits:
* `Button`'s callbacks are logged into the Actions tab. Click to try it.
* `Button`'s arguments are dynamically editable in the Controls tab. Adjust the controls.

### Working with stories

Storybook makes it easy to work on one component in one state (aka a story) at a time. When you edit a component's code or its stories, Storybook will instantly re-render in the browser. No need to refresh manually.

#### Create a new story

If you're working on a component that does not yet have any stories, you can click the ➕ button in the sidebar to search for your component and have a basic story created for you.

You can also create a story file for your new story. We recommend copy/pasting an existing story file next to the component source file, then adjusting it for your component.

If you're working on a component that already has other stories, you can use the Controls addon to adjust the value of a control and then save those changes as a new story.

Or, if you prefer, edit the story file's code to add a new named export for your story:

#### Edit a story

Using the Controls addon, update a control's value for a story. You can then save the changes to the story and the story file's code will be updated for you.

Of course, you can always update the story's code directly too:

Stories are also helpful for checking that UI continues to look correct as you make changes. The `Button` component has four stories that show it in different use cases. View those stories now to confirm that your change to `Primary` didn't introduce unintentional bugs in the other stories.

Checking component's stories as you develop helps prevent accidental regressions. Tools that integrate with Storybook can automate this for you.

Now that we've seen the basic anatomy of a story let's see how we use Storybook's UI to develop stories.
    </document_content>
</document>

<document index="10">
    <source>how-to-write-stories.md</source>
    <document_content>
## How to write stories

A story captures the rendered state of a UI component. It's an object with annotations that describe the component's behavior and appearance given a set of arguments.

Storybook uses the generic term arguments (args for short) when talking about React's props, Vue's props, Angular's @Input, and other similar concepts.

### Where to put stories

A component's stories are defined in a story file that lives alongside the component file. The story file is for development-only, and it won't be included in your production bundle. In your filesystem, it looks something like this:

```
components/
├─ Button/
│  ├─ Button.js | ts | jsx | tsx | vue | svelte
│  ├─ Button.stories.js | ts | jsx | tsx | svelte
```

### Component Story Format

We define stories according to the Component Story Format (CSF), an ES6 module-based standard that is easy to write and portable between tools.

The key ingredients are the default export that describes the component, and named exports that describe the stories.

#### Default export

The default export metadata controls how Storybook lists your stories and provides information used by addons. For example, here's the default export for a story file Button.stories.js|ts:

```typescript
// Button.stories.ts|tsx
import type { Meta } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
```

ℹ️
Starting with Storybook version 7.0, story titles are analyzed statically as part of the build process. The default export must contain a title property that can be read statically or a component property from which an automatic title can be computed. Using the id property to customize your story URL must also be statically readable.

#### Defining stories

Use the named exports of a CSF file to define your component's stories. We recommend you use UpperCamelCase for your story exports. Here's how to render Button in the "primary" state and export a story called Primary.

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

#### Working with React Hooks

React Hooks are convenient helper methods to create components using a more streamlined approach. You can use them while creating your component's stories if you need them, although you should treat them as an advanced use case. We recommend args as much as possible when writing your own stories. As an example, here's a story that uses React Hooks to change the button's state:

```typescript
// Button.stories.ts|tsx
import React, { useState } from 'react';
 
import { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const ButtonWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);
 
  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };
  return <Button primary={isPrimary} onClick={handleOnChange} label={value} />;
};
 
export const Primary: Story = {
  render: () => <ButtonWithHooks />,
};
```

#### Rename stories

You can rename any particular story you need. For instance, to give it a more accurate name. Here's how you can change the name of the Primary story:

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
  // 👇 Rename this story
  name: 'I am the primary',
  args: {
    label: 'Button',
    primary: true,
  },
};
```

Your story will now be shown in the sidebar with the given text.

### How to write stories

A story is an object that describes how to render a component. You can have multiple stories per component, and those stories can build upon one another. For example, we can add Secondary and Tertiary stories based on our Primary story from above.

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
    backgroundColor: '#ff0',
    label: 'Button',
  },
};
 
export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: '😄👍😍💯',
  },
};
 
export const Tertiary: Story = {
  args: {
    ...Primary.args,
    label: '📚📕📈🤓',
  },
};
```

What's more, you can import args to reuse when writing stories for other components, and it's helpful when you're building composite components. For example, if we make a ButtonGroup story, we might remix two stories from its child component Button.

```typescript
// ButtonGroup.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { ButtonGroup } from '../ButtonGroup';
 
//👇 Imports the Button stories
import * as ButtonStories from './Button.stories';
 
const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
};
 
export default meta;
type Story = StoryObj<typeof ButtonGroup>;
 
export const Pair: Story = {
  args: {
    buttons: [{ ...ButtonStories.Primary.args }, { ...ButtonStories.Secondary.args }],
    orientation: 'horizontal',
  },
};
```

When Button's signature changes, you only need to change Button's stories to reflect the new schema, and ButtonGroup's stories will automatically be updated. This pattern allows you to reuse your data definitions across the component hierarchy, making your stories more maintainable.

That's not all! Each of the args from the story function are live editable using Storybook's Controls panel. It means your team can dynamically change components in Storybook to stress test and find edge cases.

You can also use the Controls panel to edit or save a new story after adjusting its control values.

Addons can enhance args. For instance, Actions auto-detects which args are callbacks and appends a logging function to them. That way, interactions (like clicks) get logged in the actions panel.

### Using the play function

Storybook's play function and the @storybook/addon-interactions are convenient helper methods to test component scenarios that otherwise require user intervention. They're small code snippets that execute once your story renders. For example, suppose you wanted to validate a form component, you could write the following story using the play function to check how the component responds when filling in the inputs with information:

```typescript
// LoginForm.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { userEvent, within, expect } from '@storybook/test';
 
import { LoginForm } from './LoginForm';
 
const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};
 
export default meta;
type Story = StoryObj<typeof LoginForm>;
 
export const EmptyForm: Story = {};
 
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
 
    await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
 
    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
 
    // 👇 Assert DOM structure
    await expect(
      canvas.getByText(
        'Everything is perfect. Your account is ready and we should probably get you started!',
      ),
    ).toBeInTheDocument();
  },
};
```

Without the help of the play function and the @storybook/addon-interactions, you had to write your own stories and manually interact with the component to test out each use case scenario possible.

### Using parameters

Parameters are Storybook's method of defining static metadata for stories. A story's parameters can be used to provide configuration to various addons at the level of a story or group of stories.

For instance, suppose you wanted to test your Button component against a different set of backgrounds than the other components in your app. You might add a component-level backgrounds parameter:

```typescript
// Button.stories.ts|tsx
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Creates specific parameters at the component level
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
 
export default meta;
```

This parameter would instruct the backgrounds addon to reconfigure itself whenever a Button story is selected. Most addons are configured via a parameter-based API and can be influenced at a global, component and story level.

### Using decorators

Decorators are a mechanism to wrap a component in arbitrary markup when rendering a story. Components are often created with assumptions about 'where' they render. Your styles might expect a theme or layout wrapper, or your UI might expect specific context or data providers.

A simple example is adding padding to a component's stories. Accomplish this using a decorator that wraps the stories in a div with padding, like so:

```typescript
// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
 
export default meta;
```

Decorators can be more complex and are often provided by addons. You can also configure decorators at the story, component and global level.

### Stories for two or more components

Sometimes you may have two or more components created to work together. For instance, if you have a parent List component, it may require child ListItem components.

```typescript
// List.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { List } from './List';
 
const meta: Meta<typeof List> = {
  component: List,
};
 
export default meta;
type Story = StoryObj<typeof List>;
 
// Always an empty list, not super interesting
export const Empty: Story = {};
```

In such cases, it makes sense to render a different function for each story:

```typescript
// List.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { List } from './List';
import { ListItem } from './ListItem';
 
const meta: Meta<typeof List> = {
  component: List,
};
 
export default meta;
type Story = StoryObj<typeof List>;
 
export const Empty: Story = {};
 
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const OneItem: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem />
    </List>
  ),
};
 
export const ManyItems: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem />
      <ListItem />
      <ListItem />
    </List>
  ),
};
```

You can also reuse story data from the child ListItem in your List component. That's easier to maintain because you don't have to update it in multiple places.

```typescript
// List.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { List } from './List';
import { ListItem } from './ListItem';
 
//👇 We're importing the necessary stories from ListItem
import { Selected, Unselected } from './ListItem.stories';
 
const meta: Meta<typeof List> = {
  component: List,
};
 
export default meta;
type Story = StoryObj<typeof List>;
 
export const ManyItems: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem {...Selected.args} />
      <ListItem {...Unselected.args} />
      <ListItem {...Unselected.args} />
    </List>
  ),
};
```

💡
Note that there are disadvantages in writing stories like this as you cannot take full advantage of the args mechanism and composing args as you build even more complex composite components. For more discussion, see the multi component stories workflow documentation.
    </document_content>
</document>

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

<document index="12">
    <source>decorators.md</source>
    <document_content>
## Decorators

A decorator is a way to wrap a story in extra "rendering" functionality. Many addons define decorators to augment your stories with extra rendering or gather details about how your story renders.

When writing stories, decorators are typically used to wrap stories with extra markup or context mocking.

### Wrap stories with extra markup

Some components require a "harness" to render in a useful way. For instance, if a component runs right up to its edges, you might want to space it inside Storybook. Use a decorator to add spacing for all stories of the component.

```typescript
// YourComponent.stories.ts|tsx
import type { Meta } from '@storybook/react';
 
import { YourComponent } from './YourComponent';
 
const meta: Meta<typeof YourComponent> = {
  component: YourComponent,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
 
export default meta;
```

### "Context" for mocking

The second argument to a decorator function is the story context which contains the properties:

* args - the story arguments. You can use some args in your decorators and drop them in the story implementation itself.
* argTypes- Storybook's argTypes allow you to customize and fine-tune your stories args.
* globals - Storybook-wide globals. In particular you can use the toolbars feature to allow you to change these values using Storybook's UI.
* hooks - Storybook's API hooks (e.g., useArgs).
* parameters- the story's static metadata, most commonly used to control Storybook's behavior of features and addons.
* viewMode- Storybook's current active window (e.g., canvas, docs).

This context can be used to adjust the behavior of your decorator based on the story's arguments or other metadata. For example, you could create a decorator that allows you to optionally apply a layout to the story, by defining parameters.pageLayout = 'page' (or 'page-mobile'): :

```typescript
// .storybook/preview.tsx
import React from 'react';
 
import type { Preview } from '@storybook/react';
 
const preview: Preview = {
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading from parameters
      const { pageLayout } = parameters;
      switch (pageLayout) {
        case 'page':
          return (
            // Your page layout is probably a little more complex than this ;)
            <div className="page-layout">
              <Story />
            </div>
          );
        case 'page-mobile':
          return (
            <div className="page-mobile-layout">
              <Story />
            </div>
          );
        default:
          // In the default case, don't apply a layout
          return <Story />;
      }
    },
  ],
};
 
export default preview;
```

💡
For another example, see the section on configuring the mock provider, which demonstrates how to use the same technique to change which theme is provided to the component.

### Using decorators to provide data

If your components are "connected" and require side-loaded data to render, you can use decorators to provide that data in a mocked way without having to refactor your components to take that data as an arg. There are several techniques to achieve this. Depending on exactly how you are loading that data. Read more in the building pages in Storybook section.

### Story decorators

To define a decorator for a single story, use the decorators key on a named export:

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
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
```

It is useful to ensure that the story remains a "pure" rendering of the component under test and that any extra HTML or components are used only as decorators. In particular the Source Doc Block works best when you do this.

### Component decorators

To define a decorator for all stories of a component, use the decorators key of the default CSF export:

```typescript
// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
 
export default meta;
```

### Global decorators

We can also set a decorator for all stories via the decorators export of your .storybook/preview.js|ts file (this is the file where you configure all stories):

```typescript
// .storybook/preview.tsx
import React from 'react';
 
import { Preview } from '@storybook/react';
 
const preview: Preview = {
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};
 
export default preview;
```

### Decorator inheritance

Like parameters, decorators can be defined globally, at the component level, and for a single story (as we've seen).

All decorators relevant to a story will run in the following order once the story renders:

* Global decorators, in the order they are defined
* Component decorators, in the order they are defined
* Story decorators, in the order they are defined, starting from the innermost decorator and working outwards and up the hierarchy in the same order
    </document_content>
</document>

<document index="13">
    <source>play-function.md</source>
    <document_content>
## Play function

Play functions are small snippets of code executed after the story renders. Enabling you to interact with your components and test scenarios that otherwise required user intervention.

### Setup the interactions addon

We recommend installing Storybook's addon-interactions before you start writing stories with the play function. It's the perfect complement for it, including a handy set of UI controls to allow you command over the execution flow. At any time, you can pause, resume, rewind, and step through each interaction. Also providing you with an easy-to-use debugger for potential issues.

Run the following command to install the addon and the required dependencies.

```bash
npm install @storybook/test @storybook/addon-interactions --save-dev
```

Update your Storybook configuration (in .storybook/main.js|ts) to include the interactions addon.

```typescript
// .storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // Other Storybook addons
    '@storybook/addon-interactions', // 👈 Register the addon
  ],
};
 
export default config;
```

### Writing stories with the play function

Storybook's play functions are small code snippets that run once the story finishes rendering. Aided by the addon-interactions, it allows you to build component interactions and test scenarios that were impossible without user intervention. For example, if you were working on a registration form and wanted to validate it, you could write the following story with the play function:

```typescript
// RegistrationForm.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { userEvent, within } from '@storybook/test';
 
import { RegistrationForm } from './RegistrationForm';
 
const meta: Meta<typeof RegistrationForm> = {
  component: RegistrationForm,
};
 
export default meta;
type Story = StoryObj<typeof RegistrationForm>;
 
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    const emailInput = canvas.getByLabelText('email', {
      selector: 'input',
    });
 
    await userEvent.type(emailInput, 'example-email@email.com', {
      delay: 100,
    });
 
    const passwordInput = canvas.getByLabelText('password', {
      selector: 'input',
    });
 
    await userEvent.type(passwordInput, 'ExamplePassword', {
      delay: 100,
    });
    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const submitButton = canvas.getByRole('button');
 
    await userEvent.click(submitButton);
  },
};
```

💡
See the component testing documentation for an overview of the available API events.

When Storybook finishes rendering the story, it executes the steps defined within the play function, interacting with the component and filling the form's information. All of this without the need for user intervention. If you check your Interactions panel, you'll see the step-by-step flow.

### Composing stories

Thanks to the Component Story Format, an ES6 module based file format, you can also combine your play functions, similar to other existing Storybook features (e.g., args). For example, if you wanted to verify a specific workflow for your component, you could write the following stories:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { userEvent, within } from '@storybook/test';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FirstStory: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    await userEvent.type(canvas.getByTestId('an-element'), 'example-value');
  },
};
 
export const SecondStory: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    await userEvent.type(canvas.getByTestId('other-element'), 'another value');
  },
};
 
export const CombinedStories: Story = {
  play: async ({ context, canvasElement }) => {
    const canvas = within(canvasElement);
 
    // Runs the FirstStory and Second story play function before running this story's play function
    await FirstStory.play(context);
    await SecondStory.play(context);
    await userEvent.type(canvas.getByTestId('another-element'), 'random value');
  },
};
```

By combining the stories, you're recreating the entire component workflow and can spot potential issues while reducing the boilerplate code you need to write.

### Working with events

Most modern UIs are built focusing on interaction (e.g., clicking a button, selecting options, ticking checkboxes), providing rich experiences to the end-user. With the play function, you can incorporate the same level of interaction into your stories.

A common type of component interaction is a button click. If you need to reproduce it in your story, you can define your story's play function as the following:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { fireEvent, userEvent, within } from '@storybook/test';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
/* See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const ClickExample: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
  },
};
 
export const FireEventExample: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await fireEvent.click(canvas.getByTestId('data-testid'));
  },
};
```

When Storybook loads the story and the function executes, it interacts with the component and triggers the button click, similar to what a user would do.

Asides from click events, you can also script additional events with the play function. For example, if your component includes a select with various options, you can write the following story and test each scenario:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { userEvent, within } from '@storybook/test';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
// Function to emulate pausing between interactions
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
 
/* See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const ExampleChangeEvent: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    const select = canvas.getByRole('listbox');
 
    await userEvent.selectOptions(select, ['One Item']);
    await sleep(2000);
 
    await userEvent.selectOptions(select, ['Another Item']);
    await sleep(2000);
 
    await userEvent.selectOptions(select, ['Yet another item']);
  },
};
```

In addition to events, you can also create interactions with the play function based on other types of asynchronous methods. For instance, let's assume that you're working with a component with validation logic implemented (e.g., email validation, password strength). In that case, you can introduce delays within your play function to emulate user interaction and assert if the values provided are valid or not:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { userEvent, within } from '@storybook/test';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
/* See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const DelayedStory: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    const exampleElement = canvas.getByLabelText('example-element');
 
    // The delay option sets the amount of milliseconds between characters being typed
    await userEvent.type(exampleElement, 'random string', {
      delay: 100,
    });
 
    const AnotherExampleElement = canvas.getByLabelText('another-example-element');
    await userEvent.type(AnotherExampleElement, 'another random string', {
      delay: 100,
    });
  },
};
```

When Storybook loads the story, it interacts with the component, filling in its inputs and triggering any validation logic defined.

You can also use the play function to verify the existence of an element based on a specific interaction. For instance, if you're working on a component and want to check what happens if a user introduces the wrong information. In that case, you could write the following story:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { userEvent, waitFor, within } from '@storybook/test';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
/* See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const ExampleAsyncStory: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    const Input = canvas.getByLabelText('Username', {
      selector: 'input',
    });
 
    await userEvent.type(Input, 'WrongInput', {
      delay: 100,
    });
 
    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    const Submit = canvas.getByRole('button');
    await userEvent.click(Submit);
 
    await waitFor(async () => {
      await userEvent.hover(canvas.getByTestId('error'));
    });
  },
};
```

### Querying elements

If you need, you can also adjust your play function to find elements based on queries (e.g., role, text content). For example:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { userEvent, within } from '@storybook/test';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
/* See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const ExampleWithRole: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button', { name: / button label/i }));
  },
};
```

💡
You can read more about the querying elements in the Testing Library documentation.

When Storybook loads the story, the play function starts its execution and queries the DOM tree expecting the element to be available when the story renders. In case there's a failure in your test, you'll be able to verify its root cause quickly.

Otherwise, if the component is not immediately available, for instance, due to a previous step defined inside your play function or some asynchronous behavior, you can adjust your story and wait for the change to the DOM tree to happen before querying the element. For example:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { userEvent, within } from '@storybook/test';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
/* See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const AsyncExample: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    // Other steps
 
    // Waits for the component to be rendered before querying the element
    await canvas.findByRole('button', { name: / button label/i });
  },
};
```

### Working with the Canvas

By default, each interaction you write inside your play function will be executed starting from the top-level element of the Canvas. This is acceptable for smaller components (e.g., buttons, checkboxes, text inputs), but can be inefficient for complex components (e.g., forms, pages), or for multiple stories. To accommodate this, you can adjust your interactions to start execution from the component's root. For example:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { userEvent, within } from '@storybook/test';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const ExampleStory: Story = {
  play: async ({ canvasElement }) => {
    // Assigns canvas to the component root element
    const canvas = within(canvasElement);
 
    // Starts querying from the component's root element
    await userEvent.type(canvas.getByTestId('example-element'), 'something');
    await userEvent.click(canvas.getByRole('button'));
  },
};
```

Applying these changes to your stories can provide a performance boost and improved error handling with addon-interactions.
    </document_content>
</document>

<document index="14">
    <source>parameters.md</source>
    <document_content>
## Parameters

Parameters are a set of static, named metadata about a story, typically used to control the behavior of Storybook features and addons.

ℹ️
Available parameters are listed in the parameters API reference.

For example, let's customize the backgrounds addon via a parameter. We'll use `parameters.backgrounds` to define which backgrounds appear in the backgrounds toolbar when a story is selected.

### Story parameters

We can set a parameter for a single story with the `parameters` key on a CSF export:

```typescript
// Button.stories.ts|tsx
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const OnDark: Story = {
  // 👇 Story-level parameters
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
```

### Component parameters

We can set the parameters for all stories of a component using the `parameters` key on the default CSF export:

```typescript
// Button.stories.ts|tsx
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Creates specific parameters at the component level
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
 
export default meta;
```

### Global parameters

We can also set the parameters for **all stories** via the `parameters` export of your `.storybook/preview.js|ts` file (this is the file where you configure all stories):

```typescript
// .storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-renderer';
 
const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
      ],
    },
  },
};
 
export default preview;
```

Setting a global parameter is a common way to configure addons. With backgrounds, you configure the list of backgrounds that every story can render in.

### Rules of parameter inheritance

The way the global, component and story parameters are combined is:

* More specific parameters take precedence (so a story parameter overwrites a component parameter which overwrites a global parameter).
* Parameters are **merged**, so keys are only ever overwritten and never dropped.

The merging of parameters is important. This means it is possible to override a single specific sub-parameter on a per-story basis while retaining most of the parameters defined globally.

If you are defining an API that relies on parameters (e.g., an **addon**) it is a good idea to take this behavior into account.
    </document_content>
</document>

<document index="17">
    <source>organizing-stories.md</source>
    <document_content>
## Organizing stories

Storybook provides a powerful way to organize your stories, giving you the necessary tools to categorize, search, and filter your stories based on your organization's needs and preferences.

### Structure and hierarchy

When organizing your Storybook, there are two methods of structuring your stories: implicit and explicit. The implicit method involves relying upon the physical location of your stories to position them in the sidebar, while the explicit method involves utilizing the title parameter to place the story.

Storybook sidebar hierarchy is made up of various parts:

- **Category**: The top-level grouping of stories and documentation pages generated by Storybook
- **Folder**: A mid-level organizational unit that groups components and stories in the sidebar, representing a feature or section of your application
- **Component**: A low-level organizational unit representing the component that the story is testing
- **Docs**: The automatically generated documentation page for the component
- **Story**: The individual story testing a specific component state

### Naming stories

When creating your stories, you can explicitly use the title parameter to define the story's position in the sidebar. It can also be used to group related components together in an expandable interface to help with Storybook organization providing a more intuitive experience for your users. For example:

```typescript
// Button.stories.ts
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
};
 
export default meta;
```

### Grouping

It is also possible to group related components in an expandable interface to help with Storybook organization. To do so, use the / as a separator:

```typescript
// Button.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Design System/Atoms/Button',
  component: Button,
};
 
export default meta;
```

```typescript
// CheckBox.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { CheckBox } from './Checkbox';
 
const meta: Meta<typeof CheckBox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Design System/Atoms/Checkbox',
  component: CheckBox,
};
 
export default meta;
```

### Roots

By default, the top-level grouping will be displayed as "root" in the Storybook UI (i.e., the uppercased, non-expandable items). If you need, you can configure Storybook and disable this behavior. Useful if you need to provide a streamlined experience for your users; nevertheless, if you have a large Storybook composed of multiple component stories, we recommend naming your components according to the file hierarchy.

### Single-story hoisting

Single-story components (i.e., component stories without siblings) whose display name exactly matches the component's name (last part of title) are automatically hoisted up to replace their parent component in the UI. For example:

```typescript
// Button.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button as ButtonComponent } from './Button';
 
const meta: Meta<typeof ButtonComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Design System/Atoms/Button',
  component: ButtonComponent,
};
 
export default meta;
type Story = StoryObj<typeof ButtonComponent>;
 
// This is the only named export in the file, and it matches the component name
export const Button: Story = {};
```

Because story exports are automatically "start cased" (myStory becomes "My Story"), your component name should match that. Alternatively, you can override the story name using myStory.storyName = '...' to match the component name.

### Sorting stories

Out of the box, Storybook sorts stories based on the order in which they are imported. However, you can customize this pattern to suit your needs and provide a more intuitive experience by adding storySort to the options parameter in your preview.js file.

```typescript
// .storybook/preview.ts
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    options: {
      // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      storySort: (a, b) =>
        a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
};
 
export default preview;
```

ℹ️
Asides from the unique story identifier, you can also use the title, name, and import path to sort your stories using the storySort function.

The storySort can also accept a configuration object.

```typescript
// .storybook/preview.ts
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: '',
        order: [],
        locales: '',
      },
    },
  },
};
 
export default preview;
```

| Field | Type | Description | Required | Default Value | Example |
|-------|------|-------------|----------|---------------|---------|
| method | String | Tells Storybook in which order the stories are displayed | No | Storybook configuration | 'alphabetical' |
| order | Array | The stories to be shown, ordered by supplied name | No | Empty Array [] | ['Intro', 'Components'] |
| includeNames | Boolean | Include story name in sort calculation | No | false | true |
| locales | String | The locale required to be displayed | No | System locale | en-US |

To sort your stories alphabetically, set method to 'alphabetical' and optionally set the locales string. To sort your stories using a custom list, use the order array; stories that don't match an item in the order list will appear after the items in the list.

The order array can accept a nested array to sort 2nd-level story kinds. For example:

```typescript
// .storybook/preview.ts
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components'],
      },
    },
  },
};
 
export default preview;
```

Which would result in this story ordering:

- Intro and then Intro/* stories
- Pages story
- Pages/Home and Pages/Home/* stories
- Pages/Login and Pages/Login/* stories
- Pages/Admin and Pages/Admin/* stories
- Pages/* stories
- Components and Components/* stories
- All other stories

If you want specific categories to sort to the end of the list, you can insert a * into your order array to indicate where "all other stories" should go:

```typescript
// .storybook/preview.ts
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Intro', 'Pages', ['Home', 'Login', 'Admin'], 'Components', '*', 'WIP'],
      },
    },
  },
};
 
export default preview;
```

In this example, the WIP category would be displayed at the end of the list.

Note that the order option is independent of the method option; stories are sorted first by the order array and then by either the method: 'alphabetical' or the default configure() import order.
    </document_content>
</document>

<document index="19">
    <source>mocking-providers.md</source>
    <document_content>
## Mocking providers

Components can receive data or configuration from context providers. For example, a styled component might access its theme from a ThemeProvider or Redux uses React context to provide components access to app data. To mock a provider, you can wrap your component in a decorator that includes the necessary context.

```typescript
// .storybook/preview.tsx
import React from 'react';
import { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme="default">
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
```

⚠️
Note the file extension above (`.tsx` or `.jsx`). You may need to adjust your preview file's extension to allow use of JSX, depending on your project's settings.

💡
For another example, reference the Screens chapter of the Intro to Storybook tutorial, where we mock a Redux provider with mock data.

### Configuring the mock provider

When mocking a provider, it may be necessary to configure the provider to supply a different value for individual stories. For example, you might want to test a component with different themes or user roles.

One way to do this is to define the decorator for each story individually. But if you imagine a scenario where you wish to create stories for each of your components in both light and dark themes, this approach can quickly become cumbersome.

For a better way, with much less repetition, you can use the decorator function's second "context" argument to access a story's `parameters` and adjust the provided value. This way, you can define the provider once and adjust its value for each story.

For example, we can adjust the decorator from above to read from `parameters.theme` to determine which theme to provide:

```typescript
// .storybook/preview.tsx
import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
// themes = { light, dark }
import * as themes from '../src/themes';

const preview: Preview = {
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      // 👇 Make it configurable by reading the theme value from parameters
      const { theme = 'light' } = parameters;
      return (
        <ThemeProvider theme={themes[theme]}>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
```

Now, you can define a `theme` parameter in your stories to adjust the theme provided by the decorator:

```typescript
// Button.stories.ts
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

// Wrapped in light theme
export const Default: Story = {};

// Wrapped in dark theme
export const Dark: Story = {
  parameters: {
    theme: 'dark',
  },
};
```

This powerful approach allows you to provide any value (theme, user role, mock data, etc.) to your components in a way that is both flexible and maintainable.
    </document_content>
</document>

<document index="23">
    <source>writing-stories-in-typescript.md</source>
    <document_content>
## Writing stories in TypeScript

Writing your stories in TypeScript makes you more productive. You don't have to jump between files to look up component props. Your code editor will alert you about missing required props and even autocomplete prop values, just like when using your components within your app. Plus, Storybook infers those component types to auto-generate the Controls table.

Storybook has built-in TypeScript support, so you can get started with zero configuration required.

### Typing stories with `Meta` and `StoryObj`

When writing stories, there are two aspects that are helpful to type. The first is the component meta, which describes and configures the component and its stories. In a CSF file, this is the default export. The second is the stories themselves.

Storybook provides utility types for each of these, named `Meta` and `StoryObj`. Here's an example CSF file using those types:

```typescript
// Button.stories.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from '@storybook/your-renderer';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    primary: true,
  },
};
```

### Props type parameter

`Meta` and `StoryObj` types are both generics, so you can provide them with an optional prop type parameter for the component type or the component's props type (e.g., the `typeof Button` portion of `Meta<typeof Button>`). By doing so, TypeScript will prevent you from defining an invalid arg, and all decorators, play functions, or loaders will type their function arguments.

The example above passes a component type. See **Typing custom args** for an example of passing a props type.

### Using `satisfies` for better type safety

If you are using TypeScript 4.9+, you can take advantage of the new `satisfies` operator to get stricter type checking. Now you will receive type errors for missing required args, not just invalid ones.

Using `satisfies` to apply a story's type helps maintain type safety when sharing a play function across stories. Without it, TypeScript will throw an error that the `play` function may be undefined. The `satisfies` operator enables TypeScript to infer whether the play function is defined or not.

Finally, use of `satisfies` allows you to pass `typeof meta` to the `StoryObj` generic. This informs TypeScript of the connection between the `meta` and `StoryObj` types, which allows it to infer the `args` type from the `meta` type. In other words, TypeScript will understand that args can be defined both at the story and meta level and won't throw an error when a required arg is defined at the meta level, but not at the story level.

### Typing custom args

Sometimes stories need to define args that aren't included in the component's props. For this case, you can use an intersection type to combine a component's props type and your custom args' type. For example, here's how you could use a `footer` arg to populate a child component:

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
    </document_content>
</document>

<document index="25">
    <source>component-tests.md</source>
    <document_content>
# Component tests

Component tests allow you to verify the functional aspects of your UI components. As you build more complex UIs like pages, components become responsible for more than just rendering. They fetch data and manage state. Component tests verify these behaviors work correctly.

In a nutshell, you start by supplying the appropriate props for the initial state of a component. Then simulate user behavior such as clicks and form entries. Finally, check whether the UI and component state update correctly.

In Storybook, this familiar workflow happens in your browser. That makes it easier to debug failures because you're running tests in the same environment as you develop components: the browser.

## How does component testing in Storybook work?

You start by writing a story to set up the component's initial state. Then simulate user behavior using the play function. Finally, use the test-runner to confirm that the component renders correctly and that your component tests with the play function pass. The test runner can run via the command line or in CI.

- The **play function** is a small snippet of code that runs after a story finishes rendering. You can use this to test user workflows.
- The test is written using Storybook-instrumented versions of Vitest and Testing Library coming from the `@storybook/test` package.
- `@storybook/addon-interactions` visualizes the test in Storybook and provides a playback interface for convenient browser-based debugging.
- `@storybook/test-runner` is a standalone utility—powered by Jest and Playwright—that executes all of your interactions tests and catches broken stories.
- The experimental Vitest plugin is also available, which transforms your stories into Vitest tests and runs them in a browser.

## Set up the interactions addon

To enable the full component testing experience with Storybook, you'll need to take additional steps to set it up properly. We recommend you go through the test runner documentation before proceeding with the rest of the required configuration.

Run the following command to install the interactions addon and related dependencies.

```bash
npm install @storybook/test @storybook/addon-interactions --save-dev
```

Update your Storybook configuration (in `.storybook/main.js|ts`) to include the interactions addon.

```typescript
// .storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // Other Storybook addons
    '@storybook/addon-interactions', // 👈 Register the addon
  ],
};
 
export default config;
```

## Write a component test

The test itself is defined inside a play function connected to a story. Here's an example of how to set up a component test with Storybook and the play function:

```typescript
// LoginForm.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { userEvent, within, expect } from '@storybook/test';
 
import { LoginForm } from './LoginForm';
 
const meta: Meta<typeof LoginForm> = {
  component: LoginForm,
};
 
export default meta;
type Story = StoryObj<typeof LoginForm>;
 
export const EmptyForm: Story = {};
 
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
 
    // 👇 Simulate interactions with the component
    await userEvent.type(canvas.getByTestId('email'), 'email@provider.com');
 
    await userEvent.type(canvas.getByTestId('password'), 'a-random-password');
 
    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'));
 
    // 👇 Assert DOM structure
    await expect(
      canvas.getByText(
        'Everything is perfect. Your account is ready and we should probably get you started!',
      ),
    ).toBeInTheDocument();
  },
};
```

Once the story loads in the UI, it simulates the user's behavior and verifies the underlying logic.

## Run code before the component gets rendered

You can execute code before rendering by using the mount function in the play method.

Here's an example of using the mockdate package to mock the Date, a useful way to make your story render in a consistent state.

```typescript
// Page.stories.ts
import MockDate from 'mockdate';
 
// ...rest of story file
 
export const ChristmasUI: Story = {
  async play({ mount }) {
    MockDate.set('2024-12-25');
    // 👇 Render the component with the mocked date
    await mount();
    // ...rest of test
  },
};
```

⚠️ There are two requirements to use the mount function:
- You must destructure the mount property from the context (the argument passed to your play function). This makes sure that Storybook does not start rendering the story before the play function begins.
- Your Storybook framework or builder must be configured to transpile to ES2017 or newer. This is because destructuring statements and async/await usages are otherwise transpiled away, which prevents Storybook from recognizing your usage of mount.

## Create mock data before rendering

You can also use mount to create mock data that you want to pass to the component. To do so, first create your data in the play function and then call the mount function with a component configured with that data. In this example, we create a mock note and pass its id to the Page component, which we call mount with.

```typescript
// Page.stories.tsx
export const Default: Story = {
  play: async ({ mount, args }) => {
    const note = await db.note.create({
      data: { title: 'Mount inside of play' },
    });
 
    const canvas = await mount(
      // 👇 Pass data that is created inside of the play function to the component
      //   For example, a just-generated UUID
      <Page {...args} params={{ id: String(note.id) }} />,
    );
 
    await userEvent.click(await canvas.findByRole('menuitem', { name: /login to add/i }));
  },
  argTypes: {
    // 👇 Make the params prop un-controllable, as the value is always overriden in the play function.
    params: { control: { disable: true } },
  },
};
```

ℹ️ When you call mount() with no arguments, the component is rendered using the story's render function, whether the implicit default or the explicit custom definition. When you mount a specific component inside the mount function like in the example above, the story's render function will be ignored. This is why you must forward the args to the component.

## Run code before each story in a file

Sometimes you might need to run the same code before each story in a file. For instance, you might need to set up the initial state of the component or modules. You can do this by adding an asynchronous beforeEach function to the component meta.

You can return a cleanup function from the beforeEach function, which will run after each story, when the story is remounted or navigated away from.

```typescript
// Page.stories.ts
// Replace your-renderer with the name of your renderer (e.g. react, vue3)
import type { Meta, StoryObj } from '@storybook/your-renderer';
import MockDate from 'mockdate';
 
// 👇 Must include the `.mock` portion of filename to have mocks typed correctly
import { getUserFromSession } from '#api/session.mock';
import { Page } from './Page';
 
const meta: Meta<typeof Page> = {
  component: Page,
  // 👇 Set the value of Date for every story in the file
  async beforeEach() {
    MockDate.set('2024-02-14');
 
    // 👇 Reset the Date after each story
    return () => {
      MockDate.reset();
    };
  },
};
export default meta;
 
type Story = StoryObj<typeof Page>;
 
export const Default: Story = {
  async play({ canvasElement }) {
    // ... This will run with the mocked Date
  },
};
```

ℹ️ Generally, you should reset component and module state in the preview file's beforeAll or beforeEach functions, to ensure it applies to your entire project. However, if a component's needs are particularly unique, you can use the returned cleanup function in the component meta beforeEach to reset the state as needed.

## Set up or reset state for all tests

When you alter a component's state, it's important to reset that state before rendering another story to maintain isolation between tests.

There are two options for resetting state, beforeAll and beforeEach.

### beforeAll

The beforeAll function in the preview file (`.storybook/preview.js|ts`) will run once before any stories in the project and will not re-run between stories. Beyond its initial run when kicking off a test run, it will not run again unless the preview file is updated. This is a good place to bootstrap your project or run any setup that your entire project depends on, as in the example below.

You can return a cleanup function from the beforeAll function, which will run before re-running the beforeAll function or during the teardown process in the test runner.

```typescript
// .storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/your-renderer';
 
import { init } from '../project-bootstrap';
 
const preview: Preview = {
  async beforeAll() {
    await init();
  },
};
 
export default preview;
```

### beforeEach

Unlike beforeAll, which runs only once, the beforeEach function in the preview file (`.storybook/preview.js|ts`) will run before each story in the project. This is best used for resetting state or modules that are used by all or most of your stories. In the example below, we use it to reset the mocked Date.

You can return a cleanup function from the beforeEach function, which will run after each story, when the story is remounted or navigated away from.

```typescript
// .storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/your-renderer';
import MockDate from 'mockdate';
 
const preview: Preview = {
  async beforeEach() {
    MockDate.reset();
  },
};
 
export default preview;
```

ℹ️ It is not necessary to restore fn() mocks, as Storybook will already do that automatically before rendering a story. See the parameters.test.restoreMocks API for more information.

## API for user-events

Under the hood, Storybook's @storybook/test package provides Testing Library's user-events APIs. If you're familiar with Testing Library, you should be at home in Storybook.

Below is an abridged API for user-event. For more, check out the official user-event docs.

| User events | Description |
|-------------|-------------|
| clear | Selects the text inside inputs, or textareas and deletes it<br>`userEvent.clear(await within(canvasElement).getByRole('myinput'));` |
| click | Clicks the element, calling a click() function<br>`userEvent.click(await within(canvasElement).getByText('mycheckbox'));` |
| dblClick | Clicks the element twice<br>`userEvent.dblClick(await within(canvasElement).getByText('mycheckbox'));` |
| deselectOptions | Removes the selection from a specific option of a select element<br>`userEvent.deselectOptions(await within(canvasElement).getByRole('listbox'),'1');` |
| hover | Hovers an element<br>`userEvent.hover(await within(canvasElement).getByTestId('example-test'));` |
| keyboard | Simulates the keyboard events<br>`userEvent.keyboard('foo');` |
| selectOptions | Selects the specified option, or options of a select element<br>`userEvent.selectOptions(await within(canvasElement).getByRole('listbox'),['1','2']);` |
| type | Writes text inside inputs, or textareas<br>`userEvent.type(await within(canvasElement).getByRole('my-input'),'Some text');` |
| unhover | Unhovers out of element<br>`userEvent.unhover(await within(canvasElement).getByLabelText(/Example/i));` |

## Assert tests with Vitest's APIs

Storybook's @storybook/test also provides APIs from Vitest, such as expect and vi.fn. These APIs improve your testing experience, helping you assert whether a function has been called, if an element exists in the DOM, and much more. If you are used to expect from testing packages such as Jest or Vitest, you can write component tests in much the same way.

```typescript
// Form.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { userEvent, waitFor, within, expect, fn } from '@storybook/test';
 
import { Form } from './Form';
 
const meta: Meta<typeof Form> = {
  component: Form,
  args: {
    // 👇 Use `fn` to spy on the onSubmit arg
    onSubmit: fn(),
  },
};
 
export default meta;
type Story = StoryObj<typeof Form>;
 
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Submitted: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
 
    await step('Enter credentials', async () => {
      await userEvent.type(canvas.getByTestId('email'), 'hi@example.com');
      await userEvent.type(canvas.getByTestId('password'), 'supersecret');
    });
 
    await step('Submit form', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
 
    // 👇 Now we can assert that the onSubmit arg was called
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
  },
};
```

## Group interactions with the step function

For complex flows, it can be worthwhile to group sets of related interactions together using the step function. This allows you to provide a custom label that describes a set of interactions:

```typescript
// MyComponent.stories.ts
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { userEvent, within } from '@storybook/test';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
/*
 * See https://storybook.js.org/docs/writing-stories/play-function#working-with-the-canvas
 * to learn more about using the canvasElement to query the DOM
 */
export const Submitted: Story = {
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
 
    await step('Enter email and password', async () => {
      await userEvent.type(canvas.getByTestId('email'), 'hi@example.com');
      await userEvent.type(canvas.getByTestId('password'), 'supersecret');
    });
 
    await step('Submit form', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });
  },
};
```

This will show your interactions nested in a collapsible group.

## Mocked modules

If your component depends on modules that are imported into the component file, you can mock those modules to control and assert on their behavior. This is detailed in the mocking modules guide.

You can then import the mocked module (which has all of the helpful methods of a Vitest mocked function) into your story and use it to assert on the behavior of your component:

```typescript
// NoteUI.stories.ts
// Replace your-renderer with the name of your renderer (e.g. react, vue3)
import type { Meta, StoryObj } from '@storybook/your-renderer';
import { expect, userEvent, within } from '@storybook/test';
 
// 👇 Must include the `.mock` portion of filename to have mocks typed correctly
import { saveNote } from '#app/actions.mock';
import { createNotes } from '#mocks/notes';
import NoteUI from './note-ui';
 
const meta: Meta<typeof NoteUI> = {
  title: 'Mocked/NoteUI',
  component: NoteUI,
};
export default meta;
 
type Story = StoryObj<typeof NoteUI>;
 
const notes = createNotes();
 
export const SaveFlow: Story = {
  name: 'Save Flow ▶',
  args: {
    isEditing: true,
    note: notes[0],
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
 
    const saveButton = canvas.getByRole('menuitem', { name: /done/i });
    await userEvent.click(saveButton);
    // 👇 This is the mock function, so you can assert its behavior
    await expect(saveNote).toHaveBeenCalled();
  },
};
```

## Interactive debugger

If you check your interactions panel, you'll see the step-by-step flow. It also offers a handy set of UI controls to pause, resume, rewind, and step through each interaction.

## Permalinks for reproductions

The play function is executed after the story is rendered. If there's an error, it'll be shown in the interaction addon panel to help with debugging.

Since Storybook is a webapp, anyone with the URL can reproduce the error with the same detailed information without any additional environment configuration or tooling required.

Streamline component testing further by automatically publishing Storybook in pull requests. That gives teams a universal reference point to test and debug stories.

## Execute tests with the test-runner

Storybook only runs the component test when you're viewing a story. Therefore, you'd have to go through each story to run all your checks. As your Storybook grows, it becomes unrealistic to review each change manually. Storybook test-runner automates the process by running all tests for you. To execute the test-runner, open a new terminal window and run the following command:

```bash
npm run test-storybook
```

💡 If you need, you can provide additional flags to the test-runner. Read the documentation to learn more.

## Automate

Once you're ready to push your code into a pull request, you'll want to automatically run all your checks using a Continuous Integration (CI) service before merging it. Read our documentation for a detailed guide on setting up a CI environment to run tests.

## Troubleshooting

### What's the difference between component tests and visual tests?

Component tests can be expensive to maintain when applied wholesale to every component. We recommend combining them with other methods like visual testing for comprehensive coverage with less maintenance work.

### What's the difference between component tests and using Jest + Testing Library alone?

Component tests integrate Jest and Testing Library into Storybook. The biggest benefit is the ability to view the component you're testing in a real browser. That helps you debug visually, instead of getting a dump of the (fake) DOM in the command line or hitting the limitations of how JSDOM mocks browser functionality. It's also more convenient to keep stories and tests together in one file than having them spread across files.

## Learn about other UI tests

* Component tests for user behavior simulation
* Visual tests for appearance
* Accessibility tests for accessibility
* Snapshot tests for rendering errors and warnings
* Test runner to automate test execution
* Test coverage for measuring code coverage
* End-to-end tests for simulating real user scenarios
* Unit tests for functionality
</document_content>
</document>

<document index="49">
<source>Controls.md</source>
<document_content>
Controls

React
Vue
Angular
Web Components
More
Watch a video tutorial
Storybook Controls gives you a graphical UI to interact with a component's arguments dynamically without needing to code. It creates an addon panel next to your component examples ("stories"), so you can edit them live.


Controls do not require any modification to your components. Stories for controls are:

Convenient. Auto-generate controls based on React/Vue/Angular/etc. components.
Portable. Reuse your interactive stories in documentation, tests, and even in designs.
Rich. Customize the controls and interactive data to suit your exact needs.
To use the Controls addon, you need to write your stories using args. Storybook will automatically generate UI controls based on your args and what it can infer about your component. Still, you can configure the controls further using argTypes, see below.

💡
If you have stories in the older pre-Storybook 6 style, check the args & controls migration guide to learn how to convert your existing stories for args.
Choosing the control type

By default, Storybook will choose a control for each arg based on its initial value. This will work well with specific arg types (e.g., boolean or string). To enable them, add the component annotation to the default export of your story file, and it will be used to infer the controls and auto-generate the matching argTypes for your component using react-docgen, a documentation generator for React components that also includes first-class support for TypeScript.

Button.stories.ts|tsx
Typescript
import type { Meta } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
For instance, suppose you have a variant arg on your story that should be primary or secondary:

Button.stories.ts|tsx
Typescript
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
    variant: 'primary',
  },
};
By default, Storybook will render a free text input for the variant arg:

Essential addon Controls using a string

It works as long as you type a valid string into the auto-generated text control. Still, it's not the best UI for our scenario, given that the component only accepts primary or secondary as variants. Let’s replace it with Storybook’s radio component.

We can specify which controls get used by declaring a custom argType for the variant property. ArgTypes encode basic metadata for args, such as name, description, and defaultValue for an arg. These get automatically filled in by Storybook Docs.

ArgTypes can also contain arbitrary annotations, which the user can override. Since variant is a component property, let's put that annotation on the default export.

Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};
 
export default meta;
💡
ArgTypes are a powerful feature that can be used to customize the controls for your stories. For more information, see the documentation about customizing controls with argTypes annotation.
This replaces the input with a radio group for a more intuitive experience.

Essential Control addon with a radio group

Custom control type matchers

Controls can automatically be inferred from arg's name with regex, but currently only for the color picker and date picker controls. If you've used the Storybook CLI to setup your project, it should have automatically created the following defaults in .storybook/preview.js|ts:

Control	Default regex	Description
color	/(background|color)$/i	Will display a color picker UI for the args that match it
date	/Date$/	Will display a date picker UI for the args that match it
If you haven't used the CLI to set the configuration, or if you want to define your patterns, use the matchers property in the controls parameter:

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
 
export default preview;
Fully custom args

Until now, we only used auto-generated controls based on the component for which we're writing stories. If we are writing complex stories, we may want to add controls for args that aren’t part of the component. For example, here's how you could use a footer arg to populate a child component:

Page.stories.ts|tsx
Typescript
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
By default, Storybook will add controls for all args that:

It infers from the component definition if your framework supports it.
Appear in the list of args for your story.
Using argTypes, you can change the display and behavior of each control.

Dealing with complex values

When dealing with non-primitive values, you'll notice that you'll run into some limitations. The most obvious issue is that not every value can be represented as part of the args param in the URL, losing the ability to share and deep link to such a state. Beyond that, complex values such as JSX cannot be synchronized between the manager (e.g., Controls addon) and the preview (your story).

One way to deal with this is to use primitive values (e.g., strings) as arg values and add a custom render function to convert them to their complex counterpart before rendering. It isn't the nicest way to do it (see below), but certainly the most flexible.

YourComponent.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
 
import { YourComponent } from './your-component';
 
const meta: Meta<typeof YourComponent> = {
  component: YourComponent,
  //👇 Creates specific argTypes with options
  argTypes: {
    propertyA: {
      options: ['Item One', 'Item Two', 'Item Three'],
      control: { type: 'select' }, // Automatically inferred when 'options' is defined
    },
    propertyB: {
      options: ['Another Item One', 'Another Item Two', 'Another Item Three'],
    },
  },
};
 
export default meta;
type Story = StoryObj<typeof YourComponent>;
 
const someFunction = (valuePropertyA, valuePropertyB) => {
  // Do some logic here
};
 
export const ExampleStory: Story = {
  render: (args) => {
    const { propertyA, propertyB } = args;
    //👇 Assigns the function result to a variable
    const someFunctionResult = someFunction(propertyA, propertyB);
 
    return <YourComponent {...args} someProperty={someFunctionResult} />;
  },
  args: {
    propertyA: 'Item One',
    propertyB: 'Another Item One',
  },
};
Unless you need the flexibility of a function, an easier way to map primitives to complex values before rendering is to define a mapping; additionally, you can specify control.labels to configure custom labels for your checkbox, radio, or select input.

Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from './icons';
 
const arrows = { ArrowUp, ArrowDown, ArrowLeft, ArrowRight };
 
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    arrow: {
      options: Object.keys(arrows), // An array of serializable values
      mapping: arrows, // Maps serializable option values to complex arg values
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          ArrowUp: 'Up',
          ArrowDown: 'Down',
          ArrowLeft: 'Left',
          ArrowRight: 'Right',
        },
      },
    },
  },
};
 
export default meta;
Note that both mapping and control.labels don't have to be exhaustive. If the currently selected option is not listed, it's used verbatim.

Creating and editing stories from controls

The Controls addon allows you to create or edit stories, directly from the Controls panel.

Create a new story

Open the Controls panel for a story and adjust the value of a control. Then save those changes as a new story.


If you're working on a component that does not yet have any stories, you can click the ➕ button in the sidebar to search for your component and have a basic story created for you.


Edit a story

You can also update a control's value, then save the changes to the story. The story file's code will be updated for you.


Disable creating and editing of stories

If you don't want to allow the creation or editing of stories from the Controls panel, you can disable this feature by setting the disableSaveFromUI parameter to true in the parameters.controls parameter in your .storybook/preview.js|ts file.

Configuration

The Controls addon can be configured in two ways:

Individual controls can be configured via control annotations.
The addon's appearance can be configured via parameters.
Annotation

As shown above, you can configure individual controls with the “control" annotation in the argTypes field of either a component or story. Below is a condensed example and table featuring all available controls.

Data Type	Control	Description
boolean	boolean	Provides a toggle for switching between possible states.
argTypes: { active: { control: 'boolean' }}
number	number	Provides a numeric input to include the range of all possible values.
argTypes: { even: { control: { type: 'number', min:1, max:30, step: 2 } }}
range	Provides a range slider component to include all possible values.
argTypes: { odd: { control: { type: 'range', min: 1, max: 30, step: 3 } }}
object	object	Provides a JSON-based editor component to handle the object's values.
Also allows edition in raw mode.
argTypes: { user: { control: 'object' }}
array	object	Provides a JSON-based editor component to handle the array's values.
Also allows edition in raw mode.
argTypes: { odd: { control: 'object' }}
file	Provides a file input component that returns an array of URLs.
Can be further customized to accept specific file types.
argTypes: { avatar: { control: { type: 'file', accept: '.png' } }}
enum	radio	Provides a set of radio buttons based on the available options.
argTypes: { contact: { control: 'radio', options: ['email', 'phone', 'mail'] }}
inline-radio	Provides a set of inlined radio buttons based on the available options.
argTypes: { contact: { control: 'inline-radio', options: ['email', 'phone', 'mail'] }}
check	Provides a set of checkbox components for selecting multiple options.
argTypes: { contact: { control: 'check', options: ['email', 'phone', 'mail'] }}
inline-check	Provides a set of inlined checkbox components for selecting multiple options.
argTypes: { contact: { control: 'inline-check', options: ['email', 'phone', 'mail'] }}
select	Provides a drop-down list component to handle single value selection. argTypes: { age: { control: 'select', options: [20, 30, 40, 50] }}
multi-select	Provides a drop-down list that allows multiple selected values. argTypes: { countries: { control: 'multi-select', options: ['USA', 'Canada', 'Mexico'] }}
string	text	Provides a freeform text input.
argTypes: { label: { control: 'text' }}
color	Provides a color picker component to handle color values.
Can be additionally configured to include a set of color presets.
argTypes: { color: { control: { type: 'color', presetColors: ['red', 'green']} }}
date	Provides a datepicker component to handle date selection. argTypes: { startDate: { control: 'date' }}
💡
The date control will convert the date into a UNIX timestamp when the value changes. It's a known limitation that will be fixed in a future release. If you need to represent the actual date, you'll need to update the story's implementation and convert the value into a date object.
Gizmo.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { Gizmo } from './Gizmo';
 
const meta: Meta<typeof Gizmo> = {
  component: Gizmo,
  argTypes: {
    canRotate: {
      control: 'boolean',
    },
    width: {
      control: { type: 'number', min: 400, max: 1200, step: 50 },
    },
    height: {
      control: { type: 'range', min: 200, max: 1500, step: 50 },
    },
    rawData: {
      control: 'object',
    },
    coordinates: {
      control: 'object',
    },
    texture: {
      control: {
        type: 'file',
        accept: '.png',
      },
    },
    position: {
      control: 'radio',
      options: ['left', 'right', 'center'],
    },
    rotationAxis: {
      control: 'check',
      options: ['x', 'y', 'z'],
    },
    scaling: {
      control: 'select',
      options: [10, 50, 75, 100, 200],
    },
    label: {
      control: 'text',
    },
    meshColors: {
      control: {
        type: 'color',
        presetColors: ['#ff0000', '#00ff00', '#0000ff'],
      },
    },
    revisionDate: {
      control: 'date',
    },
  },
};
 
export default meta;
💡
Numeric data types will default to a number control unless additional configuration is provided.
Parameters

Controls supports the following configuration parameters, either globally or on a per-story basis:

Show full documentation for each property

Since Controls is built on the same engine as Storybook Docs, it can also show property documentation alongside your controls using the expanded parameter (defaults to false). This means you embed a complete Controls doc block in the controls panel. The description and default value rendering can be customized like the doc block.

To enable expanded mode globally, add the following to .storybook/preview.js|ts:

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
};
 
export default preview;
Here's what the resulting UI looks like:

Controls addon expanded

Specify initial preset color swatches

For color controls, you can specify an array of presetColors, either on the control in argTypes, or as a parameter under the controls namespace:

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    controls: {
      presetColors: [{ color: '#ff4785', title: 'Coral' }, 'rgba(0, 159, 183, 1)', '#fe4a49'],
    },
  },
};
 
export default preview;
Color presets can be defined as an object with color and title or a simple CSS color string. These will then be available as swatches in the color picker. When you hover over the color swatch, you'll be able to see its title. It will default to the nearest CSS color name if none is specified.

Filtering controls

In specific cases, you may be required to display only a limited number of controls in the controls panel or all except a particular set.

To make this possible, you can use optional include and exclude configuration fields in the controls parameter, which you can define as an array of strings or a regular expression.

Consider the following story snippets:

YourComponent.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { YourComponent } from './YourComponent';
 
const meta: Meta<typeof YourComponent> = {
  component: YourComponent,
};
 
export default meta;
type Story = StoryObj<typeof YourComponent>;
 
export const ArrayInclude: Story = {
  parameters: {
    controls: { include: ['foo', 'bar'] },
  },
};
 
export const RegexInclude: Story = {
  parameters: {
    controls: { include: /^hello*/ },
  },
};
 
export const ArrayExclude: Story = {
  parameters: {
    controls: { exclude: ['foo', 'bar'] },
  },
};
 
export const RegexExclude: Story = {
  parameters: {
    controls: { exclude: /^hello*/ },
  },
};
Sorting controls

By default, controls are unsorted and use whatever order the args data is processed in (none). Additionally, you can sort them alphabetically by the arg's name (alpha) or with the required args first (requiredFirst).

Consider the following snippet to force required args first:

YourComponent.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { YourComponent } from './YourComponent';
 
const meta: Meta<typeof YourComponent> = {
  component: YourComponent,
  parameters: { controls: { sort: 'requiredFirst' } },
};
 
export default meta;
Disable controls for specific properties

Aside from the features already documented here, Controls can also be disabled for individual properties.

Suppose you want to turn off Controls for a property called foo in a component's story. The following example illustrates how:

YourComponent.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { YourComponent } from './YourComponent';
 
const meta: Meta<typeof YourComponent> = {
  component: YourComponent,
  argTypes: {
    // foo is the property we want to remove from the UI
    foo: {
      table: {
        disable: true,
      },
    },
  },
};
 
export default meta;
Resulting in the following change in Storybook UI:


The previous example also removed the prop documentation from the table. In some cases, this is fine. However, sometimes you might want to render the prop documentation without a control. The following example illustrates how:

YourComponent.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { YourComponent } from './YourComponent';
 
const meta: Meta<typeof YourComponent> = {
  component: YourComponent,
  argTypes: {
    // foo is the property we want to remove from the UI
    foo: {
      control: false,
    },
  },
};
 
export default meta;
💡
As with other Storybook properties, such as decorators, you can apply the same pattern at a story level for more granular cases.
Conditional controls

In some cases, it's useful to be able to conditionally exclude a control based on the value of another control. Controls supports basic versions of these use cases with the if, which can take a simple query object to determine whether to include the control.

Consider a collection of "advanced" settings only visible when the user toggles an "advanced" toggle.

Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    label: { control: 'text' }, // Always shows the control
    advanced: { control: 'boolean' },
    // Only enabled if advanced is true
    margin: { control: 'number', if: { arg: 'advanced' } },
    padding: { control: 'number', if: { arg: 'advanced' } },
    cornerRadius: { control: 'number', if: { arg: 'advanced' } },
  },
};
 
export default meta;
Or consider a constraint where if the user sets one control value, it doesn't make sense for the user to be able to set another value.

Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    // Button can be passed a label or an image, not both
    label: {
      control: 'text',
      if: { arg: 'image', truthy: false },
    },
    image: {
      control: { type: 'select', options: ['foo.jpg', 'bar.jpg'] },
      if: { arg: 'label', truthy: false },
    },
  },
};
 
export default meta;
The query object must contain either an arg or global target:

field	type	meaning
arg	string	The ID of the arg to test.
global	string	The ID of the global to test.
It may also contain at most one of the following operators:

operator	type	meaning
truthy	boolean	Is the target value truthy?
exists	boolean	Is the target value defined?
eq	any	Is the target value equal to the provided value?
neq	any	Is the target value NOT equal to the provided value?
If no operator is provided, that is equivalent to { truthy: true }.

Troubleshooting

The controls are not updating the story within the auto-generated documentation

If you turned off inline rendering for your stories via the inline configuration option, you would run into a situation where the associated controls are not updating the story within the documentation page. This is a known limitation of the current implementation and will be addressed in a future release.

API

Parameters

This addon contributes the following parameters to Storybook, under the controls namespace:

disable

Type: boolean

Disable this addon's behavior. If you wish to disable this addon for the entire Storybook, you should do so when registering addon-essentials. See the essential addon's docs for more information.

This parameter is most useful to allow overriding at more specific levels. For example, if this parameter is set to true at the project level, it could then be re-enabled by setting it to false at the meta (component) or story level.

exclude

Type: string[] | RegExp

Specifies which properties to exclude from the Controls addon panel. Any properties whose names match the regex or are part of the array will be left out. See usage example, above.

expanded

Type: boolean

Show the full documentation for each property in the Controls addon panel, including the description and default value. See usage example, above.

include

Type: string[] | RegExp

Specifies which properties to include in the Controls addon panel. Any properties whose names don't match the regex or are not part of the array will be left out. See usage example, above.

presetColors

Type: (string | { color: string; title?: string })[]

Specify preset color swatches for the color picker control. The color value may be any valid CSS color. See usage example, above.

sort

Type: 'none' | 'alpha' | 'requiredFirst'

Default: 'none'

Specifies how the controls are sorted.

none: Unsorted, displayed in the same order the arg types are processed in
alpha: Sorted alphabetically, by the arg type's name
requiredFirst: Same as alpha, with any required arg types displayed first
disableSaveFromUI

Type: boolean

Default: false

Disable the ability to create or edit stories from the Controls panel.
</document_content>
</document>