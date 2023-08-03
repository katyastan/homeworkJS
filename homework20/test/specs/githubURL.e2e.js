const { expect } = require('chai');
const mainpage = require('../pageobjects/mainpage');
const header = require('../pageobjects/components/header');

describe('Community links', function() {
  it('Ensure that Github icon at the top contains link to https://github.com/webdriverio/webdriverio', async function() {
    await mainpage.navigate('https://webdriver.io/');
    expect( await (header.buttonGithub.getAttribute('href'))).to.equal('https://github.com/webdriverio/webdriverio');
  });
});
