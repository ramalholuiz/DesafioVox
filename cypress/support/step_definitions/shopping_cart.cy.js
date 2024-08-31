import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
// import { ShoppingCartPage } from '../pages/shopping_cart_pages';

// const shoppingCartPage = new ShoppingCartPage();

When( 'I add the product {string} to the cart', ( productName ) => {
    cy.contains( productName ).parent().parent().find( 'button' ).click();
    // shoppingCartPage.addProductToCart( productName );
} );

When( 'I add the products {string} and {string} to the cart', ( product1, product2 ) => {
    cy.contains( product1 ).parent().parent().find( 'button' ).click();
    cy.contains( product2 ).parent().parent().find( 'button' ).click();
    // shoppingCartPage.addProductToCart( product2 );
    // shoppingCartPage.addProductToCart( product2 );
} );

Then( 'the cart should contain {int} item(s)', ( itemCount ) => {
    cy.get( '.shopping_cart_badge' ).should( 'have.text', itemCount );
    // shoppingCartPage.verifyCartItemCount( itemCount );
} );

When( 'I remove the product {string} from the cart', ( productName ) => {
    cy.contains( productName ).parent().parent().find( 'button' ).click();
    // shoppingCartPage.removeProductFromCart( productName );
} );

Then( 'the cart should be empty', () => {
    cy.get( '.shopping_cart_badge' ).should( 'not.exist' );
    // shoppingCartPage.verifyCartIsEmpty();
} );
