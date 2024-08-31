import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { LoginPage } from '../pages/LoginPage.cy.js';

const loginPage = new LoginPage();

Given( 'I am on the login page', () => {
  cy.log('Navigating to the login page');
  cy.visit( 'https://www.saucedemo.com/v1/' );
  // loginPage.visit();
} );

When( 'I enter the username {string}', ( username ) => {
  loginPage.enterUsername( username );
} );

When( 'I enter the password {string}', ( password ) => {
  loginPage.enterPassword( password );
} );

When( 'I enter the invalid username {string}', ( username ) => {
  loginPage.enterUsername( username );
} );

When( 'I enter the invalid password {string}', ( password ) => {
  loginPage.enterPassword( password );
} );

When( 'I click on Login', () => {
  loginPage.clickLogin();
} );

Then( 'I should see the inventory page', () => {
  loginPage.verifyInventoryPage();
} );

Then( 'I should see an error message', () => {
  loginPage.verifyErrorMessage();
} );

When( 'I press Enter', () => {
  loginPage.pressEnter();
} );
