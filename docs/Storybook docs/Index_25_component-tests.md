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