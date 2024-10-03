import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SearchPage } from 'cypress/support/step_definitons/pages/mainPage';
import { LoginPage } from 'cypress/support/step_definitons/pages/loginPage';
import { CartPage } from 'cypress/support/step_definitons/pages/cartPage';
import { HelperMethods } from 'cypress/support/step_definitons/pages/helperMethods';

const loginPage = new LoginPage();
const searchPage = new SearchPage();
const helperMethods = new HelperMethods();
const cartPage = new CartPage();


Given('I am logged into Amazon with valid credentials', () => {
    loginPage.openAmazonHomePage();
    loginPage.login();
});

When('I search for {string} and adding it to the cart', (productName: string) => {
    searchPage.searchProduct(productName);
    cartPage.addToCart();
  });
  
When('I navigate to the shopping cart', () => {
    cartPage.navigateToCart();
});

Then('I should see the items currently in my cart', () => {
    cartPage.verifyItemsInCart();
    cartPage.verifyItemsAreNotEmpty();
});