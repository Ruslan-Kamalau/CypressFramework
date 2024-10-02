Feature: Change delivery address during checkout

  Scenario: Change delivery address during checkout
    Given I am logged into Amazon with valid credentials
    When I add an "Sony WF-1000XM4" to the cart
    And I proceed to checkout
    Then I should see an option to change the delivery address
    When I change the delivery address to "Sokolnicza 7"
    Then the address: "Sokolnicza 7" should be updated for the order
