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