console.error("Current directory:", __dirname);
const mainPage = require('../pageobjects/mainPage');
const header = require('../pageobjects/components/header');
const loginPage = require('../pageobjects/loginPage');
const { ERROR_NOTIFICATION } = require('../helpers/constants');
const captchaPage = require('../pageobjects/captchaPage');


describe('Login', function () {
    it('should be error notification with wrong password', () => {
        mainPage.navigate('https://www.onliner.by/');
        header.clickEnterButton();
        loginPage.login('firstname', 'password');
        cy.xpath('//div[@class="recaptcha-checkbox-border"]').click();
        loginPage.errorNotification.should('have.text', ERROR_NOTIFICATION);
        captchaPage.captchaField.should('be.visible');
    });
});
