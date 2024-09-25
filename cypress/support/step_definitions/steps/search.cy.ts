import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const amazonUrl = Cypress.env('AMAZON_URL');
const searchQuery = 'Sony WF-1000XM4 White';

Given('I am on the Amazon homepage', () => {
    cy.visit(amazonUrl);
});

When('I search for {string}', (product: string) => {
    cy.get('#twotabsearchtextbox').type(product);
    cy.get('#nav-search-submit-button').click();
});

Then('I should see search results for the product', () => {
    cy.get('.s-main-slot')
        .find('.s-title')
        .should('contain.text', searchQuery);
});