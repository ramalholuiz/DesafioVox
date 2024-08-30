import { Given as Dado, When as Quando, Then as Entao } from '@badeball/cypress-cucumber-preprocessor';
import '../common_steps.cy.js';

Quando('adiciono o produto {string} ao carrinho', (productName) => {
    cy.contains(productName).parent().parent().find('button').click();
});

Quando('adiciono os produtos {string} e {string} ao carrinho', (product1, product2) => {
    cy.contains(product1).parent().parent().find('button').click();
    cy.contains(product2).parent().parent().find('button').click();
});

Entao('o carrinho deve conter {int} item(s)', (itemCount) => {
    cy.get('.shopping_cart_badge').should('have.text', itemCount);
});

Quando('removo o produto {string} do carrinho', (productName) => {
    cy.contains(productName).parent().parent().find('button').click();
});

Entao('o carrinho deve estar vazio', () => {
    cy.get('.shopping_cart_badge').should('not.exist');
});