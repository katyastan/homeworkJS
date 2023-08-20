const mainpage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');


describe('Community links', function () {
  it('Ensure that Github icon at the top contains link to https://github.com/webdriverio/webdriverio', () => {
    mainpage.navigate('https://webdriver.io/');
    header.buttonGithub.should('have.attr', 'href', 'https://github.com/webdriverio/webdriverio');
  });
});
