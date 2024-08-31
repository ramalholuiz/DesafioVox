import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am logged in with {string} and {string}', (username, password) => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
});