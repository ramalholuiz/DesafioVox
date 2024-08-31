Cypress.Commands.add( 'login', ( username, password ) => {
    cy.visit( '/' );
    cy.get( '[data-test="username"]' ).type( username );
    cy.get( '[data-test="password"]' ).type( password );
    cy.get( '#login-button' ).click();
} );

// Comando para adicionar um produto ao carrinho
Cypress.Commands.add( 'addProductToCart', ( productName ) => {
    cy.contains( productName ).parent().parent().find( 'button' ).click();
} );

// Comando para verificar se o carrinho está vazio
Cypress.Commands.add( 'verifyCartIsEmpty', () => {
    cy.get( '.shopping_cart_badge' ).should( 'not.exist' );
} );

// Comando para verificar se uma mensagem de erro está visível
Cypress.Commands.add( 'verifyErrorMessage', () => {
    cy.get( '[data-test="error"]' ).should( 'be.visible' );
} );

