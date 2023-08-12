Feature: Documentation

  Background: 
    Given I navigate on https://webdriver.io/ page

  Scenario: Checking the title of the element documentation page
    When I click buttonAPI element
    When I click buttonElement element
    Then I expect titleTheElementObject element should equal text The Element Object
