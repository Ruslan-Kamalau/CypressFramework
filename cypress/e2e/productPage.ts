import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const amazonUrl = Cypress.env('AMAZON_URL');
const searchQuery = 'Sony WF-1000XM4 White';

Given('I search for {string}', (product: string) => {
    cy.visit(amazonUrl);

    cy.get('#twotabsearchtextbox').type(product);
    cy.get('#nav-search-submit-button').click();
});

When('I click on the first product in the search results', () => {
    cy.get('.s-main-slot .s-result-item')
        .first()
        .find('h2 a')
        .click();
});

Then('I should see the product title as {string}', (expectedTitle: string) => {
    cy.get('#productTitle').should('contain.text', expectedTitle);
});

Then('I should see a product image', () => {
    cy.get('#imgTagWrapperId img').should('be.visible');
});

Then('I should see a product price', () => {
    cy.get('.a-price .a-offscreen').should('exist').and('not.be.empty');
});

Then('I should see product details', () => {
    cy.get('#feature-bullets').should('exist').and('not.be.empty');
    cy.get('#feature-bullets li').each((detail) => {
        cy.wrap(detail).should('be.visible').and('not.be.empty');
    });
});

Then('I should see customer reviews', () => {
    cy.get('#acrCustomerReviewText').should('exist').and('not.be.empty');

    cy.get('#averageCustomerReviews .a-icon-alt').should('exist').and('contain.text', 'stars');
});