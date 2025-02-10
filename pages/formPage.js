const { expect } = require('@playwright/test');

class FormPage {
  constructor(page) {
    this.page = page;
  }

  async navegarForm() {
    await this.page.goto('form');
  }

  async preencherFormulario(accounts) {
    await this.page.getByPlaceholder('Digite seu nome').fill(accounts.nome);
    await this.page.getByPlaceholder('Digite seu e-mail').fill(accounts.email);
    await this.page.getByPlaceholder('Digite sua senha').fill(accounts.senha);
    await this.page.getByLabel('País *').selectOption(accounts.pais);
    await this.page.getByLabel(accounts.genero).check();
    if (accounts.hobbies) {
      for (const hobby of accounts.hobbies) {
        await this.page.getByLabel(hobby).check();
      }
    }
  }

  async submeterFormulario() {
    await this.page.getByRole('button', { name: 'Enviar' }).click();
    await this.page.getByText('O formulário foi enviado com').click();
    await expect(this.page.getByText(accounts.message)).toBeVisible();
  }
}
module.exports = { FormPage };
