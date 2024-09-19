Feature: Add product to cart

  Scenario: Add the Sony WF-1000XM4 White headphones to the shopping cart
    Given I search for "Sony WF-1000XM4 White"
    When I click on the first product in the search results
    And I add the product to the cart
    Then I should see the product in my shopping cart