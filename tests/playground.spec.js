// @ts-check
const { test, expect } = require('@playwright/test');
const { USERS } = require('../constants/users');

test.describe('Login Tests', () => {
  const performLogin = async (page, user) => {
    await page.goto('https://playground-drab-six.vercel.app/');

    // Click the login link.
    await page.getByRole('link', { name: 'login' }).click();

    // Fill in login fields
    await page.getByPlaceholder('Digite seu usuário').fill(user.username);
    await page.getByPlaceholder('Digite sua senha').fill(user.password);

    // Submit the form
    await page.getByRole('button', { name: 'Logar' }).click();
    await expect(page.getByText(user.message)).toBeVisible();
  };

  test('Login with a regular user', async ({ page }) => {
    await performLogin(page, USERS.regular);

    // Click the logout link.
    await page.getByRole('button', { name: 'logout' }).click();
  });

  test('Login with a blocked user', async ({ page }) => {
    await performLogin(page, USERS.blocked);
  });

  test('Login with incorrect password', async ({ page }) => {
    await performLogin(page, USERS.wrongPassword);
  });

  test('Login with invalid user', async ({ page }) => {
    await performLogin(page, USERS.invalid);
  });
});
