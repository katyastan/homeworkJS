const BasePage = require('./basePage')

class LoginPage extends BasePage {
    get userNameField() {
        return cy.xpath('//input[@placeholder="Ник или e-mail"]');
    }

    get passwordField() {
        return cy.xpath('//input[@placeholder="Пароль"]');
    }

    get enterButton() {
        return cy.xpath('//button[contains(@class,"auth-button")]');
    }

    get errorNotification() {
        return cy.xpath('//div[contains(@class,"auth-form__description auth-form__description_error")]')
    }

    clickEnterButton() {
        this.enterButton.click({ force: true });
    }

    login(userName, password) {
        this.userNameField.type(userName);
        this.passwordField.type(password);
        this.clickEnterButton();
    }
}

module.exports = new LoginPage();
