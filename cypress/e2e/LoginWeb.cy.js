import Login from "../support/Login";
describe("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("validar login com sucesso", () => {
    cy.loginSucesso();
  });

  it("Validar Mensagem de erro com Email Inválido", () => {
    cy.loginEmailInvalido();
  });
  it("Validar Mensagem de campos Obrigatórios", () => {
    cy.loginCamposObrigatorios();
  });
});
