Feature: Edit item in shopping cart

  Scenario: Change the quantity of an item in the shopping cart
    Given I search for "Sony WF-1000XM4 White"
    When I click on the first product in the search results
    And I add the product to the cart
    And I navigate to the shopping cart
    When I change the quantity of the product to "2"
    Then I should see the quantity updated in the cart
