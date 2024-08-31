Feature: Add products to cart

  Scenario: Add a product to the cart
    Given I am logged in with "standard_user" and "secret_sauce"
    When I add the product "Sauce Labs Backpack" to the cart
    Then the cart should contain 1 item

  Scenario: Add multiple products to the cart
    Given I am logged in with "standard_user" and "secret_sauce"
    When I add the products "Sauce Labs Backpack" and "Sauce Labs Bike Light" to the cart
    Then the cart should contain 2 items

  Scenario: Remove a product from the cart
    Given I am logged in with "standard_user" and "secret_sauce"
    And I add the product "Sauce Labs Backpack" to the cart
    When I remove the product "Sauce Labs Backpack" from the cart
    Then the cart should be empty
