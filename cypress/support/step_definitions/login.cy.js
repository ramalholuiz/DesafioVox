import { Given as Dado, When as Quando, Then as Entao } from '@badeball/cypress-cucumber-preprocessor';
import '../common_steps.cy.js';

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

// Quando('clico em logout', () => {
//   cy.get('#logout_sidebar_link').click();
// });

Entao('devo ser redirecionado para a página de login', () => {
  cy.url().should('include', '/');
});

Quando('pressiono Enter', () => {
  cy.get('[data-test="password"]').type('{enter}');
});