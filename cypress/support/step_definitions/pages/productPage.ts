export class ProductPage {
    
    private firstProductInSearch = '.s-main-slot .s-result-item';
    private customerReviewsSection = '#customerReviews';
    private averageStarRating = '#averageCustomerReviews .a-icon-alt';
    private individualReviewText = '#customerReviews .review-text';
  
    clickFirstProduct() {
      cy.get(this.firstProductInSearch).first().find('h2 a').click();
    }
  
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
  }