import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from 'cypress/support/step_definitons/pages/mainPage';
import { ProductPage } from 'cypress/support/step_definitons/pages/productPage';

const mainPage = new MainPage();
const productPage = new ProductPage();

Given('I search for {string}', (product: string) => {
  mainPage.searchProduct(product);
});

When('I click on the first product in the search results', () => {
  productPage.clickFirstProduct();
});

Then('I should see the customer reviews section', () => {
  productPage.checkCustomerReviewsSection();
});

Then('I should see an average star rating for the product', () => {
  productPage.checkAverageStarRating();
});

Then('I should be able to read individual customer reviews', () => {
  productPage.checkIndividualCustomerReviews();
});