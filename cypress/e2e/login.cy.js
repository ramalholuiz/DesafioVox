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

Quando('insiro o usuário inválido {string}', (username) => {
  cy.get('[data-test="username"]').type(username);
});

Quando('insiro a senha inválida {string}', (password) => {
  cy.get('[data-test="password"]').type(password);
});

// Quando('clico em {string}', (buttonText) => {
//   cy.get('[data-test="login-button"]').click();
// });

Quando('clico em {string}', (button) => {
  cy.contains('button', button).click();
});

Entao('devo ver a página de inventário', () => {
  cy.url().should('include', '/inventory.html');
});

Entao('devo ver uma mensagem de erro', () => {
  cy.get('[data-test="error"]').should('be.visible');
});

Quando('clico no botão de menu', () => {
  cy.get('#react-burger-menu-btn').click();
});

Dado('que estou logado com {string} e {string}', (username, password) => {
  cy.visit('https://www.saucedemo.com/v1/');
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
  cy.url().should('include', '/inventory.html');
});

// Quando('clico em logout', () => {
//   cy.get('#logout_sidebar_link').click();
// });

Então('devo ser redirecionado para a página de login', () => {
  cy.url().should('include', '/');
});