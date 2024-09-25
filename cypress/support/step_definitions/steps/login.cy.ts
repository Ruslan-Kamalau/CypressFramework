import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';
import { HelperMethods } from 'cypress/support/step_definitons/pages/helperMethods';

const loginPage = new LoginPage();
const helperMethods = new HelperMethods();

Given('I am on the Amazon homepage', () => {
  loginPage.openAmazonHomePage();
});

When('I login with valid credentials', () => {
  loginPage.login();
});

Then('I should be logged in successfully', () => {
  helperMethods.shouldContainText('#nav-link-accountList', 'Hello');
});