// @ts-check
const { test, expect } = require('@playwright/test');
const { USERS } = require('../constants/users');
const { LoginPage } = require('../pages/loginPage');

test.describe('Login Tests', () => {
  test('Login with a regular user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navegarLogin();
    await loginPage.login(USERS.regular);
    await loginPage.logout();
  });

  test('Login with a blocked user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navegarLogin();
    await loginPage.login(USERS.blocked);
  });

  test('Login with incorrect password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navegarLogin();
    await loginPage.login(USERS.wrongPassword);
  });

  test('Login with invalid user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navegarLogin();
    await loginPage.login(USERS.invalid);
  });
});
