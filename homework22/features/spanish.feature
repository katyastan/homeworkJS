Feature: Translate to Spanish

  Background: 
    Given I navigate on https://webdriver.io/ page

  Scenario: Check translate to Spanish language
    When I click buttonChangeLanguage element
    When I click buttonSpanishLanguage element
    Then I expect buttonDocs element should equal text Documentos
