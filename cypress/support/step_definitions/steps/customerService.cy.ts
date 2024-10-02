import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';
import { CustomerServicePage } from 'cypress/support/step_definitons/pages/customerServicePage';

const loginPage = new LoginPage();
const customerServicePage = new CustomerServicePage();

Given('I am logged into Amazon with valid credentials', () => {
  loginPage.openAmazonHomePage();
  loginPage.login();
});

When('I navigate to the customer service page', () => {
  customerServicePage.navigateToCustomerService();
});

Then('I should see options to contact customer service', () => {
  customerServicePage.checkContactOptions();
});

When('I choose to chat with a representative', () => {
  customerServicePage.startChat();
});

Then('I should be able to start a chat session', () => {
  customerServicePage.verifyChatSession();
});