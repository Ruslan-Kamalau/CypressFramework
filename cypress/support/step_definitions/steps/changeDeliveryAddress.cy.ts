import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';
import { MainPage } from 'cypress/support/step_definitons/pages/mainPage';
import { CheckoutPage } from 'cypress/support/step_definitons/pages/checkoutPage';

const loginPage = new LoginPage();
const mainPage = new MainPage();
const checkoutPage = new CheckoutPage();

Given('I am logged into Amazon with valid credentials', () => {
  loginPage.openAmazonHomePage();
  loginPage.login();
});

When('I add an {string} to the cart', (product : string) => {
  mainPage.searchProduct(product);
  mainPage.addToCart();
});

When('I proceed to checkout', () => {
  mainPage.goToCart();
  checkoutPage.proceedToCheckout();
});

Then('I should see an option to change the delivery address', () => {
  checkoutPage.shouldSeeChangeAddressOption();
});

When('I change the delivery address to {string}', (newAddress: string) => {
  checkoutPage.changeDeliveryAddress(newAddress);
});

Then('The address: {string} should be updated for the order', (newAdress: string) => {
  checkoutPage.addressShouldBeUpdated(newAdress);
});