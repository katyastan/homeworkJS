const header = require('../pageobjects/components/header');
const mainpage = require('../pageobjects/mainPage');
const searchPage = require('../pageobjects/searchPage');
const driverBinariesPage = require('../pageobjects/driverBinariesPage');


describe('Find "driver"', function () {
  it("Test for find the 'driver' in the Search, go to the first found page, make sure that the title contains the right word", () => {
    mainpage.navigate('https://webdriver.io/');
    header.clickSearchField();
    searchPage.search('driver');
    searchPage.clickFirstAnswer();
    driverBinariesPage.titleDriverBinaries.should('have.text','Driver Binaries');
  });
});
