const mainpage = require('../pageobjects/mainPage');
const { currentYear } = require('../helpers/constants');


describe('Copyright footer', function () {
  it('Ensure that the current year is specified in "Copyright" section', () => {
    mainpage.navigate('https://webdriver.io/');
    mainpage.yearOnPage.should('contain.text', currentYear);
  });
});
