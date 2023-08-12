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
    get searchField() {
        return $('//button[@class="DocSearch DocSearch-Button"]');
    }
}

module.exports = new Header();
