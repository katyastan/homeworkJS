const { expect } = require('chai');
const mainpage = require('../pageobjects/mainpage');
const header = require('../pageobjects/components/header');
const apiPage = require('../pageobjects/APIPage');
const elementPage = require('../pageobjects/elementPage');


describe('The Element Object', function() {
  it('Сhecking the title of the element documentation page', async function() {
    await mainpage.navigate('https://webdriver.io/');
    await header.clickButtonAPI();
    await apiPage.waitForDisplayedTitleIntrodaction();
    await apiPage.clickButtonElement();
    await elementPage.waitForDisplayedTitleElementObjects();
    expect( await (elementPage.titleTheElementObject.getText())).to.equal('The Element Object');
  });
}  
);
