// @ts-check
const { test, expect } = require('@playwright/test');
const { FormPage } = require('../pages/formPage');

test.describe('Form Tests', () => {
  test('Submit form with valid data', async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.navegarForm();
    await formPage.preencherFormulario({
      nome: 'João Silva',
      email: 'joao@email.com',
      senha: 'Isso é um teste!',
    });
    await formPage.submeterFormulario();
  });

  test('Submit form with missing required fields', async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.navegarForm();
    await formPage.preencherFormulario({
      nome: '',
      email: '',
      senha: '',
    });
    await formPage.submeterFormulario();
  });

  test('Submit form with invalid email', async ({ page }) => {
    const formPage = new FormPage(page);
    await formPage.navegarForm();
    await formPage.preencherFormulario({
      nome: 'Maria Souza',
      email: 'email-invalido',
      senha: 'Teste com email inválido.',
    });
    await formPage.submeterFormulario();
  });
});
