Feature: Copyright in Footer

  Background: 
    Given I navigate on https://webdriver.io/ page

  Scenario: Ensure that the current year is specified in "Copyright" section
    Then I expect yearOnPage element should contain text 2023
