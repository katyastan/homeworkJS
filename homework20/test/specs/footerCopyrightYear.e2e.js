const { expect } = require('chai');
const mainpage = require('../pageobjects/mainpage');
const {currentYear} = require('../helpers/constants');

describe('Copyright footer', function() {
  it('Ensure that the current year is specified in "Copyright" section', async function() {
    await mainpage.navigate('https://webdriver.io/');
    await mainpage.scrollIntoViewYearOnPage();
    expect (await (mainpage.yearOnPage.getText())).to.include(currentYear);
  });
});
