import { test, expect } from '@playwright/test';

test('Contact Form — fill all fields and submit', async ({ page }) => {
  // Navigate to the app
  await page.goto('/');

  // Click the "Form" tab in the navigation
  await page.getByRole('button', { name: 'Form' }).click();

  // Verify we're on the form page
  await expect(page.getByText('Contact Form')).toBeVisible();

  // Fill in the Name field
  await page.getByLabel('Name').fill('John Doe');

  // Fill in the Email field
  await page.getByLabel('Email').fill('john.doe@example.com');

  // Fill in the Phone field
  await page.getByLabel('Phone').fill('+1-555-123-4567');

  // Fill in the Company field
  await page.getByLabel('Company').fill('Acme Corp');

  // Fill in the Message field
  await page.getByLabel('Message').fill('Hello, I would like to learn more about your services.');

  // Click Submit
  await page.getByRole('button', { name: 'Submit' }).click();
});

test('Contact Form — submit without email shows error', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Form' }).click();
  await expect(page.getByText('Contact Form')).toBeVisible();

  // Fill all fields EXCEPT Email
  await page.getByLabel('Name').fill('John Doe');
  await page.getByLabel('Phone').fill('+1-555-123-4567');
  await page.getByLabel('Company').fill('Acme Corp');
  await page.getByLabel('Message').fill('Hello, I would like to learn more about your services.');

  // Click Submit without filling Email
  await page.getByRole('button', { name: 'Submit' }).click();

  // Verify the error message appears
  await expect(page.getByText('Email is required')).toBeVisible();
});
