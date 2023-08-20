class Header {
    get buttonAPI() {
        return cy.xpath('//a[contains(@class,"navbar__link") and @href="/docs/api"]');
    }
    get buttonChangeLanguage() {
        return cy.xpath('//*[@class="navbar__item dropdown dropdown--hoverable dropdown--right"]');
    }
    get buttonSpanishLanguage() {
        return cy.xpath('//a[@lang="es"]');
    }
    get buttonDocs() {
        return cy.xpath("//a[@href='/es/docs/gettingstarted' and contains(@class,'navbar__item')]");
    }
    get buttonGithub() {
        return cy.xpath('//a[contains(@class,"header-github-link")]');
    }
    get searchField() {
        return cy.xpath('//button[@class="DocSearch DocSearch-Button"]');
    }

    clickButtonAPI() {
        this.buttonAPI.click();
    }
    clickButtonChangeLanguage() {
        this.buttonChangeLanguage.click()
    }
    clickButtonSpanishLanguage() {
        this.buttonSpanishLanguage.click({ force: true });
    }
    clickSearchField() {
        this.searchField.click();
    }
}

module.exports = new Header();
