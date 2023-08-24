const BasePage = require('./basePage')

class CaptchaPage extends BasePage {
    get captchaField() {
        return cy.xpath('//div[@class="recaptcha-checkbox-spinner"]');
    }
}

module.exports = new CaptchaPage();
