import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
// import { LoginPage } from '../pages/LoginPage.cy.js';

// const loginPage = new LoginPage();

Given( 'I am on the login page', () => {
  cy.log('Navigating to the login page');
  cy.visit( '/' );
  // loginPage.visit();
} );

When( 'I enter the username {string}', ( username ) => {
  cy.get( '[data-test="username"]' ).type( username );
  // loginPage.enterUsername( username );
} );

When( 'I enter the password {string}', ( password ) => {
  cy.get( '[data-test="password"]' ).type( password );
  // loginPage.enterPassword( password );
} );

When( 'I enter the invalid username {string}', ( username ) => {
  cy.get( '[data-test="username"]' ).type( username );
  // loginPage.enterUsername( username );
} );

When( 'I enter the invalid password {string}', ( password ) => {
  cy.get( '[data-test="password"]' ).type( password );
  // loginPage.enterPassword( password );
} );

When( 'I click on Login', () => {
  cy.get( '#login-button' ).click();
  // loginPage.clickLogin();
} );

Then( 'I should see the inventory page', () => {
  cy.get( '.product_label' ).should( 'be.visible' );
} );

Then( 'I should see an error message', () => {
  cy.get( '[data-test="error"]' ).should( 'be.visible' );
  // loginPage.verifyErrorMessage();
} );

When( 'I press Enter', () => {
  cy.get( '[data-test="password"]' ).type( '{enter}' );
  // loginPage.pressEnter();
} );
