export class CheckoutPage {
    startCheckout() {
        cy.get( '.shopping_cart_link' ).click();
        cy.get( '.btn_action' ).click();
    }

    fillShippingInformation( firstName, lastName, postalCode ) {
        cy.get( '[data-test="firstName"]' ).type( firstName );
        cy.get( '[data-test="lastName"]' ).type( lastName );
        cy.get( '[data-test="postalCode"]' ).type( postalCode );
        cy.get( '.btn_primary' ).click();
    }

    submitWithoutShippingInformation() {
        cy.get( '.btn_primary' ).click();
    }

    confirmPurchase() {
        cy.get( '.btn_action' ).click();
    }

    verifySuccessMessage() {
        cy.get( '.complete-header' ).should( 'have.text', 'THANK YOU FOR YOUR ORDER' );
    }

    verifyErrorMessage() {
        cy.get( '[data-test="error"]' ).should( 'be.visible' );
    }
}
