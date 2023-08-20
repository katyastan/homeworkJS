const mainpage = require('../pageobjects/mainPage');


describe('Who is using WebdriverIO', function () {
  it('Check if Google logo specified among users of WebdriverIO', () => {
    mainpage.navigate('https://webdriver.io/');
    mainpage.googleLogo.should('be.visible');
  });
  it('Check if Microsoft logo specified among users of WebdriverIO', () => {
    mainpage.navigate('https://webdriver.io/');
    mainpage.microsoftLogo.should('be.visible');
  });
});
