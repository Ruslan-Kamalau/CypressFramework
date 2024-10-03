import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { SearchPage } from 'cypress/support/step_definitons/pages/mainPage';
import { WishlistPage } from 'cypress/support/step_definitons/pages/wishlistPage';

const searchPage = new SearchPage();
const wishlistPage = new WishlistPage();

Given('I search for {string}', (productName: string) => {
  searchPage.openAmazonHomePage();
  searchPage.searchProduct(productName);
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