const { expect } = require('chai');

describe('The Element Object', function() {
  it('Сhecking the title of the element documentation page', async function() {
    await browser.url('https://webdriver.io/');
    await $('//a[contains(@class,"navbar__link") and @href="/docs/api"]').click();
    await $('//div[@class="theme-doc-markdown markdown"]//h1').waitForDisplayed();
    await $('//a[contains(@class,"menu__link--sublist") and @href="/docs/api/element"]').click();
    await $('//div[@class="theme-doc-markdown markdown"]//h1').waitForDisplayed();
    expect(
      await $('//div[@class="theme-doc-markdown markdown"]//h1').getText(),
    ).to.equal('The Element Object');
  });
});
