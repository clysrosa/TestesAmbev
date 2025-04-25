
const usuario = require('../fixtures/usuarioWeb.json');

Cypress.Commands.add('loginSucesso', () => {
  cy.get('[data-testid="email"]').type(usuario.emailValido);
  cy.get('[data-testid="senha"]').type(usuario.senhaValida);
  cy.get('[data-testid="entrar"]').click();
  cy.url().should('include', '/home');
});

Cypress.Commands.add('loginEmailInvalido', () => {
  cy.get('[data-testid="email"]').type(usuario.emailInvalido);
  cy.get('[data-testid="senha"]').type(usuario.senhaValida);
  cy.get('[data-testid="entrar"]').click();
  cy.get('.alert').should('be.visible').and('contain.text', 'Email e/ou senha inválidos');
});

Cypress.Commands.add('loginCamposObrigatorios', () => {
  cy.get('[data-testid="entrar"]').click();
  cy.contains('span', 'Email é obrigatório').should('be.visible');
  cy.contains('span', 'Password é obrigatório').should('be.visible');
});


