const BasePage = require('./basePage');

class ApiPage extends BasePage {
    get titleIntrodaction() {
        return $('//h2[@id="contribute"]/..//h1');
    }
    get buttonElement() {
        return $('//a[contains(@class,"menu__link--sublist") and @href="/docs/api/element"]');
    }
    async waitForDisplayedTitleIntrodaction() {
        await this.titleIntrodaction.waitForDisplayed();
    }
    async clickButtonElement() {
        await this.buttonElement.click();
    }
}

module.exports = new ApiPage();
