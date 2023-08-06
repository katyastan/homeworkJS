const { Given, When, Then} = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

// const LoginPage = require('../pageobjects/login.page');
// const SecurePage = require('../pageobjects/secure.page');
// const { Browser } = require('selenium-webdriver');

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

Given(/^I navigate on webdriver page$/, async () => {
    await mainpage.navigate('https://webdriver.io/')
});
When(/^I click api button$/, async () => {
    await $('//a[contains(@class,"navbar__link") and @href="/docs/api"]').click();
})
When(/^I click element button$/, async () => {
    await $('//a[contains(@class,"menu__link--sublist") and @href="/docs/api/element"]').click();
})
Then(/^I shoud see text "The Element Object"$/, async () => {
    await expect (await $('//div[@class="col docItemCol_VOVn"]//h1').getText()).toEqual('The Element Object')
})

// describe('The Element Object', function() {
//     it('Сhecking the title of the element documentation page', async function() {
//       await browser.url('https://webdriver.io/');
//       await $('//a[contains(@class,"navbar__link") and @href="/docs/api"]').click();
//       await $('//h2[@id="contribute"]/..//h1').waitForDisplayed();
//       await $('//a[contains(@class,"menu__link--sublist") and @href="/docs/api/element"]').click();
//       await $('//div[@class="col docItemCol_VOVn"]//h1').waitForDisplayed();
//       expect(
//         await $('//div[@class="col docItemCol_VOVn"]//h1').getText(),
//       ).to.equal('The Element Object');
//     });
//   });
