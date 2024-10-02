Feature: Check product reviews and ratings

  Scenario: Verify product reviews and ratings for Sony WF-1000XM4 White headphones
    Given I search for "Sony WF-1000XM4"
    When I click on the first product in the search results
    Then I should see the customer reviews section
    Then I should see an average star rating for the product
    Then I should be able to read individual customer reviews
