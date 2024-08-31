import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import shoppingCartPage from '.shoppingCartPage.cy.js';


When( 'I add the product {string} to the cart', ( productName ) => {
    shoppingCartPage.addProductToCart( productName );
} );

When( 'I add the products {string} and {string} to the cart', ( product1, product2 ) => {
    shoppingCartPage.addProductToCart( product1 );
    shoppingCartPage.addProductToCart( product2 );
} );

Then( 'the cart should contain {int} item(s)', ( itemCount ) => {
    shoppingCartPage.verifyCartItemCount( itemCount );
} );

When( 'I remove the product {string} from the cart', ( productName ) => {
    shoppingCartPage.removeProductFromCart( productName );
} );

Then( 'the cart should be empty', () => {
    shoppingCartPage.verifyCartIsEmpty();
} );
