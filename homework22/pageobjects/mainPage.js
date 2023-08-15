const BasePage = require('./basePage');

class MainPage extends BasePage {
    get yearOnPage() {
        return $('//div[@class="footer__copyright"]');
    }
}

module.exports = new MainPage();
