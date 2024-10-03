import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SearchPage } from 'cypress/support/step_definitons/pages/mainPage';
import { CartPage } from 'cypress/support/step_definitons/pages/cartPage';

const searchPage = new SearchPage();
const cartPage = new CartPage();

Given('I search for {string}', (product: string) => {
  searchPage.searchProduct(product); 
});

When('I click on the first product in the search results', () => {
  searchPage.clickFirstProduct();
});

When('I add the product to the cart', () => {
  cartPage.addToCart();
});

When('I navigate to the shopping cart', () => {
  cartPage.navigateToCart();
});

When('I change the quantity of the product to {string}', (quantity: string) => {
  cartPage.changeQuantity(quantity);
});

Then('I should see the quantity updated in the cart', () => {
  cartPage.verifyQuantity('2');
});