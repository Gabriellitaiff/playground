const { expect } = require('@playwright/test');

class FormPage {
  constructor(page) {
    this.page = page;
  }

  async navegarForm() {
    await this.page.goto('form');
  }

  async preencherFormulario({ nome, email, senha }) {
    await this.page.getByPlaceholder('Digite seu nome').fill(nome);
    await this.page.getByPlaceholder('Digite seu e-mail').fill(email);
    await this.page.getByPlaceholder('Digite sua senha').fill(senha);
    await this.page.getByLabel('País *').selectOption('brazil');
    await this.page.getByLabel('Masculino').click();
  }

  async submeterFormulario() {
    await this.page.getByRole('button', { name: 'Enviar' }).click();
    await this.page.getByText('O formulário foi enviado com').click();
    await expect(
      this.page.getByText('O formulário foi enviado com')
    ).toBeVisible();
  }
}
module.exports = { FormPage };
