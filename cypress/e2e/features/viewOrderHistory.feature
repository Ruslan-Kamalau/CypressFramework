Feature: View order history

  Scenario: Check order history after login
    Given I am logged into Amazon with valid credentials
    When I navigate to the order history page
    Then I should see a list of my past orders