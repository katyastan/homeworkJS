const {expect} = require('chai')

describe('Who is using WebdriverIO?', function () {
    it('Check if Google logo specified among users of WebdriverIO', async () => {
        await browser.url('https://webdriver.io/');
        expect(
            await $('//a[@href="https://developers.google.com/blockly/"]').isExisting()
        ).to.equal(true)
    })
    it('Check if Microsoft logo specified among users of WebdriverIO', async () => {
        await browser.url('https://webdriver.io/');
        expect(
            await $('//a[@href="https://www.microsoft.com/"]').isExisting()
        ).to.equal(true)
    })
})
