import { Dado, Quando, Entao } from '@badeball/cypress-cucumber-preprocessor';

Dado('que estou logado com {string} e {string}', (username, password) => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
});

Quando('inicio o processo de de checkout', () => {
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
});

