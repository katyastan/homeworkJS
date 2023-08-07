Feature: WebdriverIO Website

  Background: 
    Given I navigate on https://webdriver.io/ page 
    
    Scenario: Checking the title of the element documentation page
      When I click //a[contains(@class,"navbar__link") and @href="/docs/api"] element
      When I click //a[contains(@class,"menu__link--sublist") and @href="/docs/api/element"] element 
      Then I expect //div[@class="col docItemCol_VOVn"]//h1 element should equal text The Element Object

    Scenario: Check translate to Spanish language
      When I click //a[@class="navbar__link"] element
      When I click //a[@lang="es"] element
      Then I expect //a[@href='/es/docs/gettingstarted' and contains(@class,'navbar__item')] element should equal text Documentos
