import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SearchPage } from 'cypress/support/step_definitons/pages/mainPage';
import { ProductPage } from 'cypress/support/step_definitons/pages/productPage';

const searchPage = new SearchPage();
const productPage = new ProductPage();

Given('I search for {string}', (product: string) => {
   searchPage.searchProduct(product);
});

When('I click on the first product in the search results', () => {
    searchPage.clickFirstProduct();
});

Then('I should see the product title as {string}', (expectedTitle: string) => {
  productPage.verifyProductTitle(expectedTitle);
});

Then('I should see a product image', () => {
  productPage.verifyProductImageVisible();
});

Then('I should see a product price', () => {
  productPage.verifyProductPrice();
});

Then('I should see product details', () => {
  productPage.verifyProductDetails();
});

Then('I should see customer reviews', () => {
  productPage.verifyCustomerReviews();
});