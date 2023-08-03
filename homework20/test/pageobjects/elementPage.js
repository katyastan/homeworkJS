const BasePage = require('./basePage');

class ElementPage extends BasePage {   
    get titleTheElementObject(){
        return $('//div[@class="col docItemCol_VOVn"]//h1');
    }   
    async waitForDisplayedTitleElementObjects(){
        await this.titleTheElementObject.waitForDisplayed();
    }
}

module.exports = new ElementPage();
