const {expect} = require('chai')

// Choose Espanol lanuage at the top of the page and
// ensure the 'Docs' at the top left has been transtaled to 'Documentos'

describe('Localization', function () {
    it('Check translate to Spanish', async () => {
        await browser.url('https://webdriver.io/');
        await $('//a[@class="navbar__link"]').click();


        // await $('//nav//a[text()="API"]').click();
        // await $('//h1[text()="Introduction"]').waitForDisplayed();
        // await $('//nav//a[text()="element"]').click();
        // await $('//h1[text()="The Element Object"]').waitForDisplayed()
        // expect(
        //     await $('//h1[text()="The Element Object"]').getText()
        // ).to.equal('The Element Object')
    })
})