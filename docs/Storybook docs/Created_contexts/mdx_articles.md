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