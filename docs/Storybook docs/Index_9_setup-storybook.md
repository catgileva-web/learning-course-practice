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