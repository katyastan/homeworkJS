const BasePage = require('./basePage');

class MainPage extends BasePage {
    get googleLogo() {
        return cy.xpath('//div[@class="companyUsage_ByZM"]//*[@src="/img/logos/google.png"]');
    }
    get microsoftLogo() {
        return cy.xpath('//div[@class="companyUsage_ByZM"]//*[@src="/img/logos/microsoft.svg"]');
    }
    get yearOnPage() {
        return cy.xpath('//div[@class="footer__copyright"]');
    }
}

module.exports = new MainPage();
