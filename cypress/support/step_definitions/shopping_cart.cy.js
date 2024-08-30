import { Dado, Quando, Entao } from '@badeball/cypress-cucumber-preprocessor';

Dado('que estou logado com {string} e {string}', (username, password) => {
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
});

Quando('adiciono o produto {string} ao carrinho', (productName) => {
    cy.contains(productName).parent().parent().find('button').click();
});

Quando('eu adiciono os produtos {string} e {string} ao carrinho', (product1, product2) => {
    cy.contains(product1).parent().parent().find('button').click();
    cy.contains(product2).parent().parent().find('button').click();
});

Então('o carrinho deve conter {int} item(s)', (itemCount) => {
    cy.get('.shopping_cart_badge').should('have.text', itemCount);
});

Quando('eu removo o produto {string} do carrinho', (productName) => {
    cy.contains(productName).parent().parent().find('button').click();
});

Então('o carrinho deve estar vazio', () => {
    cy.get('.shopping_cart_badge').should('not.exist');
});