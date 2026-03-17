import { test } from '@playwright/test';

test('Demo: Viewer role hides Edit and Delete buttons', async ({ page }) => {
  // Step 1: Open the app on the Users page
  await page.goto('/learning-course-practice/#/list');
  await page.waitForTimeout(1500);

  // Step 2: Show that Admin (default) sees Edit and Delete buttons
  // Alice Johnson (Admin) is selected by default
  await page.waitForTimeout(1500);

  // Step 3: Switch to Editor role (Bob Smith)
  await page.getByRole('combobox').selectOption('2');
  await page.waitForTimeout(2000);

  // Step 4: Highlight that Editor sees Edit buttons but no Delete
  // Hover over an Edit button to draw attention
  await page.getByRole('button', { name: 'Edit' }).first().hover();
  await page.waitForTimeout(1500);

  // Step 5: Switch to Viewer role (Carol White)
  await page.getByRole('combobox').selectOption('3');
  await page.waitForTimeout(2000);

  // Step 6: Show that Viewer sees no Actions column at all
  // Hover over the table to show there are no action buttons
  await page.getByRole('table').hover();
  await page.waitForTimeout(2000);

  // Step 7: Switch back to Admin to confirm buttons reappear
  await page.getByRole('combobox').selectOption('1');
  await page.waitForTimeout(2000);

  // Step 8: Click Edit on a user to prove it still works for Admin
  await page.getByRole('button', { name: 'Edit' }).first().click();
  await page.waitForTimeout(1500);

  // Close the modal
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.waitForTimeout(1000);
});
