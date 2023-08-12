const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals')

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

Then(/^I expect (.+) element should (equal|contain) text (.+)$/, async (element, typeOfValidation, text) => {
    const foundElement = await elementsToPageMapping[element][element]
    if (typeOfValidation === 'equal') {
        await expect(foundElement).toHaveText(text);
    } else if  (typeOfValidation === 'contain') {
        await expect(foundElement).toHaveTextContaining(`${text}`);
    }
});
