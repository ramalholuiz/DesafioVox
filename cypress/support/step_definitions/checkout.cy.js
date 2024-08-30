import { Given as Dado, When as Quando, Then as Entao } from '@badeball/cypress-cucumber-preprocessor';
import '../common_steps.cy.js';

Quando('inicio o processo de de checkout', () => {
    cy.get('.shopping_cart_link').click();
    cy.get('#checkout').click();
});

Quando('preencho as informações de envio com {string}, {string}, {string}', (firstName, lastName, postalCode) => {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
});

Quando('não preencho as informações de envio', () => {
    cy.get('[data-test="continue"]').click();
});

Entao('devo ver a mensagem de sucesso da compra', () => {
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
});

Entao('devo ver uma mensagem de erro', () => {
    cy.get('[data-test="error"]').should('be.visible');
});

Quando('confirmo a compra', () => {
    cy.get('[data-test="finish"]').click();
});