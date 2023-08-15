Feature: SearchResult

  Background: 
    Given I navigate on https://webdriver.io/ page

  Scenario: Test for find the 'driver' in the Search, go to the first found page, make sure that the title contains the right word
    When I click searchField element
    When I search driver element
    When I click firstAnswer element
    Then I expect titleDriverBinaries element should equal text Driver Binaries
