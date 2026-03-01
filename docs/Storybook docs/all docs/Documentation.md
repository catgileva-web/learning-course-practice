# Storybook Documentation

<documents>
  <document index="1">
    <source>getting-started.md</source>
    <document_content>
# Get started with Storybook

Welcome to Storybook's documentation ✦ Learn how to get started with Storybook in your project. Then, explore Storybook's main concepts and discover additional resources to help you grow and maintain your Storybook.

## What is Storybook?

Storybook is a frontend workshop for building UI components and pages in isolation. It helps you develop and share hard-to-reach states and edge cases without needing to run your whole app. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.

## Install Storybook

Storybook is a standalone tool that runs alongside your app. It's a zero-config environment that works with any modern frontend framework. You can install Storybook into an existing project or create a new one from scratch.

```bash
npm create storybook@latest
```

### Framework Support

- **Next.js**
- **React** with Vite
- **React** with Webpack
- **React Native Web** with Vite (in browser)
- **React Native** on device
- **Preact** with Vite
- **Vue** with Vite
- **Vue** with Webpack
- **Angular**
- **SvelteKit**
- **Svelte** with Vite
- **Svelte** with Webpack
- **Web Components** with Vite
- **Web Components** with Webpack

Want to know more about installing Storybook? Check out the installation guide.
    </document_content>
</document>
  
  <document index="2">
    <source>main-concepts.md</source>
    <document_content>
## Main concepts

Storybook is a powerful tool that can help you with many aspects of your UI development workflow. Here are some of the main concepts to get you started.

### Stories

A story captures the rendered state of a UI component. Each component can have multiple stories, where each story describes a different component state.

### Docs

Storybook can analyze your components to automatically create documentation alongside your stories. This automatic documentation makes it easier for you to create UI library usage guidelines, design system sites, and more.

### Testing

Stories are a pragmatic starting point for your UI testing strategy. You already write stories as a natural part of UI development, so testing those stories is a low-effort way to prevent UI bugs over time.

### Sharing

Publishing your Storybook allows you to share your work with others. You can also embed your stories in places like Notion or Figma.
    </document_content>
</document>
  
  <document index="3">
    <source>additional-resources.md</source>
    <document_content>
## Additional resources

Once you've learned the basics, explore these other ways to get the most out of Storybook.

- Essential addons
- Addon catalog
- Recipes
- Builders
- How to contribute
- Migrate to 8.0
- FAQ

## Need some help?

Join a discussion on GitHub

## Latest product updates

See changelog
    </document_content>
</document>
  
  <document index="4">
    <source>why-storybook.md</source>
    <document_content>
## Why Storybook?

### The problem

The web's universality is pushing more complexity into the frontend. It began with responsive web design, which turned every user interface from one to 10, 100, 1000 different user interfaces. Over time, additional requirements piled on like devices, browsers, accessibility, performance, and async states.

Component-driven tools like React, Vue 3, and Angular help break down complex UIs into simple components but they're not silver bullets. As frontends grow, the number of components swells. Mature projects can contain hundreds of components that yield thousands of discrete variations.

To complicate matters further, those UIs are painful to debug because they're entangled in business logic, interactive states, and app context.

The breadth of modern frontends overwhelm existing workflows. Developers must consider countless UI variations, yet aren't equipped to develop or organize them all. You end up in a situation where UIs are tougher to build, less satisfying to work on, and brittle.

### The solution

#### Build UIs in isolation

Every piece of UI is now a component. The superpower of components is that you don't need to spin up the whole app just to see how they render. You can render a specific variation in isolation by passing in props, mocking data, or faking events.

Storybook is packaged as a small, development-only, workshop that lives alongside your app. It provides an isolated iframe to render components without interference from app business logic and context. That helps you focus development on each variation of a component, even the hard-to-reach edge cases.

#### Capture UI variations as "stories"

When developing a component variation in isolation, save it as a story. Stories are a declarative syntax for supplying props and mock data to simulate component variations. Each component can have multiple stories. Each story allows you to demonstrate a specific variation of that component to verify appearance and behavior.

You write stories for granular UI component variation and then use those stories in development, testing, and documentation.

```typescript
// Histogram.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { Histogram } from './Histogram';
 
const meta: Meta<typeof Histogram> = {
  component: Histogram,
};
 
export default meta;
type Story = StoryObj<typeof Histogram>;
 
export const Default: Story = {
  args: {
    dataType: 'latency',
    showHistogramLabels: true,
    histogramAccentColor: '#1EA7FD',
    label: 'Latency distribution',
  },
};
```

Storybook keeps track of every story

Storybook is an interactive directory of your UI components and their stories. In the past, you'd have to spin up the app, navigate to a page, and contort the UI into the right state. This is a huge waste of time and bogs down frontend development. With Storybook, you can skip all those steps and jump straight to working on a UI component in a specific state.

### Benefits

When you write stories for components, you get a bunch of additional benefits for free.

- 📝 **Develop UIs that are more durable** - Isolate components and pages and track their use cases as stories. Verify hard-to-reach edge cases of UI. Use addons to mock everything a component needs—context, API requests, device features, etc.

- ✅ **Test UIs with less effort and no flakes** - Stories are a pragmatic, reproducible way of tracking UI states. Use them to spot-test the UI during development. Storybook offers built-in workflows for automated Component, Accessibility, and Visual testing. Or use stories as test cases by importing them into other JavaScript testing tools.

- 📚 **Document UI for your team to reuse** - Storybook is the single source of truth for your UI. Stories index all your components and their various states, making it easy for your team to find and reuse existing UI patterns. Storybook also auto-generates documentation from those stories.

- 📤 **Share how the UI actually works** - Stories show how UIs actually work, not just a picture of how they're supposed to work. That keeps everyone aligned on what's currently in production. Publish Storybook to get sign-off from teammates. Or embed them in wikis, Markdown, and Figma to streamline collaboration.

- 🚦 **Automate UI workflows** - Storybook is compatible with your continuous integration workflow. Add it as a CI step to automate user interface testing, review implementation with teammates, and get signoff from stakeholders.

### Write stories once, reuse everywhere

Storybook is powered by Component Story Format, an open standard based on JavaScript ES6 modules. This enables stories to interoperate between development, testing, and design tools. Each story is exported as a JavaScript function enabling you to reuse it with other tools. No vendor lock-in.

Reuse stories with Jest or Vitest and Testing Library to verify interactions. Put them in Chromatic for visual testing. Audit story accessibility with Axe. Or test user flows with Playwright and Cypress. Reuse unlocks more workflows at no extra cost.

Storybook is purpose-built to help you develop complex UIs faster with greater durability and lower maintenance. It's used by 100s of leading companies and thousands of developers.
    </document_content>
</document>
  
  <document index="5">
    <source>install-storybook.md</source>
    <document_content>
## Install Storybook

Use the Storybook CLI to install it in a single command. Run this inside your project's root directory:

```bash
npm create storybook@latest
```

### Install a specific version

Storybook will look into your project's dependencies during its install process and provide you with the best configuration available.

The command above will make the following changes to your local environment:
* 📦 Install the required dependencies.
* 🛠 Setup the necessary scripts to run and build Storybook.
* 🛠 Add the default Storybook configuration.
* 📝 Add some boilerplate stories to get you started.
* 📡 Set up telemetry to help us improve Storybook. Read more about it here.

### Watch a video tutorial

### Run the Setup Wizard

If all goes well, you should see a setup wizard that will help you get started with Storybook introducing you to the main concepts and features, including how the UI is organized, how to write your first story, and how to test your components' response to various inputs utilizing controls.

If you skipped the wizard, you can always run it again by adding the `?path=/onboarding` query parameter to the URL of your Storybook instance, provided that the example stories are still available.

## Start Storybook

Storybook comes with a built-in development server featuring everything you need for project development. Depending on your system configuration, running the `storybook` command will start the local development server, output the address for you, and automatically open the address in a new browser tab where a welcome screen greets you.

```bash
npm run storybook
```

ℹ️
Storybook collects completely anonymous data to help us improve user experience. Participation is optional, and you may opt-out if you'd not like to share any information.

There are some noteworthy items here:
* A collection of useful links for more in-depth configuration and customization options you have at your disposal.
* A second set of links for you to expand your Storybook knowledge and get involved with the ever-growing Storybook community.
* A few example stories to get you started.

### Troubleshooting

Now that you have successfully installed Storybook and understood how it works, let's continue where you left off in the setup wizard and delve deeper into writing stories.
    </document_content>
</document>
  
  <document index="6">
    <source>react-vite.md</source>
    <document_content>
## Storybook for React & Vite

Storybook for React & Vite is a framework that makes it easy to develop and test UI components in isolation for React applications built with Vite. It includes:
* 🏎️ Pre-bundled for performance
* 🪄 Zero config
* 💫 and more!

### Requirements
* React ≥ 16.8
* Vite ≥ 4.0
* Storybook ≥ 8.0

### Getting started

#### In a project without Storybook
Follow the prompts after running this command in your React project's root directory:

```bash
npm create storybook@latest
```

More on getting started with Storybook.

#### In a project with Storybook
This framework is designed to work with Storybook 7+. If you're not already using v7, upgrade with this command:

```bash
npx storybook@latest upgrade
```

#### Automatic migration
When running the `upgrade` command above, you should get a prompt asking you to migrate to `@storybook/react-vite`, which should handle everything for you. In case that auto-migration does not work for your project, refer to the manual migration below.

#### Manual migration
First, install the framework:

```bash
npm install --save-dev @storybook/react-vite
```

Then, update your `.storybook/main.js|ts` to change the framework property:

```typescript
// .storybook/main.ts
import { StorybookConfig } from '@storybook/react-vite'; 

const config: StorybookConfig = {  
  // ...  
  // framework: '@storybook/react-webpack5', 👈 Remove this  
  framework: '@storybook/react-vite', // 👈 Add this
}; 

export default config;
```

### Run the Setup Wizard
If all goes well, you should see a setup wizard that will help you get started with Storybook introducing you to the main concepts and features, including how the UI is organized, how to write your first story, and how to test your components' response to various inputs utilizing controls.

If you skipped the wizard, you can always run it again by adding the `?path=/onboarding` query parameter to the URL of your Storybook instance, provided that the example stories are still available.

### API

#### Options
You can pass an options object for additional configuration if needed:

```typescript
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite'; 

const config: StorybookConfig = {  
  framework: {    
    name: '@storybook/react-vite',    
    options: {      
      // ...    
    },  
  },
}; 

export default config;
```

`builder`
Type: `Record<string, any>`
Configure options for the framework's builder. For this framework, available options can be found in the Vite builder docs.
    </document_content>
</document>
  
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
  
  <document index="8">
    <source>browse-stories.md</source>
    <document_content>
## Browse Stories

Last chapter, we learned that stories correspond with discrete component states. This chapter demonstrates how to use Storybook as a workshop for building components.

### Sidebar and Canvas

A `*.stories.js|ts|svelte` file defines all the stories for a component. Each story has a corresponding sidebar item. When you click on a story, it renders in the Canvas an isolated preview iframe.

Navigate between stories by clicking on them in the sidebar. Try the sidebar search to find a story by name.

Or use keyboard shortcuts. Click on the Storybook's menu to see the list of shortcuts available.

### Toolbar

Storybook ships with time-saving tools built-in. The toolbar contains tools that allow you to adjust how the story renders in the Canvas:

* 🔍 Zooming visually scales the component so you can check the details.
* 🖼 Background changes the rendered background behind your component so you can verify how your component renders in different visual contexts.
* 📐 Grid renders your component on top of a grid layout so you can verify if your component is aligned correctly.
* 📏 Measure toggles a measurement overlay to help you inspect the dimensions of components.
* 🎚️ Outline displays the component's bounding box so you can verify if your component is positioned correctly.
* 📱 Viewport renders the component in a variety of dimensions and orientations. It's ideal for checking the responsiveness of components.

The "Docs" page displays auto-generated documentation for components (inferred from the source code). Usage documentation is helpful when sharing reusable components with your team, for example, in an application.

The toolbar is customizable. You can use globals to quickly toggle themes and languages. Or install Storybook toolbar addons from the community to enable advanced workflows.

### Addons

Addons are plugins that extend Storybook's core functionality. You can find them in the addons panel, a reserved place in the Storybook UI below the Canvas. Each tab shows the generated metadata, logs, or static analysis for the selected story by the addon.

* **Controls** allows you to interact with a component's args (inputs) dynamically. Experiment with alternate configurations of the component to discover edge cases.
* **Actions** help you verify interactions produce the correct outputs via callbacks. For instance, if you view the "Logged In" story of the `Header` component, we can verify that clicking the "Log out" button triggers the `onLogout` callback, which would be provided by the component that made use of the Header.
* **Interactions** provides a helpful user interface for debugging component tests with the `play`function.
* **Visual Tests** lets you pinpoint UI bugs in your local development environment by providing instant feedback directly in Storybook.

Storybook is extensible. Our rich ecosystem of addons helps you test, document, and optimize your stories. You can also create an addon to satisfy your workflow requirements. Read more in the addons section.

In the next chapter, we'll get your components rendering in Storybook so you can use it to supercharge component development.

### Use stories to build UIs

When building apps, one of the biggest challenges is to figure out if a piece of UI already exists in your codebase and how to use it for the new feature you're building.

Storybook catalogues all your components and their use cases. Therefore, you can quickly browse it to find what you're looking for.

Here's what the workflow looks like:

* 🗃 Use the sidebar to find a suitable component
* 👀 Review its stories to pick a variant that suits your needs
* 📝 Copy/paste the story definition into your app code and wire it up to data

You can access the story definition from the stories file or make it available in your published Storybook using the Storysource addon or the Docs addon.
    </document_content>
</document>
  
  <document index="9">
    <source>setup-storybook.md</source>
    <document_content>
## Setup Storybook

Now that you've learned what stories are and how to browse them, let's demo working on one of your components.

Pick a simple component from your project, like a Button, and write a `.stories.js`, `.stories.ts`, or `.stories.svelte` file to go along with it. It might look something like this:

```typescript
// YourComponent.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react'; 
import { YourComponent } from './YourComponent'; 

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof YourComponent> = {  
  component: YourComponent,
}; 

export default meta;
type Story = StoryObj<typeof YourComponent>; 

export const FirstStory: Story = {  
  args: {    
    //👇 The args you need here will depend on your component  
  },
};
```

Go to your Storybook to view the rendered component. It's OK if it looks a bit unusual right now.

Depending on your technology stack, you also might need to configure the Storybook environment further.

### Render component styles

Storybook isn't opinionated about how you generate or load CSS. It renders whatever DOM elements you provide. But sometimes, things won't "look right" out of the box.

You may have to configure your CSS tooling for Storybook's rendering environment. Here are some setup guides for popular tools in the community.

* Tailwind
* Material UI
* Vuetify
* Styled Components
* Emotion
* Sass
* Bootstrap
* Less
* Vanilla-extract

Don't see the tool that you're looking for? Check out the styling and css page for more details.

### Configure Storybook for your stack

Storybook comes with a permissive default configuration. It attempts to customize itself to fit your setup. But it's not foolproof.

Your project may have additional requirements before components can be rendered in isolation. This warrants customizing configuration further. There are three broad categories of configuration you might need.

* Build configuration like Webpack and Babel
* Runtime configuration
* Component context

### Load assets and resources

We recommend serving external resources and assets requested in your components statically with Storybook. It ensures that assets are always available to your stories. Read our documentation to learn how to host static files with Storybook.
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
  
  <document index="15">
    <source>loaders.md</source>
    <document_content>
## Loaders

Loaders are asynchronous functions that load data for a story and its decorators. A story's loaders run before the story renders, and the loaded data injected into the story via its render context.

Loaders can be used to load any asset, lazy load components, or fetch data from a remote API. This feature was designed as a performance optimization to handle large story imports. However, args is the recommended way to manage story data. We're building up an ecosystem of tools and techniques around Args that might not be compatible with loaded data.

They are an advanced feature (i.e., escape hatch), and we only recommend using them if you have a specific need that other means can't fulfill.

### Fetching API data

Stories are isolated component examples that render internal data defined as part of the story or alongside the story as args.

Loaders are helpful when you need to load story data externally (e.g., from a remote API). Consider the following example that fetches a todo item to display in a todo list:

```typescript
// MyComponent.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { TodoItem } from './TodoItem';
 
/* *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const meta: Meta<typeof TodoItem> = {
  component: TodoItem,
  render: (args, { loaded: { todo } }) => <TodoItem {...args} {...todo} />,
};
 
export default meta;
type Story = StoryObj<typeof TodoItem>;
 
export const Primary: Story = {
  loaders: [
    async () => ({
      todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
    }),
  ],
};
```

The response obtained from the remote API call is combined into a `loaded` field on the story context, which is the second argument to a story function. For example, in React, the story's args were spread first to prioritize them over the static data provided by the loader. With other frameworks (e.g., Angular), you can write your stories as you'd usually do.

### Global loaders

We can also set a loader for **all stories** via the `loaders` export of your `.storybook/preview.js` file (this is the file where you configure all stories):

```typescript
// .storybook/preview.ts
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  loaders: [
    async () => ({
      currentUser: await (await fetch('https://jsonplaceholder.typicode.com/users/1')).json(),
    }),
  ],
};
 
export default preview;
```

In this example, we load a "current user" available as `loaded.currentUser` for all stories.

### Loader inheritance

Like parameters, loaders can be defined globally, at the component level, and for a single story (as we've seen).

All loaders, defined at all levels that apply to a story, run before the story renders in Storybook's canvas.

* All loaders run in parallel
* All results are the `loaded` field in the story context
* If there are keys that overlap, "later" loaders take precedence (from lowest to highest):
   * Global loaders, in the order they are defined
   * Component loaders, in the order they are defined
   * Story loaders, in the order they are defined
    </document_content>
</document>
  
  <document index="16">
    <source>tags.md</source>
    <document_content>
## Tags

Tags allow you to control which stories are included in your Storybook, enabling many different uses of the same total set of stories. For example, you can use tags to include/exclude tests from the test runner. For more complex use cases, see the recipes section, below.

### Built-in tags

The following tags are available in every Storybook project:

| Tag | Applied by default? | Description |
|-----|---------------------|-------------|
| autodocs | No | Stories tagged with autodocs are included in the docs page. If a CSF file does not contain at least one story tagged with autodocs, that component will not generate a docs page. |
| dev | Yes | Stories tagged with dev are rendered in Storybook's sidebar. |
| test | Yes | Stories tagged with test are included in test runner or test addon runs. |

The dev and test tags are automatically, implicitly applied to every story in your Storybook project.

### Applying tags

A tag can be any static (i.e. not created dynamically) string, either the built-in tags or custom tags of your own design. To apply tags to a story, assign an array of strings to the tags property. Tags may be applied at the project, component (meta), or story levels.

For example, to apply the autodocs tag to all stories in your project, you can use .storybook/preview.js|ts:

```typescript
// .storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import type { Preview } from '@storybook/your-renderer';
 
const preview: Preview = {
  // ...rest of preview
  /*
   * All stories in your project will have these tags applied:
   * - autodocs
   * - dev (implicit default)
   * - test (implicit default)
   */
  tags: ['autodocs'],
};
 
export default preview;
```

Within a component stories file, you apply tags like so:

```typescript
// Button.stories.ts
// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  /*
   * All stories in this file will have these tags applied:
   * - autodocs
   * - dev (implicit default, inherited from preview)
   * - test (implicit default, inherited from preview)
   */
  tags: ['autodocs'],
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const ExperimentalFeatureStory: Story = {
  /*
   * This particular story will have these tags applied:
   * - experimental
   * - autodocs (inherited from meta)
   * - dev (inherited from meta)
   * - test (inherited from meta)
   */
  tags: ['experimental'],
};
```

### Removing tags

To remove a tag from a story, prefix it with !. For example:

```typescript
// Button.stories.ts
// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  // 👇 Applies to all stories in this file
  tags: ['stable'],
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
```

Tags can be removed for all stories in your project (in .storybook/preview.js|ts), all stories for a component (in the CSF file meta), or a single story (as above).

### Filtering by custom tags

Custom tags enable a flexible layer of categorization on top of Storybook's sidebar hierarchy. In the example above, we created an experimental tag to indicate that a story is not yet stable.

You can create custom tags for any purpose. Sample uses might include:

- Status, such as experimental, new, stable, or deprecated
- User persona, such as admin, user, or developer
- Component/code ownership

Custom tags are useful because they show up as filters in Storybook's sidebar. Selecting a tag in the filter causes the sidebar to only show stories with that tag. Selecting multiple tags shows stories that contain any of those tags.

Filtering by tags is a powerful way to focus on a subset of stories, especially in large Storybook projects. You can also narrow your stories by tag and then search within that subset.

### Recipes

#### Docs-only stories

It can sometimes be helpful to provide example stories for documentation purposes, but you want to keep the sidebar navigation more focused on stories useful for development. By enabling the autodocs tag and removing the dev tag, a story becomes docs-only: appearing only in the docs page and not in Storybook's sidebar.

```typescript
// Button.stories.ts
// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  /*
   * All stories in this file will:
   * - Be included in the docs page
   * - Not appear in Storybook's sidebar
   */
  tags: ['autodocs', '!dev'],
};
export default meta;
```

#### Combo stories, still tested individually

For a component with many variants, like a Button, a grid of those variants all together can be a helpful way to visualize it. But you may wish to test the variants individually. You can accomplish this with tags like so:

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;
 
type Story = StoryObj<typeof Button>;
 
export const Variant1: Story = {
  // 👇 This story will not appear in Storybook's sidebar or docs page
  tags: ['!dev', '!autodocs'],
  args: { variant: 1 },
};
 
export const Variant2: Story = {
  // 👇 This story will not appear in Storybook's sidebar or docs page
  tags: ['!dev', '!autodocs'],
  args: { variant: 2 },
};
 
export const Combo: Story = {
  // 👇 This story should not be tested, but will appear in the sidebar and docs page
  tags: ['!test'],
  render: () => (
    <>
      <Button variant={1} />
      <Button variant={2} />
    </>
  ),
};
```
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
  
  <document index="18">
    <source>mocking-network-requests.md</source>
    <document_content>
## Mocking network requests

For components that make network requests (e.g. fetching data from a REST or GraphQL API), you can mock those requests using a tool like Mock Service Worker (MSW). MSW is an API mocking library, which relies on service workers to capture network requests and provides mocked data in response.

The MSW addon brings this functionality into Storybook, allowing you to mock API requests in your stories. Below is an overview of how to set up and use the addon.

### Set up the MSW addon

First, if necessary, run this command to install MSW and the MSW addon:

```bash
npm install msw msw-storybook-addon --save-dev
```

If you're not already using MSW, generate the service worker file necessary for MSW to work:

```bash
npx msw init public/
```

Then ensure the staticDirs property in your Storybook configuration will include the generated service worker file (in /public, by default):

```typescript
// .storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public', '../static'],
};
 
export default config;
```

Finally, initialize the addon and apply it to all stories with a project-level loader:

```typescript
// .storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue, etc.)
import { Preview } from '@storybook/your-renderer';
 
import { initialize, mswLoader } from 'msw-storybook-addon';
 
/*
 * Initializes MSW
 * See https://github.com/mswjs/msw-storybook-addon#configuring-msw
 * to learn how to customize it
 */
initialize();
 
const preview: Preview = {
  // ... rest of preview configuration
  loaders: [mswLoader], // 👈 Add the MSW loader to all stories
};
 
export default preview;
```

### Mocking REST requests

If your component fetches data from a REST API, you can use MSW to mock those requests in Storybook. As an example, consider this document screen component:

```typescript
// YourPage.tsx
import React, { useState, useEffect } from 'react';
 
import { PageLayout } from './PageLayout';
import { DocumentHeader } from './DocumentHeader';
import { DocumentList } from './DocumentList';
 
// Example hook to retrieve data from an external endpoint
function useFetchData() {
  const [status, setStatus] = useState<string>('idle');
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    setStatus('loading');
    fetch('https://your-restful-endpoint')
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => {
        setStatus('success');
        setData(data);
      })
      .catch(() => {
        setStatus('error');
      });
  }, []);
 
  return {
    status,
    data,
  };
}
 
export function DocumentScreen() {
  const { status, data } = useFetchData();
 
  const { user, document, subdocuments } = data;
 
  if (status === 'loading') {
    return <p>Loading...</p>;
  }
  if (status === 'error') {
    return <p>There was an error fetching the data!</p>;
  }
  return (
    <PageLayout user={user}>
      <DocumentHeader document={document} />
      <DocumentList documents={subdocuments} />
    </PageLayout>
  );
}
```

ℹ️
This example uses the fetch API to make network requests. If you're using a different library (e.g. axios), you can apply the same principles to mock network requests in Storybook.

With the MSW addon, we can write stories that use MSW to mock the REST requests. Here's an example of two stories for the document screen component: one that fetches data successfully and another that fails.

```typescript
// YourPage.stories.ts|tsx
// Replace your-framework with the name of your framework (e.g. nextjs, vue3-vite)
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { http, HttpResponse, delay } from 'msw';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: DocumentScreen,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
// 👇 The mocked data that will be used in the story
const TestData = {
  user: {
    userID: 1,
    name: 'Someone',
  },
  document: {
    id: 1,
    userID: 1,
    title: 'Something',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'approved',
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
  ],
};
 
export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://your-restful-endpoint/', () => {
          return HttpResponse.json(TestData);
        }),
      ],
    },
  },
};
 
export const MockedError: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get('https://your-restful-endpoint', async () => {
          await delay(800);
          return new HttpResponse(null, {
            status: 403,
          });
        }),
      ],
    },
  },
};
```

### Mocking GraphQL requests

GraphQL is another common way to fetch data in components. You can use MSW to mock GraphQL requests in Storybook. Here's an example of a document screen component that fetches data from a GraphQL API:

```typescript
// YourPage.tsx
import { useQuery, gql } from '@apollo/client';
 
import { PageLayout } from './PageLayout';
import { DocumentHeader } from './DocumentHeader';
import { DocumentList } from './DocumentList';
 
const AllInfoQuery = gql`
  query AllInfo {
    user {
      userID
      name
    }
    document {
      id
      userID
      title
      brief
      status
    }
    subdocuments {
      id
      userID
      title
      content
      status
    }
  }
`;
 
interface Data {
  allInfo: {
    user: {
      userID: number;
      name: string;
      opening_crawl: boolean;
    };
    document: {
      id: number;
      userID: number;
      title: string;
      brief: string;
      status: string;
    };
    subdocuments: {
      id: number;
      userID: number;
      title: string;
      content: string;
      status: string;
    };
  };
}
 
function useFetchInfo() {
  const { loading, error, data } = useQuery<Data>(AllInfoQuery);
 
  return { loading, error, data };
}
 
export function DocumentScreen() {
  const { loading, error, data } = useFetchInfo();
 
  if (loading) {
    return <p>Loading...</p>;
  }
 
  if (error) {
    return <p>There was an error fetching the data!</p>;
  }
 
  return (
    <PageLayout user={data.user}>
      <DocumentHeader document={data.document} />
      <DocumentList documents={data.subdocuments} />
    </PageLayout>
  );
}
```

ℹ️
This example uses GraphQL with Apollo Client to make network requests. If you're using a different library (e.g. URQL or React Query), you can apply the same principles to mock network requests in Storybook.

The MSW addon allows you to write stories that use MSW to mock the GraphQL requests. Here's an example demonstrating two stories for the document screen component. The first story fetches data successfully, while the second story fails.

```typescript
// YourPage.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { graphql, HttpResponse, delay } from 'msw';
 
import { DocumentScreen } from './YourPage';
 
const mockedClient = new ApolloClient({
  uri: 'https://your-graphql-endpoint',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});
 
//👇The mocked data that will be used in the story
const TestData = {
  user: {
    userID: 1,
    name: 'Someone',
  },
  document: {
    id: 1,
    userID: 1,
    title: 'Something',
    brief: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    status: 'approved',
  },
  subdocuments: [
    {
      id: 1,
      userID: 1,
      title: 'Something',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'approved',
    },
  ],
};
const meta: Meta<typeof DocumentScreen> = {
  component: DocumentScreen,
  decorators: [
    (Story) => (
      <ApolloProvider client={mockedClient}>
        <Story />
      </ApolloProvider>
    ),
  ],
};
 
export default meta;
type Story = StoryObj<typeof SampleComponent>;
 
export const MockedSuccess: Story = {
  parameters: {
    msw: {
      handlers: [
        graphql.query('AllInfoQuery', () => {
          return HttpResponse.json({
            data: {
              allInfo: {
                ...TestData,
              },
            },
          });
        }),
      ],
    },
  },
};
 
export const MockedError: Story = {
  parameters: {
    msw: {
      handlers: [
        graphql.query('AllInfoQuery', async () => {
          await delay(800);
          return HttpResponse.json({
            errors: [
              {
                message: 'Access denied',
              },
            ],
          });
        }),
      ],
    },
  },
};
```

### Configuring MSW for stories

In the examples above, note how each story is configured with parameters.msw to define the request handlers for the mock server. Because it uses parameters in this way, it can also be configured at the component or even project level, allowing you to share the same mock server configuration across multiple stories.
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
  
  <document index="20">
    <source>mocking-modules.md</source>
    <document_content>
## Mocking modules

Components can also depend on modules that are imported into the component file. These can be from external packages or internal to your project. When rendering those components in Storybook or testing them, you may want to mock those modules to control their behavior.

ℹ️
If you prefer learning by example, we created a comprehensive demo project using the mocking strategies described here.

There are two primary approaches to mocking modules in Storybook. They both involve creating a mock file to replace the original module. The difference between the two approaches is how you import the mock file into your component.

For either approach, relative imports of the mocked module are not supported.

### Mock files

To mock a module, create a file with the same name and in the same directory as the module you want to mock. For example, to mock a module named `session`, create a file next to it named `session.mock.js|ts`, with a few characteristics:

* It must import the original module using a relative import.
   * Using a subpath or alias import would result in it importing itself.
* It should re-export all exports from the original module.
* It should use the `fn` utility to mock any necessary functionality from the original module.
* It should use the `mockName` method to ensure the name is preserved when minified
* It should not introduce side effects that could affect other tests or components. Mock files should be isolated and only affect the module they are mocking.

Here's an example of a mock file for a module named `session`:

```typescript
// lib/session.mock.ts
import { fn } from '@storybook/test';
import * as actual from './session';

export * from './session';
export const getUserFromSession = fn(actual.getUserFromSession).mockName('getUserFromSession');
```

When you use the `fn` utility to mock a module, you create full Vitest mock functions. See below for examples of how you can use a mocked module in your stories.

### Mock files for external modules

You can't directly mock an external module like `uuid` or `node:fs`. Instead, you must wrap it in your own module, which you can mock like any other internal one. For example, with `uuid`, you could do the following:

```typescript
// lib/uuid.ts
import { v4 } from 'uuid';
export const uuidv4 = v4;
```

And create a mock for the wrapper:

```typescript
// lib/uuid.mock.ts
import { fn } from '@storybook/test';
import * as actual from './uuid';
export const uuidv4 = fn(actual.uuidv4).mockName('uuidv4');
```

### Subpath imports

The recommended method for mocking modules is to use subpath imports, a feature of Node packages that is supported by both Vite and Webpack.

To configure subpath imports, you define the `imports` property in your project's `package.json` file. This property maps the subpath to the actual file path. The example below configures subpath imports for four internal modules:

```json
// package.json
{
  "imports": {
    "#api": {
      // storybook condition applies to Storybook
      "storybook": "./api.mock.ts",
      "default": "./api.ts",
    },
    "#app/actions": {
      "storybook": "./app/actions.mock.ts",
      "default": "./app/actions.ts",
    },
    "#lib/session": {
      "storybook": "./lib/session.mock.ts",
      "default": "./lib/session.ts",
    },
    "#lib/db": {
      // test condition applies to test environments *and* Storybook
      "test": "./lib/db.mock.ts",
      "default": "./lib/db.ts",
    },
    "#*": ["./*", "./*.ts", "./*.tsx"],
  },
}
```

There are three aspects to this configuration worth noting:

First, **each subpath must begin with **`#`, to differentiate it from a regular module path. The `#*` entry is a catch-all that maps all subpaths to the root directory.

Second, the order of the keys is important. The `default` key should come last.

Third, note the `storybook`, `test`, and `default` keys in each module's entry. The `storybook` value is used to import the mock file when loaded in Storybook, while the `default` value is used to import the original module when loaded in your project. The `test` condition is also used within Storybook, which allows you to use the same configuration in Storybook and your other tests.

With the package configuration in place, you can then update your component file to use the subpath import:

```typescript
// AuthButton.ts
// ➖ Remove this line
// import { getUserFromSession } from '../../lib/session';
// ➕ Add this line
import { getUserFromSession } from '#lib/session';
// ... rest of the file
```

ℹ️
Subpath imports will only be correctly resolved and typed when the `moduleResolution` property is set to `'Bundler'`, `'NodeNext'`, or `'Node16'` in your TypeScript configuration.

If you are currently using `'node'`, that is intended for projects using a Node.js version older than v10. Projects written with modern code likely do not need to use `'node'`.

Storybook recommends the TSConfig Cheat Sheet for guidance on setting up your TypeScript configuration.

### Builder aliases

If your project is unable to use subpath imports, you can configure your Storybook builder to alias the module to the mock file. This will instruct the builder to replace the module with the mock file when bundling your Storybook stories.

```typescript
// .storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';

const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve?.alias,
        // 👇 External module
        lodash: require.resolve('./lodash.mock'),
        // 👇 Internal modules
        '@/api': path.resolve(__dirname, './api.mock.ts'),
        '@/app/actions': path.resolve(__dirname, './app/actions.mock.ts'),
        '@/lib/session': path.resolve(__dirname, './lib/session.mock.ts'),
        '@/lib/db': path.resolve(__dirname, './lib/db.mock.ts'),
      };
    }
    
    return config;
  },
};

export default config;
```

### Using mocked modules in stories

When you use the `fn` utility to mock a module, you create full Vitest mock functions which have many useful methods. For example, you can use the `mockReturnValue` method to set a return value for the mocked function or `mockImplementation` to define a custom implementation.

Here, we define `beforeEach` on a story (which will run before the story is rendered) to set a mocked return value for the `getUserFromSession` function used by the Page component:

```typescript
// Page.stories.ts
// Replace your-renderer with the name of your renderer (e.g. react, vue3)
import type { Meta, StoryObj } from '@storybook/your-renderer';

// 👇 Must include the `.mock` portion of filename to have mocks typed correctly
import { getUserFromSession } from '#api/session.mock';

import { Page } from './Page';

const meta: Meta<typeof Page> = {
  component: Page,
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Default: Story = {
  async beforeEach() {
    // 👇 Set the return value for the getUserFromSession function
    getUserFromSession.mockReturnValue({ id: '1', name: 'Alice' });
  },
};
```

ℹ️
If you are writing your stories in TypeScript, you must import your mock modules using the full mocked file name to have the functions correctly typed in your stories. You do **not** need to do this in your component files. That's what the subpath import or builder alias is for.

### Spying on mocked modules

The `fn` utility also spies on the original module's functions, which you can use to assert their behavior in your tests. For example, you can use component tests to verify that a function was called with specific arguments.

For example, this story checks that the `saveNote` function was called when the user clicks the save button:

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

### Setting up and cleaning up

Before the story renders, you can use the asynchronous `beforeEach` function to perform any setup you need (e.g., configure the mock behavior). This function can be defined at the story, component (which will run for all stories in the file), or project (defined in `.storybook/preview.js|ts`, which will run for all stories in the project).

You can also return a cleanup function from `beforeEach` which will be called after your story unmounts. This is useful for tasks like unsubscribing observers, etc.

ℹ️
It is *not* necessary to restore `fn()` mocks with the cleanup function, as Storybook will already do that automatically before rendering a story. See the `parameters.test.restoreMocks` API for more information.

Here's an example of using the `mockdate` package to mock the `Date` and reset it when the story unmounts.

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
    </document_content>
</document>
  
  <document index="21">
    <source>building-pages.md</source>
    <document_content>
## Building pages with Storybook

Storybook helps you build any component, from small "atomic" components to composed pages. But as you move up the component hierarchy toward the page level, you deal with more complexity.

There are many ways to build pages in Storybook. Here are common patterns and solutions.

- Pure presentational pages.
- Connected components (e.g., network requests, context, browser environment).

### Pure presentational pages

Teams at the BBC, The Guardian, and the Storybook maintainers themselves build pure presentational pages. If you take this approach, you don't need to do anything special to render your pages in Storybook.

It's straightforward to write components to be fully presentational up to the screen level. That makes it easy to show in Storybook. The idea is that you do all the messy "connected" logic in a single wrapper component in your app outside of Storybook. You can see an example of this approach in the Data chapter of the Intro to Storybook tutorial.

The benefits:

- Easy to write stories once components are in this form.
- All the data for the story is encoded in the args of the story, which works well with other parts of Storybook's tooling (e.g. controls).

The downsides:

- Your existing app may not be structured in this way, and it may be difficult to change it.
- Fetching data in one place means that you need to drill it down to the components that use it. This can be natural in a page that composes one big GraphQL query (for instance), but other data fetching approaches may make this less appropriate.
- It's less flexible if you want to load data incrementally in different places on the screen.

### Args composition for presentational screens

When you are building screens in this way, it is typical that the inputs of a composite component are a combination of the inputs of the various sub-components it renders. For instance, if your screen renders a page layout (containing details of the current user), a header (describing the document you are looking at), and a list (of the subdocuments), the inputs of the screen may consist of the user, document and subdocuments.

```typescript
// YourPage.ts|tsx
import PageLayout from './PageLayout';
import Document from './Document';
import SubDocuments from './SubDocuments';
import DocumentHeader from './DocumentHeader';
import DocumentList from './DocumentList';
 
export interface DocumentScreenProps {
  user?: {};
  document?: Document;
  subdocuments?: SubDocuments[];
}
 
export function DocumentScreen({ user, document, subdocuments }: DocumentScreenProps) {
  return (
    <PageLayout user={user}>
      <DocumentHeader document={document} />
      <DocumentList documents={subdocuments} />
    </PageLayout>
  );
}
```

In such cases, it is natural to use args composition to build the stories for the page based on the stories of the sub-components:

```typescript
// YourPage.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { DocumentScreen } from './YourPage';
 
// 👇 Imports the required stories
import * as PageLayout from './PageLayout.stories';
import * as DocumentHeader from './DocumentHeader.stories';
import * as DocumentList from './DocumentList.stories';
 
const meta: Meta<typeof DocumentScreen> = {
  component: DocumentScreen,
};
 
export default meta;
type Story = StoryObj<typeof DocumentScreen>;
 
export const Simple: Story = {
  args: {
    user: PageLayout.Simple.args.user,
    document: DocumentHeader.Simple.args.document,
    subdocuments: DocumentList.Simple.args.documents,
  },
};
```

This approach is beneficial when the various subcomponents export a complex list of different stories. You can pick and choose to build realistic scenarios for your screen-level stories without repeating yourself. Your story maintenance burden is minimal by reusing the data and taking a Don't-Repeat-Yourself(DRY) philosophy.

### Mocking connected components

Connected components are components that depend on external data or services. For example, a full page component is often a connected component. When you render a connected component in Storybook, you need to mock the data or modules that the component depends on. There are various layers in which you can do that.

#### Mocking imports

Components can depend on modules that are imported into the component file. These can be from external packages or internal to your project. When rendering those components in Storybook or testing them, you may want to mock those modules to control their behavior.

#### Mocking API Services

For components that make network requests (e.g., fetching data from a REST or GraphQL API), you can mock those requests in your stories.

#### Mocking providers

Components can receive data or configuration from context providers. For example, a styled component might access its theme from a ThemeProvider or Redux uses React context to provide components access to app data. You can mock a provider and the value it's providing and wrap your component with it in your stories.

### Avoiding mocking dependencies

It's possible to avoid mocking the dependencies of connected "container" components entirely by passing them around via props or React context. However, it requires a strict split of the container and presentational component logic. For example, if you have a component responsible for data fetching logic and rendering DOM, it will need to be mocked as previously described.

It's common to import and embed container components amongst presentational components. However, as we discovered earlier, we'll likely have to mock their dependencies or the imports to render them within Storybook.

Not only can this quickly grow to become a tedious task, but it's also challenging to mock container components that use local states. So, instead of importing containers directly, a solution to this problem is to create a React context that provides the container components. It allows you to freely embed container components as usual, at any level in the component hierarchy without worrying about subsequently mocking their dependencies; since we can swap out the containers themselves with their mocked presentational counterpart.

We recommend dividing context containers up over specific pages or views in your app. For example, if you had a ProfilePage component, you might set up a file structure as follows:

```
ProfilePage.js
ProfilePage.stories.js
ProfilePageContainer.js
ProfilePageContext.js
```

💡
It's also often helpful to set up a "global" container context (perhaps named GlobalContainerContext) for container components that may be rendered on every page of your app and add them to the top level of your application. While it's possible to place every container within this global context, it should only provide globally required containers.

Let's look at an example implementation of this approach.

First, create a React context, and name it ProfilePageContext. It does nothing more than export a React context:

```javascript
// ProfilePageContext.js|jsx
import { createContext } from 'react';
 
const ProfilePageContext = createContext();
 
export default ProfilePageContext;
```

ProfilePage is our presentational component. It will use the useContext hook to retrieve the container components from ProfilePageContext:

```javascript
// ProfilePage.js|jsx
import { useContext } from 'react';
 
import ProfilePageContext from './ProfilePageContext';
 
export const ProfilePage = ({ name, userId }) => {
  const { UserPostsContainer, UserFriendsContainer } = useContext(ProfilePageContext);
 
  return (
    <div>
      <h1>{name}</h1>
      <UserPostsContainer userId={userId} />
      <UserFriendsContainer userId={userId} />
    </div>
  );
};
```

#### Mocking containers in Storybook

In the context of Storybook, instead of providing container components through context, we'll instead provide their mocked counterparts. In most cases, the mocked versions of these components can often be borrowed directly from their associated stories.

```javascript
// ProfilePage.stories.js|jsx
import React from 'react';
 
import { ProfilePage } from './ProfilePage';
import { UserPosts } from './UserPosts';
 
//👇 Imports a specific story from a story file
import { Normal as UserFriendsNormal } from './UserFriends.stories';
 
export default {
  component: ProfilePage,
};
 
const ProfilePageProps = {
  name: 'Jimi Hendrix',
  userId: '1',
};
 
const context = {
  //👇 We can access the `userId` prop here if required:
  UserPostsContainer({ userId }) {
    return <UserPosts {...UserPostsProps} />;
  },
  // Most of the time we can simply pass in a story.
  // In this case we're passing in the `normal` story export
  // from the `UserFriends` component stories.
  UserFriendsContainer: UserFriendsNormal,
};
 
export const Normal = {
  render: () => (
    <ProfilePageContext.Provider value={context}>
      <ProfilePage {...ProfilePageProps} />
    </ProfilePageContext.Provider>
  ),
};
```

ℹ️
If the same context applies to all ProfilePage stories, we can use a decorator.

#### Providing containers to your application

Now, in the context of your application, you'll need to provide ProfilePage with all of the container components it requires by wrapping it with ProfilePageContext.Provider:

For example, in Next.js, this would be your pages/profile.js component.

```javascript
// pages/profile.js|jsx
import React from 'react';
 
import ProfilePageContext from './ProfilePageContext';
import { ProfilePageContainer } from './ProfilePageContainer';
import { UserPostsContainer } from './UserPostsContainer';
import { UserFriendsContainer } from './UserFriendsContainer';
 
//👇 Ensure that your context value remains referentially equal between each render.
const context = {
  UserPostsContainer,
  UserFriendsContainer,
};
 
export const AppProfilePage = () => {
  return (
    <ProfilePageContext.Provider value={context}>
      <ProfilePageContainer />
    </ProfilePageContext.Provider>
  );
};
```

#### Mocking global containers in Storybook

If you've set up GlobalContainerContext, you'll need to set up a decorator within Storybook's preview.js to provide context to all stories. For example:

```typescript
// .storybook/preview.ts
import React from 'react';
 
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
import { normal as NavigationNormal } from '../components/Navigation.stories';
 
import GlobalContainerContext from '../components/lib/GlobalContainerContext';
 
const context = {
  NavigationContainer: NavigationNormal,
};
 
const AppDecorator = (storyFn) => {
  return (
    <GlobalContainerContext.Provider value={context}>{storyFn()}</GlobalContainerContext.Provider>
  );
};
 
const preview: Preview = {
  decorators: [AppDecorator],
};
 
export default preview;
```
    </document_content>
</document>
  
  <document index="22">
    <source>stories-for-multiple-components.md</source>
    <document_content>
## Stories for multiple components

It's useful to write stories that render two or more components at once if those components are designed to work together. For example, ButtonGroup, List, and Page components.

### Subcomponents

When the components you're documenting have a parent-child relationship, you can use the subcomponents property to document them together. This is especially useful when the child component is not meant to be used on its own, but only as part of the parent component.

Here's an example with List and ListItem components:

```typescript
// List.stories.ts|tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
 
import { List } from './List';
import { ListItem } from './ListItem';
 
const meta: Meta<typeof List> = {
  component: List,
  subcomponents: { ListItem }, //👈 Adds the ListItem component as a subcomponent
};
export default meta;
 
type Story = StoryObj<typeof List>;
 
export const Empty: Story = {};
 
export const OneItem: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem />
    </List>
  ),
};
```

Note that by adding a subcomponents property to the default export, we get an extra panel on the ArgTypes and Controls tables, listing the props of ListItem.

Subcomponents are only intended for documentation purposes and have some limitations:

- The argTypes of subcomponents are inferred (for the renderers that support that feature) and cannot be manually defined or overridden.
- The table for each documented subcomponent does not include controls to change the value of the props, because controls always apply to the main component's args.

Let's talk about some techniques you can use to mitigate the above, which are especially useful in more complicated situations.

### Reusing story definitions

We can also reduce repetition in our stories by reusing story definitions. Here, we can reuse the ListItem stories' args in the story for List:

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

By rendering the Unchecked story with its args, we are able to reuse the input data from the ListItem stories in the List.

However, we still aren't using args to control the ListItem stories, which means we cannot change them with controls and we cannot reuse them in other, more complex component stories.

### Using children as an arg

One way we improve that situation is by pulling the rendered subcomponent out into a children arg:

```typescript
// List.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { List } from './List';
 
//👇 Instead of importing ListItem, we import the stories
import { Unchecked } from './ListItem.stories';
 
const meta: Meta<typeof List> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'List',
  component: List,
};
 
export default meta;
type Story = StoryObj<typeof List>;
 
export const OneItem: Story = {
  args: {
    children: <Unchecked {...Unchecked.args} />,
  },
};
```

Now that children is an arg, we can potentially reuse it in another story.

However, there are some caveats when using this approach that you should be aware of.

The children arg, just like all args, needs to be JSON serializable. To avoid errors with your Storybook, you should:

- Avoid using empty values
- Use mapping if you want to adjust the value with controls
- Use caution with components that include third party libraries

ℹ️
We're currently working on improving the overall experience for the children arg and allow you to edit children arg in a control and allow you to use other types of components in the near future. But for now you need to factor in this caveat when you're implementing your stories.

### Creating a Template Component

Another option that is more "data"-based is to create a special "story-generating" template component:

```typescript
// List.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { List } from './List';
import { ListItem } from './ListItem';
 
//👇 Imports a specific story from ListItem stories
import { Unchecked } from './ListItem.stories';
 
const meta: Meta<typeof List> = {
  /* 👇 The title prop is optional.
   * Seehttps://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'List',
  component: List,
};
 
export default meta;
type Story = StoryObj<typeof List>;
 
//👇 The ListTemplate construct will be spread to the existing stories.
const ListTemplate: Story = {
  render: ({ items, ...args }) => {
    return (
      <List>
        {items.map((item) => (
          <ListItem {...item} />
        ))}
      </List>
    );
  },
};
 
export const Empty = {
  ...ListTemplate,
  args: {
    items: [],
  },
};
 
export const OneItem = {
  ...ListTemplate,
  args: {
    items: [{ ...Unchecked.args }],
  },
};
```

This approach is a little more complex to setup, but it means you can more easily reuse the args to each story in a composite component. It also means that you can alter the args to the component with the Controls addon.
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

  <document index="24">
    <source>testing.md</source>
    <document_content>
# How to test UIs with Storybook

Storybook provides a clean-room environment for testing components in isolation. Stories make it easy to explore a component in all its variations, no matter how complex.

That means stories are a pragmatic starting point for your UI testing strategy. You already write stories as a natural part of UI development, testing those stories is a low-effort way to prevent UI bugs over time.

The simplest testing method is manual "spot checking". You run Storybook locally, then eyeball every story to verify its appearance and behavior. Publish your Storybook online to share reproductions and get teammates involved.

To test a component in isolation, you often have to mock data, dependencies, or even network requests. Check out our guide on mocking in Storybook for more info.

Storybook also comes with tools, a test runner, and handy integrations with the larger JavaScript ecosystem to expand your UI test coverage. These docs detail how you can use Storybook for UI testing.

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
  
  <document index="26">
    <source>visual-tests.md</source>
    <document_content>
# Visual tests

Visual tests catch bugs in UI appearance. They work by taking screenshots of every story and comparing them to previous versions to identify visual changes. This is ideal for verifying layout, color, size, contrast, and any other visual aspect of your UI.

Storybook supports cross-browser visual testing natively using Chromatic, a cloud service made by the Storybook team. When you enable visual testing, every story is automatically turned into a test. This gives you instant feedback on UI bugs directly in Storybook.

## Install the addon

Add visual tests to your project by installing @chromatic-com/storybook, the official addon by Storybook maintainers:

```bash
npx storybook@latest add @chromatic-com/storybook
```

ℹ️ Storybook 7.6 or higher is required. Read the migration guide to upgrade your project.

## Enable visual tests

When you start Storybook, you'll see a new addon panel for Visual Tests where you can run tests and view results.

To enable visual testing, sign up for Chromatic and create a project. This will give you access to a fleet of cloud browsers.

Select a project from your project list to finish setup. If you're setting up the addon for the first time, the configuration files and necessary project identifiers will be added for you automatically.

## Configure

The addon includes configuration options covering most use cases by default. You can also fine-tune the addon configuration to match your project's requirements via the `./chromatic.config.json` file. Below are the available options and examples of how to use them.

| Option | Description |
|--------|-------------|
| projectId | Automatically configured. Sets the value for the project identifier<br>`"projectId": "Project:64cbcde96f99841e8b007d75"` |
| buildScriptName | Optional. Defines the custom Storybook build script<br>`"buildScriptName": "deploy-storybook"` |
| debug | Optional. Output verbose debugging information to the console.<br>`"debug": true` |
| zip | Optional. Recommended for large projects. Configures the addon to deploy your Storybook to Chromatic as a zip file.<br>`"zip": true` |

```json
// ./chromatic.config.json
{
  "buildScriptName": "deploy-storybook",
  "debug": true,
  "projectId": "Project:64cbcde96f99841e8b007d75",
  "zip": true
}
```

## Run visual tests

Click the ▶️ Play button in the Storybook sidebar to run visual tests. This will send your stories to the cloud to take snapshots and detect visual changes.

## Review changes

If there are visual changes in your stories, they will be 🟡 highlighted in the sidebar. Click the story and go to the Visual Tests addon panel to see which pixels changed.

If the changes are intentional, ✅ accept them as baselines locally. If the changes aren't intentional, fix the story and rerun the tests using the ▶️ Play button.

When you finish accepting changes as baselines in the addon, you're ready to push the code to your remote repository. This will sync baselines to the cloud for anyone who checks out your branch.

## Automate with CI

The addon is designed to be used in tandem with CI. We recommend using the addon to check for changes during development and then running visual tests in CI as you get ready to merge.

Changes you accept as baselines in the addon will get auto-accepted as baselines in CI so you don't have to review twice.

1. Add a step to your CI workflow to run Chromatic.
   - GitHub Actions
   - GitLab Pipelines
   - Bitbucket Pipelines
   - CircleCI
   - Travis CI
   - Jenkins
   - Azure Pipelines
   - Custom CI provider
2. Configure your CI to include environment variables to authenticate with Chromatic (project token).

## PR checks

Once you successfully set up Chromatic in CI, your pull/merge requests will be badged with a UI Tests check. The badge notifies you of test errors or UI changes that need to be verified by your team. Make the check required in your Git provider to prevent accidental UI bugs from being merged.

## What's the difference between visual tests and snapshot tests?

Snapshot tests compare the rendered markup of every story against known baselines. This means the test compares blobs of HTML and not what the user actually sees. Which in turn, can lead to an increase in false positives as code changes don't always yield visual changes in the component.

Visual tests compare the rendered pixels of every story against known baselines. Because you're testing the same thing your users actually experience, your tests will be richer and easier to maintain.

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
  
  <document index="27">
    <source>accessibility-tests.md</source>
    <document_content>
# Accessibility tests

Accessibility is the practice of making websites inclusive to all. That means supporting requirements such as: keyboard navigation, screen reader support, touch-friendly, usable color contrast, reduced motion, and zoom support.

Accessibility tests audit the rendered DOM against a set of heuristics based on WCAG rules and other industry-accepted best practices. They act as the first line of QA to catch blatant accessibility violations.

## Accessibility checks with a11y addon

Storybook provides an official a11y addon. Powered by Deque's axe-core, which automatically catches up to 57% of WCAG issues.

## Set up the a11y addon

If you want to check accessibility for your stories using the addon, you'll need to add it to your Storybook. You can do this by running the following command:

```bash
npx storybook add @storybook/addon-a11y
```

ℹ️ The CLI's add command automates the addon's installation and setup. To install it manually, see our documentation on how to install addons.

Start your Storybook, and you will see some noticeable differences in the UI. A new toolbar icon and the accessibility panel where you can inspect the results of the tests.

## How it works

Storybook's a11y addon runs Axe on the selected story. Allowing you to catch and fix accessibility issues during development. For example, if you're working on a button component and included the following set of stories:

```typescript
// Button.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
// This is an accessible story
export const Accessible: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};
 
// This is not
export const Inaccessible: Story = {
  args: {
    ...Accessible.args,
    backgroundColor: 'red',
  },
};
```

Cycling through both stories, you will see that the Inaccessible story contains some issues that need fixing. Opening the violations tab in the accessibility panel provides a clear description of the accessibility issue and guidelines for solving it.

## Configure

Out of the box, Storybook's accessibility addon includes a set of accessibility rules that cover most issues. You can also fine-tune the addon configuration or override Axe's ruleset to best suit your needs.

### Global a11y configuration

If you need to dismiss an accessibility rule or modify its settings across all stories, you can add the following to your storybook/preview.js|ts:

```typescript
// .storybook/preview.ts
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    a11y: {
      // Optional selector to inspect
      element: 'body',
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'image-alt',
            enabled: false,
          },
        ],
      },
      /*
       * Axe's options parameter
       * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
       * to learn more about the available options.
       */
      options: {},
    },
  },
  globals: {
    a11y: {
      // Optional flag to prevent the automatic check
      manual: true,
    },
  },
};
 
export default preview;
```

### Component-level a11y configuration

You can also customize your own set of rules for all stories of a component. Update the story file's default export and add parameters and globals with the required configuration:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  parameters: {
    a11y: {
      // Optional selector to inspect
      element: 'body',
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'image-alt',
            enabled: false,
          },
        ],
      },
      /*
       * Axe's options parameter
       * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
       * to learn more about the available options.
       */
      options: {},
    },
  },
  globals: {
    a11y: {
      manual: true,
    },
  },
};
 
export default meta;
```

### Story-level a11y configuration

Customize the a11y ruleset at the story level by updating your story to include a new parameter:

```typescript
// MyComponent.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const ExampleStory: Story = {
  parameters: {
    a11y: {
      element: 'body',
      config: {
        rules: [
          {
            // The autocomplete rule will not run based on the CSS selector provided
            id: 'autocomplete-valid',
            selector: '*:not([autocomplete="nope"])',
          },
          {
            // Setting the enabled option to false will disable checks for this particular rule on all stories.
            id: 'image-alt',
            enabled: false,
          },
        ],
      },
      /*
       * Axe's options parameter
       * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
       * to learn more about the available options.
       */
      options: {},
    },
  },
  globals: {
    a11y: {
      // Optional flag to prevent the automatic check
      manual: true,
    },
  },
};
```

### Turn off automated a11y tests

Disable automated accessibility testing for stories or components by adding the following globals to your story's export or component's default export:

```typescript
// MyComponent.stories.ts|tsx
import type { Meta, StoryObj } from '@storybook/react';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const NonA11yStory: Story = {
  globals: {
    a11y: {
      // This option disables all automatic a11y checks on this story
      manual: true,
    },
  },
};
```

## Test addon integration

The accessibility addon provides seamless integration with the Test addon, enabling you to run automated accessibility tests for all your tests in the background while you run component tests. If there are any violations, the test will fail, and you will see the results in the sidebar without any additional setup.

### Manual upgrade

If you enabled the addon and you're manually upgrading to Storybook 8.5 or later, you'll need to adjust your existing configuration (i.e., .storybook/vitest.setup.ts) to enable the integration as follows:

```typescript
// .storybook/vitest.setup.ts
import { beforeAll } from 'vitest';
 
import { setProjectAnnotations } from '@storybook/react';
 
// Import the a11y addon annotations
import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';
 
// Optionally import your own annotations
import * as projectAnnotations from './preview';
 
const project = setProjectAnnotations([
  // Add the a11y addon annotations
  a11yAddonAnnotations,
  projectAnnotations,
]);
 
beforeAll(project.beforeAll);
```

## Configure accessibility tests with the test addon

You can configure accessibility tests with the parameters.a11y.test parameter, which determines the behavior of accessibility tests for a story and accepts the following values:

| Value | Description |
|-------|-------------|
| 'off' | Do not run accessibility tests (you can still manually verify via the addon panel) |
| 'todo' | Run accessibility tests; violations return a warning in the Storybook UI and a summary count in CLI/CI |
| 'error' | Run accessibility tests; violations return a failing test in the Storybook UI and CLI/CI |

Like other parameters, you can define it at the project level in .storybook/preview.js|ts, the component level in the default export of the story file, or the individual story level. For example, to fail on accessibility tests for all stories in a file except one:

```typescript
// Button.stories.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Meta, StoryObj } from '@storybook/your-renderer';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    a11y: { test: 'error' },
  },
};
export default meta;
 
type Story = StoryObj<typeof Button>;
 
// 👇 This story will use the 'error' value and fail on accessibility violations
export const Primary: Story = {
  args: { primary: true },
};
 
// 👇 This story will not fail on accessibility violations
//    (but will still run the tests and show warnings)
export const NoA11yFail: Story = {
  parameters: {
    a11y: { test: 'todo' },
  },
};
```

💡 Why is the value called "todo" instead of "warn"? This value is intended to serve as a literal TODO in your codebase. It can be used to mark stories that you know have accessibility issues but are not ready to fix yet. This way, you can keep track of them and address them later.

The 'off' value should only be used for stories that do not need to be tested for accessibility, such as one used to demonstrate an antipattern in a component's usage.

You can also disable individual rules when they are not applicable to your use case.

## Recommended workflow

You can use configuration to progressively work toward a more accessible UI by combining multiple test behaviors. For example, you can start with 'error' to fail on accessibility violations, then switch to 'todo' to mark components that need fixing, and finally remove the todos once all stories pass accessibility tests:

1. Update your project configuration to fail on accessibility violations by setting parameters.a11y.test to 'error'. This ensures that all new stories are tested to meet accessibility standards.

```typescript
// .storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-renderer';
 
const preview: Preview = {
  // ...
  parameters: {
    // 👇 Fail all accessibility tests when violations are found
    a11y: { test: 'error' },
  },
};
 
export default preview;
```

2. You will likely find that many components have accessibility failures (and maybe feel a bit overwhelmed!).
   
3. Take note of the components with accessibility issues and temporarily reduce their failures to warnings by applying the 'todo' parameter value. This keeps accessibility issues visible while not blocking development. This is also a good time to commit your work as a baseline for future improvements.

```typescript
// DataTable.stories.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Meta } from '@storybook/your-renderer';
 
import { DataTable } from './DataTable';
 
const meta: Meta<typeof DataTable> = {
  component: DataTable,
  parameters: {
    // 👇 This component's accessibility tests will not fail
    //    Instead, they display warnings in the Storybook UI
    a11y: { test: 'todo' },
  },
};
export default meta;
```

4. Pick a good starting point from the components you just marked 'todo' (we recommend something like Button, for its simplicity and likelihood of being used within other components). Fix the issues in that component using the suggestions in the addon panel to ensure it passes accessibility tests, then remove the parameter.

```typescript
// Button.stories.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Meta } from '@storybook/your-renderer';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    // 👇 Remove this once all stories pass accessibility tests
    // a11y: { test: 'todo' },
  },
};
export default meta;
```

5. Pick another component and repeat the process until you've covered all your components and you're an accessibility hero!

## Automate accessibility tests with test runner

The most accurate way to check accessibility is manually on real devices. However, you can use automated tools to catch common accessibility issues. For example, Axe, on average, catches upwards to 57% of WCAG issues automatically.

These tools work by auditing the rendered DOM against heuristics based on WCAG rules and other industry-accepted best practices. You can then integrate these tools into your test automation pipeline using the Storybook test runner and axe-playwright.

### Setup

To enable accessibility testing with the test runner, you will need to take additional steps to set it up properly. We recommend you go through the test runner documentation before proceeding with the rest of the required configuration.

Run the following command to install the required dependencies.

```bash
npm install axe-playwright --save-dev
```

Add a new configuration file inside your Storybook directory with the following inside:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y } from 'axe-playwright';
 
/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page) {
    await checkA11y(page, 'body', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};
 
export default config;
```

💡 preVisit and postVisit are convenient hooks that allow you to extend the test runner's default configuration. Read more about them here.

When you execute the test runner (for example, with yarn test-storybook), it will run the accessibility audit and any component tests you might have configured for each component story.

It starts checking for issues by traversing the DOM tree starting from the story's root element and generates a detailed report based on the issues it encountered.

### A11y config with the test runner

The test runner provides helper methods, allowing access to the story's information. You can use them to extend the test runner's configuration and provide additional options you may have for a specific story. For example:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
 
import { injectAxe, checkA11y, configureAxe } from 'axe-playwright';
 
/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);
 
    // Apply story-level a11y rules
    await configureAxe(page, {
      rules: storyContext.parameters?.a11y?.config?.rules,
    });
 
    const element = storyContext.parameters?.a11y?.element ?? 'body';
    await checkA11y(page, element, {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};
 
export default config;
```

### Disable a11y tests with the test runner

Additionally, if you have already disabled accessibility tests for any particular story, you can also configure the test runner to avoid testing it as well. For example:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
 
import { injectAxe, checkA11y } from 'axe-playwright';
 
/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);
 
    // Do not run a11y tests on disabled stories.
    if (storyContext.parameters?.a11y?.disable) {
      return;
    }
    await checkA11y(page, 'body', {
      detailedReport: true,
      detailedReportOptions: {
        html: true,
      },
    });
  },
};
 
export default config;
```

## What's the difference between browser-based and linter-based accessibility tests?

Browser-based accessibility tests, like those found in Storybook, evaluate the rendered DOM because that gives you the highest accuracy. Auditing code that hasn't been compiled yet is one step removed from the real thing, so you won't catch everything the user might experience.

## Troubleshooting

### Why are my tests failing in different environments?

If you enabled the experimental test addon (i.e.,@storybook/experimental-addon-test), your tests run in Vitest using your project's configuration with Playwright's Chromium browser. This can lead to inconsistent test results reported in the Storybook UI or CLI. The inconsistency can be due to axe-core reporting different results in different environments, such as browser versions or configurations. If you encounter this issue, we recommend reaching out using the default communication channels (e.g., GitHub discussions, Github issues).

### The addon panel does not show expected violations

Modern React components often use asynchronous techniques like Suspense or React Server Components (RSC) to handle complex data fetching and rendering. These components don't immediately render their final UI state. Storybook doesn't inherently know when an async component has fully rendered. As a result, the a11y checks sometimes run too early, before the component finishes rendering, leading to false negatives (no reported violations even if they exist).

To address this issue, we have introduced a feature flag: developmentModeForBuild. This feature flag allows you to set process.env.NODE_ENV to 'development' in built Storybooks, enabling development-related optimizations that are typically disabled in production builds. One of those development optimizations is React's act utility, which helps ensure that all updates related to a test are processed and applied before making assertions, like a11y checks.

To enable this feature flag, add the following configuration to your .storybook/main.js|ts file:

```typescript
// .storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  features: {
    developmentModeForBuild: true,
  },
};
 
export default config;
```

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
  
  <document index="28">
    <source>snapshot-tests.md</source>
    <document_content>
# Snapshot tests

Snapshot tests compare the rendered markup of every story against known baselines. It's a way to identify markup changes that trigger rendering errors and warnings.

Storybook is a helpful tool for snapshot testing because every story is essentially a test specification. Any time you write or update a story, you get a snapshot test for free.

ℹ️ If you're upgrading to Storybook 8.0 and were using the Storyshots addon for snapshot testing, it was officially deprecated and removed with this release. See the migration guide for more information.

## Automate snapshot tests with the test-runner

Storybook test-runner turns all of your stories into executable tests. Powered by Jest and Playwright. It's a standalone, framework-agnostic utility that runs parallel to your Storybook. It enables you to run multiple testing patterns in a multi-browser environment, including component testing with the play function, DOM snapshot, and accessibility testing.

### Setup

To enable snapshot testing with the test-runner, you'll need to take additional steps to set it up properly. We recommend you go through the test runner documentation before proceeding with the rest of the required configuration to learn more about the available options and APIs.

Add a new configuration file inside your Storybook directory with the following inside:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
 
const config: TestRunnerConfig = {
  async postVisit(page, context) {
    // the #storybook-root element wraps the story. In Storybook 6.x, the selector is #root
    const elementHandler = await page.$('#storybook-root');
    const innerHTML = await elementHandler.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};
 
export default config;
```

💡 The postVisit hook allows you to extend the test runner's default configuration. Read more about them here.

When you execute the test-runner (for example, with yarn test-storybook), it will run through all of your stories and run the snapshot tests, generating a snapshot file for each story in your project located in the __snapshots__ directory.

### Configure

Out of the box, the test-runner provides an inbuilt snapshot testing configuration covering most use cases. You can also fine-tune the configuration to fit your needs via test-storybook --eject or by creating a test-runner-jest.config.js file at the root of your project.

### Override the default snapshot directory

The test-runner uses a specific naming convention and path for the generated snapshot files by default. If you need to customize the snapshot directory, you can define a custom snapshot resolver to specify the directory where the snapshots are stored.

Create a snapshot-resolver.js file to implement a custom snapshot resolver:

```javascript
// ./snapshot-resolver.js
import path from 'path';
 
export default {
  resolveSnapshotPath: (testPath) => {
    const fileName = path.basename(testPath);
    const fileNameWithoutExtension = fileName.replace(/\.[^/.]+$/, '');
    // Defines the file extension for the snapshot file
    const modifiedFileName = `${fileNameWithoutExtension}.snap`;
 
    // Configure Jest to generate snapshot files using the following convention (./src/test/__snapshots__/Button.stories.snap)
    return path.join('./src/test/__snapshots__', modifiedFileName);
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    path.basename(snapshotFilePath, snapshotExtension),
  testPathForConsistencyCheck: 'example',
};
```

Update the test-runner-jest.config.js file and enable the snapshotResolver option to use the custom snapshot resolver:

```javascript
// ./test-runner-jest.config.js
import { getJestConfig } from '@storybook/test-runner';
 
const defaultConfig = getJestConfig();
 
const config = {
  // The default Jest configuration comes from @storybook/test-runner
  ...defaultConfig,
  snapshotResolver: './snapshot-resolver.js',
};
 
export default config;
```

When the test-runner is executed, it will cycle through all of your stories and run the snapshot tests, generating a snapshot file for each story in your project located in the custom directory you specified.

### Customize snapshot serialization

By default, the test-runner uses jest-serializer-html to serialize HTML snapshots. This may cause issues if you use specific CSS-in-JS libraries like Emotion, Angular's ng attributes, or similar libraries that generate hash-based identifiers for CSS classes. If you need to customize the serialization of your snapshots, you can define a custom snapshot serializer to specify how the snapshots are serialized.

Create a snapshot-serializer.js file to implement a custom snapshot serializer:

```javascript
// ./snapshot-serializer.js
// The jest-serializer-html package is available as a dependency of the test-runner
const jestSerializerHtml = require('jest-serializer-html');
 
const DYNAMIC_ID_PATTERN = /"react-aria-\d+(\.\d+)?"/g;
 
module.exports = {
  /*
   * The test-runner calls the serialize function when the test reaches the expect(SomeHTMLElement).toMatchSnapshot().
   * It will replace all dynamic IDs with a static ID so that the snapshot is consistent.
   * For instance, from <label id="react-aria970235672-:rl:" for="react-aria970235672-:rk:">Favorite color</label> to <label id="react-mocked_id" for="react-mocked_id">Favorite color</label>
   */
  serialize(val) {
    const withFixedIds = val.replace(DYNAMIC_ID_PATTERN, 'mocked_id');
    return jestSerializerHtml.print(withFixedIds);
  },
  test(val) {
    return jestSerializerHtml.test(val);
  },
};
```

Update the test-runner-jest.config.js file and enable the snapshotSerializers option to use the custom snapshot resolver:

```javascript
// ./test-runner-jest.config.js
import { getJestConfig } from '@storybook/test-runner';
 
const defaultConfig = getJestConfig();
 
const config = {
  ...defaultConfig,
  snapshotSerializers: [
    // Sets up the custom serializer to preprocess the HTML before it's passed onto the test-runner
    './snapshot-serializer.js',
    ...defaultConfig.snapshotSerializers,
  ],
};
 
export default config;
```

When the test-runner executes your tests, it will introspect the resulting HTML, replacing the dynamically generated attributes with the static ones provided by the regular expression in the custom serializer file before snapshotting the component. This ensures that the snapshots are consistent across different test runs.

## Snapshot tests with Portable Stories

Storybook provides a composeStories utility that helps convert stories from a test file into renderable elements that can be reused in your Node tests with JSDOM. It also allows you to apply other Storybook features that you have enabled your project (e.g., decorators, args) into your tests, enabling you to reuse your stories in your testing environment of choice (e.g., Jest, Vitest), ensuring your tests are always in sync with your stories without having to rewrite them. This is what we refer to as portable stories in Storybook.

⚠️ You must configure your test environment to use portable stories to ensure your stories are composed with all aspects of your Storybook configuration, such as decorators.

### Run tests on a single story

If you need to run tests on a single story, you can use the composeStories function from the appropriate framework to process it and apply any configuration you've defined in your stories (e.g., decorators, args) and combine it with your testing environment to generate a snapshot file. For example, if you're working on a component and you want to test its default state, ensuring the expected DOM structure doesn't change, here's how you could write your test:

```javascript
// test/Button.test.js|ts
import { composeStories } from '@storybook/react';
 
import * as stories from '../stories/Button.stories';
 
const { Primary } = composeStories(stories);
test('Button snapshot', async () => {
  await Primary.run();
  expect(document.body.firstChild).toMatchSnapshot();
});
```

### Execute tests on multiple stories

You can also use the composeStories function to test multiple stories. This is useful when you want to extend your test coverage to generate snapshots for the different states of the components in your project. To do so, you can write your test as follows:

```typescript
// storybook.test.ts
// Replace your-framework with one of the supported Storybook frameworks (react, vue3)
import type { Meta, StoryFn } from '@storybook/your-framework';
 
import path from 'path';
import * as glob from 'glob';
 
import { describe, test, expect } from '@jest/globals';
 
// Replace your-renderer with the renderer you are using (e.g., react, vue3, svelte, etc.)
import { composeStories } from '@storybook/your-renderer';
 
type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};
 
const compose = (entry: StoryFile): ReturnType<typeof composeStories<StoryFile>> => {
  try {
    return composeStories(entry);
  } catch (e) {
    throw new Error(
      `There was an issue composing stories for the module: ${JSON.stringify(entry)}, ${e}`,
    );
  }
};
 
function getAllStoryFiles() {
  // Place the glob you want to match your stories files
  const storyFiles = glob.sync(
    path.join(__dirname, 'stories/**/*.{stories,story}.{js,jsx,mjs,ts,tsx}'),
  );
 
  return storyFiles.map((filePath) => {
    const storyFile = require(filePath);
    const storyDir = path.dirname(filePath);
    const componentName = path.basename(filePath).replace(/\.(stories|story)\.[^/.]+$/, '');
 
    return { filePath, storyFile, storyDir, componentName };
  });
}
 
describe('Stories Snapshots', () => {
  getAllStoryFiles().forEach(({ storyFile, componentName }) => {
    const meta = storyFile.default;
    const title = meta.title || componentName;
 
    describe(title, () => {
      const stories = Object.entries(compose(storyFile)).map(([name, story]) => ({ name, story }));
 
      if (stories.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module.`,
        );
      }
 
      stories.forEach(({ name, story }) => {
        test(name, async () => {
          await story.run();
          // Ensures a consistent snapshot by waiting for the component to render by adding a delay of 1 ms before taking the snapshot.
          await new Promise((resolve) => setTimeout(resolve, 1));
          expect(document.body.firstChild).toMatchSnapshot();
        });
      });
    });
  });
});
```

When your tests are executed in your testing environment, they will generate a single snapshot file with all the stories in your project (i.e.,storybook.test.ts|js.snap). However, if you need, you can extend your test file to generate individual snapshot files for each story in your project with Vitest's toMatchFileSnapshot API or Jest's jest-specific-snapshot package. For example:

```typescript
// storybook.test.ts
// Replace your-framework with one of the supported Storybook frameworks (react, vue3)
import type { Meta, StoryFn } from '@storybook/your-framework';
 
import path from "path";
import * as glob from "glob";
 
//👇 Augment expect with jest-specific-snapshot
import "jest-specific-snapshot";
 
import { describe, test, expect } from "@jest/globals";
 
// Replace your-renderer with the renderer you are using (e.g., react, vue3, svelte, etc.)
import { composeStories } from '@storybook/your-renderer';
 
type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};
 
const compose = (
  entry: StoryFile
): ReturnType<typeof composeStories<StoryFile>> => {
  try {
    return composeStories(entry);
  } catch (e) {
    throw new Error(
      `There was an issue composing stories for the module: ${JSON.stringify(entry)}, ${e}`
    );
  }
};
 
function getAllStoryFiles() {
  // Place the glob you want to match your stories files
  const storyFiles = glob.sync(
    path.join(__dirname, 'stories/**/*.{stories,story}.{js,jsx,mjs,ts,tsx}'),
  );
 
  return storyFiles.map((filePath) => {
    const storyFile = require(filePath);
    const storyDir = path.dirname(filePath);
    const componentName = path
      .basename(filePath)
      .replace(/\.(stories|story)\.[^/.]+$/, "");
 
    return { filePath, storyFile, storyDir, componentName };
  });
}
 
describe("Stories Snapshots", () => {
  getAllStoryFiles().forEach(({ storyFile, componentName }) => {
    const meta = storyFile.default;
    const title = meta.title || componentName;
 
    describe(title, () => {
      const stories = Object.entries(compose(storyFile)).map(
        ([name, story]) => ({ name, story })
      );
 
      if (stories.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module.`
        );
      }
 
      stories.forEach(({ name, story }) => {
        test(name, async () => {
          await story.run();
          // Ensures a consistent snapshot by waiting for the component to render by adding a delay of 1 ms before taking the snapshot.
          await new Promise((resolve) => setTimeout(resolve, 1));
          // Defines the custom snapshot path location and file name
          const customSnapshotPath = `./__snapshots__/${componentName}.test.ts.snap`;
          expect(document.body.firstChild).toMatchSpecificSnapshot(customSnapshotPath);
        });
      });
    });
  });
});
```

## What's the difference between snapshot tests and visual tests?

Visual tests capture images of stories and compare them against image baselines. Snapshot tests take DOM snapshots and compare them against DOM baselines. Visual tests are better suited for verifying appearance. Snapshot tests are useful for smoke testing and ensuring the DOM doesn't change.

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
  
  <document index="29">
    <source>storyshots-migration-guide.md</source>
    <document_content>
# Storyshots migration guide

ℹ️ We're actively integrating community feedback to improve the tooling and documentation for snapshot testing with Storybook. If you're interested in participating in this process and helping us improve it. Please fill out this form to share your feedback.

This guide will teach you how to migrate your snapshot tests from the Storyshots addon to Storybook's test-runner or portable stories. Also, you will be able to understand the differences between them and set up, configure, and run snapshot tests using the available tooling provided by Storybook.

## Migrating tests from Storyshots

### Prerequisites

Before you begin the migration process, ensure that you have:

- A fully functional Storybook configured with one of the supported frameworks running the latest stable version (i.e., 7.6 or higher).
- Familiarity with your current Storybook and its testing setup.

### With the test-runner

Storybook test-runner turns all of your stories into executable tests. Powered by Jest and Playwright. It's a standalone, framework-agnostic utility that runs parallel to your Storybook. It enables you to run multiple testing patterns in a multi-browser environment, including component testing with the play function, DOM snapshot, and accessibility testing.

#### Setup

To get started with the migration process from the Storyshots addon to the test-runner, we recommend that you remove the Storyshots addon and similar packages (i.e., storybook/addon-storyshots-puppeteer ) from your project, including any related configuration files. Then, follow the test-runner's setup instructions to install, configure and run it.

#### Extend your test coverage

The Storyshots addon offered a highly customizable testing solution, allowing users to extend testing coverage in various ways. However, the test-runner provides a similar experience but with a different API. Below, you will find additional examples of using the test-runner to achieve results similar to those you achieved with Storyshots.

#### Enable DOM snapshot testing with the test-runner

To enable DOM snapshot testing with the test-runner, you can extend the test-runner's configuration file and use the available hooks and combine them with Playwright's built-in APIs to generate DOM snapshots for each story in your project. For example:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
 
const config: TestRunnerConfig = {
  async postVisit(page, context) {
    // the #storybook-root element wraps the story. In Storybook 6.x, the selector is #root
    const elementHandler = await page.$('#storybook-root');
    const innerHTML = await elementHandler.innerHTML();
    expect(innerHTML).toMatchSnapshot();
  },
};
 
export default config;
```

💡 If you've set up DOM snapshot tests in your project with the test-runner and enabled the index.json mode via CLI flag, tests are generated in a temporary folder outside your project, and snapshots get stored alongside them. You'll need to extend the test-runner's configuration and provide a custom snapshot resolver to allow a different location for the snapshots. See the Troubleshooting section for more information.

#### Run image snapshot tests with the test-runner

By default, the test-runner provides you with the option to run multiple testing patterns (e.g., DOM snapshot testing, accessibility) with minimal configuration. However, if you want, you can extend it to run visual regression testing alongside your other tests. For example:

```typescript
// .storybook/test-runner.ts
import { TestRunnerConfig, waitForPageReady } from '@storybook/test-runner';
 
import { toMatchImageSnapshot } from 'jest-image-snapshot';
 
const customSnapshotsDir = `${process.cwd()}/__snapshots__`;
 
const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postVisit(page, context) {
    // Waits for the page to be ready before taking a screenshot to ensure consistent results
    await waitForPageReady(page);
 
    // To capture a screenshot for for different browsers, add page.context().browser().browserType().name() to get the browser name to prefix the file name
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
    });
  },
};
export default config;
```

### With Portable Stories

Storybook provides a composeStories utility that helps convert stories from a story file into renderable elements that can be reused in your Node tests with JSDOM. It also allows you to apply other Storybook features that you have enabled in your project (e.g., decorators, args), which allows your component to render correctly. This is what is known as portable stories.

#### Setup

We recommend you turn off your current storyshots tests to start the migration process. To do this, rename the configuration file (i.e., storybook.test.ts|js or similar) to storybook.test.ts|js.old. This will prevent the tests from being detected, as you'll create a new testing configuration file with the same name. By doing this, you'll be able to preserve your existing tests while transitioning to portable stories before removing the Storyshots addon from your project.

#### Import project-level annotations from Storybook

If you need project-level annotations (e.g., decorators, args, styles) enabled in your ./storybook/preview.js|ts included in your tests, adjust your test set up file to import the annotations as follows:

```typescript
// setupTest.ts
import { beforeAll } from 'vitest';
// 👇 If you're using Next.js, import from @storybook/nextjs
//   If you're using Next.js with Vite, import from @storybook/experimental-nextjs-vite
import { setProjectAnnotations } from '@storybook/react';
// 👇 Import the exported annotations, if any, from the addons you're using; otherwise remove this
import * as addonAnnotations from 'my-addon/preview';
import * as previewAnnotations from './.storybook/preview';
 
const annotations = setProjectAnnotations([previewAnnotations, addonAnnotations]);
 
// Run Storybook's beforeAll hook
beforeAll(annotations.beforeAll);
```

#### Configure the testing framework for portable stories

To help you migrate from Storyshots addon to Storybook's portable stories with the composeStories helper API, we've prepared examples to help you get started. Listed below are examples of two of the most popular testing frameworks: Jest and Vitest. We recommend placing the code in a newly created storybook.test.ts|js file and adjusting the code accordingly, depending on your testing framework. Both examples below will:

- Import all story files based on a glob pattern
- Iterate over these files and use composeStories on each of their modules, resulting in a list of renderable components from each story
- Cycle through the stories, render them, and snapshot them

##### Vitest

If you're using Vitest as your testing framework, you can begin migrating your snapshot tests to Storybook's portable stories with the composeStories helper API by referring to the following example. You will need to modify the code in your storybook.test.ts|js file as follows:

```typescript
// @vitest-environment jsdom
 
// Replace your-framework with one of the supported Storybook frameworks (react, vue3)
import type { Meta, StoryFn } from '@storybook/your-framework';
 
import { describe, expect, test } from 'vitest';
 
// Replace your-renderer with the renderer you are using (e.g., react, vue3, svelte, etc.)
import { composeStories } from '@storybook/your-renderer';
 
type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};
 
const compose = (entry: StoryFile): ReturnType<typeof composeStories<StoryFile>> => {
  try {
    return composeStories(entry);
  } catch (e) {
    throw new Error(
      `There was an issue composing stories for the module: ${JSON.stringify(entry)}, ${e}`,
    );
  }
};
 
function getAllStoryFiles() {
  // Place the glob you want to match your story files
  const storyFiles = Object.entries(
    import.meta.glob<StoryFile>('./stories/**/*.(stories|story).@(js|jsx|mjs|ts|tsx)', {
      eager: true,
    }),
  );
 
  return storyFiles.map(([filePath, storyFile]) => {
    const storyDir = path.dirname(filePath);
    const componentName = path.basename(filePath).replace(/\.(stories|story)\.[^/.]+$/, '');
    return { filePath, storyFile, componentName, storyDir };
  });
}
 
// Recreate similar options to Storyshots. Place your configuration below
const options = {
  suite: 'Storybook Tests',
  storyKindRegex: /^.*?DontTest$/,
  storyNameRegex: /UNSET/,
  snapshotsDirName: '__snapshots__',
  snapshotExtension: '.storyshot',
};
 
describe(options.suite, () => {
  getAllStoryFiles().forEach(({ storyFile, componentName, storyDir }) => {
    const meta = storyFile.default;
    const title = meta.title || componentName;
 
    if (options.storyKindRegex.test(title) || meta.parameters?.storyshots?.disable) {
      // Skip component tests if they are disabled
      return;
    }
 
    describe(title, () => {
      const stories = Object.entries(compose(storyFile))
        .map(([name, story]) => ({ name, story }))
        .filter(({ name, story }) => {
          // Implements a filtering mechanism to avoid running stories that are disabled via parameters or that match a specific regex mirroring the default behavior of Storyshots.
          return !options.storyNameRegex?.test(name) && !story.parameters.storyshots?.disable;
        });
 
      if (stories.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module, without a disable parameter, or add parameters.storyshots.disable in the default export of this file.`,
        );
      }
 
      stories.forEach(({ name, story }) => {
        // Instead of not running the test, you can create logic to skip it, flagging it accordingly in the test results.
        const testFn = story.parameters.storyshots?.skip ? test.skip : test;
 
        testFn(name, async () => {
          await story.run();
          // Ensures a consistent snapshot by waiting for the component to render by adding a delay of 1 ms before taking the snapshot.
          await new Promise((resolve) => setTimeout(resolve, 1));
 
          expect(document.body.firstChild).toMatchSnapshot();
        });
      });
    });
  });
});
```

When your test is executed with Vitest, it will generate a single snapshot file (i.e., storybook.test.ts|js.snap) with all the stories in your project. However, if you want to generate individual snapshot files, you can use Vitest's toMatchFileSnapshot API. For example:

```typescript
// storybook.test.js|ts
// ...Code omitted for brevity
 
describe(options.suite, () => {
  // 👇 Add storyDir in the arguments list
  getAllStoryFiles().forEach(({ filePath, storyFile, storyDir }) => {
    // ...Previously existing code
    describe(title, () => {
      // ...Previously existing code
      stories.forEach(({ name, story }) => {
        // ...Previously existing code
        testFn(name, async () => {
          await story.run();
          // Ensures a consistent snapshot by waiting for the component to render by adding a delay of 1 ms before taking the snapshot.
          await new Promise((resolve) => setTimeout(resolve, 1));
 
          // 👇 Define the path to save the snapshot to:
          const snapshotPath = path.join(
            storyDir,
            options.snapshotsDirName,
            `${componentName}${options.snapshotExtension}`
          );
          await expect(document.body.firstChild).toMatchFileSnapshot(snapshotPath);
        });
      });
    });
  });
});
```

##### Jest

If you're using Jest as your testing framework, you can begin migrating your snapshot tests to Storybook's portable stories with the composeStories helper API by referring to the following example. You will need to modify the code in your storybook.test.ts|js file as follows:

```typescript
// storybook.test.ts
import path from 'path';
import * as glob from 'glob';
 
// Replace your-framework with one of the supported Storybook frameworks (react, vue3)
import type { Meta, StoryFn } from '@storybook/your-framework';
 
import { describe, test, expect } from '@jest/globals';
 
// Replace your-renderer with the renderer you are using (e.g., react, vue3, svelte, etc.)
import { composeStories } from '@storybook/your-renderer';
 
type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};
 
const compose = (entry: StoryFile): ReturnType<typeof composeStories<StoryFile>> => {
  try {
    return composeStories(entry);
  } catch (e) {
    throw new Error(
      `There was an issue composing stories for the module: ${JSON.stringify(entry)}, ${e}`,
    );
  }
};
 
function getAllStoryFiles() {
  // Place the glob you want to match your stories files
  const storyFiles = glob.sync(
    path.join(__dirname, 'stories/**/*.{stories,story}.{js,jsx,mjs,ts,tsx}'),
  );
 
  return storyFiles.map((filePath) => {
    const storyFile = require(filePath);
    return { filePath, storyFile };
  });
}
 
// Recreate similar options to Storyshots. Place your configuration below
const options = {
  suite: 'Storybook Tests',
  storyKindRegex: /^.*?DontTest$/,
  storyNameRegex: /UNSET/,
  snapshotsDirName: '__snapshots__',
  snapshotExtension: '.storyshot',
};
 
describe(options.suite, () => {
  getAllStoryFiles().forEach(({ storyFile, componentName }) => {
    const meta = storyFile.default;
    const title = meta.title || componentName;
 
    if (options.storyKindRegex.test(title) || meta.parameters?.storyshots?.disable) {
      // Skip component tests if they are disabled
      return;
    }
 
    describe(title, () => {
      const stories = Object.entries(compose(storyFile))
        .map(([name, story]) => ({ name, story }))
        .filter(({ name, story }) => {
          // Implements a filtering mechanism to avoid running stories that are disabled via parameters or that match a specific regex mirroring the default behavior of Storyshots.
          return !options.storyNameRegex.test(name) && !story.parameters.storyshots?.disable;
        });
 
      if (stories.length <= 0) {
        throw new Error(
          `No stories found for this module: ${title}. Make sure there is at least one valid story for this module, without a disable parameter, or add parameters.storyshots.disable in the default export of this file.`,
        );
      }
 
      stories.forEach(({ name, story }) => {
        // Instead of not running the test, you can create logic to skip it, flagging it accordingly in the test results.
        const testFn = story.parameters.storyshots?.skip ? test.skip : test;
 
        testFn(name, async () => {
          await story.run();
          // Ensures a consistent snapshot by waiting for the component to render by adding a delay of 1 ms before taking the snapshot.
          await new Promise((resolve) => setTimeout(resolve, 1));
          expect(document.body.firstChild).toMatchSnapshot();
        });
      });
    });
  });
});
```

When your test is executed with Jest, it will generate a single snapshot file (i.e., __snapshots__/storybook.test.ts|js.snap) with all the stories in your project. However, if you want to generate individual snapshot files, you can use the jest-specific-snapshot package. For example:

```typescript
// storybook.test.js|ts
// 👇 Augment expect with jest-specific-snapshot
import 'jest-specific-snapshot';
 
// ...Code omitted for brevity
 
describe(options.suite, () => {
  //👇 Add storyDir in the arguments list
  getAllStoryFiles().forEach(({ filePath, storyFile, storyDir }) => {
    // ...Previously existing code
    describe(title, () => {
      // ...Previously existing code
      stories.forEach(({ name, story }) => {
        // ...Previously existing code
        testFn(name, async () => {
          await story.run();
          // Ensures a consistent snapshot by waiting for the component to render by adding a delay of 1 ms before taking the snapshot.
          await new Promise((resolve) => setTimeout(resolve, 1));
 
          //👇 Define the path to save the snapshot to:
          const snapshotPath = path.join(
            storyDir,
            options.snapshotsDirName,
            `${componentName}${options.snapshotExtension}`,
          );
          expect(document.body.firstChild).toMatchSpecificSnapshot(snapshotPath);
        });
      });
    });
  });
});
```

#### Known limitations

If you opt to use portable stories in your tests, you'll have a single test file that can run in a JSDOM environment, rendering and snapshotting all your stories. However, as your project grows, you may run into the limitations you had with Storyshots previously:

- You are not testing against a real browser.
- You must mock many browser utilities (e.g., canvas, window APIs, etc).
- Your debugging experience will not be as good, given you can't access the browser as part of your tests.

Alternatively, you may want to consider migrating to the other available option for snapshot testing with Storybook: the test-runner for a more robust solution that runs tests against a real browser environment with Playwright.

## Troubleshooting

As running snapshot tests with Storybook and the test-runner can lead to some technical limitations that may prevent you from setting up or running your tests successfully, we've prepared a set of instructions to help you troubleshoot any issues you may encounter.

### The test-runner reports an error when running snapshot tests

If you're experiencing intermittent test failures with the test-runner, uncaught errors may occur when your tests run in the browser. These errors might not have been caught if you were using the Storyshots addons previously. The test-runner will, by default, consider these uncaught errors as failed tests. However, if these errors are expected, you can ignore them by enabling custom story tags in your stories and test-runner configuration files. For more information, please refer to the test-runner documentation.

### The test-runner does not generate snapshot files in the expected directory

If you've configured the test-runner to run snapshot tests, you may notice that the paths and names of the snapshot files differ from those previously generated by the Storyshots addon. This is because the test-runner uses a different naming convention for snapshot files. Using a custom snapshot resolver, you can configure the test-runner to use the same naming convention you used previously.

Run the following command to generate a custom configuration file for the test-runner that you can use to configure Jest:

```bash
npm run test-storybook -- --eject
```

Update the file and enable the snapshotResolver option to use a custom snapshot resolver:

```javascript
// ./test-runner-jest.config.js
import { getJestConfig } from '@storybook/test-runner';
 
const defaultConfig = getJestConfig();
 
const config = {
  // The default Jest configuration comes from @storybook/test-runner
  ...defaultConfig,
  snapshotResolver: './snapshot-resolver.js',
};
 
export default config;
```

Finally, create a snapshot-resolver.js file to implement a custom snapshot resolver:

```javascript
// ./snapshot-resolver.js
import path from 'path';
 
export default {
  resolveSnapshotPath: (testPath) => {
    const fileName = path.basename(testPath);
    const fileNameWithoutExtension = fileName.replace(/\.[^/.]+$/, '');
    const modifiedFileName = `${fileNameWithoutExtension}.storyshot`;
 
    // Configure Jest to generate snapshot files using the following naming convention (__snapshots__/Button.storyshot)
    return path.join(path.dirname(testPath), '__snapshots__', modifiedFileName);
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    path.basename(snapshotFilePath, snapshotExtension),
  testPathForConsistencyCheck: 'example.storyshot',
};
```

### The format of the snapshot files is different from the ones generated by the Storyshots addon

By default, the test-runner uses jest-serializer-html to serialize HTML snapshots. This may cause differences in formatting compared to your existing snapshots, even if you're using specific CSS-in-JS libraries like Emotion, Angular's ng attributes, or other similar libraries that generate hash-based identifiers for CSS classes. However, you can configure the test-runner to use a custom snapshot serializer to solve this issue by overriding the random class names with a static one that will be the same for each test run.

Run the following command to generate a custom configuration file for the test-runner that you can use to provide additional configuration options.

```bash
npm run test-storybook -- --eject
```

Update the file and enable the snapshotSerializers option to use a custom snapshot resolver. For example:

```javascript
// ./test-runner-jest.config.js
import { getJestConfig } from '@storybook/test-runner';
 
const defaultConfig = getJestConfig();
 
const config = {
  ...defaultConfig,
  snapshotSerializers: [
    // Sets up the custom serializer to preprocess the HTML before it's passed onto the test-runner
    './snapshot-serializer.js',
    ...defaultConfig.snapshotSerializers,
  ],
};
 
export default config;
```

Finally, create a snapshot-serializer.js file to implement a custom snapshot serializer:

```javascript
// ./snapshot-serializer.js
// The jest-serializer-html package is available as a dependency of the test-runner
const jestSerializerHtml = require('jest-serializer-html');
 
const DYNAMIC_ID_PATTERN = /"react-aria-\d+(\.\d+)?"/g;
 
module.exports = {
  /*
   * The test-runner calls the serialize function when the test reaches the expect(SomeHTMLElement).toMatchSnapshot().
   * It will replace all dynamic IDs with a static ID so that the snapshot is consistent.
   * For instance, from <label id="react-aria970235672-:rl:" for="react-aria970235672-:rk:">Favorite color</label> to <label id="react-mocked_id" for="react-mocked_id">Favorite color</label>
   */
  serialize(val) {
    const withFixedIds = val.replace(DYNAMIC_ID_PATTERN, 'mocked_id');
    return jestSerializerHtml.print(withFixedIds);
  },
  test(val) {
    return jestSerializerHtml.test(val);
  },
};
```

When the test-runner executes your tests, it will introspect the resulting HTML and replace any dynamically generated attributes with the static ones provided by the regex expression before snapshotting the component.
</document_content>
</document>
<document index="30">
<source>test-runner.md</source>
<document_content>
# Test runner

Storybook test runner turns all of your stories into executable tests. It is powered by Jest and Playwright.

- For those without a play function: it verifies whether the story renders without any errors.
- For those with a play function: it also checks for errors in the play function and that all assertions passed.

These tests run in a live browser and can be executed via the command line or your CI server.

## Setup

The test-runner is a standalone, framework-agnostic utility that runs parallel to your Storybook. You will need to take some additional steps to set it up properly. Detailed below is our recommendation to configure and execute it.

Run the following command to install it.

```
npm install @storybook/test-runner --save-dev
```

Update your package.json scripts and enable the test runner.

```json
// package.json
{
  "scripts": {
    "test-storybook": "test-storybook"
  }
}
```

Start your Storybook with:

```
npm run storybook
```

> 💡 Storybook's test runner requires either a locally running Storybook instance or a published Storybook to run all the existing tests.

Finally, open a new terminal window and run the test-runner with:

```
npm run test-storybook
```

## Configure

Test runner offers zero-config support for Storybook. However, you can run `test-storybook --eject` for more fine-grained control. It generates a `test-runner-jest.config.js` file at the root of your project, which you can modify. Additionally, you can extend the generated configuration file and provide `testEnvironmentOptions` as the test runner also uses jest-playwright under the hood.

## CLI Options

The test-runner is powered by Jest and accepts a subset of its CLI options (for example, `--watch`, `--maxWorkers`). If you're already using any of those flags in your project, you should be able to migrate them into Storybook's test-runner without any issues. Listed below are all the available flags and examples of using them.

| Options | Description |
| ------- | ----------- |
| `--help` | Output usage information<br>`test-storybook --help` |
| `-s, --index-json` | Run in index json mode. Automatically detected (requires a compatible Storybook)<br>`test-storybook --index-json` |
| `--no-index-json` | Disables index json mode<br>`test-storybook --no-index-json` |
| `-c, --config-dir [dir-name]` | Directory where to load Storybook configurations from<br>`test-storybook -c .storybook` |
| `--watch` | Run in watch mode<br>`test-storybook --watch` |
| `--watchAll` | Watch files for changes and rerun all tests when something changes.<br>`test-storybook --watchAll` |
| `--coverage` | Runs coverage tests on your stories and components<br>`test-storybook --coverage` |
| `--coverageDirectory` | Directory where to write coverage report output<br>`test-storybook --coverage --coverageDirectory coverage/ui/storybook` |
| `--url` | Define the URL to run tests in. Useful for custom Storybook URLs<br>`test-storybook --url http://the-storybook-url-here.com` |
| `--browsers` | Define browsers to run tests in. One or multiple of: chromium, firefox, webkit<br>`test-storybook --browsers firefox chromium` |
| `--maxWorkers [amount]` | Specifies the maximum number of workers the worker-pool will spawn for running tests<br>`test-storybook --maxWorkers=2` |
| `--testTimeout [amount]` | Defines the maximum time in milliseconds that a test can run before it is automatically marked as failed. Useful for long-running tests<br>`test-storybook --testTimeout=60000` |
| `--no-cache` | Disable the cache<br>`test-storybook --no-cache` |
| `--clearCache` | Deletes the Jest cache directory and then exits without running tests<br>`test-storybook --clearCache` |
| `--verbose` | Display individual test results with the test suite hierarchy<br>`test-storybook --verbose` |
| `-u, --updateSnapshot` | Use this flag to re-record every snapshot that fails during this test run<br>`test-storybook -u` |
| `--eject` | Creates a local configuration file to override defaults of the test-runner<br>`test-storybook --eject` |
| `--json` | Prints the test results in JSON. This mode will send all other test output and user messages to stderr.<br>`test-storybook --json` |
| `--outputFile` | Write test results to a file when the --json option is also specified.<br>`test-storybook --json --outputFile results.json` |
| `--junit` | Indicates that test information should be reported in a junit file.<br>`test-storybook --junit` |
| `--ci` | Instead of the regular behavior of storing a new snapshot automatically, it will fail the test and require Jest to be run with --updateSnapshot.<br>`test-storybook --ci` |
| `--shard [index/count]` | Requires CI. Splits the test suite execution into multiple machines<br>`test-storybook --shard=1/8` |
| `--failOnConsole` | Makes tests fail on browser console errors<br>`test-storybook --failOnConsole` |
| `--includeTags` | Experimental feature<br>Defines a subset of stories to be tested if they match the enabled tags.<br>`test-storybook --includeTags="test-only, pages"` |
| `--excludeTags` | Experimental feature<br>Prevents stories from being tested if they match the provided tags.<br>`test-storybook --excludeTags="no-tests, tokens"` |
| `--skipTags` | Experimental feature<br>Configures the test runner to skip running tests for stories that match the provided tags.<br>`test-storybook --skipTags="skip-test, layout"` |

Example:
```
npm run test-storybook -- --watch
```

## Run tests against a deployed Storybook

By default, the test-runner assumes that you're running it against a locally served Storybook on port 6006. If you want to define a target URL to run against deployed Storybooks, you can use the `--url` flag:

```
npm run test-storybook -- --url https://the-storybook-url-here.com
```

Alternatively, you can set the `TARGET_URL` environment variable and run the test-runner:

```
TARGET_URL=https://the-storybook-url-here.com yarn test-storybook
```

## Set up CI to run tests

You can also configure the test-runner to run tests on a CI environment. Documented below are some recipes to help you get started.

### Run against deployed Storybooks via Github Actions deployment

If you're publishing your Storybook with services such as Vercel or Netlify, they emit a `deployment_status` event in GitHub Actions. You can use it and set the `deployment_status.target_url` as the `TARGET_URL` environment variable. Here's how:

```yaml
# .github/workflows/storybook-tests.yml
name: Storybook Tests
 
on: deployment_status
 
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    if: github.event.deployment_status.state == 'success'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: '.nvmrc'
      - name: Install dependencies
        run: yarn
      - name: Install Playwright
        run: npx playwright install --with-deps
      - name: Run Storybook tests
        run: yarn test-storybook
        env:
          TARGET_URL: '${{ github.event.deployment_status.target_url }}'
```

> 💡 The published Storybook must be publicly available for this example to work. We recommend running the test server using the recipe below if it requires authentication.

### Run against non-deployed Storybooks

You can use your CI provider (for example, GitHub Actions, GitLab Pipelines, CircleCI) to build and run the test runner against your built Storybook. Here's a recipe that relies on third-party libraries, that is to say, concurrently, http-server, and wait-on to build Storybook and run tests with the test-runner.

```yaml
# .github/workflows/storybook-tests.yml
name: 'Storybook Tests'
 
on: push
 
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: '.nvmrc'
      - name: Install dependencies
        run: yarn
      - name: Install Playwright
        run: npx playwright install --with-deps
      - name: Build Storybook
        run: yarn build-storybook --quiet
      - name: Serve Storybook and run tests
        run: |
          npx concurrently -k -s first -n "SB,TEST" -c "magenta,blue" \
            "npx http-server storybook-static --port 6006 --silent" \
            "npx wait-on tcp:127.0.0.1:6006 && yarn test-storybook"
```

> 💡 By default, Storybook outputs the build to the storybook-static directory. If you're using a different build directory, you'll need to adjust the recipe accordingly.

## What's the difference between Chromatic and Test runner?

The test-runner is a generic testing tool that can run locally or on CI and be configured or extended to run all kinds of tests.

Chromatic is a cloud-based service that runs visual and component tests (and soon accessibility tests) without setting up the test runner. It also syncs with your git provider and manages access control for private projects.

However, you might want to pair the test runner and Chromatic in some cases.

- Use it locally and Chromatic on your CI.
- Use Chromatic for visual and component tests and run other custom tests using the test runner.

## Advanced configuration

### Test hook API

The test-runner renders a story and executes its play function if one exists. However, certain behaviors are impossible to achieve via the play function, which executes in the browser. For example, if you want the test-runner to take visual snapshots for you, this is possible via Playwright/Jest but must be executed in Node.

The test-runner exports test hooks that can be overridden globally to enable use cases like visual or DOM snapshots. These hooks give you access to the test lifecycle before and after the story is rendered. Listed below are the available hooks and an overview of how to use them.

| Hook | Description |
| ---- | ----------- |
| `prepare` | Prepares the browser for tests<br>`async prepare({ page, browserContext, testRunnerConfig }) {}` |
| `setup` | Executes once before all the tests run<br>`setup() {}` |
| `preVisit` | Executes before a story is initially visited and rendered in the browser<br>`async preVisit(page, context) {}` |
| `postVisit` | Executes after the story is visited and fully rendered<br>`async postVisit(page, context) {}` |

> 💡 These test hooks are experimental and may be subject to breaking changes. We encourage you to test as much as possible within the story's play function.

To enable the hooks API, you'll need to add a new configuration file inside your Storybook directory and set them up as follows:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
 
const config: TestRunnerConfig = {
  // Hook that is executed before the test runner starts running tests
  setup() {
    // Add your configuration here.
  },
  /* Hook to execute before a story is initially visited before being rendered in the browser.
   * The page argument is the Playwright's page object for the story.
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async preVisit(page, context) {
    // Add your configuration here.
  },
  /* Hook to execute after a story is visited and fully rendered.
   * The page argument is the Playwright's page object for the story
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async postVisit(page, context) {
    // Add your configuration here.
  },
};
 
export default config;
```

> 💡 Except for the `setup` function, all other functions run asynchronously. Both `preVisit` and `postVisit` functions include two additional arguments, a Playwright page and a context object which contains the id, title, and the name of the story.

When the test-runner executes, your existing tests will go through the following lifecycle:

1. The `setup` function is executed before all the tests run.
2. The context object is generated containing the required information.
3. Playwright navigates to the story's page.
4. The `preVisit` function is executed.
5. The story is rendered, and any existing play functions are executed.
6. The `postVisit` function is executed.

### (Experimental) Filter tests

When you run the test-runner on Storybook, it tests every story by default. However, if you want to filter the tests, you can use the tags configuration option. Storybook originally introduced this feature to generate automatic documentation for stories. But it can be further extended to configure the test-runner to run tests according to the provided tags using a similar configuration option or via CLI flags (e.g., `--includeTags`, `--excludeTags`, `--skipTags`), only available with the latest stable release (0.15 or higher). Listed below are the available options and an overview of how to use them.

| Option | Description |
| ------ | ----------- |
| `exclude` | Prevents stories if they match the provided tags from being tested. |
| `include` | Defines a subset of stories only to be tested if they match the enabled tags. |
| `skip` | Skips testing on stories if they match the provided tags. |

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
 
const config: TestRunnerConfig = {
  tags: {
    include: ['test-only', 'pages'],
    exclude: ['no-tests', 'tokens'],
    skip: ['skip-test', 'layout'],
  },
};
 
export default config;
```

ℹ️ Running tests with the CLI flags takes precedence over the options provided in the configuration file and will override the available options in the configuration file.

### Disabling tests

If you want to prevent specific stories from being tested by the test-runner, you can configure your story with a custom tag, enable it to the test-runner configuration file or run the test-runner with the `--excludeTags` CLI flag and exclude them from testing. This is helpful when you want to exclude stories that are not yet ready for testing or are irrelevant to your tests. For example:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  tags: ['no-tests'], // 👈 Provides the `no-tests` tag to all stories in this file
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const ExcludeStory: Story = {
  //👇 Adds the `no-tests` tag to this story to exclude it from the tests when enabled in the test-runner configuration
  tags: ['no-tests'],
};
```

### Run tests for a subset of stories

To allow the test-runner only to run tests on a specific story or subset of stories, you can configure the story with a custom tag, enable it in the test-runner configuration file or run the test-runner with the `--includeTags` CLI flag and include them in your tests. For example, if you wanted to run tests based on the `test-only` tag, you can adjust your configuration as follows:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  tags: ['test-only'], // 👈 Provides the `test-only` tag to all stories in this file
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const IncludeStory: Story = {
  //👇 Adds the `test-only` tag to this story to be included in the tests when enabled in the test-runner configuration
  tags: ['test-only'],
};
```

ℹ️ Applying tags for the component's stories should either be done at the component level (using meta) or at the story level. Importing tags across stories is not supported in Storybook and won't work as intended.

### Skip tests

If you want to skip running tests on a particular story or subset of stories, you can configure your story with a custom tag, enable it in the test-runner configuration file, or run the test-runner with the `--skipTags` CLI flag. Running tests with this option will cause the test-runner to ignore and flag them accordingly in the test results, indicating that the tests are temporarily disabled. For example:

```typescript
// MyComponent.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  tags: ['skip-test'], // 👈 Provides the `skip-test` tag to all stories in this file
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const SkipStory: Story = {
  //👇 Adds the `skip-test` tag to this story to allow it to be skipped in the tests when enabled in the test-runner configuration
  tags: ['skip-test'],
};
```

### Authentication for deployed Storybooks

If you use a secure hosting provider that requires authentication to host your Storybook, you may need to set HTTP headers. This is mainly because of how the test runner checks the status of the instance and the index of its stories through fetch requests and Playwright. To do this, you can modify the test-runner configuration file to include the `getHttpHeaders` function. This function takes the URL of the fetch calls and page visits as input and returns an object containing the headers that need to be set.

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
 
const config: TestRunnerConfig = {
  getHttpHeaders: async (url) => {
    const token = url.includes('prod') ? 'prod-token' : 'dev-token';
    return {
      Authorization: `Bearer ${token}`,
    };
  },
};
 
export default config;
```

### Helpers

The test-runner exports a few helpers that can be used to make your tests more readable and maintainable by accessing Storybook's internals (e.g., args, parameters). Listed below are the available helpers and an overview of how to use them.

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext, waitForPageReady } from '@storybook/test-runner';
 
const config: TestRunnerConfig = {
  // Hook that is executed before the test runner starts running tests
  setup() {
    // Add your configuration here.
  },
  /* Hook to execute before a story is initially visited before being rendered in the browser.
   * The page argument is the Playwright's page object for the story.
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async preVisit(page, context) {
    // Add your configuration here.
  },
  /* Hook to execute after a story is visited and fully rendered.
   * The page argument is the Playwright's page object for the story
   * The context argument is a Storybook object containing the story's id, title, and name.
   */
  async postVisit(page, context) {
    // Get the entire context of a story, including parameters, args, argTypes, etc.
    const storyContext = await getStoryContext(page, context);
 
    // This utility function is designed for image snapshot testing. It will wait for the page to be fully loaded, including all the async items (e.g., images, fonts, etc.).
    await waitForPageReady(page);
 
    // Add your configuration here.
  },
};
 
export default config;
```

### Accessing story information with the test-runner

If you need to access information about the story, such as its parameters, the test-runner includes a helper function named `getStoryContext` that you can use to retrieve it. You can then use it to customize your tests further as needed. For example, if you need to configure Playwright's page viewport size to use the viewport size defined in the story's parameters, you can do so as follows:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
import { getStoryContext } from '@storybook/test-runner';
 
const { MINIMAL_VIEWPORTS } = require('@storybook/addon-viewport');
 
const DEFAULT_VIEWPORT_SIZE = { width: 1280, height: 720 };
 
const config: TestRunnerConfig = {
  async preVisit(page, story) {
    // Accesses the story's parameters and retrieves the viewport used to render it
    const context = await getStoryContext(page, story);
    const viewportName = context.parameters?.viewport?.defaultViewport;
    const viewportParameter = MINIMAL_VIEWPORTS[viewportName];
 
    if (viewportParameter) {
      const viewportSize = Object.entries(viewportParameter.styles).reduce(
        (acc, [screen, size]) => ({
          ...acc,
          // Converts the viewport size from percentages to numbers
          [screen]: parseInt(size),
        }),
        {},
      );
      // Configures the Playwright page to use the viewport size
      page.setViewportSize(viewportSize);
    } else {
      page.setViewportSize(DEFAULT_VIEWPORT_SIZE);
    }
  },
};
 
export default config;
```

### Working with assets

If you're running a specific set of tests (e.g., image snapshot testing), the test-runner provides a helper function named `waitForPageReady` that you can use to ensure the page is fully loaded and ready before running the test. For example:

```typescript
// .storybook/test-runner.ts
import type { TestRunnerConfig } from '@storybook/test-runner';
 
import { waitForPageReady } from '@storybook/test-runner';
 
import { toMatchImageSnapshot } from 'jest-image-snapshot';
 
const customSnapshotsDir = `${process.cwd()}/__snapshots__`;
 
const config: TestRunnerConfig = {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  async postVisit(page, context) {
    // Awaits for the page to be loaded and available including assets (e.g., fonts)
    await waitForPageReady(page);
 
    // Generates a snapshot file based on the story identifier
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir,
      customSnapshotIdentifier: context.id,
    });
  },
};
 
export default config;
```

### Index.json mode

The test-runner transforms your story files into tests when testing a local Storybook. For a remote Storybook, it uses the Storybook's index.json (formerly stories.json) file (a static index of all the stories) to run the tests.

#### Why?

Suppose you run into a situation where the local and remote Storybooks appear out of sync, or you might not even have access to the code. In that case, the index.json file is guaranteed to be the most accurate representation of the deployed Storybook you are testing. To test a local Storybook using this feature, use the `--index-json` flag as follows:

```
npm run test-storybook -- --index-json
```

> 💡 The index.json mode is not compatible with the watch mode.

If you need to disable it, use the `--no-index-json` flag:

```
npm run test-storybook -- --no-index-json
```

#### How do I check if my Storybook has a index.json file?

Index.json mode requires a index.json file. Open a browser window and navigate to your deployed Storybook instance (for example, https://your-storybook-url-here.com/index.json). You should see a JSON file that starts with a "v": 3 key, immediately followed by another key called "stories", which contains a map of story IDs to JSON objects. If that is the case, your Storybook supports index.json mode.

## Troubleshooting

### The test runner seems flaky and keeps timing out

If your tests time out with the following message:

```
Timeout - Async callback was not invoked within the 15000 ms timeout specified by jest.setTimeout
```

It might be that Playwright couldn't handle testing the number of stories you have in your project. Perhaps you have a large number of stories, or your CI environment has a really low RAM configuration. In such cases, you should limit the number of workers that run in parallel by adjusting your command as follows:

```json
// package.json
{
  "scripts": {
    "test-storybook:ci": "yarn test-storybook --maxWorkers=2"
  }
}
```

### The error output in the CLI is too short

By default, the test runner truncates error outputs at 1000 characters, and you can check the full output directly in Storybook in the browser. However, if you want to change that limit, you can do so by setting the `DEBUG_PRINT_LIMIT` environment variable to a number of your choosing, for example, `DEBUG_PRINT_LIMIT=5000 yarn test-storybook`.

### Run the test runner in other CI environments

As the test runner is based on Playwright, you might need to use specific docker images or other configurations depending on your CI setup. In that case, you can refer to the Playwright CI docs for more information.

### Tests filtered by tags are incorrectly executed

If you've enabled filtering tests with tags and provided similar tags to the include and exclude lists, the test-runner will execute the tests based on the exclude list and ignore the include list. To avoid this, make sure the tags provided to the include and exclude lists differ.

### The test runner doesn't support Yarn PnP out of the box

If you've enabled the test-runner in a project running on a newer version of Yarn with Plug'n'Play (PnP) enabled, the test-runner might not work as expected and may generate the following error when running tests:

```
PlaywrightError: jest-playwright-preset: Cannot find playwright package to use chromium
```

This is due to the test-runner using the community-maintained package jest-playwright-preset that still needs to support this feature. To solve this, you can either switch the nodeLinker setting to node-modules or install Playwright as a direct dependency in your project, followed by adding the browser binaries via the install command.

## Learn about other UI tests

- Component tests for user behavior simulation
- Visual tests for appearance
- Accessibility tests for accessibility
- Snapshot tests for rendering errors and warnings
- Test runner to automate test execution
- Test coverage for measuring code coverage
- End-to-end tests for simulating real user scenarios
- Unit tests for functionality
</document_content>
</document>
<document index="31">
<source>test-addon.md</source>
<document_content>
# Test addon

(⚠️ Experimental)

> 🧪 While this addon is experimental, it is published as the `@storybook/experimental-addon-test` package and the API may change in future releases. We welcome feedback and contributions to help improve this feature.

Storybook's Test addon allows you to test your components directly inside Storybook. On its own, it transforms your stories into component tests, which test the rendering and behavior of your components in a real browser environment. It can also calculate project coverage provided by your stories.

If your project is using other testing addons, such as the Visual tests addon or the Accessibility addon, you can run those tests alongside your component tests.

When tests are run for a story, the status is shown in the sidebar. The sidebar can be filtered to only show failing stories, and you can press the menu button on a failing story to see debugging options.

You can also run tests in watch mode, which will automatically re-run tests when you make changes to your components or stories. To activate, press the watch mode toggle (the eye icon) in the test module.

## Install and set up

Before installing, make sure your project meets the following requirements:

- Storybook ≥ 8.5
- A Storybook framework that uses Vite (e.g. vue3-vite, react-vite, 'sveltekit`, etc.), or the Storybook Next.js framework with Vite
- Vitest ≥ 2.1
  - If you're not yet using Vitest, it will be installed and configured for you when you install the addon
- (optional) MSW ≥ 2.0
  - If MSW is installed, it must be v2.0.0 or later to not conflict with Vitest's dependency

> ℹ️ **Using with Next.js** — The Test addon is supported in Next.js ≥ 14.1 projects, but you must be using the `@storybook/experimental-nextjs-vite` framework. When you run the setup command below, you will be prompted to install and use the framework if you haven't already.

If you're not yet using Storybook 8.5, you can upgrade your Storybook to the prerelease version:

```
npx storybook@next upgrade
```

### Automatic setup

Run the following command to install and configure the addon, which contains the plugin to run your stories as tests using Vitest:

```
npx storybook add @storybook/experimental-addon-test
```

That add command will install and register the test addon. It will also inspect your project's Vite and Vitest setup, and install and configure them with sensible defaults, if necessary. You may need to adjust the configuration to fit your project's needs. The full configuration options can be found in the API section, below.

### Manual setup

For some project setups, the add command may be unable to automate the addon and plugin setup and ask you to complete additional setup steps. Here's what to do:

1. Make sure Vite and Vitest are configured in your project.
2. Configure Vitest to use browser mode.
3. Install the addon, `@storybook/experimental-addon-test`, in your project and register it in your Storybook configuration.
4. Create a test setup file, `.storybook/vitest.setup.ts`. You can use the example setup file as a guide.
5. Adjust your Vitest configuration to include the plugin and reference the setup file. You can use the example configuration files as a guide.

**Example configuration files**

When the addon is set up automatically, it will create or adjust your Vitest configuration files for you. If you're setting up manually, you can use the following examples as a reference when configuring your project.

- Example Vitest setup file
- Example Vitest config file
- Example Vitest workspace file

## Usage

There are multiple ways to run tests using the addon.

We recommend (and configure, by default) running Vitest in browser mode, using Playwright's Chromium browser. Browser mode ensures your components are tested in a real browser environment, which is more accurate than simulations like JSDom or HappyDom. This is especially important for testing components that rely on browser APIs or features.

### Storybook UI

The easiest way to run tests is through the Storybook UI. With a click, you can run multiple types of tests for all stories in your project, a group of stories, or a single story.

To run all tests for your whole project, press the Run tests button in the test module at the bottom of the sidebar.

Alternatively, you can expand the test module to run specific types of tests individually. For those test types which have a watch mode (which will automatically re-run relevant tests upon code changes), you can toggle that on or off.

> ℹ️ If you have the Visual tests addon installed, you'll see an option to run Visual tests alongside Component tests.
> Other addons, such as a11y, may also provide test types that can be run from the test module and affect the status indicators on stories and components.

To run tests for a specific story or group of stories, press the menu button (three dots) that appears on hover of a sidebar item. You can then select the test type you want to run.

After running your tests, you will now see status indicators on stories and components for their pass, fail, or error state. You can press on the menu button when hovering a story to see the test results for that story. Selecting a result in the menu will navigate you to that story and open the appropriate debugging panel. For example, if a component test fails, you can jump straight to the failure in the Component tests addon panel. That panel provides an interactive debugger for your component test, allowing you to step through each simulated behavior or assertion.

> ℹ️ The Component tests addon panel replaces the Interactions addon panel when the Test addon is installed. While the testing mechanism is different, the functionality of the addon panel itself remains the same.

The test module will also show you the total number of tests run, the number of tests that passed, and the number of tests that failed or errored. You can press the failure number to filter the sidebar to only those stories that failed.

### CLI

You can also run tests using the Vitest CLI. We recommend adding a script to your package.json to make running tests easier. Here's an example of how to do that:

```json
// package.json
{
  "scripts": {
    "test": "vitest",
    "test-storybook": "vitest --project=storybook"
  }
}
```

In this example, we've added two scripts: `test` to run all tests in your project (you may already have this), and `test-storybook` to run only your Storybook tests. The `--project=storybook` flag tells Vitest to run the tests for the Storybook project.

Then, run this command to run your tests (in watch mode, by default) using the Vitest CLI:

```
npm run test-storybook
```

## Debugging

While the plugin does not require Storybook to run when testing, you may still want to run Storybook to debug your tests. To enable this, provide the `storybookScript` option in the plugin configuration. When you run Vitest in watch mode, the plugin will start Storybook using this script and provide links to the story in the output on test failures. This allows you to quickly jump to the story in Storybook to debug the issue.

You can also provide a `storybookUrl` option to the plugin configuration. When you're not using watch mode and tests fail, the plugin will provide a link to the story using this URL in the output. This is useful when running tests in CI or other environments where Storybook is not already running.

### Editor extension

Transforming your stories into Vitest tests with the plugin also enables you to run and debug tests using Vitest IDE integrations. This allows you to run tests directly from your editor, such as VSCode and JetBrains IDE.

This screenshot shows how you can run your Vitest tests in VSCode using the Vitest extension. Stories are annotated with the test status, and, when a test fails, a link to the story is provided for debugging.

### In CI

For the most part, running your Storybook tests in CI is done via the CLI. However, to have the test output link to your published Storybook on test failures, you need to provide the `storybookUrl` option in the plugin configuration.

Here's an example using GitHub Actions. The steps are similar for other CI providers, though details in the syntax or configuration may vary.

When actions for services like Vercel, Netlify and others run a deployment job, they follow a pattern of emitting a `deployment_status` event containing the newly generated URL under `deployment_status.target_url`. This is the URL to the published Storybook instance. We then pass that URL to the plugin configuration using an environment variable, `SB_URL`. Finally, we update the plugin configuration to use that environment variable in the `storybookUrl` option.

```yaml
# .github/workflows/test-storybook.yml
name: Storybook Tests
on: deployment_status
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    if: github.event.deployment_status.state == 'success'
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18.x'
      - name: Install dependencies
        run: yarn
      - name: Run Storybook tests
        run: yarn test-storybook
        env:
          SB_URL: '${{ github.event.deployment_status.target_url }}'
```

```typescript
// vitest.workspace.ts
export default defineWorkspace([
  // ...
  {
    // ...
    {
      plugins: [
        storybookTest({
          // ...
          storybookScript: 'yarn storybook --ci',
          storybookUrl: process.env.SB_URL
        }),
      ],
    },
  },
])
```

## How it works

The Test addon works by using a Vitest plugin to transform your stories into Vitest tests using portable stories. It also configures Vitest to run those tests in browser mode, using Playwright's Chromium browser. Because it is built on top of Vitest, the addon requires a Vite-based Storybook framework.

Stories are tested in two ways: a smoke test to ensure it renders and, if a play function is defined, that function is run and any assertions made within it are validated.

When you run tests in the Storybook UI, the addon runs Vitest in the background and reports the results in the sidebar.

## Configuring tests

The tests run by the addon can be configured in two ways. You can toggle which test types are run and include, exclude, or skip stories from being tested.

### Toggling test types

In addition to component tests, the Test addon supports multiple types of tests, depending on which other addons you are using in your project. Some test types, like visual tests, are run independently. Others, like accessibility, must be run alongside component tests. For these dependent test types, you can toggle them on or off in the test module by pressing the edit button (pencil icon) and checking or unchecking the test types you want to run.

Note that you may not have all of the test types pictured, depending on which addons you have installed.

You can also access edit mode in the sidebar item menu for a story or group of stories:

Note that toggling test types in the menu's edit mode affects all tests, not only those for the selected story or group of stories. It is intended as a convenience for quickly toggling test types on or off.

### Including, excluding, or skipping tests

You can use tags to include, exclude, or skip stories from being tested. Included stories are tested, excluded stories are not tested, and skipped stories are not tested but are counted in the test results.

By default, the plugin will run all stories with the `test` tag. You can adjust this behavior by providing the tags option in the plugin configuration. This allows you to include, exclude, or skip stories based on their tags.

In this example, we'll apply the `stable` tag to all of the Button component's stories, except for `ExperimentalFeatureStory`, which will have the `experimental` tag:

```typescript
// Button.stories.ts
// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  // 👇 Applies to all stories in this file
  tags: ['stable'],
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
```

To connect those tags to our test behavior, we can adjust the plugin configuration to exclude the experimental tag:

```typescript
// vitest.workspace.ts
export default defineWorkspace([
  // ...
  {
    // ...
    {
      plugins: [
        storybookTest({
          // ...
          tags: {
            include: ['test'],
            exclude: ['experimental'],
          },
        }),
      ],
    },
  },
])
```

If the same tag is in both the include and exclude arrays, the exclude behavior takes precedence.

## Comparison to the test runner

The test runner requires a running Storybook instance to test your stories, because it visits each one, executes the play function, and listens for results. The Vitest plugin, however, transforms your stories into tests using Vite and portable stories, so it does not need to run Storybook to test your stories. Because of this reliance on Vite, the plugin can only be used with Storybook frameworks that use Vite (and Next.js). The test runner, on the other hand, can be used with any Storybook framework.

The test runner is only a CLI tool. It did not have a UI for running tests, nor did it have an editor extension. The addon, however, provides a UI in Storybook for running tests, and it enables you to run and debug tests using Vitest IDE integrations.

Additionally, the test runner ran your stories as orchestrated tests in Jest, and that orchestration came with some complexity. By comparison, this plugin transforms your stories into real tests and then runs them using Vitest, which is simpler and more configurable.

Finally, because of the simpler architecture and the use of Vitest, this plugin should be faster than the test runner for most projects. We'll do more benchmarking to quantify this in the future.

## FAQ

### What happens if Vitest itself has an error?

Sometimes tests can fail because of errors within Vitest itself. When this happens, the test module in the Storybook UI will alert you to the error, and you can click a link to view it in full. The error will also be logged to the console.

Vitest offers troubleshooting help for common errors.

### What happens when there are different test results in multiple environments?

When you run tests with this addon, they are run as Vitest tests with whatever configuration you have set up in your project. By default, they will run in browser mode, using Playwright's Chromium browser. Sometimes, tests will fail when run in the addon (or via CLI), but then pass when viewed in the Component tests addon panel (or vice versa). This can happen because the tests are run in different environments, which can have different behaviors.

### How do I debug my CLI tests in Storybook?

The plugin will attempt to provide links to the story in Storybook when tests fail in CLI, for debugging purposes.

If the URLs are not working when running tests in watch mode, you should check two configuration options:

- `storybookUrl`: Ensure this URL is correct and accessible. For example, the default is `http://localhost:6006`, which may not use the same port number you're using.
- `storybookScript`: Ensure this script is correctly starting Storybook.

If the URLs are not working when running tests in CI, you should ensure the Storybook is built and published before running the tests. You can then provide the URL to the published Storybook using the `storybookUrl` option. See the In CI section for an example.

### How do I ensure my tests can find assets in the public directory?

If your stories use assets in the public directory and you're not using the default public directory location (public), you need to adjust the Vitest configuration to include the public directory. You can do this by providing the `publicDir` option in the Vitest configuration file.

### How do I isolate Storybook tests from others?

Some projects might contain a test property in their Vite configuration. Because the Vitest configuration used by this plugin extends that Vite config, the test properties are merged. This lack of isolation can cause issues with your Storybook tests.

To isolate your Storybook tests from other tests, you need to move the test property from your Vite configuration to the Vitest configuration. The Vitest config used by the plugin can then safely extend your Vite config without merging the test property.

### Why do we recommend browser mode?

Vitest's browser mode runs your tests in a real browser (Chromium, via Playwright, in the default configuration). The alternative is a simulated browser environment, like JSDom or HappyDom, which can have differences in behavior compared to a real browser. For UI components, which can often depend on browser APIs or features, running tests in a real browser is more accurate.

For more, see Vitest's guide on using browser mode effectively.

### How do I use WebDriver instead of Playwright?

We recommend running tests in a browser using Playwright, but you can use WebDriverIO instead. To do so, you need to adjust the browser provider in the Vitest configuration file.

### How do I use a browser other than Chromium?

We recommend using Chromium, because it is most likely to best match the experience of a majority of your users. However, you can use other browsers by adjusting the browser name in the Vitest configuration file. Note that Playwright and WebDriverIO support different browsers.

### How do I customize a test name?

By default, the export name of a story is mapped to the test name. To create a more descriptive test description, you can provide a name property for the story. This allows you to include spaces, brackets, or other special characters.

```javascript
// Example.stories.js|ts
export const Story = {
  name: 'custom, descriptive name'
};
```

### How do I fix the m.createRoot is not a function error?

This error can occur when using the addon on a project that uses a React version other than 18. To work around the issue, you can provide an alias to ensure the correct React version is used. Here's an example of how to do that in the Vitest configuration file:

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
 
export default defineConfig({
  // ...
  resolve: {
    alias: {
      "@storybook/react-dom-shim": "@storybook/react-dom-shim/dist/react-16",
    },
  },
});
```

## API

### Exports

This addon has the following exports:

```javascript
import { storybookTest } from '@storybook/experimental-addon-test/vitest-plugin'
```

### storybookTest

Type: function

A Vitest plugin that transforms your stories into tests. It accepts an options object for configuration.

#### Options

The plugin is configured using an options object. Here are the available properties:

##### configDir

Type: string

Default: `.storybook`

The directory where the Storybook configuration is located, relative to the current working directory.

If your Storybook configuration is not in the default location, you must specify the location here so the plugin can function correctly.

##### storybookScript

Type: string

Optional script to run Storybook. If provided, Vitest will start Storybook using this script when run in watch mode. Only runs if the Storybook in storybookUrl is not already available.

##### storybookUrl

Type: string

Default: `http://localhost:6006`

The URL where Storybook is hosted. This is used for internal checks and to provide a link to the story in the test output on failures.

##### tags

Type:
```typescript
{
  include: string[];
  exclude: string[];
  skip: string[];
}
```

Default:
```typescript
{
  include: ['test'],
  exclude: [],
  skip: [],
}
```

Tags to include, exclude, or skip. These tags are defined as annotations in your story, meta, or preview.

- include: Stories with these tags will be tested
- exclude: Stories with these tags will not be tested, and will not be counted in the test results
- skip: Stories with these tags will not be tested, and will be counted in the test results
</document_content>
</document>
<document index="32">
<source>test-coverage.md</source>
<document_content>
# Test coverage

Test coverage is the practice of measuring whether existing tests fully cover your code. That means surfacing areas which aren't currently being tested, such as: conditions, logic branches, functions and variables.

Coverage tests examine the instrumented code against a set of industry-accepted best practices. They act as the last line of QA to improve the quality of your test suite.

## With Storybook Test

When you run component tests with the Test addon, which is powered by Vitest, it can generate a coverage report. The result is summarized in the testing module, showing the percentage of statements covered by your tested stories.

## Set up

Coverage is included in the Test addon and, when enabled, will be calculated when running component tests for your project. To enable coverage, press the edit button (pencil icon) in the testing module and toggle coverage on:

Before coverage can be calculated, you may need to install a support package corresponding to your coverage provider:

```
# For v8
npm install --save-dev @vitest/coverage-v8
 
# For istanbul
npm install --save-dev @vitest/coverage-istanbul
```

Additionally (until Vitest 3.0.0 is released), the generated coverage report will include the stories files themselves and output from your built Storybook application. This is misleading and they should be excluded. To do this, you can add the following to your Vitest config:

```typescript
// vitest.config.ts
import { coverageConfigDefaults, defineConfig } from 'vitest/config';
 
export default defineConfig({
  // ...
  test: {
    coverage: {
      // 👇 Add this
      exclude: [
         ...coverageConfigDefaults.exclude,
         '**/.storybook/**',
         // 👇 This pattern must align with the `stories` property of your `.storybook/main.ts` config
         '**/*.stories.*',
         // 👇 This pattern must align with the output directory of `storybook build`
         '**/storybook-static/**',
       ], 
    }
  }
})
```

## Usage

Because coverage is built into the Test addon, you can use it everywhere you run your tests.

### Storybook UI

When you enable coverage in the Storybook UI, the coverage report will be generated and summarized in the testing module after you run your tests. You can see the percentage of statements covered by your tested stories, as well as whether the coverage meets the watermarks.

Additionally, the full coverage report will be served at the `/coverage/index.html` route of your running Storybook.

> ⚠️ **It's important to understand that the coverage reported in the Storybook UI has three important limitations:**
> - Coverage is calculated using the stories you've written, not the entire codebase. In other words, it will not include any other Vitest tests.
> - Coverage can only be calculated for all stories in your project, not for an individual story or a group of stories.
> - Coverage is not calculated while watch mode is activated. When coverage is enabled, enabling watch mode will disable coverage.

### CLI

Like the rest of Storybook Test, coverage is built on top of Vitest. Which means you can generate a coverage report using the Vitest CLI.

Assuming you run your tests with a package script like this:

```json
// package.json
{
  "scripts": {
    "test-storybook": "vitest --project=storybook"
  }
}
```

Then you can generate a coverage report with:

```
npm run test-storybook -- --coverage
```

The coverage report will be saved to the configured coverage reports directory (`./coverage`, by default) in your project.

> ℹ️ 
> - The above command will only calculate coverage for the stories you've written, not the entire codebase.
> - Because coverage is most accurate when accounting for all tests in your project, you can also run coverage for all tests in your project with:
>   ```
>   npx vitest --coverage
>   ```

### Editor extension

Coverage is also available through Vitest's IDE integrations. You can calculate and display coverage results directly in your editor.

> ℹ️ Note that this coverage will include all tests in your project, not just the stories you've written.

### CI

To generate coverage reports in your CI pipeline, you can use the CLI.

For example, here's a simplified GitHub Actions workflow that runs your tests and generates a coverage report:

```yaml
# .github/workflows/test-storybook.yml
name: Storybook Tests
on: push
jobs:
  test:
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20.x'
      - name: Install dependencies
        run: yarn
      - name: Run Storybook tests
        run: yarn test-storybook --coverage
```

For more on testing in CI, see the Test addon docs.

## Configuration

### Coverage provider

You can choose which provider, v8 (default) or Istanbul, to use for coverage calculation by setting the `coverage.provider` option in your Vitest config:

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
 
export default defineConfig({
  // ...
  test: {
    // ...
    coverage: {
      // ...
      provider: 'istanbul', // 'v8' is the default
    },
  },
});
```

### Watermarks

Both coverage providers support watermarks, which are threshold values for coverage. The low watermark is the minimum coverage required to pass the test, and the high watermark is the minimum coverage required to be considered good. A coverage percentage between the low and high watermarks will be considered acceptable but not ideal.

In the testing module, the coverage summary will show the percentage of statements covered by your tested stories, as well as whether the coverage meets the watermarks. Below the low watermark, the icon will be red, between the low and high watermarks, it will be orange, and above the high watermark, it will be green.

To configure the watermarks, you can adjust the Vitest config:

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
 
export default defineConfig({
  // ...
  test: {
    // ...
    coverage: {
      // ...
      watermarks: {
        // These are the default values
        statements: [50, 80],
      },
    },
  },
});
```

### Additional configuration

You can find more configuration options for coverage in the Vitest documentation.

When calculating coverage in the Storybook UI, the following options are always ignored:

- enabled
- clean
- cleanOnRerun
- reportOnFailure
- reporter
- reportsDirectory

## With the coverage addon

Storybook also provides a coverage addon. It is powered by Istanbul, which allows out-of-the-box code instrumentation for the most commonly used frameworks and builders in the JavaScript ecosystem.

### Set up

Engineered to work alongside modern testing tools (e.g., Playwright), the coverage addon automatically instruments your code and generates code coverage data. For an optimal experience, we recommend using the test runner alongside the coverage addon to run your tests.

Run the following command to install the addon.

```
npx storybook@latest add @storybook/addon-coverage
```

> ℹ️ The CLI's add command automates the addon's installation and setup. To install it manually, see our documentation on how to install addons.

Start your Storybook with:

```
npm run storybook
```

Finally, open a new terminal window and run the test-runner with:

```
npm run test-storybook -- --coverage
```

### Configure

By default, the `@storybook/addon-coverage` offers zero-config support for Storybook and instruments your code via istanbul-lib-instrument for Webpack, or vite-plugin-istanbul for Vite. However, you can extend your Storybook configuration file (i.e., `.storybook/main.js|ts`) and provide additional options to the addon. Listed below are the available options divided by builder and examples of how to use them.

```typescript
// .storybook/main.ts
// For Vite support add the following import
// import type { AddonOptionsVite } from '@storybook/addon-coverage';
 
import type { AddonOptionsWebpack } from '@storybook/addon-coverage';
 
// Replace your-framework with the framework and builder you are using (e.g., react-webpack5, vue3-webpack5)
import type { StorybookConfig } from '@storybook/your-framework';
 
const coverageConfig: AddonOptionsWebpack = {
  istanbul: {
    include: ['**/stories/**'],
    exclude: ['**/exampleDirectory/**'],
  },
};
 
const config: StorybookConfig = {
  stories: [],
  addons: [
    // Other Storybook addons
    {
      name: '@storybook/addon-coverage',
      options: coverageConfig,
    },
  ],
};
 
export default config;
```

### What about other coverage reporting tools?

Out of the box, code coverage tests work seamlessly with Storybook's test-runner and the `@storybook/addon-coverage`. However, that doesn't mean you can't use additional reporting tools (e.g., Codecov). For instance, if you're working with LCOV, you can use the generated output (in `coverage/storybook/coverage-storybook.json`) and create your own report with:

```
npx nyc report --reporter=lcov -t coverage/storybook --report-dir coverage/storybook
```

## Troubleshooting

### Run test coverage in other frameworks

If you intend on running coverage tests in frameworks with special files like Vue 3 or Svelte, you'll need to adjust your configuration and enable the required file extensions. For example, if you're using Vue, you'll need to add the following to your nyc configuration file (i.e., `.nycrc.json` or `nyc.config.js`):

```javascript
// .nyc.config.js
export default {
  // Other configuration options
  extension: ['.js', '.cjs', '.mjs', '.ts', '.tsx', '.jsx', '.vue'],
};
```

### The coverage addon doesn't support optimized builds

If you generated a production build optimized for performance with the `--test` flag, and you're using the coverage addon to run tests against your Storybook, you may run into a situation where the coverage addon doesn't instrument your code. This is due to how the flag works, as it removes addons that have an impact on performance (e.g., Docs, coverage addon). To resolve this issue, you'll need to adjust your Storybook configuration file (i.e., `.storybook/main.js|ts`) and include the `disabledAddons` option to allow the addon to run tests at the expense of a slower build.

```typescript
// .storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-coverage',
  ],
  build: {
    test: {
      disabledAddons: ['@storybook/addon-docs', '@storybook/addon-essentials/docs'],
    },
  },
};
 
export default config;
```

### The coverage addon doesn't support instrumented code

As the coverage addon is based on Webpack5 loaders and Vite plugins for code instrumentation, frameworks that don't rely upon these libraries (e.g., Angular configured with Webpack), will require additional configuration to enable code instrumentation. In that case, you can refer to the following repository for more information.

## Learn about other UI tests

- Component tests for user behavior simulation
- Visual tests for appearance
- Accessibility tests for accessibility
- Snapshot tests for rendering errors and warnings
- Test runner to automate test execution
- Test coverage for measuring code coverage
- End-to-end tests for simulating real user scenarios
- Unit tests for functionality
</document_content>
</document>
<document index="33">
<source>stories-in-unit-tests.md</source>
<document_content>
# Stories in unit tests

Teams test a variety of UI characteristics using different tools. Each tool requires you to replicate the same component state over and over. That's a maintenance headache. Ideally, you'd set up your tests similarly and reuse that across tools.

Storybook enables you to isolate a component and capture its use cases in a *.stories.js|ts file. Stories are standard JavaScript modules that are cross-compatible with the whole JavaScript ecosystem.

Stories are a practical starting point for UI testing. Import stories into tools like Jest, Testing Library, Vitest and Playwright, to save time and maintenance work.

## Write a test with Testing Library

Testing Library is a suite of helper libraries for browser-based component tests. With Component Story Format, your stories are reusable with Testing Library. Each named export (story) is renderable within your testing setup. For example, if you were working on a login component and wanted to test the invalid credentials scenario, here's how you could write your test:

Storybook provides a `composeStories` utility that helps convert stories from a test file into renderable elements that can be reused in your Node tests with JSDOM. It also allows you to apply other Storybook features that you have enabled your project (e.g., decorators, args) into your tests, enabling you to reuse your stories in your testing environment of choice (e.g., Jest, Vitest), ensuring your tests are always in sync with your stories without having to rewrite them. This is what we refer to as portable stories in Storybook.

```typescript
// Form.test.ts|tsx
import { fireEvent, render, screen } from '@testing-library/react';
 
import { composeStories } from '@storybook/react';
 
import * as stories from './LoginForm.stories'; // 👈 Our stories imported here.
 
const { InvalidForm } = composeStories(stories);
 
test('Checks if the form is valid', async () => {
  // Renders the composed story
  await InvalidForm.run();
 
  const buttonElement = screen.getByRole('button', {
    name: 'Submit',
  });
 
  fireEvent.click(buttonElement);
 
  const isFormValid = screen.getByLabelText('invalid-form');
  expect(isFormValid).toBeInTheDocument();
});
```

> ⚠️ You must configure your test environment to use portable stories to ensure your stories are composed with all aspects of your Storybook configuration, such as decorators.

Once the test runs, it loads the story and renders it. Testing Library then emulates the user's behavior and checks if the component state has been updated.

## Override story properties

By default, the `setProjectAnnotations` function injects into your existing tests any global configuration you've defined in your Storybook instance (i.e., parameters, decorators in the preview.js|ts file). Nevertheless, this may cause unforeseen side effects for tests that are not intended to use these global configurations. For example, you may want to always test a story in a particular locale (via globalTypes) or configure a story to apply specific decorators or parameters.

To avoid this, you can override the global configurations by extending either the `composeStory` or `composeStories` functions to provide test-specific configurations. For example:

```javascript
// Form.test.js|ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3, svelte, etc.)
import { composeStories } from '@storybook/your-renderer';
 
import * as stories from './LoginForm.stories';
 
const { ValidForm } = composeStories(stories, {
  decorators: [
    // Decorators defined here will be added to all composed stories from this function
  ],
  globalTypes: {
    // Override globals for all composed stories from this function
  },
  parameters: {
    // Override parameters for all composed stories from this function
  },
});
```

## Run tests on a single story

You can use the `composeStory` function to allow your tests to run on a single story. However, if you're relying on this method, we recommend that you supply the story metadata (i.e., the default export) to the `composeStory` function. This ensures that your tests can accurately determine the correct information about the story. For example:

```typescript
// Form.test.ts|tsx
import { fireEvent, screen } from '@testing-library/react';
 
import { composeStory } from '@storybook/react';
 
import Meta, { ValidForm as ValidFormStory } from './LoginForm.stories';
 
const ValidForm = composeStory(ValidFormStory, Meta);
 
test('Validates form', async () => {
  await ValidForm.run();
 
  const buttonElement = screen.getByRole('button', {
    name: 'Submit',
  });
 
  fireEvent.click(buttonElement);
 
  const isFormValid = screen.getByLabelText('invalid-form');
  expect(isFormValid).not.toBeInTheDocument();
});
```

## Combine stories into a single test

If you intend to test multiple stories in a single test, use the `composeStories` function. It will process every component story you've specified, including any args or decorators you've defined. For example:

```typescript
// Form.test.ts|tsx
import { fireEvent, screen } from '@testing-library/react';
 
import { composeStories } from '@storybook/react';
 
import * as FormStories from './LoginForm.stories';
 
const { InvalidForm, ValidForm } = composeStories(FormStories);
 
test('Tests invalid form state', async () => {
  await InvalidForm.run();
 
  const buttonElement = screen.getByRole('button', {
    name: 'Submit',
  });
 
  fireEvent.click(buttonElement);
 
  const isFormValid = screen.getByLabelText('invalid-form');
  expect(isFormValid).toBeInTheDocument();
});
 
test('Tests filled form', async () => {
  await ValidForm.run();
 
  const buttonElement = screen.getByRole('button', {
    name: 'Submit',
  });
 
  fireEvent.click(buttonElement);
 
  const isFormValid = screen.getByLabelText('invalid-form');
  expect(isFormValid).not.toBeInTheDocument();
});
```

## Troubleshooting

### Run tests in other frameworks

Storybook provides community-led addons for other frameworks like Vue 2 and Angular. However, these addons still lack support for the latest stable Storybook release. If you're interested in helping out, we recommend reaching out to the maintainers using the default communication channels (GitHub and Discord server).

### The args are not being passed to the test

The components returned by `composeStories` or `composeStory` not only can be rendered as React components but also come with the combined properties from the story, meta, and global configuration. This means that if you want to access args or parameters, for instance, you can do so:

```typescript
// Button.test.ts|tsx
import { render, screen } from '@testing-library/react';
 
import { composeStories } from '@storybook/react';
 
import * as stories from './Button.stories';
 
const { Primary } = composeStories(stories);
 
test('reuses args from composed story', () => {
  render(<Primary />);
 
  const buttonElement = screen.getByRole('button');
  // Testing against values coming from the story itself! No need for duplication
  expect(buttonElement.textContent).toEqual(Primary.args.label);
});
```

## Learn about other UI tests

- Component tests for user behavior simulation
- Visual tests for appearance
- Accessibility tests for accessibility
- Snapshot tests for rendering errors and warnings
- Test runner to automate test execution
- Test coverage for measuring code coverage
- End-to-end tests for simulating real user scenarios
- Unit tests for functionality
</document_content>
</document>

<document index="34">
<source>stories-in-end-to-end-tests.md</source>
<document_content>
# Stories in end-to-end tests

Storybook seamlessly integrates with additional testing frameworks like Cypress and Playwright to provide a comprehensive testing solution. By leveraging the Component Story Format (CSF), developers can write test cases that simulate user interactions and verify the behavior of individual components within the Storybook environment. This approach enables developers to thoroughly test their components' functionality, responsiveness, and visual appearance across different scenarios, resulting in more robust and reliable applications.

## With Cypress

Cypress is an end-to-end testing framework. It enables you to test a complete instance of your application by simulating user behavior. With Component Story Format, your stories are reusable with Cypress. Each named export (in other words, a story) is renderable within your testing setup.

An example of an end-to-end test with Cypress and Storybook is testing a login component for the correct inputs. For example, if you had the following story:

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

> 💡 The play function contains small snippets of code that run after the story renders. It allows you to sequence interactions in stories.

With Cypress, you could write the following test:

```javascript
// /cypress/integration/Login.spec.js
/// <reference types="cypress" />
 
describe('Login Form', () => {
  it('Should contain valid login information', () => {
    cy.visit('/iframe.html?id=components-login-form--example');
    cy.get('#login-form').within(() => {
      cy.log('**enter the email**');
      cy.get('#email').should('have.value', 'email@provider.com');
      cy.log('**enter password**');
      cy.get('#password').should('have.value', 'a-random-password');
    });
  });
});
```

When Cypress runs your test, it loads Storybook's isolated iframe and checks if the inputs match the test values.

## With Playwright

Playwright is a browser automation tool and end-to-end testing framework from Microsoft. It offers cross-browser automation, mobile testing with device emulation, and headless testing. With Component Story Format, your stories are reusable with Playwright. Each named export (in other words, a story) is renderable within your testing setup.

A real-life scenario of user flow testing with Playwright would be how to test a login form for validity. For example, if you had the following story already created:

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

> 💡 The play function contains small snippets of code that run after the story renders. It allows you to sequence interactions in stories.

With Playwright, you can write a test to check if the inputs are filled and match the story:

```javascript
// tests/login-form/login.spec.js
const { test, expect } = require('@playwright/test');
 
test('Login Form inputs', async ({ page }) => {
  await page.goto('http://localhost:6006/iframe.html?id=components-login-form--example');
  const email = await page.inputValue('#email');
  const password = await page.inputValue('#password');
  await expect(email).toBe('email@provider.com');
  await expect(password).toBe('a-random-password');
});
```

Once you execute Playwright, it opens a new browser window, loads Storybook's isolated iframe, asserts if the inputs contain the specified values, and displays the test results in the terminal.

## Learn about other UI tests

- Component tests for user behavior simulation
- Visual tests for appearance
- Accessibility tests for accessibility
- Snapshot tests for rendering errors and warnings
- Test runner to automate test execution
- Test coverage for measuring code coverage
- End-to-end tests for simulating real user scenarios
- Unit tests for functionality
</document_content>
</document>

<document index="35">
<source>How to document components.md</source>
<document_content>
# How to document components

When you write component stories during development, you also create basic documentation to revisit later.

Storybook gives you tools to expand this essential documentation with prose and layout that feature your components and stories prominently. That allows you to create UI library usage guidelines, design system sites, and more.

[The screenshot shows a Storybook interface displaying a TimeFrame component documentation page. The interface includes a navigation sidebar on the left with sections like Introduction, Library (with components such as Badges, Buttons, Charts), and Web App. The main content area shows the TimeFrame component with its description, usage frequency visualization, and properties table displaying fields like label, startTime with their descriptions and default values.]

If you're including Storybook in your project for the first time, we provide you with a documentation page ("Autodocs" for short), positioned near your stories. It's a baseline template automatically generated, listing your existing stories and relevant metadata.

Additionally, you can customize this template if needed or create free-form pages for each component using MDX. In both cases, you'll use Doc Blocks as the building blocks to create full-featured documentation.

Docs is autoconfigured to work out of the box in most use cases. In some cases, you may need or want to tweak the configuration. Read more about it here.
</document_content>
</document>
<document index="36">
<source>Automatic documentation and Storybook.md</source>
<document_content>
Automatic documentation and Storybook

React
Vue
Angular
Web Components
More
Watch a video tutorial
Storybook Autodocs is a powerful tool that can help you quickly generate comprehensive documentation for your UI components. By leveraging Autodocs, you're transforming your stories into living documentation which can be further extended with MDX and Doc Blocks to provide a clear and concise understanding of your components' functionality.

Storybook infers the relevant metadata (e.g., args, argTypes, parameters) and automatically generates a documentation page with this information positioned at the root-level of your component tree in the sidebar.

Storybook autodocs

Set up automated documentation

Autodocs is configured through tags. If a CSF file contains at least one story tagged with autodocs, then a documentation page will be generated for that component.

To enable automatic documentation for all stories in a project, add it to tags in your .storybook/preview.js|ts file:

.storybook/preview.ts
Typescript
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import type { Preview } from '@storybook/your-renderer';
 
const preview: Preview = {
  // ...rest of preview
  //👇 Enables auto-generated documentation for all stories
  tags: ['autodocs'],
};
 
export default preview;
You can also enable it at the component (or story) level:

Button.stories.ts
Typescript
// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ['autodocs'],
};
export default meta;
You can disable auto docs for a particular component by removing the tag:

Page.stories.ts
Typescript
// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta } from '@storybook/your-framework';
 
import { Page } from './Page';
 
const meta: Meta<typeof Page> = {
  component: Page,
  // 👇 Disable auto-generated documentation for this component
  tags: ['!autodocs'],
};
export default meta;
Similarly, you can exclude a particular story from the auto docs page, by removing the tag:

Button.stories.ts
Typescript
// Replace your-framework with the framework you are using (e.g., nextjs, vue3-vite)
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ['autodocs'],
};
export default meta;
 
type Story = StoryObj<typeof Button>;
 
export const UndocumentedStory: Story = {
  // 👇 Removes this story from auto-generated documentation
  tags: ['!autodocs'],
};
Configure

In addition to enabling the feature with tags, you can extend your Storybook configuration file (i.e., .storybook/main.js|ts|cjs) and provide additional options to control how documentation gets created. Listed below are the available options and examples of how to use them.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  docs: {
    //👇 See the table below for the list of supported options
    defaultName: 'Documentation',
  },
};
 
export default config;
Option	Description
defaultName	Renames the auto-generated documentation page
Default: docs: { defaultName: 'Documentation' }
Write a custom template

Watch a video tutorial
To replace the default documentation template used by Storybook, you can extend your UI configuration file (i.e., .storybook/preview.js|ts) and introduce a docs parameter. This parameter accepts a page function that returns a React component, which you can use to generate the required template. For example:

.storybook/preview.tsx
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
 
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
};
 
export default preview;
💡
Internally, Storybook uses a similar implementation to generate the default template. See the Doc Blocks API reference to learn more about how Doc Blocks work.
Going over the code snippet in more detail. When Storybook starts up, it will override the default template with the custom one composed of the following:

A header with the component's metadata retrieved by the Title, Subtitle, and Description Doc Blocks.
The first story defined in the file via the Primary Doc Block with a handy set of UI controls to zoom in and out of the component.
An interactive table with all the relevant args and argTypes defined in the story via the Controls Doc Block.
A overview of the remaining stories via the Stories Doc Block.
With MDX

You can also use MDX to generate the documentation template. This is useful in non-React projects where JSX-handling is not configured. Normally, when you create an MDX file in your project, it is treated as normal documentation. To indicate that an MDX file is a documentation template, supply the isTemplate property to its Meta Doc Block. For example:

DocumentationTemplate.mdx
import { Meta, Title, Primary, Controls, Stories } from '@storybook/blocks';
 
{/*
  * 👇 The isTemplate property is required to tell Storybook that this is a template
  * See https://storybook.js.org/docs/api/doc-blocks/doc-block-meta
  * to learn how to use
*/}
 
<Meta isTemplate />
 
<Title />
 
# Default implementation
 
<Primary />
 
## Inputs
 
The component accepts the following inputs (props):
 
<Controls />
 
---
 
## Additional variations
 
Listed below are additional variations of the component.
 
<Stories />
Then you can use it in your .storybook/preview.js|ts or an individual story file by importing it:

.storybook/preview.jsx
import DocumentationTemplate from './DocumentationTemplate.mdx';
 
export default {
  parameters: {
    docs: {
      page: DocumentationTemplate,
    },
  },
};
💡
If you only need to override the documentation page for a single component, we recommend creating an MDX file and referencing it directly via the <Meta of={} /> Doc Block.
Generate a table of contents

Storybook's auto-generated documentation pages can be quite long and difficult to navigate. To help with this, you can enable the table of contents feature to provide a quick overview of the documentation page and allow users to jump to a specific section. To enable it, extend your Storybook UI configuration file (i.e., .storybook/preview.js|ts) and provide a docs parameter with a toc property.

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
  },
};
 
export default preview;
Configure the table of contents

By default, the table of contents on the documentation page will only show the h3 headings that are automatically generated. However, if you want to customize the table of contents, you can add more parameters to the toc property. The following options and examples of how to use them are available.

Option	Description
contentsSelector	Defines the container's CSS selector for search for the headings
toc: { contentsSelector: '.sbdocs-content' }
disable	Hides the table of contents for the documentation pages
toc: { disable: true }
headingSelector	Defines the list of headings to feature in the table of contents
toc: { headingSelector: 'h1, h2, h3' }
ignoreSelector	Configures the table of contents to ignore specific headings or stories. By default, the table of contents will ignore all content placed within Story blocks
toc: { ignoreSelector: '.docs-story h2' }
title	Defines a title caption for the table of contents.
Accepts one of: string, null, React element
toc: { title: 'Table of Contents' }
unsafeTocbotOptions	Provides additional TocBot configuration options
toc: { unsafeTocbotOptions: { orderedList: true } }
ℹ️
The contentsSelector, headingSelector, and ignoreSelector properties allow additional customization. For more information on using them, see the Tocbot documentation.
.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    docs: {
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2, h3',
        ignoreSelector: '#primary',
        title: 'Table of Contents',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
    },
  },
};
 
export default preview;
Component-level configuration

If you want to customize the table of contents for a specific story, you can include a toc property in the story's default export and provide the required configuration. For example, if you need to hide the table of contents for a specific story, adjust your story as follows:

MyComponent.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: {
        disable: true, // 👈 Disables the table of contents
      },
    },
  },
};
 
export default meta;
Customize component documentation

Creating automated documentation with Storybook's Autodocs provides you with the starting point to build a sustainable documentation pattern. Nevertheless, it may not be suited for every case, and you may want to extend it and provide additional information. We recommend combining MDX alongside Storybook's Doc Blocks for such cases to author your documentation.

Advanced configuration

Documenting multiple components

Sometimes it's helpful to document multiple components together. For example, a component library’s ButtonGroup and Button components might not make sense without one another.

Autodocs allows you to document your "main" component, defined by the component property, as well as one or more subcomponents related to it.

List.stories.ts|tsx
Typescript
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
 
import { List } from './List';
import { ListItem } from './ListItem';
 
const meta: Meta<typeof List> = {
  component: List,
  subcomponents: { ListItem }, //👈 Adds the ListItem component as a subcomponent
};
export default meta;
 
type Story = StoryObj<typeof List>;
 
export const Empty: Story = {};
 
export const OneItem: Story = {
  render: (args) => (
    <List {...args}>
      <ListItem />
    </List>
  ),
};
Subcomponents in ArgTypes doc block

The main component and its subcomponents will show up in a tabbed version of the ArgTypes doc block. The tab titles will correspond to the keys of the subcomponents object.

If you want to organize your documentation differently for component groups, we recommend using MDX. It gives you complete control over how your components are displayed and supports any configuration.

Customize the Docs Container

The Docs Container is the component that wraps up the documentation page. It's responsible for rendering the documentation page in Storybook's UI. You can customize it by creating your own component and updating your Storybook UI configuration file (i.e., .storybook/preview.js|ts) to reference it.

.storybook/preview.ts
Typescript
import * as React from 'react';
 
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
import { DocsContainer } from '@storybook/blocks';
 
const ExampleContainer = ({ children, ...props }) => {
  return <DocsContainer {...props}>{children}</DocsContainer>;
};
 
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      container: ExampleContainer,
    },
  },
};
 
export default preview;
Override the default theme

By default, Storybook provides two themes for the UI: light and dark. If you need to customize the theme used by the documentation to match the existing one, you can update your Storybook UI configuration file (i.e., .storybook/preview.js|ts) and apply it.

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
import { themes, ensure } from '@storybook/theming';
 
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: ensure(themes.dark), // The replacement theme to use
    },
  },
};
 
export default preview;
Working with custom MDX components

Out of the box, Storybook has a set of components that you can use to customize your documentation page. If you're working with a design system or component library and wish to add them to your documentation page, you can override the MDXProvider component inherited from @mdx-js/react with your own. However, there's a caveat to this, the component replacement will only have an impact if you're writing documentation using Markdown syntax (e.g., # for headings). Native HTML elements, such as <h1>, will not be replaced with your custom implementation.

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
import { MDXProvider } from '@mdx-js/react';
 
import { DocsContainer } from '@storybook/blocks';
 
import * as DesignSystem from 'your-design-system';
 
export const MyDocsContainer = (props) => (
  <MDXProvider
    components={{
      h1: DesignSystem.H1,
      h2: DesignSystem.H2,
    }}
  >
    <DocsContainer {...props} />
  </MDXProvider>
);
 
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      container: MyDocsContainer,
    },
  },
};
 
export default preview;
💡
This is not a Storybook issue but a detail of how MDX works. From their migration guide:
“We now ‘sandbox’ components, for lack of a better name. It means that when you pass a component for h1, it does get used for # hi but not for <h1>hi</h1>”
Troubleshooting

The table of contents doesn't render as expected

When using Autodocs's table of contents, you may encounter situations where it appears differently than expected. To help you resolve these problems, we have compiled a list of possible scenarios that may cause issues.

With simple documentation pages

If you have a documentation page with only one matching heading and create a table of contents for it, the table of contents will not be hidden by default. A potential solution for this issue would be to add a second heading or turn it off entirely.

With small screens

If the screen width is less than 1200px, the table of contents will be hidden by default. Currently, there's no built-in solution for this issue that doesn't impact the documentation page's style compatibility.

With MDX

If you're writing unattached documentation using MDX, you cannot customize the table of contents primarily due to the lack of support for defining parameters based on the current implementation. As a result, the table of contents will always revert to the default configuration provided globally.

The auto-generated documentation is not showing up in a monorepo setup

Out of the box, Storybook's Autodocs feature is built to generate documentation for your stories automatically. Nevertheless, if you're working with a monorepo setup (e.g., Yarn Workspaces, pnpm Workspaces), you may run into issues where part of the documentation may not be generated for you. To help you troubleshoot those issues, we've prepared some recommendations that might help you.

Update your import statements to reference the component directly instead of the package's root. For example:

MyComponent.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
// ❌ Don't use the package's index file to import the component.
// import { MyComponent } from '@component-package';
 
// ✅ Use the component's export to import it directly.
import { MyComponent } from '@component-package/src/MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MyComponent',
  component: MyComponent,
};
 
export default meta;
Additionally, if you're developing using TypeScript, you may need to update Storybook's configuration file (i.e., .storybook/main.js|ts) to include the following:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    // Overrides the default Typescript configuration to allow multi-package components to be documented via Autodocs.
    reactDocgen: 'react-docgen',
    check: false,
  },
};
 
export default config;
If you're still encountering issues, we recommend reaching out to the community using the default communication channels (e.g., GitHub discussions).

The controls are not updating the story within the auto-generated documentation

If you turned off inline rendering for your stories via the inline configuration option, you would run into a situation where the associated controls are not updating the story within the documentation page. This is a known limitation of the current implementation and will be addressed in a future release.

Learn more about Storybook documentation

Autodocs for creating documentation for your stories
MDX for customizing your documentation
Doc Blocks for authoring your documentation
Publishing docs to automate the process of publishing your documentation
</document_content>
</document>
<document index="37">
<source>MDX.md</source>
<document_content>
MDX

React
Vue
Angular
Web Components
More
Watch a video tutorial
MDX files mix Markdown and Javascript/JSX to create rich interactive documentation. You can use Markdown’s readable syntax (such as # heading) for your documentation, include stories defined in Component Story Format (CSF), and freely embed JSX component blocks at any point in the file. All at once.

In addition, you can write pure documentation pages in MDX and add them to Storybook alongside your stories.

MDX simple example result

ℹ️
Writing stories directly in MDX was removed in Storybook 8, and we're no longer supporting it. Please reference the previous documentation for guidance on that feature or migrate to the new format.
Basic example

Let's start with an example, Checkbox.mdx, combining Markdown with a single story.

Checkbox.mdx
import { Canvas, Meta } from '@storybook/blocks';
 
import * as CheckboxStories from './Checkbox.stories';
 
<Meta of={CheckboxStories} />
 
# Checkbox
 
A checkbox is a square box that can be activated or deactivated when ticked.
 
Use checkboxes to select one or more options from a list of choices.
 
<Canvas of={CheckboxStories.Unchecked} />
This MDX file references a story file, Checkbox.stories.js|ts, that is written in Component Story Format (CSF):

Checkbox.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Checkbox } from './Checkbox';
 
const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};
 
export default meta;
type Story = StoryObj<typeof Checkbox>;
 
export const Unchecked: Story = {
  args: {
    label: 'Unchecked',
  },
};
And here's how that's rendered in Storybook:

MDX simple example result

There’s a lot going on here. We're writing Markdown, we're writing JSX, and we're also defining and referencing Storybook stories that are drop-in compatible with the entire Storybook ecosystem.

Let’s break it down.

MDX and CSF

The first thing you'll notice is that the component documentation is divided into distinct formats: one for writing component stories describing each possible component state and the second one for documenting how to use them. This split leverages the best qualities of each format:

CSF is great for succinctly defining stories (component examples). If you use TypeScript, it also provides type safety and auto-completion.
MDX is great for writing structured documentation and composing it with interactive JSX elements.
Anatomy of MDX

Assuming you’re already familiar with writing stories with CSF, we can dissect the MDX side of things in greater detail.

The document consists of a number of blocks separated by blank lines. Since MDX mixes a few different languages together, it uses those blank lines to help distinguish where one starts, and the next begins. Failing to separate blocks by whitespace can cause (sometimes cryptic) parse errors.

Going through the code blocks in sequence:

{ /* Checkbox.mdx */ }
Comments in MDX are JSX blocks that contain JS comments.

Checkbox.mdx
import { Canvas, Meta } from '@storybook/blocks';
 
import * as CheckboxStories from './Checkbox.stories';
Imports the components and stories that will be used in the JSX throughout the rest of the file.

Checkbox.mdx
import { Meta } from '@storybook/blocks';
 
import * as CheckboxStories from './Checkbox.stories';
 
<Meta of={CheckboxStories} />
ℹ️
When providing the of prop to the Meta block, make sure that you're referencing the default export of the story file and not the component itself to prevent render issues with the generated documentation.
The Meta block defines where the document will be placed in the sidebar. In this case, it is adjacent to the Checkbox’s stories. By default, the docs sidebar node is titled "Docs", but this can be customized by passing a name prop (e.g., <Meta of={CheckboxStories} name="Info" />). If you want to place a docs node at an arbitrary point in the navigation hierarchy, you can use the title prop (e.g., <Meta title="path/to/node" />).

# Checkbox
 
A checkbox is a square box that can be activated or deactivated when ticked.
 
Use checkboxes to select one or more options from a list of choices.
MDX supports standard markdown ("commonmark") by default and can be extended to support GitHub Flavored Markdown (GFM) and other extensions (see the Troubleshooting section to learn more about some of the current limitations).

Checkbox.mdx
import { Canvas } from '@storybook/blocks';
 
import * as CheckboxStories from './Checkbox.stories';
 
<Canvas of={CheckboxStories.Unchecked} />
Finally, MDX supports blocks of arbitrary JSX.

In this case, we are leveraging “Doc Blocks”, a library of documentation components designed to work with Storybook stories to show your stories, your component APIs & controls for interacting with your components inside your documentation, among other utilities.

In addition to Doc Blocks, MDX can incorporate arbitrary React components, making it a very flexible documentation system. Suppose you want a stylized list of “dos and don’ts” for your component; you can use off-the-shelf components or write your own.

Guideline.mdx
<Guidelines>
  <Dos>
    - Use buttons for the main actions on your page
    - Identify the primary action and make it `primary`
  </Dos>
  <Donts>
    - Use a button when a link will do (e.g., for navigation-only actions)
    - Use multiple `primary` buttons in a single UI state
  </Donts>
</Guidelines>
Known limitations

While MDX supports a variety of runtimes (React, Preact, Vue), Storybook’s implementation is React-only. That means your documentation is rendered in React, while your stories render in the runtime of your choice (React, Vue, Angular, Web Components, Svelte, etc.).

Setup custom documentation

In addition, to document your components with MDX, you can also extend it to write other types of content, such as guidelines or best practices on how to use them. To enable custom documentation for your stories with this format, start by updating your Storybook configuration file (i.e., .storybook/main.js|ts|cjs).

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  // Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
  framework: '@storybook/your-framework',
  stories: [
    //👇 Your documentation written in MDX along with your stories goes here
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: ['@storybook/addon-essentials'],
};
 
export default config;
Create an MDX file to add your custom documentation. Depending on how you want your documentation to render in the UI, you'll need to consider the following use cases.

Using the Meta Doc Block

If you need to match the component documentation to an existing story, you can configure the Meta Doc Block to control how the documentation gets rendered. Out of the box, it allows you to define a custom title or a reference to the story you need to document (i.e., via the of prop). For example:

custom-title
of-prop
Button.mdx
import { Meta, Controls } from '@storybook/blocks';
 
<Meta title="Button" />
 
# Definition
 
Button is a clickable interactive element that triggers a response.
 
You can place text and icons inside of a button.
 
Buttons are often used for form submissions and to toggle elements into view.
 
## Usage
 
The component comes in different variants such as `primary`, `secondary`, `large` and `small` which you can use to alter the look and feel of the button.
 
## Inputs
 
Button has the following properties:
 
<Controls />
Writing unattached documentation

Suppose you're documenting an existing component and only provide the Meta Doc Block without additional props or other blocks. In that case, Storybook will consider it as "unattached" documentation, or in other words, a "documentation-only" page, and it will render it differently in the sidebar navigation menu:

ExampleDocumentation.mdx
import { Meta } from '@storybook/blocks';
 
import * as ExampleComponentStories from './ExampleComponent.stories';
 
{/* 👇 Documentation-only page */}
 
<Meta title="Documentation" />
 
{/* 👇 Component documentation page */}
 
<Meta of={ExampleComponentStories} />
MDX docs only story

Using the File System

However, providing the Meta Doc Block may not be required for certain use cases, such as standalone pages or even as guidelines for testing your components. In that case, you can safely omit it. Storybook will instead rely on the file's physical location to place the documentation in the sidebar, overriding any pre-existent auto-generated documentation with your own. For example:

src/components/Select.mdx
# Select
 
Select is a type of input that allows users to choose one or more options from a list of choices.
 
The options are hidden by default and revealed when a user interacts with an element.
 
It shows the currently selected option in its default collapsed state.
 
## Design implementation
 
To help users get acquainted with the existing UI elements, it is recommended to use check the Figma file to see how the select input is implemented.
 
### When to use?
 
In a select input where there are less than 3-4 items, consider using radio boxes, or radio inputs instead.
 
### How to use?
 
To help users understand the options available in a select input, include a default option that is unselectable and acts as a label.
💡
If you're overriding an existing auto-generated documentation page enabled via tags configuration property, we recommend removing it to avoid errors.
Once the custom MDX documentation is loaded, Storybook will infer the title and location using the same heuristic rules to generate auto-title stories and render it in the sidebar as a Docs entry.

Working with standalone documentation pages

Writing standalone documentation pages is a common use case that applies not only on a per-component but also on a per-project basis. For example, you might want to document your project's onboarding process with instructions on using it. To do so, you can create a new MDX file containing your documentation using a similar structure and content:

src/GettingStarted.mdx
# Getting Started
 
Welcome! Whether you're a designer or a developer, this guide will help you get started and connect you to the essential resources you need.
 
## Table of Contents
 
- [Design Resources](#design-resources)
 
  - [Figma](#figma)
  - [UI/UX Design Guidelines](#uiux-design-guidelines)
  - [Design Assets](#design-assets)
 
- [Development Resources](#development-resources)
  - [Coding Standards](#coding-standards)
  - [Version Control](#version-control)
  - [Development Tools](#development-tools)
 
---
 
## Design Resources
 
### Figma
 
[Figma](https://www.figma.com/) is a collaborative design and prototyping tool. It's the heart of the design process, allowing designers to work together seamlessly.
 
- **Get Access**: If you're not already part of the Figma project, request access from the project lead or manager.
 
### UI/UX Design Guidelines
 
Before you dive into designing, familiarize yourself with our UI/UX design guidelines. They provide valuable insights into our design philosophy and standards.
 
- [UI/UX Guidelines Document](https://your-design-guidelines-link.com)
 
### Design Assets
 
All the essential design assets like logos, icons, and brand guidelines can be found in the Figma project. Ensure you have access and familiarize yourself with these assets for consistency.
 
---
 
## Development Resources
 
### Coding Standards
 
Maintaining a consistent code style is essential for collaborative development. Our coding standards document will guide you on best practices.
 
- [Coding Standards Document](https://your-coding-standards-link.com)
 
### Version Control
 
We use Git for version control. Make sure you have Git installed and are familiar with its basics.
 
### Development Tools
 
Your development environment is critical. Here are some tools and resources to help you set up your workspace:
 
- **Code Editor**: We recommend using [Visual Studio Code](https://code.visualstudio.com/) for development. It's highly customizable and supports a wide range of extensions.
 
- **Package Manager**: [npm](https://www.npmjs.com/) is the package manager we use for JavaScript projects. Install it to manage project dependencies.
 
---
MDX guidelines page

When Storybook loads the documentation, it will infer the placement of the page in the sidebar navigation menu using the file's physical location and render it as a Docs entry.

Fully control custom documentation

Documentation can be expensive to maintain and keep up to date when applied to every project component. To help simplify this process, Storybook provides a set of useful UI components (i.e., Doc Blocks) to help cover more advanced cases. If you need additional content, use them to help create your custom documentation.

Button.mdx
import { Meta, Story } from '@storybook/blocks';
 
import * as ButtonStories from './Button.stories';
 
<Meta of={ButtonStories} />
 
# Button
 
Button is a clickable interactive element that triggers a response.
 
You can place text and icons inside of a button.
 
Buttons are often used for form submissions and to toggle elements into view.
 
## Usage
 
<Story of={ButtonStories.Basic} />
Working with multiple components

If you need to document multiple components in a single documentation page, you can reference them directly inside your MDX file. Internally, Storybook looks for the story metadata and composes it alongside your existing documentation. For example:

Page.mdx
import { Canvas, Meta, Story } from '@storybook/blocks';
 
import * as ListStories from './List.stories';
 
import * as ListItemStories from './ListItem.stories';
 
import * as PageStories from './Page.stories';
 
<Meta of={PageStories} />
 
# Page
 
Page is a layout container that is used to position children in predetermined areas.
 
It's often used to apply consistent positioning for content across pages in an application
 
## Usage
 
<Canvas of={PageStories.Basic} />
 
# List
 
List is a grouping of related items. List can be ordered with multiple levels of nesting.
 
## Usage
 
<Story of={ListStories.Filled} />
 
# List Item
 
List items are used to group related content in a list. They must be nested within a List component.
 
## Usage
 
<Story of={ListItemStories.Starter} meta={ListItemStories} />
Generate documentation from Markdown

If you need to extend your documentation with additional content written in Markdown, you can use the Markdown Doc Block to import the available content, and Storybook will render it alongside your existing documentation. For example, if you have a CHANGELOG.md file, you can import it and render it in your documentation page as follows:

Changelog.mdx
import { Meta, Markdown } from '@storybook/blocks';
 
import Readme from '../../Changelog.md?raw';
 
<Meta title="Changelog" />
 
# Changelog
 
<Markdown>{Readme}</Markdown>
ℹ️
The Markdown Doc Block provides additional configuration options to customize the rendering of your documentation. For more information, refer to the API documentation.
Changelog markdown in an MDX story

Linking to other stories and pages

Another way to improve documentation is by linking to other stories and pages. Suppose you already have a component story with the following unique identifier, some--id, and you want to link it to your documentation page. In that case, you can use the path query string to redirect to the documentation entry related to the story:

[Go to specific documentation page](?path=/docs/some--id)
Instead, if you need to target a specific documentation section, you can adjust the link to point at it. For example:

[Go to the conclusion of the documentation page](?path=/docs/some--id#conclusion)
However, cross-linking documentation isn't restricted to documentation pages. You can adjust the path query and supply the story's unique identifier if you need to reference a specific one. For example:

[Go to specific story canvas](?path=/story/some--id)
💡
By applying this pattern with the Controls addon, all anchors will be ignored in Canvas based on how Storybook handles URLs to track the args values.
Troubleshooting

Markdown tables aren't rendering correctly

If you're extending your documentation to include specific features (e.g., tables, footnotes), you may run into some issues rendering them correctly using the current MDX version supported by Storybook. We recommend enabling the remark-gfm plugin in your configuration file (i.e., .storybook/main.js|ts) to render them correctly.

.storybook/main.ts
Typescript
import remarkGfm from 'remark-gfm';
 
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // Other addons go here
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
};
 
export default config;
💡
The remark-gfm package is not included by default with Storybook and must be installed separately as a development dependency. To learn more about how to use it and the other breaking changes introduced by MDX, refer to the GFM guide and the migration guide provided by the MDX team for more information.
The MDX documentation doesn't render in my environment

As Storybook relies on MDX 3 to render documentation, some technical limitations may prevent you from migrating to this version. If that's the case, we've prepared a set of instructions to help you transition to this new version.

Storybook doesn't create documentation for my component stories

If you run into a situation where Storybook is not able to detect and render the documentation for your component stories, it may be due to a misconfiguration in your Storybook. Check your configuration file (i.e., .storybook/main.js|ts) and ensure the stories configuration element provides the correct path to your stories location (e.g., ../src/**/*.stories.@(js|jsx|mjs|ts|tsx)).

The migration seems flaky and keeps failing

By default, running the migration command will prompt you to update the existing MDX files in your project according to the MDX version supported by Storybook. However, this might be a disruptive process, specifically if you're upgrading from a previous version of Storybook where you were using the legacy MDX format. To help you troubleshoot those issues, we've prepared some recommendations that might help you.

Start by running the following command inside your project directory:

npx @hipster/mdx2-issue-checker
💡
Depending on the volume, you may be required to run the command multiple times to fix all the issues.
When it finishes, it will output the list of files causing issues. You can then use this information to fix the problems manually.

Additionally, if you're working with VSCode, you can add the MDX extension and enable MDX experimental support for linting, type checking, and auto-completion by adding the following to your user settings:

{
  "mdx.experimentalLanguageServer": true
}
If you're still encountering issues, we recommend reaching out to the community using the default communication channels (e.g., GitHub discussions).

The controls are not updating the story within the MDX documentation page

If you turned off inline rendering for your stories via the inline configuration option, you would run into a situation where the associated controls are not updating the story within the documentation page. This is a known limitation of the current implementation and will be addressed in a future release.

The React version used is unexpected

For most projects, Storybook's addon-docs uses the React version listed in your project's dependencies. If it does not find one, it will use React 18.2.0. There are two exceptions to this:

Preact projects will always use React 17
Next.js projects will always use the canary version that comes with the Next.js version installed, regardless of which React version is listed in the project’s dependencies.
If you're having issues with the React version used, you may need to re-create your project's node_modules folder to ensure the correct version is used.

Learn more about Storybook documentation

Autodocs for creating documentation for your stories
MDX for customizing your documentation
Doc Blocks for authoring your documentation
Publishing docs to automate the process of publishing your documentation
</document_content>
</document>
<document index="38">
<source>Doc blocks.md</source>
<document_content>
Doc blocks

React
Vue
Angular
Web Components
More
Watch a video tutorial
Storybook offers several doc blocks to help document your components and other aspects of your project.

There are two common ways to use doc blocks in Storybook, within MDX and as part of the docs page template.

Within MDX

The blocks are most commonly used within Storybook's MDX documentation:

Screenshot of mdx content

{/* ButtonDocs.mdx */}
 
import { Meta, Primary, Controls, Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';
 
<Meta of={ButtonStories} />
 
# Button
 
A button is ...
 
<Primary />
 
## Props
 
<Controls />
 
## Stories
 
### Primary
 
A button can be of primary importance.
 
<Story of={ButtonStories.Primary} />
 
A button can be of secondary importance.
 
<Story of={ButtonStories.Secondary} />
 
{/* ... */}
Customizing the automatic docs page

The blocks are also used to define the page template for automatics docs. For example, here's the default template:

Screenshot of automatic docs template

import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
 
export const autoDocsTemplate = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Primary />
    <Controls />
    <Stories />
  </>
);
If you override the default page template, you can similarly use Doc Blocks to build the perfect documentation page for your project.

Note that some doc blocks render other blocks. For example, the <Stories /> block expands to:

## Stories
 
<Canvas>
  ### Story name
  <Description />
  <Story />
  <Source />
</Canvas>
 
{/* ... repeat <Canvas> for each story */}
As a result, for example, customizing the Source block via parameters (see next section) will also affect the Source blocks rendered as part of Canvas blocks.

Customizing doc blocks

In both use cases (MDX and automatic docs), many of the doc blocks can be customized via parameters.

For example, you can filter out the style prop from all Controls tables through your Storybook:

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    docs: {
      controls: { exclude: ['style'] },
    },
  },
};
 
export default preview;
ℹ️
Parameters can also be defined at the component (or meta) level or the story level, allowing you to customize Doc Blocks exactly as you need, where you need.
The blocks that accept customization via parameters are marked in the list of available blocks below.

When using a doc block in MDX, it can also be customized with its props:

<Controls exclude={['style']}>
Available blocks

Each block has a dedicated API reference page detailing usage, available options, and technical details.

ArgTypes

ℹ️
Accepts parameters in the namespace parameters.docs.argTypes.
The ArgTypes block can be used to show a static table of arg types for a given component as a way to document its interface.

Screenshot of ArgTypes block

Canvas

ℹ️
Accepts parameters in the namespace parameters.docs.canvas.
The Canvas block is a wrapper around a Story, featuring a toolbar that allows you to interact with its content while automatically providing the required Source snippets.

Screenshot of Canvas block

ColorPalette

The ColorPalette block allows you to document all color-related items (e.g., swatches) used throughout your project.

Screenshot of ColorPalette and ColorItem blocks

Controls

ℹ️
Accepts parameters in the namespace parameters.docs.controls.
The Controls block can be used to show a dynamic table of args for a given story, as a way to document its interface, and to allow you to change the args for a (separately) rendered story (via the Story or Canvas blocks).

Screenshot of Controls block

Description

The Description block displays the description for a component, story, or meta obtained from their respective JSDoc comments.

Screenshot of Description block

IconGallery

The IconGallery block lets you quickly document all icons associated with your project, displayed in a neat grid.

Screenshot of IconGallery and IconItem blocks

Markdown

The Markdown block allows you to import and include plain markdown in your MDX files.

Screenshot of Markdown block

Meta

The Meta block is used to attach a custom MDX docs page alongside a component’s list of stories. It doesn’t render any content but serves two purposes in an MDX file:

Attaches the MDX file to a component and its stories, or
Controls the location of the unattached docs entry in the sidebar.
Primary

The Primary block displays the primary (first defined in the stories file) story in a Story block. It is typically rendered immediately under the title in a docs entry.

Screenshot of Primary block

Source

ℹ️
Accepts parameters in the namespace parameters.docs.source.
The Source block is used to render a snippet of source code directly.

Screenshot of Source block

Stories

The Stories block renders the full collection of stories in a stories file.

Screenshot of Stories block

Story

ℹ️
Accepts parameters in the namespace parameters.docs.story.
Stories (component tests) are Storybook's fundamental building blocks.

In Storybook Docs, you can render any of your stories from your CSF files in the context of an MDX file with all annotations (parameters, args, loaders, decorators, play function) applied using the Story block.

Screenshot of Story block

Subtitle

The Subtitle block can serve as a secondary heading for your docs entry.

Screenshot of Subtitle block

Title

The Title block serves as the primary heading for your docs entry. It is typically used to provide the component or page name.

Screenshot of Title block

Typeset

The Typeset block helps document the fonts used throughout your project.

Screenshot of Typeset block

Unstyled

The Unstyled block is a unique block that disables Storybook's default styling in MDX docs wherever it is added.

By default, most elements (like h1, p, etc.) in docs have a few default styles applied to ensure the docs look good. However, sometimes you might want some of your content not to have these styles applied. In those cases, wrap the content with the Unstyled block to remove the default styles.

Screenshot of Unstyled block

Make your own Doc Blocks

Storybook also provides a useOf hook to make it easier to create your own blocks that function like the built-in blocks.

Troubleshooting

Why can't I use the Doc Blocks inside my stories?

Storybook's Doc Blocks are highly customizable and helpful building blocks to assist you with building your custom documentation. Although most of them enable you to customize them with parameters or globally to create custom documentation templates, they are primarily designed for MDX files. For example, if you try to add the ColorPalette block to your stories as follows, you'll get an error message when the story loads in Storybook.

MyComponent.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { ColorItem, ColorPalette } from '@storybook/blocks';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
const theme = {
  colors: {
    primaryDark: {
      value: '#1C1C1C',
    },
    primaryRegular: {
      value: '#363636',
    },
    primaryLight1: {
      value: '#4D4D4D',
    },
    primaryLight2: {
      value: '#878787',
    },
    primaryLight3: {
      value: '#D1D1D1',
    },
    primaryLight4: {
      value: '#EDEDED',
    },
  },
};
 
// ❌ Don't use the Doc Blocks inside your stories. It will break Storybook with a cryptic error.
export const Colors: Story = {
  render: () => (
    <ColorPalette>
      {Object.entries(theme.colors).map(([key, { value }]) => (
        <ColorItem
          colors={{
            [key]: value,
          }}
          key={key}
          subtitle={`theme.colors.${key}`}
          title={key}
        />
      ))}
    </ColorPalette>
  ),
};
Learn more about Storybook documentation

Autodocs for creating documentation for your stories
MDX for customizing your documentation
Doc Blocks for authoring your documentation
Publishing docs to automate the process of publishing your documentation
</document_content>
</document>
<document index="39">
<source>Preview and build docs.md</source>
<document_content>
Preview and build docs

React
Vue
Angular
Web Components
More
Storybook allows you to create rich and extensive documentation that will help you and any other stakeholder involved in the development process. Out of the box you have the tooling required to not only write it but also to preview it and build it.

Preview Storybook's documentation

At any point during your development, you can preview the documentation you've written. Storybook allows you to generate a preview of the final documentation when you use the --docs flag. We recommend including it in your package.json as a new script:

package.json
{
  "scripts": {
    "storybook-docs": "storybook dev --docs"
  }
}
Depending on your configuration, when you execute the storybook-docs script. Storybook will be put into documentation mode and will generate a different build.

It will look for any stories available either in MDX or CSF and based on the documentation you've added it will display it...

Storybook in documentation mode

There's some caveats to this build mode, as to the normal Storybook build:

The top level item refers to the primary story for your component.
Each individual story is now in a flattened display mode, with a different set of icons. This allows focus on the documentation itself.
Storybook's layout is rendered differently. The toolbar will not be displayed.
Publish Storybook's documentation

You can also publish your documentation the same you would publish your Storybook. You can use the --docs flag with the storybook build command. We recommend as well including it as a script in your package.json file:

package.json
{
  "scripts": {
    "build-storybook-docs": "storybook build --docs"
  }
}
Based on the configuration you have, when the build-storybook-docs script is executed, Storybook once again will be put into documentation mode and will generate a different build and output the documentation into the storybook-static folder.

The same caveats mentioned above will apply.

You can use any hosting provider to deploy your documentation, for instance:

Vercel
Netlify
S3
Learn more about Storybook documentation

Autodocs for creating documentation for your stories
MDX for customizing your documentation
Doc Blocks for authoring your documentation
Publishing docs to automate the process of publishing your documentation
</document_content>
</document>
<document index="40">
<source>Sharing.md</source>
<document_content>
Sharing

You have your components ready and tested. That's great! Now you want to make your component library available to your team or community to help them understand how they work. There are multiple ways you can do that. You can publish your Storybook to services like Chromatic, embed some of your stories in your own website, or use third party services like Figma.

Publish
Embed
Design integrations
Composition
Package Composition
</document_content>
</document>
<document index="41">
<source>Publish Storybook.md</source>
<document_content>
Publish Storybook

React
Vue
Angular
Web Components
More
Watch a video tutorial
Teams publish Storybook online to review and collaborate on works in progress. That allows developers, designers, PMs, and other stakeholders to check if the UI looks right without touching code or requiring a local dev environment.


Build Storybook as a static web application

First, we'll need to build Storybook as a static web application. The functionality is already built-in and pre-configured for most supported frameworks. Run the following command inside your project's root directory:

npm
npm run build-storybook
💡
You can provide additional flags to customize the command. Read more about the flag options here.
Storybook will create a static web application capable of being served by any web server. Preview it locally by running the following command:

npm
npx http-server ./path/to/build
Customizing the build for performance

By default, Storybook's production build will encapsulate all stories and documentation into the production bundle. This is ideal for small projects but can cause performance issues for larger projects or when decreased build times are a priority (e.g., testing, CI/CD). If you need, you can customize the production build with the test option in your main.js|ts configuration file and adjust your build script to enable the optimizations with the --test flag.

npm
npm run build-storybook -- --test
Publish Storybook with Chromatic

Once you've built your Storybook as a static web application, you can publish it to your web host. We recommend Chromatic, a free publishing service made for Storybook that documents, versions, and indexes your UI components securely in the cloud.

Storybook publishing workflow

To get started, sign up with your GitHub, GitLab, Bitbucket, or email and generate a unique project-token for your project.

Next, install the Chromatic CLI package from npm:

npm
npm install chromatic --save-dev
Run the following command after the package finishes installing. Make sure that you replace your-project-token with your own project token.

npx chromatic --project-token=<your-project-token>
When Chromatic finishes, you should have successfully deployed your Storybook. Preview it by clicking the link provided (i.e., https://random-uuid.chromatic.com).

Build 1 published.
 
View it online at https://www.chromatic.com/build?appId=...&number=1.
Chromatic publish build

Setup CI to publish automatically

Configure your CI environment to publish your Storybook and run Chromatic whenever you push code to a repository. Let's see how to set it up using GitHub Actions.

In your project's root directory, add a new file called chromatic.yml inside the .github/workflows directory:

.github/workflows/chromatic.yml
# Workflow name
name: 'Chromatic Publish'
 
# Event for the workflow
on: push
 
# List of jobs
jobs:
  test:
    # Operating System
    runs-on: ubuntu-latest
    # Job steps
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'yarn'
      - run: yarn
      #👇 Adds Chromatic as a step in the workflow
      - uses: chromaui/action@latest
        # Options required for Chromatic's GitHub Action
        with:
          #👇 Chromatic projectToken,
          projectToken: ${{ secrets.CHROMATIC_PROJECT_TOKEN }}
          token: ${{ secrets.GITHUB_TOKEN }}
💡
Secrets are secure environment variables provided by GitHub so that you don't need to hard code your project-token. Read the official documentation to learn how to configure them.
Commit and push the file. Congratulations, you've successfully automated publishing your Storybook. Now whenever you open a PR you’ll get a handy link to your published Storybook in your PR checks.

PR check publish

Review with your team

Publishing Storybook as part of the development process makes it quick and easy to gather team feedback.

A common method to ask for review is to paste a link to the published Storybook in a pull request or Slack.

If you publish your Storybook to Chromatic, you can use the UI Review feature to automatically scan your PRs for new and updated stories. That makes it easy to identify what changed and give feedback.

UI review in Chromatic

Versioning and history

When you publish Storybook, you also get component history and versioning down to the commit. That's useful during implementation review for comparing components between branches/commits to past versions.

Library history in Chromatic

Publish Storybook to other services

Since Storybook is built as a static web application, you can also publish it to any web host, including GitHub Pages, Netlify, AWS S3, and more. However, features such as Composition, embedding stories, history, versioning, and assets may require tighter integration with Storybook APIs and secure authentication. If you want to know more about headers, you can refer to the Migration guide. Additionally, if you want to learn about the Component Publishing Protocol (CPP), you can find more information below.

GitHub Pages

To deploy Storybook on GitHub Pages, use the community-built Deploy Storybook to GitHub Pages Action. To enable it, create a new workflow file inside your .github/workflows directory with the following content:

.github/workflows/deploy-github-pages.yml
# Workflow name
name: Build and Publish Storybook to GitHub Pages
 
on:
  # Event for the workflow to run on
  push:
    branches:
      - 'your-branch-name' # Replace with the branch you want to deploy from
 
permissions:
  contents: read
  pages: write
  id-token: write
 
# List of jobs
jobs:
  deploy:
    runs-on: ubuntu-latest
    # Job steps
    steps:
      # Manual Checkout
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      # Set up Node
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      #👇 Add Storybook build and deploy to GitHub Pages as a step in the workflow
      - uses: bitovi/github-actions-storybook-to-github-pages@v1.0.3
        with:
          install_command: yarn install # default: npm ci
          build_command: yarn build-storybook # default: npm run build-storybook
          path: storybook-static # default: dist/storybook
          checkout: false # default: true
ℹ️
The GitHub Pages Action requires additional configuration options to customize the deployment process. Refer to the official documentation for more information.
Component Publishing Protocol (CPP)
Search engine optimization (SEO)

If your Storybook is publicly viewable, you may wish to configure how it is represented in search engine result pages.

Description

You can provide a description for search engines to display in the results listing, by adding the following to the manager-head.html file in your config directory:

.storybook/manager-head.html
<meta name="description" content="Components for my awesome project" key="desc" />
Preventing your Storybook from being crawled

You can prevent your published Storybook from appearing in search engine results by including a noindex meta tag, which you can do by adding the following to the manager-head.html file in your config directory:

.storybook/manager-head.html
<meta name="robots" content="noindex" />
</document_content>
</document>
<document index="42">
<source>Embed stories.md</source>
<document_content>
Embed stories

React
Vue
Angular
Web Components
More
Watch a video tutorial
Embed stories to showcase your work to teammates and the developer community at large. In order to use embeds, your Storybook must be published and publicly accessible.

Storybook supports <iframe> embeds out of the box. If you use Chromatic to publish Storybook, you can also embed stories in Notion, Medium, and countless other platforms that support the oEmbed standard.

Embed a story with the toolbar

Embed a story with the toolbar, and paste the published story URL. For example:

// oEmbed
https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/?path=/story/shadowboxcta--default
 
// iframe embed
<iframe
  src="https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/?path=/story/shadowboxcta--default&full=1&shortcuts=false&singleStory=true"
  width="800"
  height="260"
></iframe>


Embed a story without the toolbar

To embed a plain story without Storybook's toolbar, click the "open canvas in new tab" icon in the top-right corner of Storybook to get the canvas URL. For example:

// oEmbed
https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=/story/shadowboxcta--default&viewMode=story
 
// iframe embed
 <iframe
  src="https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--default&viewMode=story&shortcuts=false&singleStory=true"
  width="800"
  height="200"
></iframe>


Embed documentation

Embed a documentation page by replacing viewMode=story with the uniquely auto-generated documentation entry for the story.

// oEmbed
https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--docs&viewMode=docs&shortcuts=false&singleStory=true
 
// iframe embed
 <iframe
  src="https://5ccbc373887ca40020446347-wtuhidckxo.chromatic.com/iframe.html?id=shadowboxcta--docs&viewMode=docs&shortcuts=false&singleStory=true"
  width="800"
  height="400"
></iframe>


Embed stories on other platforms

Every platform has different levels of embed support. Check the documentation of your service to see how they recommend embedding external content.

How to embed in Medium
How to embed in Notion
How to embed in Ghost
</document_content>
</document>
<document index="43">
<source>Design integrations.md</source>
<document_content>
Design integrations

React
Vue
Angular
Web Components
More
Storybook integrates with design tools to speed up your development workflow. That helps you debug inconsistencies earlier in the design process, discover existing components to reuse, and compare designs to stories.

Figma

Figma is a collaborative UI design tool that allows multiple people to work on the same design simultaneously in the browser. There are two ways to integrate Storybook and Figma.

Embed Storybook in Figma
Embed Figma in Storybook
Embed Storybook in Figma with the plugin

Storybook Connect is a Figma plugin that allows you to embed component stories in Figma. It’s powered by Storybook embeds and Chromatic, a publishing tool created by the Storybook team.


Install plugin

Before we begin, you must have a Storybook published to Chromatic. It provides the index, versions, and access control that back the plugin.

Go to Storybook Connect to install the plugin.

In Figma, open the command palette (in Mac OS, use Command + /, in Windows use Control + /) and type Storybook Connect to enable it.

Figma palette Storybook connect

Follow the instructions to connect and authenticate with Chromatic.

Link stories to Figma components

Link stories to Figma components, variants, and instances.

Go to a story in a Storybook published on Chromatic. Make sure it’s on the branch you want to link. Then copy the URL to the story.

In Figma, select the component, open the plugin, and paste the URL.

Story linked in Figma

Chromatic will automatically update your linked stories to reflect the most recent Storybook published on the branch you linked. That means the link persists even as you push new code.

💡
The plugin does not support linking stories to Figma layers.
View stories in Figma

Once they're connected, you'll be able to view the story by clicking the link in the sidebar. Click "View story". Alternatively, open the plugin by using the command palette (in Mac OS, use Command + /, in Windows, use Control + /), then type Storybook Connect.

Figma sidebar with story link

Embed Figma in Storybook with the addon

Designs addon allows you to embed Figma files and prototypes in Storybook.

Storybook addon figma

Install design addon

Run the following command to install the addon.

npm
npx storybook@latest add @storybook/addon-designs
ℹ️
The CLI's add command automates the addon's installation and setup. To install it manually, see our documentation on how to install addons.
Link Figma components to stories

In Figma, open the file you want to embed in Storybook. You can embed files, prototypes, components, and frames.

Embed a file or prototype, click the "Share" button to generate a unique URL for the file then click "Copy link".
Embed a component or frame check "Link to selected frame" in the Share dialog. Or right click on the frame and go to "Copy/Paste as" » "Copy link".
In Storybook, add a new parameter named design to your story and paste the Figma URL. For example:

MyComponent.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
 
import { MyComponent } from './MyComponent';
 
// More on default export: https://storybook.js.org/docs/writing-stories/#default-export
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const Example: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Sample-File',
    },
  },
};
View designs in Storybook

Click the "Design" tab in the addon panel to view the embedded Figma design.

Design addon panel

Zeplin

Zeplin is a design tool that generates styleguides from Sketch, Figma, and Adobe XD.

Use the Zeplin addon to connect Storybook. The addon displays designs from Zeplin alongside the currently selected story. It includes convenient tooling to overlay the design image atop the live component.

Zeplin's native app also supports links to published Storybooks.

Zeplin Storybook addon

Zeroheight

Zeroheight is a collaborative styleguide generator for design systems. It showcases design, code, brand, and copywriting documentation in one place. Users can easily edit that documentation with a WYSIWYG editor.

Zeroheight integrates with Storybook, enabling you to embed stories alongside your design specs.

Zeroheight Storybook integration

UXPin

UXPin is an interactive design tool that uses production code to generate prototypes.

UXPin allows you to use interactive stories to design user flows.


InVision Design System Manager

InVision DSM is a design system documentation tool. It helps design teams consolidate UX principles, user interface design, and design tokens in a shared workspace.

InVision allows you to embed Storybook in your design system documentation.

Invision DSM Storybook integration

Adobe XD

Adobe XD is a UI and UX design tool for creating wireframes, interactive designs, and prototypes.

Integrate Adobe XD with Storybook using the design addon. You can embed design specs alongside stories by following these instructions.

Build your own integration

Extend and customize Storybook by building an integration. Integrate with lower-level Storybook APIs or bootstrap an addon to customize Storybook's UI and behavior.

Addon documentation
Create an addon tutorial
</document_content>
</document>

</document>
<document index="44">
<source>Storybook Composition.md</source>
<document_content>
Storybook Composition

React
Vue
Angular
Web Components
More
Composition allows you to browse components from any Storybook accessible via URL inside your local Storybook. You can compose any Storybook published online or running locally no matter the view layer, tech stack, or dependencies.

Storybook reference external

You’ll see the composed Storybook’s stories in the sidebar alongside your own. This unlocks common workflows that teams often struggle with:

👩‍💻 UI developers can quickly reference prior art without switching between Storybooks.
🎨 Design systems can expand adoption by composing themselves into their users’ Storybooks.
🛠 Frontend platform can audit how components are used across projects.
📚 View multiple Storybooks with different tech stacks in one place
Storybook composition

Compose published Storybooks

In your .storybook/main.js|ts file add a refs field with information about the reference Storybook. Pass in a URL to a statically built Storybook.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  refs: {
    'design-system': {
      title: 'Storybook Design System',
      url: 'https://master--5ccbc373887ca40020446347.chromatic.com/',
      expanded: false, // Optional, true by default,
      sourceUrl: 'https://github.com/storybookjs/storybook', // Optional
    },
  },
};
 
export default config;
⚠️
Addons in composed Storybooks will not work as they normally do in a non-composed Storybook.
Compose local Storybooks

You can also compose multiple Storybooks that are running locally. For instance, if you have a React Storybook and an Angular Storybook running on different ports, you can update your configuration file (i.e., .storybook/main.js|ts) and reference them as follows:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  refs: {
    react: {
      title: 'React',
      url: 'http://localhost:7007',
    },
    angular: {
      title: 'Angular',
      url: 'http://localhost:7008',
    },
  },
};
 
export default config;
Adding this configuration will combine React and Angular Storybooks into your current one. You’ll see the changes being applied automatically when either of these changes. Enabling you to develop both frameworks in sync.

Compose Storybooks per environment

You can also compose Storybooks based on the current development environment (e.g., development, staging, production). For instance, if the project you're working on already has a published Storybook but also includes a version with cutting-edge features not yet released, you can adjust the composition based on that. For example:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
 
  // 👇 Retrieve the current environment from the configType argument
  refs: (config, { configType }) => {
    if (configType === 'DEVELOPMENT') {
      return {
        react: {
          title: 'Composed React Storybook running in development mode',
          url: 'http://localhost:7007',
        },
        angular: {
          title: 'Composed Angular Storybook running in development mode',
          url: 'http://localhost:7008',
        },
      };
    }
    return {
      react: {
        title: 'Composed React Storybook running in production',
        url: 'https://your-production-react-storybook-url',
      },
      angular: {
        title: 'Composed Angular Storybook running in production',
        url: 'https://your-production-angular-storybook-url',
      },
    };
  },
};
 
export default config;
💡
Similar to other fields available in Storybook’s configuration file, the refs field can also be a function that accepts a config parameter containing Storybook’s configuration object. See the API reference for more information.
Troubleshooting

Storybook composition is not working with my project

If you're working with an outdated Storybook version or have a project-specific requirement that prevents you from updating your Storybook to the latest version, you can rely on the Storybook CLI to generate the index.json file when you deploy your Storybook. For example:

npm
npx storybook@7.5.3 extract
ℹ️
The usage of a specific version of the CLI is intended as the extract command is not available in Storybook 8.0 or higher. It also requires you to provide additional configuration to generate the index.json file accurately. See the previous documentation for more information.
</document_content>
</document>

</document>
<document index="45">
<source>Package Composition.md</source>
<document_content>
Package Composition

React
Vue
Angular
Web Components
More
Storybook is widely used by component libraries and design systems. Design system authors can automatically compose their design systems inside their consumer’s Storybooks.

For example, if you use a design system package, its stories can appear alongside your own. That makes it convenient to cross reference usage documentation without leaving Storybook.

ℹ️
Composition via a package requires a secure integration between the service where you publish Storybook and Storybook’s own APIs. We recommend publishing Storybook to Chromatic for full support of these features.
For consumers

Composition happens automatically if the package supports it. When you install the package, Storybook will load its stories alongside your own.

Package composition workflow

Set up

If you want to configure how the composed Storybook behaves, you can disable the ref element in your .storybook/main.js

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  refs: {
    'package-name': { disable: true },
  },
};
 
export default config;
Switching versions

Change the version of the composed Storybook to see how the library evolves. This requires configuration from the package author.

Package composition workflow

For authors

Component library authors can expand adoption by composing their components in their consumer’s Storybooks.

Add a storybook property in your published package.json that contains an object with a url field. Point the URL field to a published Storybook at the version you want.

package.json
{
  "storybook": {
    "url": "https://host.com/your-storybook-for-this-version"
  }
}
Automatic version selection

If you're using Chromatic, you can provide a single URL for your Storybook in the storybook.url field. You do not need to change the URL each time you publish a new version. Storybook will automatically find the correct URL for your package. For example:

package.json
{
  "storybook": {
    "url": "https://master--xyz123.chromatic.com"
  }
}
In this example xyz123 is your Chromatic project id. Storybook will automatically compose in the Storybook published to that project corresponding to the version the user has installed.

Show a version selector

If you're using Chromatic, you can provide a list of versions for the user to choose from to experiment with other versions of your package
</document_content>
</document>

</document>
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

</document>
<document index="47">
<source>Actions.md</source>
<document_content>
Actions

React
Vue
Angular
Web Components
More
Watch a video tutorial
The actions addon is used to display data received by event handler (callback) arguments in your stories.


Action args

Actions work via supplying special Storybook-generated “action” arguments (referred to as "args" for short) to your stories. There are two ways to get an action arg:

Via @storybook/test fn spy function

The recommended way to write actions is to use the fn utility from @storybook/test to mock and spy args. This is very useful for writing component tests. You can mock your component's methods by assigning them to the fn() function:

Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
import { fn } from '@storybook/test';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  // 👇 Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() },
};
 
export default meta;
If your component calls an arg (because of either the user's interaction or the play function) and that arg is spied on , the event will show up in the action panel:

Essential Actions addon usage

Automatically matching args

Another option is to use a global parameter to match all argTypes that match a certain pattern. The following configuration automatically creates actions for each on argType (which you can either specify manually or can be inferred automatically).

This is quite useful when your component has dozens (or hundreds) of methods and you do not want to manually apply the fn utility for each of those methods. However, this is not the recommended way of writing actions. That's because automatically inferred args are not available as spies in your play function. If you use argTypesRegex and your stories have play functions, you will need to also define args with the fn utility to test them in your play function.

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
};
 
export default preview;
If you need more granular control over which argTypes are matched, you can adjust your stories and include the argTypesRegex parameter. For example:

Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};
 
export default meta;
💡
If you're generating argTypes with another addon (like docs, which is the common behavior), ensure the actions addon AFTER the other addon. You can do this by listing it later in the addons registration code in .storybook/main.js. This is default in essentials.
Action event handlers

It is also possible to detect if your component is emitting the correct HTML events using the parameters.actions.handles parameter.

Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { withActions } from '@storybook/addon-actions/decorator';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    actions: {
      handles: ['mouseover', 'click .btn'],
    },
  },
  decorators: [withActions],
};
 
export default meta;
This will bind a standard HTML event handler to the outermost HTML element rendered by your component and trigger an action when the event is called for a given selector. The format is <eventname> <selector>. The selector is optional; it defaults to all elements.

API

Parameters

This addon contributes the following parameters to Storybook, under the actions namespace:

argTypesRegex

Type: string

Create actions for each arg that matches the regex. Please note the significant limitations of this approach, as described above.

disable

Type: boolean

Disable this addon's behavior. If you wish to disable this addon for the entire Storybook, you should do so when registering addon-essentials. See the essential addon's docs for more information.

This parameter is most useful to allow overriding at more specific levels. For example, if this parameter is set to true at the project level, it could then be re-enabled by setting it to false at the meta (component) or story level.

handles

Type: string[]

Binds a standard HTML event handler to the outermost HTML element rendered by your component and triggers an action when the event is called for a given selector. The format is <eventname> <selector>. The selector is optional; it defaults to all elements.

See the action event handlers section, above, for more information.

Exports

This addon contributes the following exports to Storybook:

import { action } from '@storybook/addon-actions';
action

Type: (name?: string) => void

Allows you to create an action that appears in the actions panel of the Storybook UI when clicked. The action function takes an optional name parameter, which is used to identify the action in the UI.

Button.stories.ts
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
import { action } from '@storybook/addon-actions';
 
import Button from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  args: {
    // 👇 Create an action that appears when the onClick event is fired
    onClick: action('on-click'),
  },
};
 
export default meta;
Advanced / legacy usage

There are also some older ways to use actions as documented in the advanced README.
</document_content>
</document>

</document>
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

</document>
<document index="50">
<source>Highlight.md</source>
<document_content>
Highlight

React
Vue
Angular
Web Components
More
Storybook's Highlight addon is a helpful tool for visually debugging your components, allowing you to highlight specific DOM nodes within your story when used as a standalone addon or enhancing other addons such as the Accessibility addon to inform you of accessibility issues within your components.

Story with highlighted elements

Highlighting DOM Elements

To highlight DOM elements with the addon, you'll need to emit the HIGHLIGHT event from within a story or an addon. The event payload must contain an elements property assigned to an array of selectors matching the elements you want to highlight. For example:

MyComponent.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
import { useChannel } from '@storybook/preview-api';
import { HIGHLIGHT } from '@storybook/addon-highlight';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const Highlighted: Story = {
  decorators: [
    (storyFn) => {
      const emit = useChannel({});
      emit(HIGHLIGHT, {
        elements: ['h2', 'a', '.storybook-button'],
      });
      return storyFn();
    },
  ],
};
💡
We recommend choosing the most specific selector possible to avoid highlighting elements other addons use. This is because the addon tries to match selectors against the entire DOM tree.
Reset highlighted elements

Out of the box, Storybook automatically removes highlighted elements when transitioning between stories. However, if you need to clear them manually, you can emit the RESET_HIGHLIGHT event from within a story or an addon. For example:

MyComponent.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
import { useChannel } from '@storybook/preview-api';
import { HIGHLIGHT, RESET_HIGHLIGHT } from '@storybook/addon-highlight';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const ResetHighlight: Story = {
  decorators: [
    (storyFn) => {
      const emit = useChannel({});
      emit(RESET_HIGHLIGHT); //👈 Remove previously highlighted elements
      emit(HIGHLIGHT, {
        elements: ['header', 'section', 'footer'],
      });
      return storyFn();
    },
  ],
};
ℹ️
The emit function derived from the useChannel API hook creates a communication channel in Storybook's UI to listen for events and update the UI accordingly. The Highlight addon uses this channel to listen to custom events and update the highlighted elements (if any) accordingly.
Customize style

By default, the addon applies a standard style to the highlighted elements you've enabled for the story. However, you can enable your custom style by extending the payload object and providing a color and/or style properties. For example:

MyComponent.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
import { useChannel } from '@storybook/preview-api';
import { HIGHLIGHT } from '@storybook/addon-highlight';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
export const StyledHighlight: Story = {
  decorators: [
    (storyFn) => {
      const emit = useChannel({});
      emit(HIGHLIGHT, {
        elements: ['h2', 'a', '.storybook-button'],
        color: 'blue',
        style: 'double', // 'dotted' | 'dashed' | 'solid' | 'double'
      });
      return storyFn();
    },
  ],
};
API

Parameters

This addon contributes the following parameters to Storybook, under the highlight namespace:

disable

Type: boolean

Disable this addon's behavior. If you wish to disable this addon for the entire Storybook, you should do so when registering addon-essentials. See the essential addon's docs for more information.

This parameter is most useful to allow overriding at more specific levels. For example, if this parameter is set to true at the project level, it could then be re-enabled by setting it to false at the meta (component) or story level.

Exports

This addon contributes the following exports to Storybook:

import { HIGHLIGHT, RESET_HIGHLIGHT } from '@storybook/addon-highlight';
HIGHLIGHT

Type: string

An event that highlights DOM elements. The event payload must contain an elements property assigned to an array of selectors matching the elements you want to highlight. See the usage example, above.

RESET_HIGHLIGHT

Type: string

An event to clear all highlights from highlighted elements. See the usage example, above.
</document_content>
</document>

</document>
<document index="51">
<source>Interactions.md</source>
<document_content>
Interactions

React
Vue
Angular
Web Components
More
The play function in Storybook allows you to simulate user interactions to run after a story renders. With the Interactions addon, you have a way to visualize and debug these interactions.

Play function for interactions

Stories isolate and capture component states in a structured manner. While developing a component, you can quickly cycle through the stories to verify the look and feel. Each story specifies all the inputs required to reproduce a specific state. You can even mock context and API calls, allowing you to handle most use cases of a component. But what about states that require user interaction?

For example, clicking a button to open/close a dialog box, dragging a list item to reorder it, or filling out a form to check for validation errors. To test those behaviors, you have to interact with the components as a user would. Interactive stories enable you to automate these interactions using a play function. They are small snippets of code that run once the story finishes rendering, emulating the exact steps a user would take to interact with the component.

Powered by Testing Library and Vitest

The interactions are written using a package called @storybook/test. It provides Storybook-instrumented versions of Testing Library and Vitest. That gives you a familiar developer-friendly syntax to interact with the DOM and make assertions, but with extra telemetry to help with debugging.

Set up the interactions addon

By default, the @storybook/addon-interactions is already installed and configured if you're adding Storybook for new projects. If you're migrating from a previous version of Storybook, you'll need to install it manually.

Run the following command to install the interactions addon and related dependencies.

npm
npm install @storybook/test @storybook/addon-interactions --save-dev
Next, update .storybook/main.js|ts to the following:

.storybook/main.ts
Typescript
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
💡
Make sure to list @storybook/addon-interactions after the @storybook/addon-essentials addon (or the @storybook/addon-actions if you've installed it individually).
Now when you run Storybook, the Interactions addon will be enabled.

Storybook Interactions installed and registered

Write a component test

Interactions run as part of the play function of your stories. We rely on Testing Library to do the heavy lifting.

Make sure to import the Storybook wrappers for Vitest and Testing Library via @storybook/test rather than importing the original packages directly.

Form.stories.ts|tsx
Typescript
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
The above example uses the canvasElement to scope your element queries to the current story. It's essential if you want your play functions to eventually be compatible with Storybook Docs, which renders multiple components on the same page. Additionally, the step function can be used to create labeled groups of interactions.

While you can refer to the Testing Library documentation for details on how to use it, there's an important detail that's different when using the Storybook wrapper: method invocations must be await-ed. It allows you to step back and forth through your interactions using the debugger.

Any args that have been marked as an Action, either using the argTypes annotation or the argTypesRegex, will be automatically converted to a Jest mock function (spy). This allows you to make assertions about calls to these functions.

ℹ️
To mock functions in your Storybook stories for reliable and isolated component testing, use the named fn import from @storybook/test.
</document_content>
</document>

<document index="52">
<source>Measure & outline.md</source>
<document_content>
Measure & outline

React
Vue
Angular
Web Components
More
Watch a video tutorial
Storybook's Measure and Outline addons give you the necessary tooling to inspect and visually debug CSS layout and alignment issues within your stories. It makes it easy to catch UI bugs early in development.

Measure addon

While working with composite components or page layouts, dealing with whitespace (i.e., margin,padding,border) and individual component measurements can be pretty troublesome. It would require that you open up the browser's development tools and manually inspect the DOM tree for issues and UI bugs.

With Storybook's Measure addon, you can quickly visualize each component's measurements through a click of a button in Storybook's toolbar.


💡
Alternatively you can press the m key on your keyboard to toggle the addon.
Outline addon

When building your layouts, checking the visual alignment of all components can be pretty complicated, even more, if your components are spread apart or contain unique shapes.

With Storybook's Outline addon, you can toggle the outlines associated with all your UI elements, allowing you to spot bugs and broken layouts instantly with a click of a button.


API

Parameters

This addon contributes the following parameters to Storybook, under the measure or outline namespace:

disable

Type: boolean

Disable this addon's behavior. If you wish to disable this addon for the entire Storybook, you should do so when registering addon-essentials. See the essential addon's docs for more information.

This parameter is most useful to allow overriding at more specific levels. For example, if this parameter is set to true at the project level, it could then be re-enabled by setting it to false at the meta (component) or story level.
</document_content>
</document>

<document index="53">
<source>Toolbars & globals.md</source>
<document_content>
Toolbars & globals

React
Vue
Angular
Web Components
More
Watch a video tutorial
Storybook ships with toolbar addons to control the viewport and background the story renders in. You can also create toolbar items which control special “globals”. You can then read the global values to create decorators to control story rendering.

Toolbars and globals

Globals

Globals in Storybook represent “global” (as in not story-specific) inputs to the rendering of the story. As they aren’t specific to the story, they aren’t passed in the args argument to the story function (although they are accessible as context.globals). Instead, they are typically used in decorators, which apply to all stories.

When the globals change, the story re-renders and the decorators rerun with the new values. The easiest way to change globals is to create a toolbar item for them.

Global types and the toolbar annotation

Storybook has a simple, declarative syntax for configuring toolbar menus. In your .storybook/preview.js|ts, you can add your own toolbars by creating globalTypes with a toolbar annotation:

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
};
 
export default preview;
💡
As globals are global you can only set globalTypes and initialGlobals in .storybook/preview.js|ts.
When you start your Storybook, your toolbar should have a new dropdown menu with the light and dark options.

Create a decorator

We have a global implemented. Let's wire it up! We can consume our new theme global in a decorator using the context.globals.theme value.

For example, suppose you are using styled-components. You can add a theme provider decorator to your .storybook/preview.js|ts config:

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., solid, qwik)
import { Preview } from '@storybook/your-framework';
 
import { MyThemes } from '../my-theme-folder/my-theme-file';
 
const preview: Preview = {
  decorators: [
    (story, context) => {
      const selectedTheme = context.globals.theme || 'light';
      const theme = MyThemes[selectedTheme];
      // Your theme provider and other context providers goes in the return statement
      return;
    },
  ],
};
 
export default preview;
Setting globals on a story

🆕
The ability to set globals on a story or component is available in Storybook 8.3+. Some addons, like backgrounds and viewport, have been updated to use the globals API when a feature flag is enabled.
When a global value is changed with a toolbar menu in Storybook, that value continues to be used as you navigate between stories. But sometimes a story requires a specific value to render correctly, e.g., when testing against a particular environment.

To ensure that a story always uses a specific global value, regardless of what has been chosen in the toolbar, you can set the globals annotation on a story or component. This overrides the global value for those stories and disables the toolbar menu for that global when viewing the stories.

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
In the example above, Storybook will force all Button stories to use a gray background color, except the OnDark story, which will use the dark background. For all Button stories, the toolbar menu will be disabled for the backgrounds global, with a tooltip explaining that the global is set at the story level.

💡
Configuring a story's globals annotation to override the project-level global settings is useful but should be used with moderation. Globals that are not defined at the story level can be selected interactively in Storybook's UI, allowing users to explore every existing combination of values (e.g., global values, args). Setting them at the story level will disable that control, preventing users from exploring the available options.
Advanced usage

So far, we've created and used a global inside Storybook.

Now, let's take a look at a more complex example. Suppose we wanted to implement a new global called locale for internationalization, which shows a flag on the right side of the toolbar.

In your .storybook/preview.js|ts, add the following:

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  globalTypes: {
    locale: {
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'fr', right: '🇫🇷', title: 'Français' },
          { value: 'es', right: '🇪🇸', title: 'Español' },
          { value: 'zh', right: '🇨🇳', title: '中文' },
          { value: 'kr', right: '🇰🇷', title: '한국어' },
        ],
      },
    },
  },
  initialGlobals: {
    locale: 'en',
  },
};
 
export default preview;
💡
The icon element used in the examples loads the icons from the @storybook/components package. See here for the list of available icons that you can use.
💡
To use toolbars, you must install the @storybook/addon-toolbars add-on, which is included by default in @storybook/addon-essentials.
Adding the configuration element right will display the text on the right side in the toolbar menu once you connect it to a decorator.

Here's a list of the available configuration options.

MenuItem	Type	Description	Required
value	String	The string value of the menu that gets set in the globals	Yes
title	String	The main text of the title	Yes
right	String	A string that gets displayed on the right side of the menu	No
icon	String	An icon that gets shown in the toolbar if this item is selected	No
Consuming globals from within a story

We recommend consuming globals from within a decorator and defining a global setting for all stories.

But we're aware that sometimes it's more beneficial to use toolbar options on a per-story basis.

Using the example above, you can modify any story to retrieve the Locale global from the story context:

MyComponent.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
};
 
export default meta;
type Story = StoryObj<typeof MyComponent>;
 
const getCaptionForLocale = (locale) => {
  switch (locale) {
    case 'es':
      return 'Hola!';
    case 'fr':
      return 'Bonjour!';
    case 'kr':
      return '안녕하세요!';
    case 'zh':
      return '你好!';
    default:
      return 'Hello!';
  }
};
 
export const StoryWithLocale = {
  render: (args, { globals: { locale } }) => {
    const caption = getCaptionForLocale(locale);
    return <p>{caption}</p>;
  },
};
Consuming globals from within an addon

If you're working on a Storybook addon and need to retrieve globals, you can do so. The @storybook/manager-api package provides a hook for this scenario. You can use the useGlobals() hook to retrieve any globals you want.

Using the ThemeProvider example above, you could expand it to display which theme is active inside a panel as such:

your-addon-register-file.js
import React from 'react';
 
import { useGlobals } from '@storybook/manager-api';
 
import { AddonPanel, Placeholder, Separator, Source, Spaced, Title } from '@storybook/components';
 
import { MyThemes } from '../my-theme-folder/my-theme-file';
 
// Function to obtain the intended theme
const getTheme = (themeName) => {
  return MyThemes[themeName];
};
 
const ThemePanel = (props) => {
  const [{ theme: themeName }] = useGlobals();
 
  const selectedTheme = getTheme(themeName);
 
  return (
    <AddonPanel {...props}>
      {selectedTheme ? (
        <Spaced row={3} outer={1}>
          <Title>{selectedTheme.name}</Title>
          <p>The full theme object</p>
          <Source
            code={JSON.stringify(selectedTheme, null, 2)}
            language="js"
            copyable
            padded
            showLineNumbers
          />
        </Spaced>
      ) : (
        <Placeholder>No theme selected</Placeholder>
      )}
    </AddonPanel>
  );
};
Updating globals from within an addon

If you're working on a Storybook addon that needs to update the global and refresh the UI, you can do so. As mentioned previously, the @storybook/manager-api package provides the necessary hook for this scenario. You can use the updateGlobals function to update any global values you need.

For example, if you were working on a toolbar addon, and you want to refresh the UI and update the global once the user clicks on a button:

your-addon-register-file.js
import React, { useCallback } from 'react';
 
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { useGlobals } from '@storybook/manager-api';
 
import { IconButton } from '@storybook/components';
import { OutlineIcon } from '@storybook/icons';
 
import { addons } from '@storybook/preview-api';
 
const ExampleToolbar = () => {
  const [globals, updateGlobals] = useGlobals();
 
  const isActive = globals['my-param-key'] || false;
 
  // Function that will update the global value and trigger a UI refresh.
  const refreshAndUpdateGlobal = () => {
    // Updates Storybook global value
    updateGlobals({
      ['my-param-key']: !isActive,
    }),
      // Invokes Storybook's addon API method (with the FORCE_RE_RENDER) event to trigger a UI refresh
      addons.getChannel().emit(FORCE_RE_RENDER);
  };
 
  const toggleOutline = useCallback(() => refreshAndUpdateGlobal(), [isActive]);
 
  return (
    <IconButton
      key="Example"
      active={isActive}
      title="Show a Storybook toolbar"
      onClick={toggleOutline}
    >
      <OutlineIcon />
    </IconButton>
  );
</document_content>
</document>

<document index="54">
<source>Viewport.md</source>
<document_content>
Viewport

React
Vue
Angular
Web Components
More
Watch a video tutorial
The Viewport toolbar item allows you to adjust the dimensions of the iframe your story is rendered in. It makes it easy to develop responsive UIs.


🆕
globals API
This addon has been updated to use the globals API when the viewportStoryGlobals feature flag is enabled. With globals, when you specify a viewport for a story, it cannot be overridden from the toolbar, which ensures a consistent experience while navigating between stories. This will be the default behavior and API in Storybook 9.
Configuration

Out of the box, the Viewport addon offers you a standard set of viewports that you can use. If you want to change the default set of viewports, you can configure your own viewports with the viewport parameter in your .storybook/preview.js.

You can define the available viewports using the viewports property and set the initial viewport using the defaultViewport property:

.storybook/preview.ts
Typescript
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/your-renderer';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
 
const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'ipad',
    },
  },
};
 
export default preview;
🆕
With the globals API
When using the globals API, you must define the available viewports using the options property. The initial viewport can be set using the initialGlobals property, which accepts the same object properties as the globals for this addon.
.storybook/preview.ts
Typescript
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/your-renderer';
 
const preview: Preview = {
  parameters: {
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
  },
  initialGlobals: {
    viewport: { value: 'ipad', isRotated: false },
  },
};
 
export default preview;
Use a detailed set of devices

By default, the Viewport addon will use a minimal set of viewports, which enables you to test your UI in common responsive scenarios. These are also available in the MINIMAL_VIEWPORTS export and include the following devices:

Key	Description	Dimensions
(w×h, px)
mobile1	Small mobile	320 × 568
mobile2	Large mobile	414 × 896
tablet	Tablet	834 × 1112
If you need a more detailed set of devices, you can use the INITIAL_VIEWPORTS export, which includes the following devices:

Key	Description	Dimensions
(w×h, px)
iphone5	iPhone 5	320 × 568
iphone6	iPhone 6	375 × 667
iphone6p	iPhone 6 Plus	414 × 736
iphone8p	iPhone 8 Plus	414 × 736
iphonex	iPhone X	375 × 812
iphonexr	iPhone XR	414 × 896
iphonexsmax	iPhone XS Max	414 × 896
iphonese2	iPhone SE (2nd generation)	375 × 667
iphone12mini	iPhone 12 mini	375 × 812
iphone12	iPhone 12	390 × 844
iphone12promax	iPhone 12 Pro Max	428 × 926
iphoneSE3	iPhone SE 3rd generation	375 × 667
iphone13	iPhone 13	390 × 844
iphone13pro	iPhone 13 Pro	390 × 844
iphone13promax	iPhone 13 Pro Max	428 × 926
iphone14	iPhone 14	390 × 844
iphone14pro	iPhone 14 Pro	393 × 852
iphone14promax	iPhone 14 Pro Max	430 × 932
galaxys5	Galaxy S5	360 × 640
galaxys9	Galaxy S9	360 × 740
nexus5x	Nexus 5X	412 × 668
nexus6p	Nexus 6P	412 × 732
pixel	Pixel	540 × 960
pixelxl	Pixel XL	720 × 1280
mobile1	Small mobile
(also in MINIMAL_VIEWPORTS)	320 × 568
mobile2	Large mobile
(also in MINIMAL_VIEWPORTS)	414 × 896
ipad	iPad	768 × 1024
ipad10p	iPad Pro 10.5-in	834 × 112
ipad11p	iPad Pro 11-in	834 × 1194
ipad12p	iPad Pro 12.9-in	1024 × 1366
tablet	Tablet
(also in MINIMAL_VIEWPORTS)	834 × 1112
To use the detailed set of devices, you can replace the viewports property in your configuration with the INITIAL_VIEWPORTS export:

.storybook/preview.ts
Typescript
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/your-renderer';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
 
const preview: Preview = {
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'ipad',
    },
  },
};
 
export default preview;
🆕
With the globals API
When using the globals API, the available viewports are defined using the options property.
.storybook/preview.ts
Typescript
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/your-renderer';
 
const preview: Preview = {
  parameters: {
    viewport: {
      options: INITIAL_VIEWPORTS,
    },
  },
  initialGlobals: {
    viewport: { value: 'ipad', isRotated: false },
  },
};
 
export default preview;
Add new devices

If the predefined viewports don't meet your needs, you can add new devices to the list of viewports. For example, let's add two Kindle devices to the default set of minimal viewports:

🆕
With the globals API
When using the globals API, note that available viewports are defined using the options property.
Without globals API
With globals API
.storybook/preview.ts
Typescript
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import { Preview } from '@storybook/your-renderer';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
 
const kindleViewports = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
};
 
const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...kindleViewports,
      },
    },
  },
};
 
export default preview;
Configuring per component or story

In some cases, it's not practical for you to use a specific visual viewport on a global scale, and you need to adjust it to an individual story or set of stories for a component.

Parameters can be applied at the project, component, and story levels, which allows you to specify the configuration where needed. For example, you can set the available viewports for all of the stories for a component like so:

Without globals API
With globals API
MyComponent.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
 
import { MyComponent } from './MyComponent';
 
const meta: Meta<typeof MyComponent> = {
  component: MyComponent,
  parameters: {
    viewport: {
      //👇 Set available viewports for every story in the file
      viewports: INITIAL_VIEWPORTS,
    },
  },
};
 
export default meta;
Defining the viewport for a story

The Viewport addon enables you to change the viewport applied to a story by selecting from the list of predefined viewports in the toolbar. If needed, you can set a story to default to a specific viewport, by using the parameters.viewport.default parameter:

Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    // 👇 Set default viewport for all component stories
    viewport: { defaultViewport: 'tablet' },
  },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const OnPhone: Story = {
  parameters: {
    // 👇 Override default viewport for this story
    viewport: { defaultViewport: 'mobile1' },
  },
};
As implied by the name, this method only sets the default viewport for a story. You can still change the viewport using the toolbar when viewing the story.

🆕
With the globals API
When you specify a viewport for a story (or a component's stories) using globals, the viewport is applied and cannot be changed using the toolbar. This is useful when you want to ensure that a story is always rendered on a specific viewport.
Button.stories.ts|tsx
Typescript
// Replace your-renderer with the renderer you are using (e.g., react, vue3, angular, etc.)
import type { Meta, StoryObj } from '@storybook/your-renderer';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  globals: {
    // 👇 Set viewport for all component stories
    viewport: { value: 'tablet', isRotated: false },
  },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
export const OnPhone: Story = {
  globals: {
    // 👇 Override viewport for this story
    viewport: { value: 'mobile1', isRotated: false },
  },
};
API

Keyboard shortcuts

If you need, you can edit these on the shortcuts page.

Next viewport: alt + v
Previous viewport: alt + shift + v
Reset viewport: alt + control + v
🆕
With the globals API
Globals

This addon contributes the following globals to Storybook, under the viewport namespace:
value

Type: string
When set, the viewport is applied and cannot be changed using the toolbar. Must match the key of one of the available viewports.
isRotated

Type: boolean
When true the viewport applied will be rotated 90°, e.g. it will rotate from portrait to landscape orientation.
Parameters

This addon contributes the following parameters to Storybook, under the viewport namespace:

defaultOrientation

Type: 'portrait' | 'landscape'

Default: 'portrait'

Specifies the default orientation used when viewing a story. Only available if you haven't enabled the globals API.

defaultViewport

Type: string

Specifies the default viewport used when viewing a story. Must match a key in the viewports (or options) object.

disable

🆕
With the globals API
Note that the property has been renamed to disabled.
Type: boolean

Turn off this addon's behavior. If you wish to turn off this addon for the entire Storybook, you should do so when registering addon-essentials. See the essential addon's docs for more information.

This parameter is most useful to allow overriding at more specific levels. For example, if this parameter is set to true at the project level, it could be re-enabled by setting it to false at the meta (component) or story level.

viewports

Type:

{
  [key: string]: {
    name: string;
    styles: { height: string, width: string };
    type: 'desktop' | 'mobile' | 'tablet';
  };
}
Specify the available viewports. See usage example above. The width and height values must include the unit, e.g. '320px'.

🆕
With the globals API
options

Type:
{
  [key: string]: {
    name: string;
    styles: { height: string, width: string };
    type: 'desktop' | 'mobile' | 'tablet' | 'other';
  };
}
Replaces: viewports
Specify the available viewports. See usage example above. The width and height values must include the unit, e.g. '320px'.
Exports

This addon contributes the following exports to Storybook:

import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
INITIAL_VIEWPORTS

Type: object

The full set of initial viewports provided by the Viewport addon, listed above.

MINIMAL_VIEWPORTS

Type: object

A minimal set of viewports provided by the Viewport addon listed above. These are used by default.
</document_content>
</document>

<document index="55">
<source>Introduction to addons.md</source>
<document_content>
Introduction to addons

Addons extend Storybook with features and integrations that are not built into the core. Most Storybook features are implemented as addons. For instance: documentation, accessibility testing, interactive controls, among others. The addon API makes it easy for you to configure and customize Storybook in new ways. There are countless addons made by the community that unlocks time-saving workflows.

Browse our addon catalog to install an existing addon or as inspiration for your own addon.

Storybook basics

Before writing your first addon, let’s take a look at the basics of Storybook’s architecture. While Storybook presents a unified user interface, under the hood it’s divided down the middle into Manager and Preview.

The Manager is the UI responsible for rendering the:

🔍 Search
🧭 Navigation
🔗 Toolbars
📦 Addons
The Preview area is an iframe where your stories are rendered.

Storybook detailed window

Because both elements run in their own separate iframes, they use a communication channel to keep in sync. For example, when you select a story in the Manager an event is dispatched across the channel notifying the Preview to render the story.

Anatomy of an addon

Storybook addons allow you to extend what's already possible with Storybook, everything from the user interface to the API. Each one is classified into two broader categories.

UI-based addons

UI-based addons focus on customizing Storybook's user interface to extend your development workflow. Examples of UI-based addons include: Controls, Docs and Accessibility.

Learn how to write an addon »

Preset addons

Preset addons help you integrate Storybook with other technologies and libraries. An examples of a preset addons is preset-create-react-app.

Learn how to write a preset addon »
</document_content>
</document>

<document index="56">
<source>Install addons.md</source>
<document_content>
Install addons

React
Vue
Angular
Web Components
More
Storybook has hundreds of reusable addons packaged as NPM modules. Let's walk through how to extend Storybook by installing and registering addons.

Automatic installation

Storybook includes a storybook add command to automate the setup of addons. Several community-led addons can be added using this command, except for preset addons. We encourage you to read the addon's documentation to learn more about its installation process.

Run the storybook add command using your chosen package manager, and the CLI will update your Storybook configuration to include the addon and install any necessary dependencies.

npm
npx storybook@latest add @storybook/addon-a11y
⚠️
If you're attempting to install multiple addons at once, it will only install the first addon that was specified. This is a known limitation of the current implementation and will be addressed in a future release.
Manual installation

Storybook addons are always added through the addons configuration array in .storybook/main.js|ts. The following example shows how to manually add the Accessibility addon to Storybook.

Run the following command with your package manager of choice to install the addon.

npm
npm install @storybook/addon-a11y --save-dev
Next, update .storybook/main.js|ts to the following:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    // Other Storybook addons
    '@storybook/addon-a11y', //👈 The a11y addon goes here
  ],
};
 
export default config;
When you run Storybook, the accessibility testing addon will be enabled.

Storybook addon installed and registered

Removing addons

To remove an addon from Storybook, you can choose to manually uninstall it and remove it from the configuration file (i.e., .storybook/main.js|ts) or opt-in to do it automatically via the CLI with the remove command. For example, to remove the Accessibility addon from Storybook with the CLI, run the following command:

npm
npx storybook@latest remove @storybook/addon-a11y
</document_content>
</document>

<document index="57">
<source>Write an addon.md</source>
<document_content>
Write an addon

React
Vue
Angular
Web Components
More
Storybook addons are a powerful way to extend Storybook's functionality and customize the development experience. They can be used to add new features, customize the UI, or integrate with third-party tools.

What are we going to build?

This reference guide is to help you develop a mental model for how Storybook addons work by building a simple addon based on the popular Outline addon. Throughout this guide, you'll learn how addons are structured, Storybook's APIs, how to test your addon locally, and how to publish it.


Addon anatomy

There are two main categories of addons, each with its role:

UI-based: These addons are responsible for customizing the interface, enabling shortcuts for common tasks, or displaying additional information in the UI.
Presets: These are pre-configured settings or configurations that enable developers to quickly set up and customize their environment with a specific set of features, functionality, or technology.
UI-based addons

The addon built in this guide is a UI-based addon, specifically a toolbar addon, enabling users to draw outlines around each element in the story through a shortcut or click of a button. UI addons can create other types of UI elements, each with its function: panels and tabs, providing users with various ways to interact with the UI.

Toolbar
Panel
Tab
src/Tool.tsx
import React, { memo, useCallback, useEffect } from 'react';
 
import { useGlobals, useStorybookApi } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { LightningIcon } from '@storybook/icons';
 
import { ADDON_ID, PARAM_KEY, TOOL_ID } from './constants';
 
export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();
  const api = useStorybookApi();
 
  const isActive = [true, 'true'].includes(globals[PARAM_KEY]);
 
  const toggleMyTool = useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: !isActive,
    });
  }, [isActive]);
 
  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: 'Toggle Measure [O]',
      defaultShortcut: ['O'],
      actionName: 'outline',
      showInMenu: false,
      action: toggleMyTool,
    });
  }, [toggleMyTool, api]);
 
  return (
    <IconButton key={TOOL_ID} active={isActive} title="Enable my addon" onClick={toggleMyTool}>
      <LightningIcon />
    </IconButton>
  );
});
Setup

To create your first addon, you're going to use the Addon Kit, a ready-to-use template featuring all the required building blocks, dependencies and configurations to help you get started building your addon. In the Addon Kit repository, click the Use this template button to create a new repository based on the Addon Kit's code.


Clone the repository you just created and install its dependencies. When the installation process finishes, you will be prompted with questions to configure your addon. Answer them, and when you're ready to start building your addon, run the following command to start Storybook in development mode and develop your addon in watch mode:

npm
npm run start
ℹ️
The Addon Kit uses Typescript by default. If you want to use JavaScript instead, you can run the eject-ts command to convert the project to JavaScript.
Understanding the build system

Addons built in the Storybook ecosystem rely on tsup, a fast, zero-config bundler powered by esbuild to transpile your addon's code into modern JavaScript that can run in the browser. Out of the box, the Addon Kit comes with a pre-configured tsup configuration file that you can use to customize the build process of your addon.

When the build scripts run, it will look for the configuration file and pre-bundle the addon's code based on the configuration provided. Addons can interact with Storybook in various ways. They can define presets to modify the configuration, add behavior to the manager UI, or add behavior to the preview iframe. These different use cases require different bundle outputs because they target different runtimes and environments. Presets are executed in a Node environment. Storybook's manager and preview environments provide certain packages in the global scope, so addons don't need to bundle them or include them as dependencies in their package.json file.

The tsup configuration handles these complexities by default, but you can customize it according to their requirements. For a detailed explanation of the bundling techniques used, please refer to the README of the addon-kit, and check out the default tsup configuration here.

Register the addon

By default, code for the UI-based addons is located in one of the following files, depending on the type of addon built: src/Tool.tsx, src/Panel.tsx, or src/Tab.tsx. Since we're building a toolbar addon, we can safely remove the Panel and Tab files and update the remaining file to the following:

src/Tool.tsx
import React, { memo, useCallback, useEffect } from 'react';
 
import { useGlobals, useStorybookApi } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { LightningIcon } from '@storybook/icons';
 
import { ADDON_ID, PARAM_KEY, TOOL_ID } from './constants';
 
export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();
  const api = useStorybookApi();
 
  const isActive = [true, 'true'].includes(globals[PARAM_KEY]);
 
  const toggleMyTool = useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: !isActive,
    });
  }, [isActive]);
 
  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: 'Toggle Addon [8]',
      defaultShortcut: ['8'],
      actionName: 'myaddon',
      showInMenu: false,
      action: toggleMyTool,
    });
  }, [toggleMyTool, api]);
 
  return (
    <IconButton key={TOOL_ID} active={isActive} title="Enable my addon" onClick={toggleMyTool}>
      <LightningIcon />
    </IconButton>
  );
});
Going through the code blocks in sequence:

src/Tool.tsx
import { useGlobals, useStorybookApi } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { LightningIcon } from '@storybook/icons';
The useGlobals and useStorybookApi hooks from the manager-api package are used to access the Storybook's APIs, allowing users to interact with the addon, such as enabling or disabling it.

The IconButton or Button component from the @storybook/components package can be used to render the buttons in the toolbar. The @storybook/icons package provides a large set of appropriately sized and styled icons to choose from.

src/Tool.tsx
export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();
  const api = useStorybookApi();
 
  const isActive = [true, 'true'].includes(globals[PARAM_KEY]);
 
  const toggleMyTool = useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: !isActive,
    });
  }, [isActive]);
 
  useEffect(() => {
    api.setAddonShortcut(ADDON_ID, {
      label: 'Toggle Addon [8]',
      defaultShortcut: ['8'],
      actionName: 'myaddon',
      showInMenu: false,
      action: toggleMyTool,
    });
  }, [toggleMyTool, api]);
 
  return (
    <IconButton key={TOOL_ID} active={isActive} title="Enable my addon" onClick={toggleMyTool}>
      <LightningIcon />
    </IconButton>
  );
});
The Tool component is the entry point of the addon. It renders the UI elements in the toolbar, registers a keyboard shortcut, and handles the logic to enable and disable the addon.

Moving onto the manager, here we register the addon with Storybook using a unique name and identifier. Since we've removed the Panel and Tab files, we'll need to adjust the file to only reference the addon we're building.

src/manager.ts
import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, TOOL_ID } from './constants';
import { Tool } from './Tool';
 
// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'My addon',
    match: ({ tabId, viewMode }) => !tabId && viewMode === 'story',
    render: Tool,
  });
});
Conditionally render the addon

Notice the match property. It allows you to control the view mode (story or docs) and tab (the story canvas or custom tabs) where the toolbar addon is visible. For example:

({ tabId }) => tabId === 'my-addon/tab' will show your addon when viewing the tab with the ID my-addon/tab.
({ viewMode }) => viewMode === 'story' will show your addon when viewing a story in the canvas.
({ viewMode }) => viewMode === 'docs' will show your addon when viewing the documentation for a component.
({ tabId, viewMode }) => !tabId && viewMode === 'story' will show your addon when viewing a story in the canvas and not in a custom tab (i.e. when tabId === undefined).
Run the start script to build and start Storybook and verify that the addon is registered correctly and showing in the UI.

Addon registered in the toolbar

Style the addon

In Storybook, applying styles for addons is considered a side-effect. Therefore, we'll need to make some changes to our addon to allow it to use the styles when it is active and remove them when it's disabled. We're going to rely on two of Storybook's features to handle this: decorators and globals. To handle the CSS logic, we must include some helper functions to inject and remove the stylesheets from the DOM. Start by creating the helper file with the following content:

src/helpers.ts
import { global } from '@storybook/global';
 
export const clearStyles = (selector: string | string[]) => {
  const selectors = Array.isArray(selector) ? selector : [selector];
  selectors.forEach(clearStyle);
};
 
const clearStyle = (input: string | string[]) => {
  const selector = typeof input === 'string' ? input : input.join('');
  const element = global.document.getElementById(selector);
  if (element && element.parentElement) {
    element.parentElement.removeChild(element);
  }
};
 
export const addOutlineStyles = (selector: string, css: string) => {
  const existingStyle = global.document.getElementById(selector);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    const style = global.document.createElement('style');
    style.setAttribute('id', selector);
    style.innerHTML = css;
    global.document.head.appendChild(style);
  }
};
Next, create the file with the styles we want to inject with the following content:

src/OutlineCSS.ts
import { dedent } from 'ts-dedent';
 
export default function outlineCSS(selector: string) {
  return dedent/* css */ `
    ${selector} body {
      outline: 1px solid #2980b9 !important;
    }
 
    ${selector} article {
      outline: 1px solid #3498db !important;
    }
 
    ${selector} nav {
      outline: 1px solid #0088c3 !important;
    }
 
    ${selector} aside {
      outline: 1px solid #33a0ce !important;
    }
 
    ${selector} section {
      outline: 1px solid #66b8da !important;
    }
 
    ${selector} header {
      outline: 1px solid #99cfe7 !important;
    }
 
    ${selector} footer {
      outline: 1px solid #cce7f3 !important;
    }
 
    ${selector} h1 {
      outline: 1px solid #162544 !important;
    }
 
    ${selector} h2 {
      outline: 1px solid #314e6e !important;
    }
 
    ${selector} h3 {
      outline: 1px solid #3e5e85 !important;
    }
 
    ${selector} h4 {
      outline: 1px solid #449baf !important;
    }
 
    ${selector} h5 {
      outline: 1px solid #c7d1cb !important;
    }
 
    ${selector} h6 {
      outline: 1px solid #4371d0 !important;
    }
 
    ${selector} main {
      outline: 1px solid #2f4f90 !important;
    }
 
    ${selector} address {
      outline: 1px solid #1a2c51 !important;
    }
 
    ${selector} div {
      outline: 1px solid #036cdb !important;
    }
 
    ${selector} p {
      outline: 1px solid #ac050b !important;
    }
 
    ${selector} hr {
      outline: 1px solid #ff063f !important;
    }
 
    ${selector} pre {
      outline: 1px solid #850440 !important;
    }
 
    ${selector} blockquote {
      outline: 1px solid #f1b8e7 !important;
    }
 
    ${selector} ol {
      outline: 1px solid #ff050c !important;
    }
 
    ${selector} ul {
      outline: 1px solid #d90416 !important;
    }
 
    ${selector} li {
      outline: 1px solid #d90416 !important;
    }
 
    ${selector} dl {
      outline: 1px solid #fd3427 !important;
    }
 
    ${selector} dt {
      outline: 1px solid #ff0043 !important;
    }
 
    ${selector} dd {
      outline: 1px solid #e80174 !important;
    }
 
    ${selector} figure {
      outline: 1px solid #ff00bb !important;
    }
 
    ${selector} figcaption {
      outline: 1px solid #bf0032 !important;
    }
 
    ${selector} table {
      outline: 1px solid #00cc99 !important;
    }
 
    ${selector} caption {
      outline: 1px solid #37ffc4 !important;
    }
 
    ${selector} thead {
      outline: 1px solid #98daca !important;
    }
 
    ${selector} tbody {
      outline: 1px solid #64a7a0 !important;
    }
 
    ${selector} tfoot {
      outline: 1px solid #22746b !important;
    }
 
    ${selector} tr {
      outline: 1px solid #86c0b2 !important;
    }
 
    ${selector} th {
      outline: 1px solid #a1e7d6 !important;
    }
 
    ${selector} td {
      outline: 1px solid #3f5a54 !important;
    }
 
    ${selector} col {
      outline: 1px solid #6c9a8f !important;
    }
 
    ${selector} colgroup {
      outline: 1px solid #6c9a9d !important;
    }
 
    ${selector} button {
      outline: 1px solid #da8301 !important;
    }
 
    ${selector} datalist {
      outline: 1px solid #c06000 !important;
    }
 
    ${selector} fieldset {
      outline: 1px solid #d95100 !important;
    }
 
    ${selector} form {
      outline: 1px solid #d23600 !important;
    }
 
    ${selector} input {
      outline: 1px solid #fca600 !important;
    }
 
    ${selector} keygen {
      outline: 1px solid #b31e00 !important;
    }
 
    ${selector} label {
      outline: 1px solid #ee8900 !important;
    }
 
    ${selector} legend {
      outline: 1px solid #de6d00 !important;
    }
 
    ${selector} meter {
      outline: 1px solid #e8630c !important;
    }
 
    ${selector} optgroup {
      outline: 1px solid #b33600 !important;
    }
 
    ${selector} option {
      outline: 1px solid #ff8a00 !important;
    }
 
    ${selector} output {
      outline: 1px solid #ff9619 !important;
    }
 
    ${selector} progress {
      outline: 1px solid #e57c00 !important;
    }
 
    ${selector} select {
      outline: 1px solid #e26e0f !important;
    }
 
    ${selector} textarea {
      outline: 1px solid #cc5400 !important;
    }
 
    ${selector} details {
      outline: 1px solid #33848f !important;
    }
 
    ${selector} summary {
      outline: 1px solid #60a1a6 !important;
    }
 
    ${selector} command {
      outline: 1px solid #438da1 !important;
    }
 
    ${selector} menu {
      outline: 1px solid #449da6 !important;
    }
 
    ${selector} del {
      outline: 1px solid #bf0000 !important;
    }
 
    ${selector} ins {
      outline: 1px solid #400000 !important;
    }
 
    ${selector} img {
      outline: 1px solid #22746b !important;
    }
 
    ${selector} iframe {
      outline: 1px solid #64a7a0 !important;
    }
 
    ${selector} embed {
      outline: 1px solid #98daca !important;
    }
 
    ${selector} object {
      outline: 1px solid #00cc99 !important;
    }
 
    ${selector} param {
      outline: 1px solid #37ffc4 !important;
    }
 
    ${selector} video {
      outline: 1px solid #6ee866 !important;
    }
 
    ${selector} audio {
      outline: 1px solid #027353 !important;
    }
 
    ${selector} source {
      outline: 1px solid #012426 !important;
    }
 
    ${selector} canvas {
      outline: 1px solid #a2f570 !important;
    }
 
    ${selector} track {
      outline: 1px solid #59a600 !important;
    }
 
    ${selector} map {
      outline: 1px solid #7be500 !important;
    }
 
    ${selector} area {
      outline: 1px solid #305900 !important;
    }
 
    ${selector} a {
      outline: 1px solid #ff62ab !important;
    }
 
    ${selector} em {
      outline: 1px solid #800b41 !important;
    }
 
    ${selector} strong {
      outline: 1px solid #ff1583 !important;
    }
 
    ${selector} i {
      outline: 1px solid #803156 !important;
    }
 
    ${selector} b {
      outline: 1px solid #cc1169 !important;
    }
 
    ${selector} u {
      outline: 1px solid #ff0430 !important;
    }
 
    ${selector} s {
      outline: 1px solid #f805e3 !important;
    }
 
    ${selector} small {
      outline: 1px solid #d107b2 !important;
    }
 
    ${selector} abbr {
      outline: 1px solid #4a0263 !important;
    }
 
    ${selector} q {
      outline: 1px solid #240018 !important;
    }
 
    ${selector} cite {
      outline: 1px solid #64003c !important;
    }
 
    ${selector} dfn {
      outline: 1px solid #b4005a !important;
    }
 
    ${selector} sub {
      outline: 1px solid #dba0c8 !important;
    }
 
    ${selector} sup {
      outline: 1px solid #cc0256 !important;
    }
 
    ${selector} time {
      outline: 1px solid #d6606d !important;
    }
 
    ${selector} code {
      outline: 1px solid #e04251 !important;
    }
 
    ${selector} kbd {
      outline: 1px solid #5e001f !important;
    }
 
    ${selector} samp {
      outline: 1px solid #9c0033 !important;
    }
 
    ${selector} var {
      outline: 1px solid #d90047 !important;
    }
 
    ${selector} mark {
      outline: 1px solid #ff0053 !important;
    }
 
    ${selector} bdi {
      outline: 1px solid #bf3668 !important;
    }
 
    ${selector} bdo {
      outline: 1px solid #6f1400 !important;
    }
 
    ${selector} ruby {
      outline: 1px solid #ff7b93 !important;
    }
 
    ${selector} rt {
      outline: 1px solid #ff2f54 !important;
    }
 
    ${selector} rp {
      outline: 1px solid #803e49 !important;
    }
 
    ${selector} span {
      outline: 1px solid #cc2643 !important;
    }
 
    ${selector} br {
      outline: 1px solid #db687d !important;
    }
 
    ${selector} wbr {
      outline: 1px solid #db175b !important;
    }`;
}
Since the addon can be active in both the story and documentation modes, the DOM node for Storybook's preview iframe is different in these two modes. In fact, Storybook renders multiple story previews on one page when in documentation mode. Therefore, we'll need to choose the correct selector for the DOM node where the styles will be injected and ensure the CSS is scoped to that particular selector. That mechanism is provided as an example within the src/withGlobals.ts file, which we'll use to connect the styling and helper functions to the addon logic. Update the file to the following:

src/withGlobals.ts
import type { Renderer, PartialStoryFn as StoryFunction, StoryContext } from '@storybook/types';
 
import { useEffect, useMemo, useGlobals } from '@storybook/preview-api';
import { PARAM_KEY } from './constants';
 
import { clearStyles, addOutlineStyles } from './helpers';
 
import outlineCSS from './outlineCSS';
 
export const withGlobals = (StoryFn: StoryFunction<Renderer>, context: StoryContext<Renderer>) => {
  const [globals] = useGlobals();
 
  const isActive = [true, 'true'].includes(globals[PARAM_KEY]);
 
  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === 'docs';
 
  const outlineStyles = useMemo(() => {
    const selector = isInDocs ? `#anchor--${context.id} .docs-story` : '.sb-show-main';
 
    return outlineCSS(selector);
  }, [context.id]);
  useEffect(() => {
    const selectorId = isInDocs ? `my-addon-docs-${context.id}` : `my-addon`;
 
    if (!isActive) {
      clearStyles(selectorId);
      return;
    }
 
    addOutlineStyles(selectorId, outlineStyles);
 
    return () => {
      clearStyles(selectorId);
    };
  }, [isActive, outlineStyles, context.id]);
 
  return StoryFn();
};
Packaging and publishing

Storybook addons, similar to most packages in the JavaScript ecosystem, are distributed as NPM packages. However, they have specific criteria that need to be met to be published to NPM and crawled by the integration catalog:

Have a dist folder with the transpiled code.
A package.json file declaring:
Module-related information
Integration catalog metadata
Module Metadata

The first category of metadata is related to the addon itself. This includes the entry for the module, which files to include when the addon is published. And the required configuration to integrate the addon with Storybook, allowing it to be used by its consumers.

package.json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "node": "./dist/index.js",
      "require": "./dist/index.js",
      "import": "./dist/index.mjs"
    },
    "./manager": "./dist/manager.mjs",
    "./preview": "./dist/preview.mjs",
    "./package.json": "./package.json"
  },
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "files": ["dist/**/*", "README.md", "*.js", "*.d.ts"],
  "devDependencies": {
    "@storybook/blocks": "^7.0.0",
    "@storybook/components": "^7.0.0",
    "@storybook/core-events": "^7.0.0",
    "@storybook/manager-api": "^7.0.0",
    "@storybook/preview-api": "^7.0.0",
    "@storybook/theming": "^7.0.0",
    "@storybook/types": "^7.0.0"
  },
  "bundler": {
    "exportEntries": ["src/index.ts"],
    "managerEntries": ["src/manager.ts"],
    "previewEntries": ["src/preview.ts"]
  }
}
Integration Catalog Metadata

The second metadata category is related to the integration catalog. Most of this information is already pre-configured by the Addon Kit. However, items like the display name, icon, and frameworks must be configured via the storybook property to be displayed in the catalog.

package.json
{
  "name": "my-storybook-addon",
  "version": "1.0.0",
  "description": "My first storybook addon",
  "author": "Your Name",
  "storybook": {
    "displayName": "My Storybook Addon",
    "unsupportedFrameworks": ["react-native"],
    "icon": "https://yoursite.com/link-to-your-icon.png"
  },
  "keywords": ["storybook-addons", "appearance", "style", "css", "layout", "debug"]
}
ℹ️
The storybook configuration element includes additional properties that help customize the addon's searchability and indexing. For more information, see the Integration catalog documentation.
One essential item to note is the keywords property as it maps to the catalog's tag system. Adding the storybook-addons ensures that the addon is discoverable in the catalog when searching for addons. The remaining keywords help with the searchability and categorization of the addon.

Publishing to NPM

Once you're ready to publish your addon to NPM, the Addon Kit comes pre-configured with the Auto package for release management. It generates a changelog and uploads the package to NPM and GitHub automatically. Therefore, you need to configure access to both.

Authenticate using npm adduser
Generate a access token with both read and publish permissions.
Create a personal access token with repo and workflow scoped permissions.
Create a .env file in the root of your project and add the following:
GH_TOKEN=value_you_just_got_from_github
NPM_TOKEN=value_you_just_got_from_npm
Next, run the following command to create labels on GitHub. You'll use these labels to categorize changes to the package.

npx auto create-labels
Finally, run the following command to create a release for your addon. This will build and package the addon code, bump the version, push the release into GitHub and npm, and generate a changelog.

npm
npm run release
CI automation

By default, the Addon Kit comes pre-configured with a GitHub Actions workflow, enabling you to automate the release management process. This ensures that the package is always up to date with the latest changes and that the changelog is updated accordingly. However, you'll need additional configuration to use your NPM and GitHub tokens to publish the package successfully. In your repository, click the Settings tab, then the Secrets and variables dropdown, followed by the Actions item. You should see the following screen:

GitHub secrets page

Then, click the New repository secret, name it NPM_TOKEN, and paste the token you generated earlier. Whenever you merge a pull request to the default branch, the workflow will run and publish a new release, automatically incrementing the version number and updating the changelog.

Learn more about the Storybook addon ecosystem

Types of addons for other types of addons
Writing addons for the basics of addon development
Presets for preset development
Integration catalog for requirements and available recipes
API reference to learn about the available APIs
</document_content>
</document>

<document index="58">
<source>Configure and communicate with an addon.md</source>
<document_content>
Configure and communicate with an addon

React
Vue
Angular
Web Components
More
The addon API is designed for customization. It offers addon authors different ways to configure and communicate with their users' Storybook. Let's look at what these are and their suggested use cases.

Preset

Presets offload the burden of configuration from the user to the addon. Preset options are global and are accessible from NodeJS. They're ideal for pre-configuring Webpack loaders, Babel plugins, and other library or framework-specific configurations.

For example, many libraries require that the app be wrapped by a Provider which provides data to components down the tree. Presets can describe behavior like adding wrappers automatically, without users having to do any manual configuration. If a user installs an addon that has Presets, the addon can instruct Storybook to wrap all stories in Provider. This allows folks to start using your library with Storybook, with just 1 line of config!

For more on presets, see: Write a preset addon

The mechanism for wrapping each story is referred to as a Storybook decorator. They allow you to augment stories with extra rendering functionality or by providing data.

Parameters

Parameters are available in the browser and are great for configuring addon behavior globally, at the component level, or at the story level.

For example, the Pseudo States addon uses parameters to enable the various pseudo-states. Users can provide global defaults and then override them at the story level.

Use the useParameter hook to access the parameter values within your addon.

export const Hover = {
  render: () => <Button>Label</Button>,
  parameters: { pseudo: { hover: true } },
};
Channels

Channels enable two-way communication between the manager and the preview pane, using a NodeJS EventEmitter compatible API. Your addons can plug into specific channels and respond to these events.

For example, the Actions addon captures user events and displays their data in a panel.

Use the useChannel hook to access the channel data within your addon.

For a complete example, check out storybookjs/addon-kit/withRoundTrip.ts
</document_content>
</document>

<document index="59">
<source>Write a preset addon.md</source>
<document_content>
Write a preset addon

React
Vue
Angular
Web Components
More
Storybook presets are pre-configured settings or configurations that enable developers quickly set up and customize their environment with a specific set of features, functionalities, or integrations.

How presets work

Preset addons allow developers to compose various configuration options and plugins via APIs to integrate with Storybook and customize its behavior and functionality. Typically, presets are separated into two files, each with its specific role.

Local presets

This type of preset allows you to encapsulate and organize configurations specific to the addon, including builder support, Babel, or third-party integrations. For example:

example-addon/src/preset.ts
Typescript
import { webpackFinal as webpack } from './webpack/webpackFinal';
 
import { viteFinal as vite } from './vite/viteFinal';
 
import { babelDefault as babel } from './babel/babelDefault';
 
export const webpackFinal = webpack as any;
 
export const viteFinal = vite as any;
 
export const babelDefault = babel as any;
Root-level presets

This type of preset is user-facing and responsible for registering the addon without any additional configuration from the user by bundling Storybook-related features (e.g., parameters) via the previewAnnotations and UI related features (e.g., addons) via the managerEntries API. For example:

example-addon/preset.js
export const previewAnnotations = [require.resolve('./dist/preview')];
 
export const managerEntries = [require.resolve('./dist/manager')];
 
export * from './dist/preset';
Presets API

When writing a preset, you can access a select set of APIs to interact with the Storybook environment, including the supported builders (e.g., Webpack, Vite), the Storybook configuration, and UI. Below are the available APIs you can use when writing a preset addon.

Babel

To customize Storybook's Babel configuration and add support for additional features, you can use the babelDefault API. It will apply the provided configuration ahead of any other user presets, which can be further customized by the end user via the babel configuration option. For example:

example-addon/src/babel/babelDefault.ts
Typescript
import { TransformOptions } from '@babel/core';
 
export function babelDefault(config: TransformOptions) {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      [require.resolve('@babel/plugin-transform-react-jsx'), {}, 'preset'],
    ],
  };
}
ℹ️
The Babel configuration is only applied to frameworks that use Babel internally. If you enable it for a framework that uses a different compiler, like SWC or esbuild, it will be ignored.
Builders

By default, Storybook provides support for the leading industry builders, including Webpack and Vite. If you need additional features for any of these builders, you can use APIs to extend the builder configuration based on your specific needs.

Vite

If you are creating a preset and want to include Vite support, the viteFinal API can be used to modify the default configuration and enable additional features. For example:

example-addon/src/vite/viteFinal.ts
Typescript
export function ViteFinal(config: any, options: any = {}) {
  config.plugins.push(
    new MyCustomPlugin({
      someOption: true,
    }),
  );
 
  return config;
}
Webpack

To customize the Webpack configuration in Storybook to add support for additional file types, apply specific loaders, configure plugins, or make any other necessary modifications, you can use the webpackFinal API. Once invoked, it will extend the default Webpack configuration with the provided configuration. An example of this would be:

example-addon/src/webpack/webpackFinal.ts
Typescript
import type { Configuration as WebpackConfig } from 'webpack';
 
export function webpackFinal(config: WebpackConfig, options: any = {}) {
  const rules = [
    ...(config.module?.rules || []),
    {
      test: /\.custom-file$/,
      loader: require.resolve(`custom-loader`),
    },
  ];
  config.module.rules = rules;
 
  return config;
}
ManagerEntries

If you're writing a preset that loads third-party addons, which you may not have control over, but require access to specific features or additional configuration, you can use the managerEntries API. For example:

example-addon/preset.js
export const managerEntries = (entry = []) => {
  return [...entry, require.resolve('path-to-third-party-addon')];
};
PreviewAnnotations

If you need additional settings to render stories for a preset, like decorators or parameters, you can use the previewAnnotations API. For example, to apply a decorator to all stories, create a preview file that includes the decorator and make it available to the preset as follows:

example-addon/src/preview.ts
Typescript
import type { Renderer, ProjectAnnotations } from '@storybook/types';
import { PARAM_KEY } from './constants';
import { CustomDecorator } from './decorators';
 
const preview: ProjectAnnotations<Renderer> = {
  decorators: [CustomDecorator],
  globals: {
    [PARAM_KEY]: false,
  },
};
 
export default preview;
Advanced configuration

The presets API is designed to be flexible and allow you to customize Storybook to your specific needs, including using presets for more advanced use cases without publishing them. In such cases, you can rely on a private preset. These private presets contain configuration options meant for development purposes and not for end-users. The .storybook/main.js|ts file is an example of such a private preset that empowers you to modify the behavior and functionality of Storybook.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  viteFinal: async (config, options) => {
    // Update config here
    return config;
  },
  webpackFinal: async (config, options) => {
    // Change webpack config
    return config;
  },
  babel: async (config, options) => {
    return config;
  },
};
 
export default config;
Addons

For addon consumers, the managerEntries API can be too technical, making it difficult to use. To make it easier to add addons to Storybook, the preset API provides the addons API, which accepts an array of addon names and will automatically load them for you. For example:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  addons: [
    // Other Storybook addons
    '@storybook/addon-a11y',
  ],
};
 
export default config;
The array of values supports references to additional presets and addons that should be included in the manager. Storybook will automatically detect whether the provided value is a preset or an addon and load it accordingly.

Entries

Entries are the place to register entry points for the preview. This feature can be utilized to create a configure-storybook preset that automatically loads all *.stories.js files into Storybook, eliminating the need for users to copy-paste the same configuration repeatedly.

UI configuration

The Storybook preset API also provides access to the UI configuration, including the head and body HTML elements of the preview, configured by the previewHead and previewBody APIs. Both allow you to set up Storybook in a way that is similar to using the preview-head.html and preview-body.html files. These methods accept a string and return a modified version, injecting the provided content into the HTML element.

body
head
.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  previewBody: (body) => `
    ${body}
    ${
      process.env.ANALYTICS_ID ? '<script src="https://cdn.example.com/analytics.js"></script>' : ''
    }
  `,
};
 
export default config;
Additionally, if you need to customize the manager (i.e., where Storybook’s search, navigation, toolbars, and addons render), you can use the managerHead to modify the UI, similar to how you would do it with the manager-head.html file. For example:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  managerHead: (head) => `
    ${head}
    <link rel="icon" type="image/png" href="/logo192.png" sizes="192x192" />
  `,
};
 
export default config;
However, if you need, you can also customize the template used by Storybook to render the UI. To do so, you can use the previewMainTemplate API and provide a reference for a custom template created as a ejs file. For an example of how to do this, see the template used by the Webpack 5 builder.

Troubleshooting

Storybook doesn't load files in my preset

As Storybook relies on esbuild instead of Webpack to build the UI, presets that depend on the managerWebpack API to configure the manager or load additional files other than CSS or images will no longer work. We recommend removing it from your preset and adjusting your configuration to convert any additional files to JavaScript.

Learn more about the Storybook addon ecosystem

Types of addons for other types of addons
Writing addons for the basics of addon development
Presets for preset development
Integration catalog for requirements and available recipes
API reference to learn about the available APIs
</document_content>
</document>

<document index="60">
<source>Add to the integration catalog.md</source>
<document_content>
Add to the integration catalog

React
Vue
Angular
Web Components
More
Storybook has two types of integrations, addons and recipes, which are listed in the integration catalog.

Addons

Storybook addons are distributed via npm. The catalog is populated by querying npm's registry for Storybook-specific metadata in package.json.

Add your addon to the catalog by publishing a npm package that follows these requirements:

package.json with module information and addon metadata
README.md file with installation and configuration instructions
/dist directory containing transpiled ES5 code
preset.js file written as an ES5 module at the root level
💡
Get a refresher on how to write a Storybook addon.
Addon metadata

We rely on metadata to organize your addon in the catalog. You must add the storybook-addons as the first keyword, followed by your addon's category. Additional keywords will be used in search and as tags.

Property	Description	Example
name	Addon package name	storybook-addon-outline
description	Addon description	Outline all elements with CSS to help with layout placement and alignment
author	Name of the author	winkerVSbecks
keywords	List of keywords to describe the addon	["storybook-addons","style","debug"]
repository	Addon repository	{"type": "git","url": "https://github.com/someone/my-addon" }
Customize your addon's appearance by adding the storybook property with the following fields.

Property	Description	Example
displayName	Display name	Outline
icon	Link to custom icon for the addon (SVG are not supported)	https://yoursite.com/outline-icon.png
unsupportedFrameworks	List of unsupported frameworks	["vue"]
supportedFrameworks	List of supported frameworks	["react", "angular"]
Use the list below as a reference when filling in the values for both the supportedFrameworks and unsupportedFrameworks fields.

react
vue
angular
web-components
ember
html
svelte
preact
react-native
💡
Make sure to copy each item exactly as listed so that we can properly index your addon in our catalog.
package.json
{
  "name": "storybook-addon-outline",
  "version": "1.0.0",
  "description": "Outline all elements with CSS to help with layout placement and alignment",
  "repository": {
    "type": "git",
    "url": "https://github.com/chromaui/storybook-outline"
  },
  "author": "winkerVSbecks",
  "keywords": ["storybook-addons", "style", "debug", "layout", "css"],
  "storybook": {
    "displayName": "Outline",
    "unsupportedFrameworks": ["vue"],
    "supportedFrameworks": ["react", "angular"],
    "icon": "https://yoursite.com/outline-icon.png"
  }
}
The package.json above appears like below in the catalog. See an example of a production package.json here.

Storybook addon in the catalog

How long does it take for my addon to show up in the catalog?

Once you publish the addon, it will appear in the catalog. There may be a delay between the time you publish your addon and when it's listed in the catalog. If your addon doesn't show up within 24 hours, open an issue.

Recipes

Recipes are a set of instructions to integrate third-party libraries into Storybook in cases where an addon does not exist or the integration requires some manual effort.

Who owns them?

Recipes are written and maintained by the Storybook team. We create recipes based on community popularity, tool maturity, and stability of the integration. Our goal is to ensure that recipes continue to work over time.

Not finding the recipe that you want? If it's popular in the community, our docs team will write one. In the mean time, try searching for a solution — it's likely that someone has the same requirements as you do. You can also help us out by writing recipes on your own site which speeds up the research process.

Request a recipe

If you'd like to request a recipe, open a new discussion in our GitHub repo. We'll review your request, and if it's popular, we'll add it to our backlog and prioritize it.

Learn more about the Storybook addon ecosystem

Types of addons for other types of addons
Writing addons for the basics of addon development
Presets for preset development
Integration catalog for requirements and available recipes
API reference to learn about the available APIs
</document_content>
</document>

<document index="61">
<source>Types of addonss.md</source>
<document_content>
Types of addons

React
Vue
Angular
Web Components
More
Each Storybook addon is classified into two general categories, UI-based or Presets. Each type of addons feature is documented here. Use this as a reference when creating your addon.

UI-based addons

UI-based addons allow you to customize Storybook's UI with the following elements.

Panels

Panel addons allow you to add your own UI in Storybook's addon panel. This is the most common type of addon in the ecosystem. For example, the official @storybook/actions and @storybook/a11y use this pattern.

Storybook panel

Use this boilerplate code to add a new Panel to Storybook's UI:

addon-panel/manager.js
import React from 'react';
 
import { AddonPanel } from '@storybook/components';
 
import { useGlobals, addons, types } from '@storybook/manager-api';
 
addons.register('my/panel', () => {
  addons.add('my-panel-addon/panel', {
    title: 'Example Storybook panel',
    //👇 Sets the type of UI element in Storybook
    type: types.PANEL,
    render: ({ active }) => (
      <AddonPanel active={active}>
        <h2>I'm a panel addon in Storybook</h2>
      </AddonPanel>
    ),
  });
});
Toolbars

Toolbar addons allow you to add your own custom tools in Storybook's Toolbar. For example, the official @storybook/backgrounds and the @storybook/addon-outline use this pattern.

Storybook toolbar addon

Use this boilerplate code to add a new button to Storybook's Toolbar:

addon-toolbar/manager.js
import React from 'react';
 
import { addons, types } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { OutlineIcon } from '@storybook/icons';
 
addons.register('my-addon', () => {
  addons.add('my-addon/toolbar', {
    title: 'Example Storybook toolbar',
    //👇 Sets the type of UI element in Storybook
    type: types.TOOL,
    //👇 Shows the Toolbar UI element if the story canvas is being viewed
    match: ({ tabId, viewMode }) => !tabId && viewMode === 'story',
    render: ({ active }) => (
      <IconButton active={active} title="Show a Storybook toolbar">
        <OutlineIcon />
      </IconButton>
    ),
  });
});
ℹ️
The match property allows you to conditionally render your toolbar addon, based on the current view. The icon element used in the example loads the icons from the @storybook/components package. See here for the list of available icons that you can use.
Tabs

Tab addons allow you to create your own custom tabs in Storybook. For example, the official @storybook/addon-docs uses this pattern.

Storybook tab addon

Use this boilerplate code to add a new Tab to Storybook's UI:

addon-tab/manager.js
import React from 'react';
 
import { addons, types } from '@storybook/manager-api';
 
addons.register('my-addon', () => {
  addons.add('my-addon/tab', {
    type: types.TAB,
    title: 'Example Storybook tab',
    render: () => (
      <div>
        <h2>I'm a tabbed addon in Storybook</h2>
      </div>
    ),
  });
});
ℹ️
Learn how to write your own addon that includes these UI elements here.
Preset addons

Storybook preset addons are grouped collections of babel, webpack, and addons configurations to integrate Storybook and other technologies. For example the official preset-create-react-app.

Use this boilerplate code while writing your own preset addon.

.storybook/my-preset.js
export default {
  managerWebpack: async (config, options) => {
    // Update config here
    return config;
  },
  webpackFinal: async (config, options) => {
    return config;
  },
  babel: async (config, options) => {
    return config;
  },
};
Learn more about the Storybook addon ecosystem

Types of addons for other types of addons
Writing addons for the basics of addon development
Presets for preset development
Integration catalog for requirements and available recipes
API reference to learn about the available APIs
</document_content>
</document>

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

<document index="63">
<source>Addon API.md</source>
<document_content>
Addon API

React
Vue
Angular
Web Components
More
Storybook's API allows developers to interact programmatically with Storybook. With the API, developers can build and deploy custom addons and other tools that enhance Storybook's functionality.

Core Addon API

Our API is exposed via two distinct packages, each one with a different purpose:

@storybook/manager-api used to interact with the Storybook manager UI or access the Storybook API.
@storybook/preview-api used to control and configure the addon's behavior.
my-addon/src/manager.js|ts
import { addons } from '@storybook/preview-api';
 
import { useStorybookApi } from '@storybook/manager-api';
addons.add()

The add method allows you to register the type of UI component associated with the addon (e.g., panels, toolbars, tabs). For a minimum viable Storybook addon, you should provide the following arguments:

type: The type of UI component to register.
title: The title to feature in the Addon Panel.
render: The function that renders the addon's UI component.
my-addon/src/manager.js|ts
import React from 'react';
 
import { addons, types } from '@storybook/manager-api';
 
import { AddonPanel } from '@storybook/components';
 
const ADDON_ID = 'myaddon';
const PANEL_ID = `${ADDON_ID}/panel`;
 
addons.register(ADDON_ID, (api) => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'My Addon',
    render: ({ active }) => (
      <AddonPanel active={active}>
        <div> Storybook addon panel </div>
      </AddonPanel>
    ),
  });
});
ℹ️
The render function is called with active. The active value will be true when the panel is focused on the UI.
addons.register()

Serves as the entry point for all addons. It allows you to register an addon and access the Storybook API. For example:

my-addon/src/manager.js|ts
import { addons } from '@storybook/preview-api';
 
// Register the addon with a unique name.
addons.register('my-organisation/my-addon', (api) => {});
Now you'll get an instance to our StorybookAPI. See the api docs for Storybook API regarding using that.

addons.getChannel()

Get an instance to the channel to communicate with the manager and the preview. You can find this in both the addon register code and your addon’s wrapper component (where used inside a story).

It has a NodeJS EventEmitter compatible API. So, you can use it to emit events and listen to events.

my-addon/src/manager.js|ts
import React, { useCallback } from 'react';
 
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { addons } from '@storybook/preview-api';
import { useGlobals } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { OutlineIcon } from '@storybook/icons';
 
const ExampleToolbar = () => {
  const [globals, updateGlobals] = useGlobals();
 
  const isActive = globals['my-param-key'] || false;
 
  // Function that will update the global value and trigger a UI refresh.
  const refreshAndUpdateGlobal = () => {
    updateGlobals({
      ['my-param-key']: !isActive,
    }),
      // Invokes Storybook's addon API method (with the FORCE_RE_RENDER) event to trigger a UI refresh
      addons.getChannel().emit(FORCE_RE_RENDER);
  };
 
  const toggleToolbarAddon = useCallback(() => refreshAndUpdateGlobal(), [isActive]);
 
  return (
    <IconButton
      key="Example"
      active={isActive}
      title="Show the toolbar addon"
      onClick={toggleToolbarAddon}
    >
      <OutlineIcon />
    </IconButton>
  );
};
makeDecorator

Use the makeDecorator API to create decorators in the style of the official addons. Like so:

my-addon/src/decorator.js|ts
import { makeDecorator } from '@storybook/preview-api';
 
export const withAddonDecorator = makeDecorator({
  name: 'withSomething',
  parameterName: 'CustomParameter',
  skipIfNoParametersOrOptions: true
  wrapper: (getStory, context, { parameters }) => {
    /*
    * Write your custom logic here based on the parameters passed in Storybook's stories.
    * Although not advised, you can also alter the story output based on the parameters.
    */
    return getStory(context);
  },
});
ℹ️
If the story's parameters include { exampleParameter: { disable: true } } (where exampleParameter is the parameterName of your addon), your decorator will not be called.
The makeDecorator API requires the following arguments:

name: Unique name to identify the custom addon decorator.
parameterName: Sets a unique parameter to be consumed by the addon.
skipIfNoParametersOrOptions: (Optional) Doesn't run the decorator if the user hasn't options either via decorators or parameters.
wrapper: your decorator function. Takes the getStory, context, and both the options and parameters (as defined in skipIfNoParametersOrOptions above).
Storybook API

Storybook's API allows you to access different functionalities of Storybook UI.

api.selectStory()

The selectStory API method allows you to select a single story. It accepts the following two parameters; story kind name and an optional story name. For example:

Button.stories.ts|tsx
Typescript
import type { Meta, StoryObj } from '@storybook/react';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/configure/#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  //👇 Creates specific parameters for the story
  parameters: {
    myAddon: {
      data: 'This data is passed to the addon',
    },
  },
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Basic: Story = {
  render: () => <Button>Hello</Button>,
};
This is how you can select the above story:

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  api.selectStory('Button', 'Default');
});
api.selectInCurrentKind()

Similar to the selectStory API method, but it only accepts the story as the only parameter.

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  api.selectInCurrentKind('Default');
});
api.setQueryParams()

This method allows you to set query string parameters. You can use that as temporary storage for addons. Here's how you define query params:

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  api.setQueryParams({
    exampleParameter: 'Sets the example parameter value',
    anotherParameter: 'Sets the another parameter value',
  });
});
Additionally, if you need to remove a query parameter, set it as null instead of removing them from the addon. For example:

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  api.setQueryParams({
    exampleParameter: null,
  });
});
api.getQueryParam()

Allows retrieval of a query parameter enabled via the setQueryParams API method. For example:

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  api.getQueryParam('exampleParameter');
});
api.getUrlState(overrideParams)

This method allows you to get the application URL state, including any overridden or custom parameter values. For example:

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  const href = api.getUrlState({
    selectedKind: 'kind',
    selectedStory: 'story',
  }).url;
});
api.on(eventName, fn)

This method allows you to register a handler function called whenever the user navigates between stories.

my-addon/src/manager.js|ts
addons.register('my-organisation/my-addon', (api) => {
  // Logs the event data to the browser console whenever the event is emitted.
  api.on('custom-addon-event', (eventData) => console.log(eventData));
});
addons.setConfig(config)

This method allows you to override the default Storybook UI configuration (e.g., set up a theme or hide UI elements):

.storybook/manager.js
import { addons } from '@storybook/manager-api';
 
addons.setConfig({
  navSize: 300,
  bottomPanelHeight: 300,
  rightPanelWidth: 300,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
The following table details how to use the API values:

Name	Type	Description	Example Value
navSize	Number (pixels)	The size of the sidebar that shows a list of stories	300
bottomPanelHeight	Number (pixels)	The size of the addon panel when in the bottom position	200
rightPanelWidth	Number (pixels)	The size of the addon panel when in the right position	200
panelPosition	String	Where to show the addon panel	'bottom' or 'right'
enableShortcuts	Boolean	Enable/disable shortcuts	true
showToolbar	Boolean	Show/hide toolbar	true
theme	Object	Storybook Theme, see next section	undefined
selectedPanel	String	Id to select an addon panel	storybook/actions/panel
initialActive	String	Select the default active tab on Mobile	sidebar or canvas or addons
sidebar	Object	Sidebar options, see below	{ showRoots: false }
toolbar	Object	Modify the tools in the toolbar using the addon id	{ fullscreen: { hidden: false } }
The following options are configurable under the sidebar namespace:

Name	Type	Description	Example Value
showRoots	Boolean	Display the top-level nodes as a "root" in the sidebar	false
collapsedRoots	Array	Set of root node IDs to visually collapse by default	['misc', 'other']
renderLabel	Function	Create a custom label for tree nodes; must return a ReactNode	(item, api) => <abbr title="...">{item.name}</abbr>
The following options are configurable under the toolbar namespace:

Name	Type	Description	Example Value
id	String	Toggle visibility for toolbar item	{ hidden: false }
Storybook hooks

To help streamline addon development and reduce boilerplate code, the API exposes a set of hooks to access Storybook's internals. These hooks are an extension of the @storybook/manager-api package.

useStorybookState

It allows access to Storybook's internal state. Similar to the useglobals hook, we recommend optimizing your addon to rely on React.memo, or the following hooks; useMemo, useCallback to prevent a high volume of re-render cycles.

my-addon/src/manager.js|ts
import React from 'react';
 
import { AddonPanel } from '@storybook/components';
 
import { useStorybookState } from '@storybook/manager-api';
 
export const Panel = () => {
  const state = useStorybookState();
  return (
    <AddonPanel {...props}>
      {state.viewMode !== 'docs' ? (
        <h2>Do something with the documentation</h2>
      ) : (
        <h2>Show the panel when viewing the story</h2>
      )}
    </AddonPanel>
  );
};
useStorybookApi

The useStorybookApi hook is a convenient helper to allow you full access to the Storybook API methods.

my-addon/manager.js|ts
import React, { useEffect, useCallback } from 'react';
 
import { useStorybookApi } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { ChevronDownIcon } from '@storybook/icons';
 
export const Panel = () => {
  const api = useStorybookApi();
 
  const toggleMyTool = useCallback(() => {
    // Custom logic to toggle the addon here
  }, []);
 
  useEffect(() => {
    api.setAddonShortcut('custom-toolbar-addon', {
      label: 'Enable toolbar addon',
      defaultShortcut: ['G'],
      actionName: 'Toggle',
      showInMenu: false,
      action: toggleAddon,
    });
  }, [api]);
 
  return (
    <IconButton key="custom-toolbar" active="true" title="Show a toolbar addon">
      <ChevronDownIcon />
    </IconButton>
  );
};
useChannel

Allows setting subscriptions to events and getting the emitter to emit custom events to the channel.

The messages can be listened to on both the iframe and the manager.

my-addon/manager.js|ts
import React from 'react';
 
import { AddonPanel, Button } from '@storybook/components';
 
import { STORY_CHANGED } from '@storybook/core-events';
 
import { useChannel } from '@storybook/manager-api';
 
export const Panel = () => {
  // Creates a Storybook API channel and subscribes to the STORY_CHANGED event
  const emit = useChannel({
    STORY_CHANGED: (...args) => console.log(...args),
  });
 
  return (
    <AddonPanel key="custom-panel" active="true">
      <Button onClick={() => emit('my-event-type', { sampleData: 'example' })}>
        Emit a Storybook API event with custom data
      </Button>
    </AddonPanel>
  );
};
useAddonState

The useAddonState is a useful hook for addons that require data persistence, either due to Storybook's UI lifecycle or for more complex addons involving multiple types (e.g., toolbars, panels).

my-addon/manager.js|ts
import React from 'react';
 
import { useAddonState } from '@storybook/manager-api';
import { AddonPanel, IconButton } from '@storybook/components';
import { LightningIcon } from '@storybook/icons';
 
export const Panel = () => {
  const [state, setState] = useAddonState('addon-unique-identifier', 'initial state');
 
  return (
    <AddonPanel key="custom-panel" active="true">
      <Button onClick={() => setState('Example')}>
        Click to update Storybook's internal state
      </Button>
    </AddonPanel>
  );
};
export const Tool = () => {
  const [state, setState] = useAddonState('addon-unique-identifier', 'initial state');
 
  return (
    <IconButton
      key="custom-toolbar"
      active="true"
      title="Enable my addon"
      onClick={() => setState('Example')}
    >
      <LightningIcon />
    </IconButton>
  );
};
useParameter

The useParameter retrieves the current story's parameters. If the parameter's value is not defined, it will automatically default to the second value defined.

my-addon/manager.js|ts
import React from 'react';
 
import { AddonPanel } from '@storybook/components';
 
import { useParameter } from '@storybook/manager-api';
 
export const Panel = () => {
  // Connects to Storybook's API and retrieves the value of the custom parameter for the current story
  const value = useParameter('custom-parameter', 'initial value');
 
  return (
    <AddonPanel key="custom-panel" active="true">
      {value === 'initial value' ? (
        <h2>The story doesn't contain custom parameters. Defaulting to the initial value.</h2>
      ) : (
        <h2>You've set {value} as the parameter.</h2>
      )}
    </AddonPanel>
  );
};
useGlobals

Extremely useful hook for addons that rely on Storybook Globals. It allows you to obtain and update global values. We also recommend optimizing your addon to rely on React.memo, or the following hooks; useMemo, useCallback to prevent a high volume of re-render cycles.

my-addon/manager.js|ts
import React from 'react';
 
import { AddonPanel, Button } from '@storybook/components';
 
import { useGlobals } from '@storybook/manager-api';
 
export const Panel = () => {
  const [globals, updateGlobals] = useGlobals();
 
  const isActive = globals['my-param-key'] || false; // 👈 Sets visibility based on the global value.
 
  return (
    <AddonPanel key="custom-panel" active={isActive}>
      <Button onClick={() => updateGlobals({ ['my-param-key']: !isActive })}>
        {isActive ? 'Hide the addon panel' : 'Show the panel'}
      </Button>
    </AddonPanel>
  );
};
useArgs

Hook that allows you to retrieve or update a story's args.

my-addon/src/manager.js|ts
import { useArgs } from '@storybook/manager-api';
 
const [args, updateArgs, resetArgs] = useArgs();
 
// To update one or more args:
updateArgs({ key: 'value' });
 
// To reset one (or more) args:
resetArgs((argNames: ['key']));
 
// To reset all args
resetArgs();
Learn more about the Storybook addon ecosystem

Types of addons for other types of addons
Writing addons for the basics of addon development
Presets for preset development
Integration catalog for requirements and available recipes
API reference to learn about the available APIs
</document_content>
</document>

<document index="64">
<source>Configure Storybook.md</source>
<document_content>
Configure Storybook

React
Vue
Angular
Web Components
More
Storybook is configured via a folder called .storybook, which contains various configuration files.

ℹ️
Note that you can change the folder that Storybook uses by setting the -c flag to your storybook dev and storybook build CLI commands.
Configure your Storybook project

Storybook's main configuration (i.e., the main.js|ts) defines your Storybook project's behavior, including the location of your stories, the addons you use, feature flags and other project-specific settings. This file should be in the .storybook folder in your project's root directory. You can author this file in either JavaScript or TypeScript. Listed below are the available options and examples of how to use them.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  // Required
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Optional
  addons: ['@storybook/addon-essentials'],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};
 
export default config;
ℹ️
This configuration file is a preset and, as such, has a powerful interface, which can be further customized. Read our documentation on writing presets to learn more.
Configuration element	Description
stories	The array of globs that indicates the location of your story files, relative to main.js
staticDirs	Sets a list of directories of static files to be loaded by Storybook
staticDirs: ['../public']
addons	Sets the list of addons loaded by Storybook
addons: ['@storybook/addon-essentials']
typescript	Configures how Storybook handles TypeScript files
typescript: { check: false, checkOptions: {} }
framework	Configures Storybook based on a set of framework-specific settings
framework: { name: '@storybook/svelte-vite', options:{} }
core	Configures Storybook's internal features
core: { disableTelemetry: true, }
docs	Configures Storybook's auto-generated documentation
docs: { autodocs: 'tag' }
features	Enables Storybook's additional features
See table below for a list of available features
refs	Configures Storybook composition
refs: { example: { title: 'ExampleStorybook', url:'https://your-url.com' } }
logLevel	Configures Storybook's logs in the browser terminal. Useful for debugging
logLevel: 'debug'
webpackFinal	Customize Storybook's Webpack setup
webpackFinal: async (config:any) => { return config; }
viteFinal	Customize Storybook's Vite setup when using the vite builder
viteFinal: async (config: Vite.InlineConfig, options: Options) => { return config; }
env	Defines custom Storybook environment variables.
env: (config) => ({...config, EXAMPLE_VAR: 'Example var' }),
build	Optimizes Storybook's production build for performance by excluding specific features from the bundle. Useful when decreased build times are a priority.
build: { test: {} }
Configure story loading

By default, Storybook will load stories from your project based on a glob (pattern matching string) in .storybook/main.js|ts that matches all files in your project with extension .stories.*. The intention is for you to colocate a story file along with the component it documents.

•
└── components
    ├── Button.js
    └── Button.stories.js
If you want to use a different naming convention, you can alter the glob using the syntax supported by picomatch.

For example, if you wanted to pull both .md and .js files from the my-project/src/components directory, you could write:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../my-project/src/components/*.@(js|md)'],
};
 
export default config;
With a configuration object

Additionally, you can customize your Storybook configuration to load your stories based on a configuration object. For example, if you wanted to load your stories from a packages/components directory, you could adjust your stories configuration field into the following:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: [
    {
      // 👇 Sets the directory containing your stories
      directory: '../packages/components',
      // 👇 Storybook will load all files that match this glob
      files: '*.stories.*',
      // 👇 Used when generating automatic titles for your stories
      titlePrefix: 'MyComponents',
    },
  ],
};
 
export default config;
When Storybook starts, it will look for any file containing the stories extension inside the packages/components directory and generate the titles for your stories.

With a directory

You can also simplify your Storybook configuration and load the stories using a directory. For example, if you want to load all the stories inside a packages/MyStories, you can adjust the configuration as such:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  // 👇 Storybook will load all existing stories within the MyStories folder
  stories: ['../packages/MyStories'],
};
 
export default config;
With a custom implementation

You can also adjust your Storybook configuration and implement custom logic to load your stories. For example, suppose you were working on a project that includes a particular pattern that the conventional ways of loading stories could not solve. In that case, you could adjust your configuration as follows:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
import type { StoriesEntry } from '@storybook/types';
 
async function findStories(): Promise<StoriesEntry[]> {
  // your custom logic returns a list of files
}
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: async (list: StoriesEntry[]) => [
    ...list,
    // 👇 Add your found stories to the existing list of story files
    ...(await findStories()),
  ],
};
 
export default config;
Known limitations

Because of the way stories are currently indexed in Storybook, loading stories on demand has a couple of minor limitations at the moment:

CSF formats from version 1 to version 3 are supported.
Custom storySort functions are allowed based on a restricted API.
Configure story rendering

To control the way stories are rendered and add global decorators and parameters, create a .storybook/preview.js file. This is loaded in the Canvas UI, the “preview” iframe that renders your components in isolation. Use preview.js for global code (such as CSS imports or JavaScript mocks) that applies to all stories.

The preview.js file can be an ES module and export the following keys:

decorators - an array of global decorators
parameters - an object of global parameters
globalTypes - definition of globalTypes
If you’re looking to change how to order your stories, read about sorting stories.

Configure Storybook’s UI

To control the behavior of Storybook’s UI (the “manager”), you can create a .storybook/manager.js file.

This file does not have a specific API but is the place to set UI options and to configure Storybook’s theme.
</document_content>
</document>

<document index="65">
<source>Styling and CSS.md</source>
<document_content>
Styling and CSS

React
Vue
Angular
Web Components
More
There are many ways to include CSS in a web application, and correspondingly there are many ways to include CSS in Storybook. Usually, it is best to try and replicate what your application does with styling in Storybook’s configuration.

CSS

Storybook supports importing CSS files in a few different ways. Storybook will inject these tags into the preview iframe where your components render, not the Storybook Manager UI. The best way to import CSS depends on your project's configuration and your preferences.

Import bundled CSS (Recommended)

All Storybooks are pre-configured to recognize imports for CSS files. To add global CSS for all your stories, import it in .storybook/preview.ts. These files will be subject to HMR, so you can see your changes without restarting your Storybook server.

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
import '../src/styles/global.css';
 
const preview: Preview = {
  parameters: {},
};
 
export default preview;
If your component files import their CSS files, this will work too. However, if you're using CSS processor tools like Sass or Postcss, you may need some more configuration.

Include static CSS

If you have a global CSS file that you want to include in all your stories, you can import it in .storybook/preview-head.html. However, these files will not be subject to HMR, so you'll need to restart your Storybook server to see your changes.

.storybook/preview-head.html
<!-- Loads a font from a CDN -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
  rel="stylesheet"
/>
<!-- Load your CSS file -->
<link rel="stylesheet" href="path/to/your/styles.css" />
CSS modules

Vite

Vite comes with CSS modules support out-of-the-box. If you have customized the CSS modules configuration in your vite.config.js this will automatically be applied to your Storybook as well. Read more about Vite's CSS modules support.

Webpack

📣
Using @storybook/nextjs?
Storybook recreates your Next.js configuration, so you can use CSS modules in your stories without any extra configuration.
If you're using Webpack and want to use CSS modules, you'll need some extra configuration. We recommend installing @storybook/addon-styling-webpack to help you configure these tools.

PostCSS

Vite

Vite comes with PostCSS support out-of-the-box. If you have customized the PostCSS configuration in your vite.config.js this will automatically be applied to your Storybook as well. Read more about Vite's PostCSS support.

Webpack

📣
Using @storybook/nextjs?
Storybook recreates your Next.js configuration, so you can use PostCSS in your stories without any extra configuration.
If you're using Webpack and want to use PostCSS, you'll need some extra configuration. We recommend installing @storybook/addon-styling-webpack to help you configure these tools.

CSS pre-processors

Vite

Vite comes with Sass, Less, and Stylus support out-of-the-box. Read more about Vite's CSS Pre-processor support.

Webpack

📣
Using @storybook/nextjs?
Storybook recreates your Next.js configuration, so you can use Sass in your stories without any extra configuration.
If you're using Webpack and want to use Sass or less, you'll need some extra configuration. We recommend installing @storybook/addon-styling-webpack to help you configure these tools. Or if you'd prefer, you can customize Storybook's webpack configuration yourself to include the appropriate loader(s).

CSS-in-JS

CSS-in-JS libraries are designed to use basic JavaScript, and they often work in Storybook without any extra configuration. Some libraries expect components to render in a specific rendering “context” (for example, to provide themes), which can be accomplished with @storybook/addon-themes's withThemeFromJSXProvider decorator.

Adding webfonts

.storybook/preview-head.html

If you need webfonts to be available, you may need to add some code to the .storybook/preview-head.html file. We recommend including any assets with your Storybook if possible, in which case you likely want to configure the static file location.

.storybook/preview.ts

If you're using something like fontsource for your fonts, you can import the needed css files in your .storybook/preview.ts file.
</document_content>
</document>

<document index="66">
<source>Upgrading Storybook.md</source>
<document_content>
Upgrading Storybook

React
Vue
Angular
Web Components
More
The frontend ecosystem is a fast-moving place. Regular dependency upgrades are a way of life, whether upgrading a framework, library, tooling, or all of the above! Storybook provides a few resources to help ease the pain of upgrading.

Upgrade script

The most common upgrade is Storybook itself. Storybook releases follow Semantic Versioning. We publish patch releases with bug fixes continuously, minor versions of Storybook with new features every few months, and major versions of Storybook with breaking changes roughly once per year.

To help ease the pain of keeping Storybook up-to-date, we provide a command-line script:

npm
npx storybook@latest upgrade
The upgrade command will use whichever version you specify. For example:

storybook@latest upgrade will upgrade to the latest version
storybook@7.6.10 upgrade will upgrade to 7.6.10
storybook@7 upgrade will upgrade to the newest 7.x.x version
After running the command, the script will:

Upgrade all Storybook packages in your project to the specified version
Run the relevant automigrations factoring in the breaking changes between your current version and the specified version
ℹ️
In addition to running the command, we also recommend checking the MIGRATION.md file, for the detailed log of relevant changes and deprecations that might affect your upgrade.
Verifying the upgrade

To help you verify that the upgrade was completed and that your project is still working as expected, the Storybook CLI provides the doctor command that allows you to do a health check on your project for common issues that might arise after an upgrade, such as duplicated dependencies, incompatible addons or mismatched versions. To perform the health check, run the following command with your package manager of choice:

npm
npx storybook@latest doctor
Automigrate script

Storybook upgrades are not the only thing to consider: changes in the ecosystem also present challenges. For example well-known frontend frameworks, such as Angular, Next.js or Svelte have been rolling out significant changes to their ecosystem, so even if you don't upgrade your Storybook version, you might need to update your configuration accordingly. That's what Automigrate is for:

npm
npx storybook@latest automigrate
It runs a set of standard configuration checks, explains what is potentially out-of-date, and offers to fix it for you automatically. It also points to the relevant documentation so you can learn more. It runs automatically as part of storybook upgrade command, but it's also available on its own if you don't want to upgrade Storybook.

Prereleases

In addition to the above, Storybook is under constant development, and we publish pre-release versions almost daily. Pre-releases are the best way to try out new features before they are generally available, and we do our best to keep them as stable as possible, although this is not always possible.

To upgrade to the latest pre-release:

npm
npx storybook@next upgrade
The upgrade command will use whichever version you specify. For example:

storybook@next upgrade will upgrade to the newest pre-release version
storybook@8.0.0-beta.1 upgrade will upgrade to 8.0.0-beta.1
storybook@8 upgrade will upgrade to the newest 8.x version
If you'd like to downgrade to a stable version, manually edit the package version numbers in your package.json and re-install.

ℹ️
Storybook collects completely anonymous data to help us improve user experience. Participation is optional, and you may opt-out if you'd not like to share any information.
</document_content>
</document>

<document index="67">
<source>Telemetry.md</source>
<document_content>
Telemetry

Storybook collects completely anonymous data to help us improve user experience. Participation in this anonymous program is optional, and you may opt-out if you'd not like to share any information.

Why is telemetry collected?

Hundreds of thousands of developers use Storybook daily to build, test, and document components. Storybook is framework agnostic and integrates with the front-end ecosystem:

JavaScript frameworks such as React, Vue 3, Svelte and Solid
Libraries such as Styled-Components, Tailwind, Redux
Design tools such as Figma, Sketch, Zeplin and InVision
Workflow tools such as Notion, Confluence, and Jira
In the past, our improvement process relied on manually gathering feedback. But with a growing userbase and the need to support a wide variety of integrations, we need a more accurate method for gauging Storybook usage and pain points.

These telemetry data help us (the maintainers) to prioritize the highest impact projects. That allows us to keep up with trends in the front-end ecosystem and verify that our community's hard work achieves the intended result.

What is being collected?

We collect general usage details, including command invocation, Storybook version, addons, and the view layer.

Specifically, we track the following information in our telemetry events:

Timestamp of the occurrence.
Command invoked (e.g., init, upgrade, dev, build).
Storybook unique identifier: One-way hash generated during Storybook installation process.
One way hash of the IP address where the event occurred for spam detection.
Story count.
Storybook version.
Storybook metadata:
Language (e.g., TypeScript, JavaScript).
Supported view layers (e.g., React, Vue 3, Angular, Svelte).
Builder (e.g., Webpack5, Vite).
Meta framework (e.g., Next, Gatsby, CRA).
Addons (e.g., Essentials, Accessibility).
Testing tools (e.g. Jest, Vitest, Playwright).
Package manager information (e.g., npm, yarn).
Monorepo information (e.g., NX, Turborepo).
In-app events (e.g., Storybook guided tour, UI test run).
Access to the raw data is highly controlled, limited to select members of Storybook's core team who maintain the telemetry. We cannot identify individual users from the dataset: it is anonymized and untraceable back to the user.

What about sensitive information?

We take your privacy and our security very seriously. We perform additional steps to ensure that secure data (e.g., environment variables or other forms of sensitive data) do not make their way into our analytics. You can view all the information we collect by setting the STORYBOOK_TELEMETRY_DEBUG to 1 to print out the information gathered. For example:

npm
STORYBOOK_TELEMETRY_DEBUG=1 npm run storybook
Will generate the following output:

{
  "anonymousId": "8bcfdfd5f9616a1923dd92adf89714331b2d18693c722e05152a47f8093392bb",
  "eventType": "dev",
  "payload": {
    "versionStatus": "cached",
    "storyIndex": {
      "storyCount": 0,
      "componentCount": 0,
      "pageStoryCount": 0,
      "playStoryCount": 0,
      "autodocsCount": 0,
      "mdxCount": 0,
      "exampleStoryCount": 8,
      "exampleDocsCount": 3,
      "onboardingStoryCount": 0,
      "onboardingDocsCount": 0,
      "version": 5
    },
    "storyStats": {
      "factory": 0,
      "play": 0,
      "render": 1,
      "loaders": 0,
      "beforeEach": 0,
      "globals": 0,
      "storyFn": 5,
      "mount": 0,
      "moduleMock": 0,
      "tags": 0
    }
  },
  "metadata": {
    "generatedAt": 1689007841223,
    "hasCustomBabel": false,
    "hasCustomWebpack": false,
    "hasStaticDirs": false,
    "hasStorybookEslint": false,
    "refCount": 0,
    "portableStoriesFileCount": 0,
    "packageManager": {
      "type": "yarn",
      "version": "3.1.1"
    },
    "monorepo": "Nx",
    "framework": {
      "name": "@storybook/react-vite",
      "options": {}
    },
    "builder": "@storybook/builder-vite",
    "renderer": "@storybook/react",
    "storybookVersion": "7.1.0",
    "storybookVersionSpecifier": "^7.1.0",
    "language": "typescript",
    "storybookPackages": {
      "@storybook/blocks": {
        "version": "7.1.0"
      },
      "@storybook/react": {
        "version": "7.1.0"
      },
      "@storybook/react-vite": {
        "version": "7.1.0"
      },
      "@storybook/testing-library": {
        "version": "0.2.0"
      },
      "storybook": {
        "version": "7.1.0"
      }
    },
    "addons": {
      "@storybook/addon-essentials": {
        "version": "7.1.0"
      },
      "@storybook/addon-onboarding": {
        "version": "1.0.6"
      },
      "@storybook/addon-interactions": {
        "version": "7.1.0"
      }
    }
  }
}
Additionally, if Storybook's guided tour is enabled, it will generate the following output:

{
  "eventType": "addon-onboarding",
  "payload": {
    "step": "1:Welcome",
    "addonVersion": "1.0.6"
  },
  "metadata": {
    // See above for metadata that's collected.
  }
}
Will this data be shared?

The data we collect is anonymous, not traceable to the source, and only meaningful in aggregate form. No data we collect is personally identifiable. In the future, we plan to share relevant data with the community through public dashboards (or similar data representation formats).

How to opt-out

You may opt out of the telemetry within your Storybook configuration by setting the disableTelemetry configuration element to true.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
};
 
export default config;
If necessary, you can also turn off telemetry via the command line with the --disable-telemetry flag.

npm
npm run storybook -- --disable-telemetry
Or via the STORYBOOK_DISABLE_TELEMETRY environment variable.

STORYBOOK_DISABLE_TELEMETRY=1 yarn storybook
💡
There is a boot event containing no metadata (used to ensure the telemetry is working). It is sent prior to evaluating your Storybook configuration file (i.e., main.js|ts), so it is unaffected by the disableTelemetry option. If you want to ensure that the event is not sent, use the STORYBOOK_DISABLE_TELEMETRY environment variable.
Crash reports (disabled by default)

In addition to general usage telemetry, you may also choose to share crash reports. Storybook will then sanitize the error object (removing all user paths) and append it to the telemetry event. To enable crash reporting, you can set the enableCrashReports configuration element to true.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    enableCrashReports: true, // 👈 Appends the crash reports to the telemetry events
  },
};
 
export default config;
You can also enable crash reporting via the command line with the --enable-crash-reports flag.

npm
npm run storybook -- --enable-crash-reports
Or by setting the STORYBOOK_ENABLE_CRASH_REPORTS environment variable to 1.

STORYBOOK_ENABLE_CRASH_REPORTS=1 yarn storybook
Enabling any of the options will generate the following item in the telemetry event:

{
  stack: 'Error: Your button is not working\n' +
    '    at Object.<anonymous> ($SNIP/test.js:39:27)\n' +
    '    at Module._compile (node:internal/modules/cjs/loader:1103:14)\n' +
    '    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)\n' +
    '    at Module.load (node:internal/modules/cjs/loader:981:32)\n' +
    '    at Function.Module._load (node:internal/modules/cjs/loader:822:12)\n' +
    '    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)\n' +
    '    at node:internal/main/run_main_module:17:47',
  message: 'Your button is not working'
}
</document_content>
</document>

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

<document index="69">
<source>Feature support for frameworks.md</source>
<document_content>
Feature support for frameworks

Storybook integrates with many popular frontend frameworks. We do our best to keep feature parity amongst frameworks, but it’s tricky for our modest team to support every framework.

Below is a comprehensive table of what’s supported in which framework integration. If you’d like a certain feature supported in your framework, we welcome pull requests.

Core frameworks

Core frameworks have dedicated maintainers or contributors who are responsible for maintaining the integration. As such, you can use most Storybook features in these frameworks.

React	Vue 3	Angular	Web Components
Essentials				
Actions	✅	✅	✅	✅
Backgrounds	✅	✅	✅	✅
Docs	✅	✅	✅	✅
Viewport	✅	✅	✅	✅
Controls	✅	✅	✅	✅
Measure	✅	✅	✅	✅
Outline	✅	✅	✅	✅
Addons				
A11y	✅	✅	✅	✅
Component testing	✅	✅	✅	✅
Test runner	✅	✅	✅	✅
Test coverage	✅	✅	✅	✅
CSS resources	✅	✅	✅	✅
Design assets	✅	✅	✅	✅
Events	✅	✅	✅	✅
Google analytics	✅	✅	✅	✅
GraphQL	✅		✅	
Jest	✅	✅	✅	✅
Links	✅	✅	✅	✅
Queryparams	✅	✅	✅	✅
Storysource	✅	✅	✅	✅
Docs				
CSF Stories	✅	✅	✅	✅
Autodocs	✅	✅	✅	✅
Doc Blocks - ArgTypes	✅	✅	✅	✅
Doc Blocks - Canvas	✅	✅	✅	✅
Doc Blocks - ColorPalette	✅	✅	✅	✅
Doc Blocks - Controls	✅	✅	✅	✅
Doc Blocks - Description	✅	✅	✅	✅
Doc Blocks - IconGallery	✅	✅	✅	✅
Doc Blocks - Markdown	✅	✅	✅	✅
Doc Blocks - Meta	✅	✅	✅	✅
Doc Blocks - Primary	✅	✅	✅	✅
Doc Blocks - Source	✅	✅	✅	✅
Doc Blocks - Story	✅	✅	✅	✅
Doc Blocks - Stories	✅	✅	✅	✅
Doc Blocks - Subtitle	✅	✅	✅	✅
Doc Blocks - Title	✅	✅	✅	✅
Doc Blocks - Typeset	✅	✅	✅	✅
Doc Blocks - Unstyled	✅	✅	✅	✅
Doc Blocks - UseOf	✅	✅	✅	✅
Inline stories	✅	✅	✅	✅
Community frameworks

Community frameworks have fewer contributors which means they may not be as up to date as core frameworks. If you use one of these frameworks for your job, please consider contributing to its integration with Storybook.

Ember	HTML	Svelte	Preact	Qwik	SolidJS
Essentials						
Actions	✅	✅	✅	✅	✅	✅
Backgrounds	✅	✅	✅	✅	✅	✅
Docs	✅	✅	✅	✅	✅	✅
Viewport	✅	✅	✅	✅	✅	✅
Controls	✅	✅	✅	✅	✅	✅
Measure	✅	✅	✅	✅	✅	✅
Outline	✅	✅	✅	✅	✅	✅
Addons						
A11y	✅	✅	✅	✅	✅	✅
Component testing		✅	✅	✅	✅	✅
Test runner		✅	✅	✅	✅	✅
Test coverage		✅	✅	✅	✅	✅
CSS resources	✅	✅	✅	✅	✅	✅
Design assets	✅	✅	✅	✅	✅	✅
Events	✅	✅	✅	✅	✅	✅
Google analytics	✅	✅	✅	✅	✅	✅
GraphQL						
Jest	✅	✅	✅	✅	✅	✅
Links	✅	✅	✅	✅	✅	✅
Queryparams	✅	✅	✅	✅	✅	✅
Storysource	✅	✅	✅	✅	✅	✅
Docs						
CSF Stories	✅	✅	✅	✅	✅	✅
Autodocs		✅	✅	✅	✅	✅
Doc Blocks - ArgTypes	✅	✅	✅	✅	✅	✅
Doc Blocks - Canvas	✅	✅	✅	✅	✅	✅
Doc Blocks - ColorPalette	✅	✅	✅	✅	✅	✅
Doc Blocks - Controls	✅	✅	✅	✅	✅	✅
Doc Blocks - Description	✅	✅	✅	✅	✅	✅
Doc Blocks - IconGallery	✅	✅	✅	✅	✅	✅
Doc Blocks - Markdown	✅	✅	✅	✅	✅	✅
Doc Blocks - Meta	✅	✅	✅	✅	✅	✅
Doc Blocks - Primary	✅	✅	✅	✅	✅	✅
Doc Blocks - Source	✅	✅	✅	✅	✅	✅
Doc Blocks - Story	✅	✅	✅	✅	✅	✅
Doc Blocks - Stories	✅	✅	✅	✅	✅	✅
Doc Blocks - Subtitle	✅	✅	✅	✅	✅	✅
Doc Blocks - Title	✅	✅	✅	✅	✅	✅
Doc Blocks - Typeset	✅	✅	✅	✅	✅	✅
Doc Blocks - Unstyled	✅	✅	✅	✅	✅	✅
Doc Blocks - UseOf	✅	✅	✅	✅	✅	✅
Inline stories		✅	✅			
Deprecated

To align the Storybook ecosystem with the current state of frontend development, the following features and addons are now deprecated, no longer maintained, and will be removed in future versions of Storybook

Feature	Status
Knobs	The Knobs addon was officially deprecated with the release of Storybook 6.3 and is no longer actively maintained. We recommend using the controls instead.
Storyshots	The Storyshots addon was officially deprecated with the release of Storybook 7.6, is no longer actively maintained and was removed in Storybook 8. See the migration guide for the available alternatives.
StoriesOf	The storiesOf API was officially removed with the release of Storybook 8 and is no longer maintained. We recommend using the CSF API instead for writing stories.
See the migration guide for more information.
</document_content>
</document>

<document index="70">
<source>Compiler support.md</source>
<document_content>
Compiler support

React
Vue
Angular
Web Components
More
Javascript compilers are essential in optimizing and transforming code, enhancing performance, and ensuring compatibility across different environments. Storybook provides support for the leading compilers, ensuring lightning-fast build time and execution with SWC or leveraging Babel with its extensive ecosystem of plugins and presets to allow you to use the latest features of the ecosystem with minimal configuration required for your Webpack-based project.

SWC

SWC is a fast, highly extensible tool for compiling and bundling modern JavaScript applications. Powered by Rust, it improves performance and reduces build times. Storybook includes a built-in integration with SWC, allowing zero-configuration setup and built-in types for APIs. If you've initialized Storybook in a Webpack-based project with any of the supported frameworks, except Angular, Create React App, Ember.js and Next.js, it will automatically use SWC as its default, providing you with faster loading time.

ℹ️
Support for the SWC builder is currently experimental for Next.js projects, and it's not enabled by default. It requires you to opt in to use it. For more information on configuring SWC with the supported frameworks, see the SWC API documentation.
Babel

Babel is a widely adopted JavaScript compiler providing a modular architecture and extensive plugin system to support a wide range of use cases, enabling access to the cutting-edge features of the tooling ecosystem. Storybook provides a seamless integration with Babel, allowing you to share a standard setup between your project and Storybook without any additional configuration.

ℹ️
If you're not using Storybook 7, please reference the previous documentation for guidance on configuring your Babel setup.
Configure

By default, Babel provides an opinionated configuration that works for most projects, relying on two distinct methods for configuring projects with the tool:

Project-wide configuration: Babel will look for a babel.config.js or equivalent file in the root of your project and use it to configure your project's Babel setup.
File-relative configuration: Babel will look for a .babelrc.json or equivalent file, introspecting the project structure until it finds a configuration file. This will allow you to configure Babel individually for multiple aspects of your project.
Storybook relies on an agnostic approach to configuring Babel, enabling you to provide the necessary configuration for your project, and it will use it. Based on the supported frameworks, builders, and addons, it may include minor adjustments to ensure compatibility with Storybook's features.

ℹ️
For custom project configurations such as monorepos, where you have multiple Storybook configurations, creating a .babelrc.json file in your project's current working directory may not be sufficient. In those cases, you can create a babel.config.js file to override Babel's configuration, and Storybook will automatically detect and use it. See the Babel documentation for more information.
Working with Create React App

If you're working with a project that was initialized with Create React App, Storybook will automatically detect and use the Babel configuration provided by the tool enabled via the @storybook/preset-create-react-app preset, allowing to use Storybook without any additional configuration.

Troubleshooting

The SWC compiler doesn't work with React

If you have enabled the SWC builder option in a React-based project and you are not explicitly importing React in your jsx|tsx files, it can cause Storybook to fail to load. SWC does not automatically import the jsx-runtime module when using the SWC builder. To resolve this issue, you need to adjust your Storybook configuration file (i.e., .storybook/main.js|ts) and configure the swc option as follows:

.storybook/main.ts
Typescript
// Replace your-framework with the webpack-based framework you are using (e.g., react-webpack5)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: {
    name: '@storybook/your-framework',
    options: {},
  },
  swc: (config, options) => ({
    jsc: {
      transform: {
        react: {
          runtime: 'automatic',
        },
      },
    },
  }),
};
 
export default config;
Babel configuration not working

Out of the box, Storybook can detect and apply any Babel configuration you provided in your project. However, if you're running into a situation where your configuration is not being used, you configure the BABEL_SHOW_CONFIG_FOR environment variable and set it to the file you want to inspect. For example:

BABEL_SHOW_CONFIG_FOR=.storybook/preview.js yarn storybook
When the command runs, it will output the Babel configuration applied to the file you specified despite showing a transpilation error in the console and preventing Storybook from loading. This is a known issue with Babel unrelated to Storybook, which you address by turning off the environment variable after inspecting the configuration and restarting Storybook.
</document_content>
</document>

<document index="71">
<source>TypeScript.md</source>
<document_content>
TypeScript

React
Vue
Angular
Web Components
More
Storybook provides an integrated TypeScript experience, including zero-configuration setup and built-in types for APIs, addons, and stories.

Configure Storybook with TypeScript

Storybook's configuration file (i.e., main.ts) is defined as an ESM module written in TypeScript, providing you with the baseline configuration to support your existing framework while enabling you stricter type-checking and autocompletion in your editor. Below is an abridged configuration file.

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  // Required
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Optional
  addons: ['@storybook/addon-essentials'],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};
 
export default config;
See the main configuration API reference for more details and additional properties.

💡
See the Vite builder TypeScript documentation if using @storybook/builder-vite.
Extending the default configuration

Out of the box, Storybook is built to work with a wide range of third-party libraries, enabling you to safely access and document metadata (e.g., props) for your components without any additional configuration. It relies on react-docgen, a fast and highly customizable parser to process TypeScript files to infer the component's metadata and generate types automatically for improved performance and type safety. If you need to customize the default configuration for a specific use case scenario, you can adjust your Storybook configuration file and provide the required options. Listed below are the available options and examples of how to use them.

Option	Description
check	Available for Webpack-based projects.
Enables type checking within Storybook
typescript: { check: true },
checkOptions	Requires the check option to be enabled.
Configures the fork-ts-checker-webpack-plugin plugin
typescript: { checkOptions: {},},
reactDocgen	Configures the TypeScript parser used by Storybook.
Available options: react-docgen (default), react-docgen-typescript, false
typescript: { reactDocgen: 'react-docgen'},
reactDocgenTypescriptOptions	Requires the reactDocgenoption to be react-docgen-typescript.
Configures the react-docgen-typescript-plugin plugin per builder
typescript: { reactDocgen: 'react-docgen-typescript', reactDocgenTypescriptOptions: {},},
skipCompiler	Disables parsing Typescript files through the compiler
typescript: { skipCompiler:false,},
.storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    check: false,
    checkOptions: {},
    skipCompiler: false,
  },
};
 
export default config;
Additional options are available for the typescript configuration option. See the config.typescript API reference for more information.
Write stories with TypeScript

Storybook provides zero-config TypeScript support, allowing you to write stories using this language without additional configuration. You can use this format for improved type safety and code completion. For example, if you're testing a Button component, you could do the following in your story file:

Button.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
};
 
export default meta;
type Story = StoryObj<typeof Button>;
 
//👇 Throws a type error if the args don't match the component props
export const Primary: Story = {
  args: {
    primary: true,
  },
};
The example above uses the power of TypeScript in combination with the exported generic types (Meta and StoryObj) to tell Storybook how to infer the component's metadata and the type of the component's inputs (e.g., props). This can greatly improve the developer experience by letting your IDE show you what properties are injected by Storybook.

TypeScript 4.9 support

Assuming that you're working on a project that uses TypeScript 4.9+, you can update your component stories to use the new satisfies operator to ensure stricter type checking for your component stories. For example:

Button.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/<your-framework>';
 
import { Button } from './Button';
 
const meta = {
  component: Button,
} satisfies Meta<typeof Button>; // 👈 Satisfies operator being used for stricter type checking.
 
export default meta;
Now, when you define a story or update an existing one, you'll automatically get notified that you're missing a required arg. However, you're not limited to using the satisfies operator at the component level. If you need, you can also use it at the story level. For example:

Button.stories.ts|tsx
// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta = {
  component: Button,
} satisfies Meta<typeof Button>;
 
export default meta;
type Story = StoryObj<typeof meta>;
 
export const Example = {
  args: {
    primary: true,
    label: 'Button',
  },
} satisfies Story;
Troubleshooting

The satisfies operator is not working as expected

Out of the box, Storybook supports the satisfies operator for almost every framework already using TypeScript version 4.9 or higher. However, due to the constraints of the Angular and Web Components framework, you might run into issues when applying this operator for additional type safety. This is primarily due to how both frameworks are currently implemented, making it almost impossible for Storybook to determine if the component property is required. If you encounter this issue, please open up a support request on GitHub Discussions.

Storybook doesn't create the required types for external packages

If your project relies on a third-party library and the expected types are not being generated, preventing you from accurately documenting your components, you can adjust the reactDocgen configuration option in your Storybook configuration file to use react-docgen-typescript instead and include the required options. For example:

.storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, react-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Filter out third-party props from node_modules except @mui packages.
      propFilter: (prop) =>
        prop.parent ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName) : true,
    },
  },
};
 
export default config;
The types are not being generated for my component

If you're working with a React project, type inference is automatically enabled for your components using the react-docgen library for improved build times and type safety. However, you may run into a situation where some options may not work as expected (e.g., Enums, React's forwardRef). This is primarily due to how the react-docgen package is implemented, making it difficult for Storybook to infer the component's metadata and generate types automatically. To solve this, you can update the typescript configuration option in your Storybook configuration file to use react-docgen-typescript instead. For example:

.storybook/main.ts
// Replace your-framework with the framework you are using (e.g., react-webpack5, react-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    // Provide your own options if necessary.
    // See https://storybook.js.org/docs/configure/typescript for more information.
    reactDocgenTypescriptOptions: {},
  },
};
 
export default config;
If you're still encountering issues, we recommend reaching out to the community using the default communication channels (e.g., GitHub discussions).
</document_content>
</document>

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

<document index="73">
<source>Story rendering.md</source>
<document_content>
Story rendering

React
Vue
Angular
Web Components
More
In Storybook, your stories render in a particular “preview” iframe (also called the Canvas) inside the larger Storybook web application. The JavaScript build configuration of the preview is controlled by a builder config, but you also may want to run some code for every story or directly control the rendered HTML to help your stories render correctly.

Running code for every story

Code executed in the preview file (.storybook/preview.js|ts) runs for every story in your Storybook. This is useful for setting up global styles, initializing libraries, or anything else required to render your components.

Here's an example of how you might use the preview file to initialize a library that must run before your components render:

.storybook/preview.ts
// Replace your-renderer with the renderer you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-renderer';
 
import { initialize } from '../lib/your-library';
 
initialize();
 
const preview: Preview = {
  // ...
};
 
export default preview;
Adding to <head>

If you need to add extra elements to the head of the preview iframe, for instance, to load static stylesheets, font files, or similar, you can create a file called .storybook/preview-head.html and add tags like this:

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
ℹ️
Storybook will inject these tags into the preview iframe where your components render, not the Storybook application UI.
However, it's also possible to modify the preview head HTML programmatically using a preset defined in the main.js file. Read the presets documentation for more information.

Adding to <body>

Sometimes, you may need to add different tags to the <body>. Helpful for adding some custom content roots.

You can accomplish this by creating a file called preview-body.html inside your .storybook directory and adding tags like this:

.storybook/preview-body.html
<div id="custom-root"></div>
If using relative sizing in your project (like rem or em), you may update the base font-size by adding a style tag to preview-body.html:

.storybook/preview-body.html
<style>
  html {
    font-size: 15px;
  }
</style>
ℹ️
Storybook will inject these tags into the preview iframe where your components render, not the Storybook application UI.
Just like how you have the ability to customize the preview head HTML tag, you can also follow the same steps to customize the preview body with a preset. To obtain more information on how to do this, refer to the presets documentation.
</document_content>
</document>

<document index="74">
<source>Story layout.md</source>
<document_content>
Story layout

React
Vue
Angular
Web Components
More
The layout parameter allows you to configure how stories are positioned in Storybook's Canvas tab.

Global layout

You can add the parameter to your ./storybook/preview.js, like so:

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
const preview: Preview = {
  parameters: {
    layout: 'centered',
  },
};
 
export default preview;
Layout params centered story

In the example above, Storybook will center all stories in the UI. layout accepts these options:

centered: center the component horizontally and vertically in the Canvas
fullscreen: allow the component to expand to the full width and height of the Canvas
padded: (default) Add extra padding around the component
Component layout

You can also set it at a component level like so:

Button.stories.ts|tsx
Typescript
// Replace your-framework with the name of your framework
import type { Meta } from '@storybook/your-framework';
 
import { Button } from './Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  // Sets the layout parameter component wide.
  parameters: {
    layout: 'centered',
  },
};
 
export default meta;
Story layout

Or even apply it to specific stories like so:

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
 
export const WithLayout: Story = {
  parameters: {
    layout: 'centered',
  },
};
</document_content>
</document>

<document index="75">
<source>Features and behavior.md</source>
<document_content>
Features and behavior

React
Vue
Angular
Web Components
More
To control the layout of Storybook’s UI you can use addons.setConfig in your .storybook/manager.js:

.storybook/manager.js
import { addons } from '@storybook/manager-api';
 
addons.setConfig({
  navSize: 300,
  bottomPanelHeight: 300,
  rightPanelWidth: 300,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  theme: undefined,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
});
The following table details how to use the API values:

Name	Type	Description	Example Value
navSize	Number (pixels)	The size of the sidebar that shows a list of stories	300
bottomPanelHeight	Number (pixels)	The size of the addon panel when in the bottom position	200
rightPanelWidth	Number (pixels)	The size of the addon panel when in the right position	200
panelPosition	String	Where to show the addon panel	'bottom' or 'right'
enableShortcuts	Boolean	Enable/disable shortcuts	true
showToolbar	Boolean	Show/hide tool bar	true
theme	Object	Storybook Theme, see next section	undefined
selectedPanel	String	Id to select an addon panel	'storybook/actions/panel'
initialActive	String	Select the default active tab on Mobile	'sidebar' or 'canvas' or 'addons'
sidebar	Object	Sidebar options, see below	{ showRoots: false }
toolbar	Object	Modify the tools in the toolbar using the addon id	{ fullscreen: { hidden: false } }
The following options are configurable under the sidebar namespace:

Name	Type	Description	Example Value
showRoots	Boolean	Display the top-level nodes as a "root" in the sidebar	false
collapsedRoots	Array	Set of root node IDs to visually collapse by default	['misc', 'other']
renderLabel	Function	Create a custom label for tree nodes; must return a ReactNode	(item, api) => <abbr title="...">{item.name}</abbr>
The following options are configurable under the toolbar namespace:

Name	Type	Description	Example Value
id	String	Toggle visibility for toolbar item	{ hidden: false }
Configuring through URL parameters

You can use URL parameters to configure some of the available features:

Config option	Query param	Supported values
enableShortcuts	shortcuts	false
--- (fullscreen)	full	true, false
--- (show sidebar)	nav	true, false
--- (show panel)	panel	false, 'right', 'bottom'
selectedPanel	addonPanel	Any panel ID
showTabs	tabs	true
---	instrument	false, true
</document_content>
</document>

<document index="76">
<source>Theming.md</source>
<document_content>
Theming

React
Vue
Angular
Web Components
More
Watch a video tutorial
Storybook is theme-able using a lightweight theming API.

Global theming

It's possible to theme Storybook globally.

Storybook includes two themes that look good out of the box: "light" and "dark". Unless you've set your preferred color scheme as dark, Storybook will use the light theme as default.

Make sure you have installed @storybook/manager-api and @storybook/theming packages.

npm
npm install --save-dev @storybook/manager-api @storybook/theming
As an example, you can tell Storybook to use the "dark" theme by modifying .storybook/manager.js:

.storybook/manager.js
import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
 
addons.setConfig({
  theme: themes.dark,
});
When setting a theme, set a complete theme object. The theme is replaced, not combined.

Theming docs

Storybook Docs uses the same theme system as Storybook’s UI but is themed independently from the main UI.

Supposing you have a Storybook theme defined for the main UI in .storybook/manager.js:

.storybook/manager.js
import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
 
addons.setConfig({
  theme: themes.dark,
});
Here's how you'd specify the same theme for docs in .storybook/preview.js:

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
import { themes } from '@storybook/theming';
 
const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
  },
};
 
export default preview;
Continue to read if you want to learn how to create your theme.

Create a theme quickstart

The easiest way to customize Storybook is to generate a new theme using the create() function from storybook/theming. This function includes shorthands for the most common theme variables. Here's how to use it:

Inside your .storybook directory, create a new file called YourTheme.js and add the following:

.storybook/YourTheme.js
import { create } from '@storybook/theming';
 
export default create({
  base: 'light',
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',
});
💡
If you're using brandImage to add your custom logo, you can use any of the most common image formats.
Above, we're creating a new theme that will:

Use Storybook's light theme as a baseline.
Replace Storybook's logo in the sidebar with our own (defined in the brandImage variable).
Add custom branding information.
Set the brand link to open in the same window (as opposed to a new one), via the target attribute.
Finally, we'll need to import the theme into Storybook. Create a new file called manager.js in your .storybook directory and add the following:

.storybook/manager.js
import { addons } from '@storybook/manager-api';
import yourTheme from './YourTheme';
 
addons.setConfig({
  theme: yourTheme,
});
Now your custom theme will replace Storybook's default theme, and you'll see a similar set of changes in the UI.

Storybook starter theme

Let's take a look at a more complex example. Copy the code below and paste it in .storybook/YourTheme.js.

.storybook/YourTheme.js
import { create } from '@storybook/theming/create';
 
export default create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',
 
  brandTitle: 'My custom Storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
  brandTarget: '_self',
 
  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',
 
  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,
 
  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',
 
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',
 
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});
Above, we're updating the theme with the following changes:

A custom color palette (defined in the app and color variables).
Custom fonts (defined in the font and text variables).
With the new changes introduced, the custom theme should yield a similar result.

Storybook custom theme loaded

💡
Many theme variables are optional, the base property is NOT.
The @storybook/theming package is built using TypeScript, which should help create a valid theme for TypeScript users. The types are part of the package itself.

CSS escape hatches

The Storybook theme API is narrow by design. If you want to have fine-grained control over the CSS, all UI and Docs components are tagged with class names to make this possible. Use at your own risk as this is an advanced feature.

To style these elements, insert style tags into:

For Storybook’s UI, use .storybook/manager-head.html
For Storybook Docs, use .storybook/preview-head.html
⚠️
Caution
The same way as you can adjust your preview’s head tag, Storybook allows you to modify the code on the manager's side, through .storybook/manager-head.html. It can be helpful when adding theme styles that target Storybook's HTML, but it comes with a cost as Storybook's inner HTML can change at any time through the release cycle.
MDX component overrides

If you're using MDX for docs, there's one more level of "themability". MDX allows you to completely override the rendered components from Markdown using a components parameter. It's an advanced usage that we don't officially support in Storybook, but it's a powerful construct if you need it.

Here's how you might insert a custom code renderer for code blocks on the page, in .storybook/preview.js:

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
import { CodeBlock } from './CodeBlock';
 
const preview: Preview = {
  parameters: {
    docs: {
      components: {
        code: CodeBlock,
      },
    },
  },
};
 
export default preview;
You can even override a Storybook block component.

Here's how you might insert a custom <Canvas /> block:

.storybook/preview.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/your-framework';
 
import { MyCanvas } from './MyCanvas';
 
const preview: Preview = {
  parameters: {
    docs: {
      components: {
        Canvas: MyCanvas,
      },
    },
  },
};
 
export default preview;
Addons and theme creation

Some addons require specific theme variables that a Storybook user must add. If you share your theme with the community, make sure to support the official API and other popular addons, so your users have a consistent experience.

For example, the popular Actions addon uses react-inspector, which has themes of its own. Supply additional theme variables to style it like so:

addonActionsTheme: {
  ...chromeLight,
  BASE_FONT_FAMILY: typography.fonts.mono,
  BASE_BACKGROUND_COLOR: 'transparent',
}
Using the theme for addon authors

Reuse the theme variables above for a native Storybook developer experience. The theming engine relies on emotion, a CSS-in-JS library.

YourTheme.js
import { styled } from '@storybook/theming';
Use the theme variables in object notation:

MyComponent.js|jsx
const Component = styled.div(({ theme }) => ({
  background: theme.background.app,
  width: 0,
}));
Or with template literals:

MyComponent.js|jsx
const Component = styled.div`
  background: `${props => props.theme.background.app}`
  width: 0;
`;
</document_content>
</document>

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

<document index="78">
<source>Storybook Addons.md</source>
<document_content>
Storybook Addons

React
Vue
Angular
Web Components
More
A key strength of Storybook is its extensibility. Use addons to extend and customize Storybook to fit your team’s development workflow.

Addons are integral to the way Storybook works. Many of Storybook's core features are implemented as addons! These addons are installed out of the box with essentials.

Addon features

The most obvious thing addons affect in Storybook is the UI of Storybook itself. Within the UI the toolbar and addons panel are the two chief places addons will appear.

Storybook addons locations

Addons can also hook into the rendering of your story in the preview pane via injecting their own decorators.

Finally, addons can affect the build setup of Storybook by injecting their own webpack configuration to allow the use of other tools in Storybook. Addons that do only this are often referred to as presets.

Essential, core and community addons

There are many, many Storybook addons, but they can be roughly categorized into three areas:

Essential addons are core-team developed addons that are considered a part of the out-of-the-box user experience. These ship by default with new Storybook installations.
Core addons are developed by the core team. They are kept in sync with the development of Storybook itself and written in idiomatic ways as templates for other addons. They can be found within the Storybook monorepo.
Community addons are addons written by the massive Storybook community. They can be found on our website, GitHub, and npm.
</document_content>
</document>

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

<document index="80">
<source>Builders.md</source>
<document_content>
Builders

Storybook, at its core, is powered by builders such as Webpack and Vite. These builders spin up a development environment, compile your code—Javascript, CSS, and MDX—into an executable bundle and update the browser in real-time.

Storybook builder overview

CLI basics

Before diving into setting up Storybook's builders, let's look at how the CLI configures them. When you initialize Storybook (via npx storybook@latest init), the CLI automatically detects which builder to use based on your application. For example, if you're working with Vite, it will install the Vite builder. If you're working with Webpack, it installs the Webpack 5 builder by default.

Additionally, you can also provide a flag to Storybook's CLI and specify the builder you want to use:

npx storybook@latest init --builder <webpack5 | vite>
Manual setup

Storybook uses the Webpack 5 builder by default if you don't specify one. If you want to use a different builder in your application, these docs detail how you can set up Storybook's supported builders.

Vite builder for bundling your stories with Vite with near-instant HMR.
Webpack for bundling your stories with Webpack with improved performance
Rspack / Rsbuild for bundling your stories with blazing fast Rspack and Rsbuild.
</document_content>
</document>

<document index="81">
<source>Vite.md</source>
<document_content>
Vite

React
Vue
Angular
Web Components
More
Storybook Vite builder bundles your components and stories with Vite, a fast ESM bundler.

For applications built with Vite: it allows reusing the existing configuration in Storybook.
For applications built with Webpack: it provides faster startup and refresh times, with the disadvantage that your component's execution environment differs from your application.
Setup

If you ran npx storybook@latest init to include Storybook in your Vite application, the builder is already installed and configured for you. If you want, you can also opt into it manually.

Run the following command to install the builder.

npm
npm install @storybook/builder-vite --save-dev
Update your Storybook configuration (in .storybook/main.js|ts) to include the builder.

.storybook/main.js|ts
export default {
  stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
};
Configuration

Out of the box, Storybook's Vite builder includes a set of configuration defaults for the supported frameworks, which are merged alongside your existing configuration file. For an optimal experience when using the Vite builder, we recommend applying any configuration directly inside Vite's configuration file (i.e., vite.config.js|ts).

When Storybook loads, it automatically merges the configuration into its own. However, since different projects may have specific requirements, you may need to provide a custom configuration for Storybook. In such cases, you can modify your configuration file (.storybook/main.js|ts) and add the viteFinal configuration function as follows:

.storybook/main.js|ts
export default {
  stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');
 
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['storybook-dark-mode'],
      },
    });
  },
};
The asynchronous function viteFinal receives a config object with the default builder configuration and returns the updated configuration.

Environment-based configuration

If you need to customize the builder's configuration and apply specific options based on your environment, extend the viteFinal function as follows:

.storybook/main.js|ts
export default {
  stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    const { mergeConfig } = await import('vite');
 
    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      // Your environment configuration here
    });
  },
};
Override the default configuration

By default, the Vite builder in Storybook searches for the Vite configuration file in the root directory of your Storybook project. However, you can customize it to look for the configuration file in a different location. For example:

.storybook/main.js|ts
export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: '../customVite.config.js',
      },
    },
  },
};
💡
If you do not want Storybook to load the Vite configuration file automatically, you can use the viteConfigPath option to point to a non-existent file.
TypeScript

If you need, you can also configure Storybook's Vite builder using TypeScript. Rename your .storybook/main.js to .storybook/main.ts and adjust it as follows:

.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-vite, vue3-vite)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  async viteFinal(config, options) {
    // Add your configuration here
    return config;
  },
};
 
export default config;
Troubleshooting

Migrating from Webpack

Vite generally handles more use cases out of the box than Webpack. For example, loading styles just works for most projects. So, when migrating a Webpack-based project to Vite, you may find that you don't need all of your previous configuration.

We recommend starting with no Storybook-specific Vite configuration and only adding what you determine your project actually requires.

For reference, here is a Webpack configuration to handle loading graphql queries and its equivalent, using a plugin, in Vite:

With Webpack
With Vite
.storybook/main.ts
Typescript
// Replace your-framework with the framework you are using (e.g., react-webpack5, nextjs, angular)
import type { StorybookConfig } from '@storybook/your-framework';
 
const config: StorybookConfig = {
  framework: '@storybook/your-framework',
  stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  async webpackFinal(config) {
    config.module?.rules?.push({
      test: /\.(graphql|gql)$/,
      include: [path.resolve('./lib/emails')],
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    config.module?.rules?.push({
      test: /\.(graphql|gql)$/,
      include: [path.resolve('./lib/schema')],
      exclude: /node_modules/,
      loader: 'raw-loader',
    });
 
    return config;
  },
};
 
export default config;
Working directory not being detected

By default, the Vite builder enables Vite's server.fs.strict option for increased security, defining the project's root to Storybook's configuration directory. If you need to override it, you can use the viteFinal function and adjust it.

ArgTypes are not generated automatically

Currently, automatic argType inference is only available for React, Vue 3, and Svelte (JSDocs only). With React, the Vite builder defaults to react-docgen, a faster alternative to react-docgen-typescript for parsing React components. If you run into any issues, you can revert to react-docgen-typescript by updating your Storybook configuration file as follows:

.storybook/main.js|ts
export default {
  stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    // Enables the `react-docgen-typescript` parser.
    // See https://storybook.js.org/docs/api/main-config/main-config-typescript for more information about this option.
    reactDocgen: 'react-docgen-typescript',
  },
};
Component tests not working as expected

If you are migrating from a Webpack-based project, such as CRA, to Vite, and you have enabled component testing with the @storybook/addon-interactions addon, you may run into a situation where your tests fail to execute notifying you that the window object is not defined. To resolve this issue, you can create a preview-head.html file in your Storybook configuration directory and include the following:

.storybook/preview-head.html
<script>
  window.global = window;
</script>
Learn more about builders

Vite builder for bundling with Vite
Webpack builder for bundling with Webpack
Builder API for building a Storybook builder
</document_content>
</document>

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

<document index="83">
<source>Builder API.md</source>
<document_content>
Builder API

React
Vue
Angular
Web Components
More
Storybook is architected to support multiple builders, including Webpack, Vite, and ESBuild. The builder API is the set of interfaces you can use to add a new builder to Storybook.

Storybook builders

How do builders work?

In Storybook, a builder is responsible for compiling your components and stories into JS bundles that run in the browser. A builder also provides a development server for interactive development and a production mode for optimized bundles.

To opt into a builder, the user must add it as a dependency and then edit their configuration file (.storybook/main.js) to enable it. For example, with the Vite builder:

npm
npm install @storybook/builder-vite --save-dev
.storybook/main.js|ts
export default {
  stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
};
Builder API

In Storybook, every builder must implement the following API, exposing the following configuration options and entry points:

export interface Builder<Config, Stats> {
  start: (args: {
    options: Options;
    startTime: ReturnType<typeof process.hrtime>;
    router: Router;
    server: Server;
  }) => Promise<void | {
    stats?: Stats;
    totalTime: ReturnType<typeof process.hrtime>;
    bail: (e?: Error) => Promise<void>;
  }>;
  build: (arg: {
    options: Options;
    startTime: ReturnType<typeof process.hrtime>;
  }) => Promise<void | Stats>;
  bail: (e?: Error) => Promise<void>;
  getConfig: (options: Options) => Promise<Config>;
  corePresets?: string[];
  overridePresets?: string[];
}
In development mode, the start API call is responsible for initializing the development server to monitor the file system for changes (for example, components and stories) then execute a hot module reload in the browser. It also provides a bail function to allow the running process to end gracefully, either via user input or error.

In production, the build API call is responsible for generating a static Storybook build, storing it by default in the storybook-static directory if no additional configuration is provided. The generated output should contain everything the user needs to view its Storybook by opening either the index.html or iframe.html in a browser with no other processes running.

Implementation

Under the hood, a builder is responsible for serving/building the preview iframe, which has its own set of requirements. To fully support Storybook, including the Essential addons that ship with Storybook, it must consider the following.

Import stories

The stories configuration field enables story loading in Storybook. It defines an array of file globs containing the physical location of the component's stories. The builder must be able to load those files and monitor them for changes and update the UI accordingly.

Provide configuration options

By default, Storybook's configuration is handled in a dedicated file (storybook/main.js|ts), giving the user the option to customize it to suit its needs. The builder should also provide its own configuration support through additional fields or some other builder-appropriate mechanism. For example:

vite-server.ts
import { stringifyProcessEnvs } from './envs';
import { getOptimizeDeps } from './optimizeDeps';
import { commonConfig } from './vite-config';
 
import type { EnvsRaw, ExtendedOptions } from './types';
 
export async function createViteServer(options: ExtendedOptions, devServer: Server) {
  const { port, presets } = options;
 
  // Defines the baseline config.
  const baseConfig = await commonConfig(options, 'development');
  const defaultConfig = {
    ...baseConfig,
    server: {
      middlewareMode: true,
      hmr: {
        port,
        server: devServer,
      },
      fs: {
        strict: true,
      },
    },
    optimizeDeps: await getOptimizeDeps(baseConfig, options),
  };
 
  const finalConfig = await presets.apply('viteFinal', defaultConfig, options);
 
  const envsRaw = await presets.apply<Promise<EnvsRaw>>('env');
 
  // Remainder implementation
}
Handle preview.js exports

The preview.js configuration file allows users to control how the story renders in the UI. This is provided via the decorators named export. When Storybook starts, it converts these named exports into internal API calls via virtual module entry, for example, addDecorator(). The builder must also provide a similar implementation. For example:

import { virtualPreviewFile, virtualStoriesFile } from './virtual-file-names';
import { transformAbsPath } from './utils/transform-abs-path';
import type { ExtendedOptions } from './types';
 
export async function generateIframeScriptCode(options: ExtendedOptions) {
  const { presets, frameworkPath, framework } = options;
  const frameworkImportPath = frameworkPath || `@storybook/${framework}`;
 
  const presetEntries = await presets.apply('config', [], options);
  const configEntries = [...presetEntries].filter(Boolean);
 
  const absoluteFilesToImport = (files: string[], name: string) =>
    files
      .map((el, i) => `import ${name ? `* as ${name}_${i} from ` : ''}'${transformAbsPath(el)}'`)
      .join('\n');
 
  const importArray = (name: string, length: number) =>
    new Array(length).fill(0).map((_, i) => `${name}_${i}`);
 
  const code = `
    // Ensure that the client API is initialized by the framework before any other iframe code
    // is loaded. That way our client-apis can assume the existence of the API+store
    import { configure } from '${frameworkImportPath}';
 
    import {
      addDecorator,
      addParameters,
      addArgTypesEnhancer,
      addArgsEnhancer,
      setGlobalRender
    } from '@storybook/preview-api';
    import { logger } from '@storybook/client-logger';
    ${absoluteFilesToImport(configEntries, 'config')}
    import * as preview from '${virtualPreviewFile}';
    import { configStories } from '${virtualStoriesFile}';
 
    const configs = [${importArray('config', configEntries.length)
      .concat('preview.default')
      .join(',')}].filter(Boolean)
 
    configs.forEach(config => {
      Object.keys(config).forEach((key) => {
        const value = config[key];
        switch (key) {
          case 'args':
          case 'argTypes': {
            return logger.warn('Invalid args/argTypes in config, ignoring.', JSON.stringify(value));
          }
          case 'decorators': {
            return value.forEach((decorator) => addDecorator(decorator, false));
          }
          case 'parameters': {
            return addParameters({ ...value }, false);
          }
          case 'render': {
            return setGlobalRender(value)
          }
          case 'globals':
          case 'globalTypes': {
            const v = {};
            v[key] = value;
            return addParameters(v, false);
          }
          case 'decorateStory':
          case 'renderToCanvas': {
            return null;
          }
          default: {
            // eslint-disable-next-line prefer-template
            return console.log(key + ' was not supported :( !');
          }
        }
      });
    })
    configStories(configure);
    `.trim();
  return code;
}
MDX support

Storybook's Docs includes the ability to author stories/documentation in MDX using a Webpack loader. The builder must also know how to interpret MDX and invoke Storybook's special extensions. For example:

mdx-plugin.ts
import mdx from 'vite-plugin-mdx';
 
import { createCompiler } from '@storybook/csf-tools/mdx';
 
export function mdxPlugin() {
  return mdx((filename) => {
    const compilers = [];
 
    if (filename.endsWith('stories.mdx') || filename.endsWith('story.mdx')) {
      compilers.push(createCompiler({}));
    }
    return {
      compilers,
    };
  });
}
Generate source code snippets

Storybook annotates components and stories with additional metadata related to their inputs to automatically generate interactive controls and documentation. Currently, this is provided via Webpack loaders/plugins. The builder must re-implement this to support those features.

Generate a static build

One of Storybook's core features it's the ability to generate a static build that can be published to a web hosting service. The builder must also be able to provide a similar mechanism. For example:

build.ts
import { build as viteBuild } from 'vite';
import { stringifyProcessEnvs } from './envs';
import { commonConfig } from './vite-config';
 
import type { EnvsRaw, ExtendedOptions } from './types';
 
export async function build(options: ExtendedOptions) {
  const { presets } = options;
 
  const baseConfig = await commonConfig(options, 'build');
  const config = {
    ...baseConfig,
    build: {
      outDir: options.outputDir,
      emptyOutDir: false,
      sourcemap: true,
    },
  };
 
  const finalConfig = await presets.apply('viteFinal', config, options);
 
  const envsRaw = await presets.apply<Promise<EnvsRaw>>('env');
  // Stringify env variables after getting `envPrefix` from the final config
  const envs = stringifyProcessEnvs(envsRaw, finalConfig.envPrefix);
  // Update `define`
  finalConfig.define = {
    ...finalConfig.define,
    ...envs,
  };
 
  await viteBuild(finalConfig);
}
Development server integration

By default, when Storybook starts in development mode, it relies on its internal development server. The builder needs to be able to integrate with it. For example:

server.ts
import { createServer } from 'vite';
 
export async function createViteServer(options: ExtendedOptions, devServer: Server) {
  const { port } = options;
  // Remainder server configuration
 
  // Creates the server.
  return createServer({
    // The server configuration goes here
    server: {
      middlewareMode: true,
      hmr: {
        port,
        server: devServer,
      },
    },
  });
}
Shutdown the development server

The builder must provide a way to stop the development server once the process terminates; this can be via user input or error. For example:

index.ts
import { createViteServer } from './vite-server';
 
let server: ViteDevServer;
export async function bail(): Promise<void> {
  return server?.close();
}
 
export const start: ViteBuilder['start'] = async ({ options, server: devServer }) => {
  // Remainder implementation goes here
  server = await createViteServer(options as ExtendedOptions, devServer);
 
  return {
    bail,
    totalTime: process.hrtime(startTime),
  };
};
HMR support

While running in development mode, the builder's development server must be able to reload the page once a change happens, either in a story, component, or helper function.

More information

This area is under rapid development, and the associated documentation is still in progress and subject to change. If you are interested in creating a builder, you can learn more about implementing a builder in Storybook by checking the source code for Vite, Webpack, or Modern Web's dev-server-storybook. When you're ready, open an RFC to discuss your proposal with the Storybook community and maintainers.

Learn more about builders

Vite builder for bundling with Vite
Webpack builder for bundling with Webpack
Builder API for building a Storybook builder
</document_content>
</document>
</documents>