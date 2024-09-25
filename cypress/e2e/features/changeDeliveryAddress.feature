Feature: Change delivery address during checkout

  Scenario: Change the delivery address before placing an order
    Given I am logged into Amazon with valid credentials
    When I add an item to the cart
    And I proceed to checkout
    Then I should see an option to change the delivery address
    When I change the delivery address to "New Address"
    Then the address should be updated for the order
