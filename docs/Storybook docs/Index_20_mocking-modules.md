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