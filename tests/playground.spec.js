// @ts-check
const { test, expect } = require('@playwright/test');
const { USERS } = require('../constants/users');

test.describe('Login Tests', () => {
  const performLogin = async (page, username, password) => {
    await page.goto('https://playground-drab-six.vercel.app/');

    // Click the login link.
    await page.getByRole('link', { name: 'login' }).click();

    // Fill in login fields
    await page.getByPlaceholder('Digite seu usuário').fill(username);
    await page.getByPlaceholder('Digite sua senha').fill(password);

    // Submit the form
    await page.getByRole('button', { name: 'Logar' }).click();
  };

  test('Login with a regular user', async ({ page }) => {
    const { username, password } = USERS.regular;
    await performLogin(page, username, password);

    // Verify successful login
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByText('Usuário teste logado')).toBeVisible();

    // Click the logout link.
    await page.getByRole('button', { name: 'logout' }).click();
  });

  test('Login with a blocked user', async ({ page }) => {
    const { username, password } = USERS.blocked;
    await performLogin(page, username, password);

    // Verify error message
    await expect(page.getByText('Usuário bloqueado!')).toBeVisible();
  });

  test('Login with incorrect password', async ({ page }) => {
    const { username, password } = USERS.wrongPassword;
    await performLogin(page, username, password);

    // Verify error message
    await expect(
      page.getByText('Usuário ou senha estão incorretos!')
    ).toBeVisible();
  });

  test('Login with invalid user', async ({ page }) => {
    const { username, password } = USERS.invalid;
    await performLogin(page, username, password);

    // Verify error message
    await expect(page.getByText('Usuário não encontrado!')).toBeVisible();
  });
});
