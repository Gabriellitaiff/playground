const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navegarLogin() {
    await this.page.goto('login');
  }

  async login(user) {
    await this.page.getByPlaceholder('Digite seu usuário').fill(user.username);
    await this.page.getByPlaceholder('Digite sua senha').fill(user.password);
    await this.page.getByRole('button', { name: 'Logar' }).click();
    await expect(this.page.getByText(user.message)).toBeVisible();
  }

  async logout() {
    await this.page.getByRole('button', { name: 'logout' }).click();
  }
}
module.exports = { LoginPage };
