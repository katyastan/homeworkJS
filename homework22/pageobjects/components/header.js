class Header {
    get buttonAPI() {
        return $('//a[contains(@class,"navbar__link") and @href="/docs/api"]');
    }
    get buttonChangeLanguage() {
        return $('//a[@class="navbar__link"]');
    }
    get buttonSpanishLanguage() {
        return $('//a[@lang="es"]');
    }
    get buttonDocs() {
        return $("//a[@href='/es/docs/gettingstarted' and contains(@class,'navbar__item')]");
    }
    get buttonGithub() {
        return $('//a[contains(@class,"header-github-link")]');
    }
    get searchField() {
        return $('//button[@class="DocSearch DocSearch-Button"]');
    }

    async clickButtonAPI() {
        await this.buttonAPI.click();
    }
    async clickButtonChangeLanguage() {
        await this.buttonChangeLanguage.waitForDisplayed();
        await this.buttonChangeLanguage.click();
    }
    async clickButtonSpanishLanguage() {
        await this.buttonSpanishLanguage.waitForDisplayed();
        await this.buttonSpanishLanguage.click();
    }
    async clickSearchField() {
        await this.searchField.click();
    }
}

module.exports = new Header();
