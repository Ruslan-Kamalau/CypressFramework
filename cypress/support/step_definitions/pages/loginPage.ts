export default class loginPage {

    amazonUrl = Cypress.env('URL');
    email = Cypress.env('AMAZON_EMAIL');
    password = Cypress.env('AMAZON_PASSWORD');

    private emailInput = '#ap_email';
    private passwordInput = '#ap_password';
    private continueButton = '#continue';
    private signInSubmitButton = '#signInSubmit';
    private accountListButton = '#nav-link-accountList';
    private accountNameHeader = '#nav-link-accountList-nav-line-1';
    private logOutButton = "#nav-item-signout";

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

    verifyAccountName(expectedName: string) {
      cy.get(this.accountNameHeader).should('contain.text', expectedName);
    }

    signOut(){
      cy.get(this.logOutButton).click();
    }
  }