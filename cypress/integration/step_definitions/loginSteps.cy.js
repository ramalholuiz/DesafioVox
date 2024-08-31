import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import login from "../pages/LoginPage.cy.js";



Given( 'I am on the login page', () => {
  cy.log('Navigating to the login page');
  login.visit();
} );

When( 'I enter the username {string}', ( username ) => {
  login.enterUsername( username );
} );

When( 'I enter the password {string}', ( password ) => {
  login.enterPassword( password );
} );

When( 'I enter the invalid username {string}', ( username ) => {
  login.enterUsername( username );
} );

When( 'I enter the invalid password {string}', ( password ) => {
  login.enterPassword( password );
} );

When( 'I click on Login', () => {
  login.clickLogin();
} );

Then( 'I should see the inventory page', () => {
  login.verifyInventoryPage();
} );

Then( 'I should see an error message', () => {
  login.verifyErrorMessage();
} );

When( 'I press Enter', () => {
  login.pressEnter();
} );
