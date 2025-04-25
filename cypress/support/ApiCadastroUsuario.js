Cypress.Commands.add("cadastrarUsuarioApi", () => {
  cy.fixture("cadastroApi.json").then((cadastro) => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      failOnStatusCode: false,
      body: {
        nome: cadastro.nome,
        email: cadastro.email,
        password: cadastro.senha,
        administrador: cadastro.administrador,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("Cadastro realizado com sucesso");
      expect(response.body).to.have.property("_id");

      const userId = response.body._id;

      cy.wrap(userId).as("userId");
    });
  });
});

Cypress.Commands.add("cadastroUsuarioEmailExistente", () => {
  cy.fixture("cadastroApi.json").then((cadastro) => {
    cy.request({
      method: "POST",
      url: `${Cypress.env("apiUrl")}/usuarios`,
      failOnStatusCode: false,
      body: {
        email: cadastro.emailInvalido,
        nome: cadastro.nome,
        password: cadastro.senha,
        administrador: cadastro.administrador,
      },
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.message).to.eq("Este email já está sendo usado");
    });
  });
});

Cypress.Commands.add("excluirUsuarioApi", () => {
  cy.get("@userId").then((userId) => {
    cy.request({
      method: "DELETE",
      url: `${Cypress.env("apiUrl")}/usuarios/${userId}`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq("Registro excluído com sucesso");
    });
  });
});
