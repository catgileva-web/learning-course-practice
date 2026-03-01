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