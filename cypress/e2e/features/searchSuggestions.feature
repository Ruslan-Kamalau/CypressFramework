Feature: Search suggestions

  Scenario: Verify search suggestions work correctly
    Given I am on the Amazon homepage
    When I type "Sony" into the search bar
    Then I should see search suggestions
    And the suggestions should include "Sony headphones" and "Sony camera"