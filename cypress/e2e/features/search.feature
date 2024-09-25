Feature: Amazon Product Search

  Scenario: Search for Sony WF-1000XM4
    Given I am on the Amazon homepage
    When I search for "Sony WF-1000XM4"
    Then I should see search results for "Sony WF-1000XM4"