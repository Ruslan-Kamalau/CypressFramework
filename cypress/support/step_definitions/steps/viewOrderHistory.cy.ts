import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';
import { OrdersPage } from 'cypress/support/step_definitons/pages/ordersPage';

const loginPage = new LoginPage();
const ordersPage = new OrdersPage();

Given('I am logged into Amazon with valid credentials', () => {
    loginPage.openAmazonHomePage();
    loginPage.login();
});

When('I navigate to the order history page', () => {
    ordersPage.navigateToOrderHistory();
});

Then('I should see a list of my past orders', () => {
    ordersPage.verifyOrdersExist();
    ordersPage.verifyEachOrderIsVisible();
});