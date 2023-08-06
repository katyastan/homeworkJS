const { expect } = require('chai');

describe('Find "driver"', function() {
  it("Test for find the 'driver' in the Search, go to the first found page, make sure that the title contains the right word", async function() {
    await browser.url('https://webdriver.io/');
    await $('//button[@class="DocSearch DocSearch-Button"]').click();
    await $('//input[@class="DocSearch-Input"]').setValue('driver');
    await $('//span[@class="DocSearch-Hit-title"][1]').waitForDisplayed();
    await $('//span[@class="DocSearch-Hit-title"][1]').click();
    expect(await $('//div[@class="theme-doc-markdown markdown"]//header//h1').getText()).to.equal('Driver Binaries');
  });
});
