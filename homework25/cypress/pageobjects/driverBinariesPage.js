const BasePage = require('./basePage');

class DriverBinariesPage extends BasePage {
    get titleDriverBinaries() {
        return cy.xpath('//div[@class="theme-doc-markdown markdown"]//header//h1');
    }
}

module.exports = new DriverBinariesPage();
