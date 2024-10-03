import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';
import { HelperMethods } from 'cypress/support/step_definitons/pages/helperMethods';

const loginPage = new LoginPage();
const helperMethods = new HelperMethods();

Given('I am logged into Amazon with valid credentials', () => {
    loginPage.openAmazonHomePage();
    loginPage.login();
});

When('I navigate to the profile page', () => {
    loginPage.clickAccountList();
});

Then('I should see an option to sign out', () => {
    helperMethods.shouldExist('#nav-item-signout');
});

When('I click on the sign-out option', () => {
    loginPage.signOut();
});

Then('I should be redirected to the Amazon homepage', () => {
    helperMethods.urlShouldBe('https://www.amazon.com/');
});

Then('I should see the sign-in option on the homepage', () => {
    helperMethods.shouldContainText('#nav-link-accountList', 'Sign in');
});

Then('I should not be logged into my account', () => {
    loginPage.clickAccountList();
    helperMethods.shouldBeVisible('#ap_email');
});
