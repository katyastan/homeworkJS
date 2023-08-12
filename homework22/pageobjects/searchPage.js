const BasePage = require('./basePage');

class SearchPage extends BasePage {
    get searchInput() {
        return $('//input[@class="DocSearch-Input"]');
    }
    get firstAnswer() {
        return $('//span[@class="DocSearch-Hit-title"][1]');
    }
    async search(word) {
        await this.searchInput.setValue(word);
    }
}

module.exports = new SearchPage();
