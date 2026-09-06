import { test, expect } from '@playwright/test';

test('EPAM Services - Explore Our Client Work', async ({ page }) => {
  await page.goto('https://www.epam.com/');
  await page.getByRole('link', { name: 'Services', exact: true }).first().click({ force: true });
  await page.getByRole('link', { name: 'Explore Our Client Work' }).first().evaluate((element) => (element as HTMLElement).click());
  await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
});
