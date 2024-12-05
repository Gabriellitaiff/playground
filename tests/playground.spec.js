// @ts-check
const { test, expect } = require("@playwright/test");

test.describe("Login Tests", () => {
  test("Login with a regular user", async ({ page }) => {
    await page.goto("https://playground-drab-six.vercel.app/");

    // Click the login link.
    await page.getByRole("link", { name: "login" }).click();

    // Preencher os campos de login
    await page.getByPlaceholder("Digite seu usuário").fill("teste");
    await page.getByPlaceholder("Digite sua senha").fill("password123");

    // Submeter o formulário
    await page.getByRole("button", { name: "Logar" }).click();

    // Verificar se o login foi bem-sucedido
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByText("Usuário teste logado")).toBeVisible();

    // Click the logout link.
    await page.getByRole("button", { name: "logout" }).click();
  });

  test("Login with a blocked user", async ({ page }) => {
    await page.goto("https://playground-drab-six.vercel.app/");

    // Click the login link.
    await page.getByRole("link", { name: "login" }).click();

    // Preencher os campos de login
    await page.getByPlaceholder("Digite seu usuário").fill("testeblock");
    await page.getByPlaceholder("Digite sua senha").fill("password123");

    // Submeter o formulário
    await page.getByRole("button", { name: "Logar" }).click();

    // Verificar se aparece uma mensagem de erro
    await expect(page.getByText("Usuário bloqueado!")).toBeVisible();
  });

  test("Login com senha incorreta", async ({ page }) => {
    await page.goto("https://playground-drab-six.vercel.app/");

    // Click the login link.
    await page.getByRole("link", { name: "login" }).click();

    // Preencher os campos de login
    await page.getByPlaceholder("Digite seu usuário").fill("teste");
    await page.getByPlaceholder("Digite sua senha").fill("password234");

    // Submeter o formulário
    await page.getByRole("button", { name: "Logar" }).click();

    // Verificar se aparece uma mensagem de erro
    await expect(
      page.getByText("Usuário ou senha estão incorretos!")
    ).toBeVisible();
  });

  test("Login com usuário inválido", async ({ page }) => {
    await page.goto("https://playground-drab-six.vercel.app/");

    // Click the login link.
    await page.getByRole("link", { name: "login" }).click();

    // Preencher os campos de login
    await page.getByPlaceholder("Digite seu usuário").fill("t3st3");
    await page.getByPlaceholder("Digite sua senha").fill("password234");

    // Submeter o formulário
    await page.getByRole("button", { name: "Logar" }).click();

    // Verificar se aparece uma mensagem de erro
    await expect(page.getByText("Usuário não encontrado!")).toBeVisible();
  });
});
