import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the Amazon homepage', () => {
    cy.visit('https://www.amazon.com/');
});

When('I type {string} into the search bar', (query: string) => {
    cy.get('#twotabsearchtextbox').type(query);
});

Then('I should see search suggestions', () => {
    cy.get('.s-suggestion').should('exist').and('be.visible');
});

Then('the suggestions should include {string} and {string}', (suggestion1: string, suggestion2: string) => {
    cy.get('.s-suggestion').should('contain.text', suggestion1);
    cy.get('.s-suggestion').should('contain.text', suggestion2);
});
