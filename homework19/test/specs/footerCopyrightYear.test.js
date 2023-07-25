const {expect} = require('chai')

describe('Copyright footer', function () {
    it('ensure that the current year is specified in "Copyright" section', async () => {
        await browser.url('https://webdriver.io/');
        await $('//div[@class="footer__copyright"]').scrollIntoView();
        let currentYear = new Date().getFullYear();
        expect(await $('//div[@class="footer__copyright"]').getText()).to.include(currentYear)
    })
})
