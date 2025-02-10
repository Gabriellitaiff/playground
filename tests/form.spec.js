// @ts-check
const { test, expect } = require('@playwright/test');
const { ACCOUNTS } = require('../constants/accounts');
const { FormPage } = require('../pages/formPage');

test.describe('Form Tests', () => {
  test('Submit form with valid data', async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.navegarForm();
    await formPage.preencherFormulario(ACCOUNTS.valid);
    await formPage.submeterFormulario();
  });

  test('Submit form with missing required fields', async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.navegarForm();
    await formPage.preencherFormulario(ACCOUNTS.completeRegistration);
    await formPage.submeterFormulario();
  });

  test('Submit form with invalid email', async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.navegarForm();
    await formPage.preencherFormulario(ACCOUNTS.invalid);
    await formPage.submeterFormulario();
  });
});
