import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';
import { ProfilePage } from 'cypress/support/step_definitons/pages/profilePage';

const loginPage = new LoginPage();
const profilePage = new ProfilePage();

const accountName = 'Ruslan';

Given('I am logged into Amazon with valid credentials', () => {
  loginPage.openAmazonHomePage();
  loginPage.login();
  loginPage.verifyAccountName(accountName);
});

When('I navigate to the profile page', () => {
  cy.get(loginPage.accountListButton).click();
});

Then('I should see my account name displayed', () => {
  profilePage.verifyAccountName(accountName);
});

Then('I should see my account orders', () => {
  profilePage.verifyOrderHistoryLinkExists();
});