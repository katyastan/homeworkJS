const { expect } = require('chai');
const mainpage = require('../pageobjects/mainpage');

describe('Copyright footer', function() {
  it('Ensure that the current year is specified in "Copyright" section', async function() {
    await mainpage.navigate('https://webdriver.io/');
    await mainpage.scrollIntoViewYearOnPage();
    const currentYear = new Date().getFullYear();
    expect (await (mainpage.yearOnPage.getText())).to.include(currentYear);
  });
});
