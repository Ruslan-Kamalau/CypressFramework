Feature: Amazon Product Page Information

  Scenario: Check all information on the product page for Sony WF-1000XM4 White Headphones
    Given I search for "Sony WF-1000XM4 White"
    When I click on the first product in the search results
    Then I should see the product title as "Sony WF-1000XM4 White"
    And I should see a product image
    And I should see a product price
    And I should see product details
    And I should see customer reviews