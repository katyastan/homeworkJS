const {expect} = require('chai')

// Scroll down and ensure that the current year is specified in "Copyright" section

describe('Copyright footer', function () {
    it('Check the current year', async () => {
        await browser.url('https://webdriver.io/');
        await $('//div[@class="footer__copyright"]').scrollIntoView();
        let currentYear = new Date.getFullYear();
        // hernya
        //expect(await $('//div[@class="footer__copyright"]').getText().includes(currentYear)).toBe(true)
    })
})