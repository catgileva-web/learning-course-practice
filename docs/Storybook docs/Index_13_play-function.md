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