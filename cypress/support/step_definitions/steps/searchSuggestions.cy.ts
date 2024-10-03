import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SearchPage } from 'cypress/support/step_definitons/pages/searchPage';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';

const searchPage = new SearchPage();
const loginPage = new LoginPage();

Given('I am on the Amazon homepage', () => {
    loginPage.openAmazonHomePage();
});

When('I type {string} into the search bar', (query: string) => {
    searchPage.typeInSearchBar(query);
});

Then('I should see search suggestions', () => {
    searchPage.verifySearchSuggestionsVisible();
});

Then('the suggestions should include {string} and {string}', (suggestion1: string, suggestion2: string) => {
    searchPage.verifySuggestionsContainText(suggestion1, suggestion2);
});