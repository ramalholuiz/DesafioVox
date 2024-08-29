import { Dado, Quando, Entao } from '@badeball/cypress-cucumber-preprocessor';

Dado('que estou na página de login', () => {
  cy.visit('/');
});

Quando('insiro o usuário {string}', (username) => {
  cy.get('[data-test="username"]').type(username);
});

Quando('insiro a senha {string}', (password) => {
  cy.get('[data-test="password"]').type(password);
});

Quando('clico em {string}', (buttonText) => {
  cy.get('[data-test="login-button"]').click();
});

Entao('devo ver a página de produtos', () => {
  cy.url().should('include', '/inventory.html');
});

Entao('devo ver uma mensagem de erro', () => {
  cy.get('[data-test="error"]').should('be.visible');
});
