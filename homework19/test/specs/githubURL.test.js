const {expect} = require('chai')

describe('Community links', function () {
    it('Ensure that Github icon at the top contains link to https://github.com/webdriverio/webdriverio', async () => {
        await browser.url('https://webdriver.io/');
        expect(
            await $('//a[@aria-label="GitHub repository"]').getAttribute('href')
        ).to.equal('https://github.com/webdriverio/webdriverio')
    })
})
