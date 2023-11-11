import { test, expect } from '@playwright/test';

test('TC1 - has title', async ({ page }) => {
  //Navigation
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('TC2 - get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  //interactions
  // Create a locator.
  //const getStarted = page.getByRole('link', { name: 'Get started' });
  // Click it.
  //await getStarted.click();
  await page.getByRole('link', { name: 'Get started' }).click();

  //Assertions
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('TC3 - Generate tests with Codegen', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('Hello! My name is Manh!');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('This is the second message!');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('link', { name: 'Completed' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
});
