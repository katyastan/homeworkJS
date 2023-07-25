const {expect} = require('chai')

describe('Find "driver"', function () {
    it("Test for find the 'driver' in the Search", async () => {
        await browser.url('https://webdriver.io/');
        await $('//button[@aria-label="Search"]').click();
        await $('//input[@aria-labelledby="docsearch-label"]').setValue('driver');
        await $('//span[@class="DocSearch-Hit-title"][1]').click();
        expect (await $('//div[@class="theme-doc-markdown markdown"]//header//h1').getText()).to.equal('Driver Binaries')
    })
})
