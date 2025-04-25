import cadastrarUsuario from "../support/ApiCadastroUsuario";
describe("API - Cadastro", () => {
  it("Validar a exclusão de um Usuário Cadastrado com sucesso ", function () {
    cy.cadastrarUsuarioApi();
    cy.excluirUsuarioApi();
  });

  it("Validar mensagem de erro ao tentar Cadastar Usuário e-mail já cadastrado", function () {
    cy.cadastroUsuarioEmailExistente();
  });

  it("Validar Cadastro de Usuário com sucesso", function () {
    cy.cadastrarUsuarioApi();
    cy.excluirUsuarioApi();
  });
});
