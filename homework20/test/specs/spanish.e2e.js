const { expect } = require('chai');
const mainpage = require('../pageobjects/mainpage');
const header = require('../pageobjects/components/header');


describe('Localization', function () {
  it('Check translate to Spanish language', async function () {
    await mainpage.navigate('https://webdriver.io/');
    await header.clickButtonChangeLanguage();
    await header.clickButtonSpanishLanguage();
    expect(await (header.buttonDocs.getText())).to.equal('Documentos');
  });
});
