const BasePage = require('./basePage');

class ElementPage extends BasePage {
    get titleTheElementObject() {
        return cy.xpath('//header/h1');
    }
}

module.exports = new ElementPage();
