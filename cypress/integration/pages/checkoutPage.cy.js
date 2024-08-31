/// <reference types ="cypress" />

class CheckoutPage {
    startCheckout() {
        cy.get( '.shopping_cart_link' ).click();
        cy.get( '.btn_action' ).click();
        return this;
    }

    fillShippingInformation( firstName, lastName, postalCode ) {
        cy.get( '[data-test="firstName"]' ).type( firstName );
        cy.get( '[data-test="lastName"]' ).type( lastName );
        cy.get( '[data-test="postalCode"]' ).type( postalCode );
        cy.get( '.btn_primary' ).click();
        return this;
    }

    submitWithoutShippingInformation() {
        return  cy.get( '.btn_primary' ).click();
    }

    confirmPurchase() {
        return  cy.get( '.btn_action' ).click();
    }

    verifySuccessMessage() {
        return  cy.get( '.complete-header' ).should( 'have.text', 'THANK YOU FOR YOUR ORDER' );
    }

    verifyErrorMessage() {
        return  cy.get( '[data-test="error"]' ).should( 'be.visible' );
    }
}

const checkoutPage = new CheckoutPage();

export default checkoutPage;