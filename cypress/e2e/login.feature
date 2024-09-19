Feature: Amazon Login

  Scenario: Successfully login to Amazon
    Given I open the Amazon login page
    When I enter valid credentials
    Then I should be redirected to the homepage
    And I should see my account name