const BasePage = require('./basePage');

class ElementPage extends BasePage {
    get titleTheElementObject() {
        return $('//div[@class="col docItemCol_VOVn"]//h1');
    }
}

module.exports = new ElementPage();
