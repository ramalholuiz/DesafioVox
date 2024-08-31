Feature: Checkout

  Scenario: Successfully complete a purchase
    Given I am logged in with "standard_user" and "secret_sauce"
    And I add the product "Sauce Labs Backpack" to the cart
    When I start the checkout process
    And I fill in the shipping information with "first name", "last name", "12345"
    And I confirm the purchase
    Then I should see the success message

  Scenario: Checkout without filling in shipping information
    Given I am logged in with "standard_user" and "secret_sauce"
    And I add the product "Sauce Labs Backpack" to the cart
    When I start the checkout process
    And I do not fill in the shipping information
    Then I should see an error message
