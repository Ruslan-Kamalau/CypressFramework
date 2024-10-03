import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SearchPage } from 'cypress/support/step_definitons/pages/mainPage';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';
import { CartPage } from 'cypress/support/step_definitons/pages/cartPage';
import { HelperMethods } from 'cypress/support/step_definitons/pages/helperMethods';

const loginPage = new LoginPage();
const searchPage = new SearchPage();
const helperMethods = new HelperMethods();
const cartPage = new CartPage();

Given('I am on the Amazon homepage', () => {
    loginPage.openAmazonHomePage();
  });
  
  When('I search for {string}', (productName: string) => {
    searchPage.searchProduct(productName);
  });
  
  When('I add the product to the cart', () => {
    cartPage.addToCart();
  });
  
  Then('the {string} should be in my cart', (productName: string) => {
    searchPage.goToCart();
    helperMethods.shouldContainText('.sc-list-item-content', productName);
});