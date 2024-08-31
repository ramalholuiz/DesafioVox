Feature: Login on SauceDemo

  Scenario: Successful login
    Given I am on the login page
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I click on Login
    Then I should see the inventory page

  Scenario: Login with an invalid password
    Given I am on the login page
    When I enter the username "standard_user"
    And I enter the invalid password "wrong_password"
    And I click on Login
    Then I should see an error message

  Scenario: Login with an invalid username
    Given I am on the login page
    When I enter the username "invalid_user"
    And I enter the password "secret_sauce"
    And I click on Login
    Then I should see an error message

  Scenario: Login without entering credentials
    Given I am on the login page
    When I click on Login
    Then I should see an error message

  Scenario: Login using Enter
    Given I am on the login page
    When I enter the username "standard_user"
    And I enter the password "secret_sauce"
    And I press Enter
    Then I should see the inventory page
