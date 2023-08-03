const BasePage = require('./basePage');

class SearchPage extends BasePage {   
    get search(){
        return $('//input[@class="DocSearch-Input"]');
    }   
    get firstAnswer(){
        return $('//span[@class="DocSearch-Hit-title"][1]');
    }
    async searchWord(word){
        await this.search.setValue(word);
    }
    async clickFirstAnswer(){
        await this.firstAnswer.waitForDisplayed();
        await this.firstAnswer.click();
    }
}

module.exports = new SearchPage();
