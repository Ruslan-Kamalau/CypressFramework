import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { MainPage } from 'cypress/support/step_definitons/pages/mainPage';
import { WishlistPage } from 'cypress/support/step_definitons/pages/wishlistPage';
import { HelperMethods } from 'cypress/support/step_definitons/pages/helperMethods';

const mainPage = new MainPage();
const wishlistPage = new WishlistPage();
const helperMethods = new HelperMethods();

Given('I search for {string}', (productName: string) => {
  mainPage.openAmazonHomePage();
  mainPage.searchProduct(productName);
});

When('I click on the first product in the search results', () => {
  cy.get('.s-main-slot .s-result-item').first().find('h2 a').click();
});

When('I add the product to my wishlist', () => {
  wishlistPage.addToWishlist();
});

Then('I should see the product in my wishlist', () => {
  wishlistPage.visitWishlist();
  wishlistPage.shouldSeeProductInWishlist('Sony WF-1000XM4');
});