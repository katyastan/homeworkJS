const { expect } = require('chai');
const mainpage = require('../pageobjects/mainpage');
const header = require('../pageobjects/components/header');
const searchPage = require('../pageobjects/searchPage');
const driverBinariesPage = require('../pageobjects/driverBinariesPage');


describe('Find "driver"', function() {
  it("Test for find the 'driver' in the Search, go to the first found page, make sure that the title contains the right word", async function() {
    await mainpage.navigate('https://webdriver.io/');
    await header.clickSearchField();
    await searchPage.searchWord('driver');
    await searchPage.clickFirstAnswer();
    expect (await (driverBinariesPage.titleDriverBinaries.getText())).to.equal('Driver Binaries');
  });
});
