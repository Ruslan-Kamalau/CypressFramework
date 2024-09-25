Feature: Amazon Login

  Scenario: Successfully login to Amazon
    Given I am on the Amazon homepage
    When I login with valid credentials
    Then I should be logged in successfully