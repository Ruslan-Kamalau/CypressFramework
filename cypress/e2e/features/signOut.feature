Feature: Sign out of Amazon account

  Scenario: Sign out and verify redirection and login status
    Given I am logged into Amazon with valid credentials
    When I navigate to the profile page
    Then I should see an option to sign out
    When I click on the sign-out option
    Then I should be redirected to the Amazon homepage
    And I should see the sign-in option on the homepage
    And I should not be logged into my account
