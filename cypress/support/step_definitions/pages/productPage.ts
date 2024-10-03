export class ProductPage {
    
    private firstProductInSearch = '.s-main-slot .s-result-item';
    private customerReviewsSection = '#customerReviews';
    private averageStarRating = '#averageCustomerReviews .a-icon-alt';
    private individualReviewText = '#customerReviews .review-text';
    private productTitle = '#productTitle';
    private productImage = '#imgTagWrapperId img';
    private productPrice = '.a-price .a-offscreen';
    private productDetails = '#feature-bullets';
  
    checkCustomerReviewsSection() {
      cy.get(this.customerReviewsSection).should('exist').and('be.visible');
    }
  
    checkAverageStarRating() {
      cy.get(this.averageStarRating).should('exist').and('contain.text', 'stars');
    }
  
    checkIndividualCustomerReviews() {
      cy.get(this.individualReviewText).each((review) => {
        cy.wrap(review).should('be.visible').and('not.be.empty');
      });
    }

    verifyProductTitle(expectedTitle: string) {
      cy.get(this.productTitle).should('contain.text', expectedTitle);
    }
  
    verifyProductImageVisible() {
      cy.get(this.productImage).should('be.visible');
    }
  
    verifyProductPrice() {
      cy.get(this.productPrice).should('exist').and('not.be.empty');
    }
  
    verifyProductDetails() {
      cy.get(this.productDetails).should('exist').and('not.be.empty');
      cy.get(`${this.productDetails} li`).each((detail) => {
      cy.wrap(detail).should('be.visible').and('not.be.empty');
      });
    }
  
    verifyCustomerReviews() {
      this.checkCustomerReviewsSection();
      this.checkAverageStarRating();
    }
  }