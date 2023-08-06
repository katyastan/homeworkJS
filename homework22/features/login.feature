Feature: WebdriverIO Website

  Scenario: Checking the title of the element documentation page
    Given I navigate on webdriver page 
    When I click api button
    When I click element button
    Then I shoud see text "The Element Object"
    