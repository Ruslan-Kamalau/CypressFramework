Feature: Add product to wishlist

  Scenario: Add the Sony WF-1000XM4 White headphones to the wishlist
    Given I search for "Sony WF-1000XM4 White"
    When I click on the first product in the search results
    And I add the product to my wishlist
    Then I should see the product in my wishlist
