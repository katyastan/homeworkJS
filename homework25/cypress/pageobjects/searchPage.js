const BasePage = require('./basePage');

class SearchPage extends BasePage {
    get searchInput() {
        return cy.xpath('//input[@class="DocSearch-Input"]');
    }
    get firstAnswer() {
        return cy.xpath('//span[@class="DocSearch-Hit-title"][1]');
    }
    search(word) {
        this.searchInput.type(word);
    }
    clickFirstAnswer() {
        this.firstAnswer.first( {timeout:10000} ).click({ force: true });
    }
}

module.exports = new SearchPage();
