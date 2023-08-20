const mainpage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');


describe('Localization', function () {
  it('Check translate to Spanish language', () => {
    mainpage.navigate('https://webdriver.io/');
    header.clickButtonChangeLanguage();
    header.clickButtonSpanishLanguage();
    header.buttonDocs.should('have.text', 'Documentos')
  });
});
