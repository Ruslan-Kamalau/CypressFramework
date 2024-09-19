Feature: Check delivery address

  Scenario: Verify delivery address information
    Given I am logged into Amazon with valid credentials
    When I navigate to the address book page
    Then I should see my saved delivery addresses
