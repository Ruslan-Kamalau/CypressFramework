import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from 'cypress/support/step_definitons/pages/mainPage';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';
import { HelperMethods } from 'cypress/support/step_definitons/pages/helperMethods';

const loginPage = new LoginPage();
const mainPage = new MainPage();
const helperMethods = new HelperMethods();

Given('I am on the Amazon homepage', () => {
    loginPage.openAmazonHomePage();
  });
  
  When('I search for {string}', (productName: string) => {
    mainPage.searchProduct(productName);
  });
  
  When('I add the product to the cart', () => {
    mainPage.addToCart();
  });
  
  Then('the {string} should be in my cart', (productName: string) => {
    mainPage.goToCart();
    helperMethods.shouldContainText('.sc-list-item-content', productName);
});