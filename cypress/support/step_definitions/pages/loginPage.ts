export default class loginPage {

    amazonUrl = Cypress.env('URL');
    email = Cypress.env('AMAZON_EMAIL');
    password = Cypress.env('AMAZON_PASSWORD');

    private emailInput = '#ap_email';
    private passwordInput = '#ap_password';
    private continueButton = '#continue';
    private signInSubmitButton = '#signInSubmit';
    private accountListButton = '#nav-link-accountList';

    openAmazonHomePage() {
        cy.visit(this.amazonUrl);
      }

    login() {
      cy.get(this.accountListButton).click();
      cy.get(this.emailInput).clear().type(this.email);
      cy.get(this.continueButton).click();
      cy.get(this.passwordInput).clear().type(this.password);
      cy.get(this.signInSubmitButton).click();
    }
  }