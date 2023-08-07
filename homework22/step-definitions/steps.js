const { Given, When, Then} = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');
const { Browser } = require('selenium-webdriver');

// const pages = {
//     login: LoginPage
// }

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// }); 

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });
const mainpage = require('../pageobjects/mainPage');


Given(/^I navigate on (.*) page$/, async (url) => {
    await browser.url(url)
});
When(/^I click (.*) element$/, async (selector) => {
    await $(selector).click();
})
When(/^I click element button$/, async () => {
    await $('//a[contains(@class,"menu__link--sublist") and @href="/docs/api/element"]').click();
})
// Then(/^I shoud see text "The Element Object"$/, async () => {
//     await expect (await $('//div[@class="col docItemCol_VOVn"]//h1').getText()).toEqual('The Element Object')
// })
Then(/^I expect (.*) element should (equal|include) text (.*)$/, async (element, typeOfValidation, text) => {
    await $(element).waitForDisplayed()
    if(typeOfValidation === 'equal') {
        await expect(await (await $(element).getText())).toEqual(text);
    } else {
        await expect(await (await $(element).getText())).toInclude(text);
    }
});
