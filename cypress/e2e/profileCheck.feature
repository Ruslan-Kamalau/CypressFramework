Feature: Amazon Profile Page Check

  Scenario: Check user profile page after login
    Given I am logged into Amazon with valid credentials
    When I navigate to the profile page
    Then I should see my account name displayed
    And I should see my account orders