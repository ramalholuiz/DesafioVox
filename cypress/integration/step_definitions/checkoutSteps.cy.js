import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import checkoutPage from '.checkoutPage.cy.js';


When( 'I start the checkout process', () => {
    checkoutPage.startCheckout();
} );

When( 'I fill in the shipping information with {string}, {string}, {string}', ( firstName, lastName, postalCode ) => {
    checkoutPage.fillShippingInformation( firstName, lastName, postalCode );
} );

When( 'I do not fill in the shipping information', () => {
    checkoutPage.submitWithoutShippingInformation();
} );

When( 'I confirm the purchase', () => {
    checkoutPage.confirmPurchase();
} );

Then( 'I should see the success message', () => {
    checkoutPage.verifySuccessMessage();
} );

Then( 'I should see an error message', () => {
    checkoutPage.verifyErrorMessage();
} );
