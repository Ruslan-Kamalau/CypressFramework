import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SearchPage } from 'cypress/support/step_definitons/pages/mainPage';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';
import { HelperMethods } from 'cypress/support/step_definitons/pages/helperMethods';

const loginPage = new LoginPage();
const searchPage = new SearchPage();
const helperMethods = new HelperMethods();

Given('I am on the Amazon homepage', () => {
    loginPage.openAmazonHomePage();
});

When('I search for {string}', (productName: string) => {
  searchPage.searchProduct(productName);
});

Then('I should see search results for {string}', (productName: string) => {
  helperMethods.shouldContainText('.s-main-slot .s-search-results', productName);
});