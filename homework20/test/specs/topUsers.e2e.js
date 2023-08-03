const { expect } = require('chai');
const mainpage = require('../pageobjects/mainpage');

describe('Who is using WebdriverIO', function() {
  it('Check if Google logo specified among users of WebdriverIO', async function() {
    await mainpage.navigate('https://webdriver.io/');
    expect(await (mainpage.googleLogo.isExisting()),
    ).to.equal(true);
  });
  it('Check if Microsoft logo specified among users of WebdriverIO', async function() {
    await mainpage.navigate('https://webdriver.io/');
    expect(await (mainpage.microsoftLogo.isExisting()),
    ).to.equal(true);
  });
}  
);
