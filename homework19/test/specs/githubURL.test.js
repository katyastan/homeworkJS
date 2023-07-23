const {expect} = require('chai')

// Click github URL at the top of the page and
// ensure the opened page URL is https://github.com/webdriverio/webdriverio

describe('Community links', function () {
    it('Check the Gihub URL is correct', async () => {
        await browser.url('https://webdriver.io/');
        await $('//a[@aria-label="GitHub repository"]').click();
        expect(
            await $().currentURL()
        ).to.equal('https://github.com/webdriverio/webdriverio')
    })
})