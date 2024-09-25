Feature: Interact with customer service

  Scenario: Contact customer service for help
    Given I am logged into Amazon with valid credentials
    When I navigate to the customer service page
    Then I should see options to contact customer service
    When I choose to chat with a representative
    Then I should be able to start a chat session
