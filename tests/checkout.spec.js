const { test, expect } = require('@playwright/test');
const { qase } = require('playwright-qase-reporter');

test('Compra completa de producto en SauceDemo', async ({ page }) => {
  qase.id(1);

  await page.goto('/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  await expect(page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();

  await page.locator('[data-test="firstName"]').fill('Diego');
  await page.locator('[data-test="lastName"]').fill('Guadiana');
  await page.locator('[data-test="postalCode"]').fill('67100');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});