import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I search for {string}', (product: string) => {
    cy.visit('https://www.amazon.com/');
    cy.get('#twotabsearchtextbox').type(product);
    cy.get('#nav-search-submit-button').click();
});

When('I click on the first product in the search results', () => {
    cy.get('.s-main-slot .s-result-item').first().find('h2 a').click();
});

Then('I should see the customer reviews section', () => {
    cy.get('#customerReviews').should('exist').and('be.visible');
});

Then('I should see an average star rating for the product', () => {
    cy.get('#averageCustomerReviews .a-icon-alt').should('exist').and('contain.text', 'stars');
});

Then('I should be able to read individual customer reviews', () => {
    cy.get('#customerReviews .review-text').each((review) => {
        cy.wrap(review).should('be.visible').and('not.be.empty');
    });
});
