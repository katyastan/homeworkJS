const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')

const { currentYear } = require('../helpers/constants');

const header = require('../pageobjects/components/header');
const mainPage = require('../pageobjects/mainPage');
const apiPage = require('../pageobjects/APIPage');
const elementPage = require('../pageobjects/elementPage');
const searchPage = require('../pageobjects/searchPage');
const driverBinariesPage = require('../pageobjects/driverBinariesPage');

const elementsToPageMapping = {
    buttonAPI: header,
    buttonElement: apiPage,
    buttonChangeLanguage: header,
    buttonSpanishLanguage: header,
    searchField: header,
    firstAnswer: searchPage,
    titleTheElementObject: elementPage,
    buttonDocs: header,
    yearOnPage: mainPage,
    titleDriverBinaries: driverBinariesPage,
}

Given(/^I navigate on (.+) page$/, async (url) => {
    await browser.url(url)
});

When(/^I click (.+) element$/, async (element) => {
    const foundElement = await elementsToPageMapping[element][element]
    await foundElement.waitForDisplayed();
    await foundElement.click();
})

When(/^I search (.*) element$/, async (word) => {
    await searchPage.search(word)
})

Then(/^I expect (.+) element should (equal|contain) (text|value) (.+)$/, async (element, typeOfValidation, typeOfData, data) => {
    const foundElement = await elementsToPageMapping[element][element]
    
    data = typeOfData === 'text' ? data : eval(data)

    if (typeOfValidation === 'equal') {
        await expect(foundElement).toHaveText(data);
    } else if  (typeOfValidation === 'contain') {
        await expect(foundElement).toHaveTextContaining(`${data}`);
    }
});
