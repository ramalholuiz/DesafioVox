import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
// import { CheckoutPage } from '../pages/checkout_page';

// const checkoutPage = new CheckoutPage();

When( 'I start the checkout process', () => {
    cy.get( '.shopping_cart_link' ).click();
    cy.get( '.btn_action' ).click();
    // checkoutPage.startCheckout();
} );

When( 'I fill in the shipping information with {string}, {string}, {string}', ( firstName, lastName, postalCode ) => {
    cy.get( '[data-test="firstName"]' ).type( firstName );
    cy.get( '[data-test="lastName"]' ).type( lastName );
    cy.get( '[data-test="postalCode"]' ).type( postalCode );
    cy.get( '.btn_primary' ).click();
    // checkoutPage.fillShippingInformation( firstName, lastName, postalCode );
} );

When( 'I do not fill in the shipping information', () => {
    cy.get( '.btn_primary' ).click();
    // checkoutPage.submitWithoutShippingInformation();
} );

When( 'I confirm the purchase', () => {
    cy.get( '.btn_action' ).click();
    // checkoutPage.confirmPurchase();
} );

Then( 'I should see the success message', () => {
    cy.get( '.complete-header' ).should( 'have.text', 'THANK YOU FOR YOUR ORDER' );
    // checkoutPage.verifySuccessMessage();
} );

Then( 'I should see an error message', () => {
    cy.get( '[data-test="error"]' ).should( 'be.visible' );
    // checkoutPage.verifyErrorMessage();
} );
