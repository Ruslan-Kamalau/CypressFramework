Feature: Check shopping cart functionality

  Scenario: View and verify items in the shopping cart
    Given I am logged into Amazon with valid credentials
    When I navigate to the shopping cart
    Then I should see the items currently in my cart
