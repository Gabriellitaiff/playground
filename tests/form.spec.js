// @ts-check
const { test } = require('@playwright/test');
const { ACCOUNTS } = require('../constants/accounts');
const { FormPage } = require('../pages/formPage');

test.describe('Form Tests', () => {
  test('Submit form with valid data', async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.navegarForm();
    await formPage.preencherFormulario(ACCOUNTS.valid);
    await formPage.submeterFormulario();
    await formPage.validateSucess(ACCOUNTS.valid);
  });

  test('Submit form with missing required fields', async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.navegarForm();
    await formPage.preencherFormulario(ACCOUNTS.completeRegistration);
    await formPage.submeterFormulario();
    await formPage.validateSucess(ACCOUNTS.completeRegistration);
  });

  test('Submit form without any value', async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.navegarForm();
    await formPage.submeterFormulario();
    await formPage.validateFailure();
  });
});
