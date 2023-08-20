const mainpage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');
const apiPage = require('../pageobjects/APIPage');
const elementPage = require('../pageobjects/elementPage');


describe('The Element Object', function () {
  it('Сhecking the title of the element documentation page', () => {
    mainpage.navigate('https://webdriver.io/');
    header.clickButtonAPI();
    apiPage.clickButtonElement();
    elementPage.titleTheElementObject.should('have.text', 'The Element Object')
  });
});
