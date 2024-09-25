Feature: Add product to cart

  Scenario: Add the Sony WF-1000XM4 to the shopping cart
   Given I am on the Amazon homepage
    When I search for "Sony WF-1000XM4"
    And I add the product to the cart
    Then the "Sony WF-1000XM4" should be in my cart