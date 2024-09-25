import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';

const loginPage = new LoginPage();

Given('I am on the Amazon homepage', () => {
  loginPage.openAmazonHomePage();
});

When('I login with valid credentials', () => {
  loginPage.login();
});

Then('I should be logged in successfully', () => {
  cy.get('#nav-link-accountList').should('contain.text', 'Hello, Ruslan');
});