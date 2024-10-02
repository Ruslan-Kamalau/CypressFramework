import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';
import { AddressBookPage } from 'cypress/support/step_definitons/pages/addressBookPage';

const loginPage = new LoginPage();
const addressBookPage = new AddressBookPage();

Given('I am logged into Amazon with valid credentials', () => {
  loginPage.openAmazonHomePage();
  loginPage.login();
});

When('I navigate to the address book page', () => {
  addressBookPage.navigateToAddressBook();
});

Then('I should see my saved delivery addresses', () => {
  addressBookPage.checkSavedAddresses();
});