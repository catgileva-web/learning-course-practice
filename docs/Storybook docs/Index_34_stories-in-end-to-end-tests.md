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