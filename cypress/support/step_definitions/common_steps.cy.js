import { Given as Dado, When as Quando, Then as Entao } from '@badeball/cypress-cucumber-preprocessor';

Dado('que estou logado com {string} e {string}', (username, password) => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
});
