const { expect } = require('chai');

describe('The Element Object', function() {
  it('Сhecking the title of the element documentation page', async function() {
    await browser.url('https://webdriver.io/');
    await $('//nav//a[text()="API"]').click();
    await $('//h1[text()="Introduction"]').waitForDisplayed();
    await $('//nav//a[text()="element"]').click();
    await $('//h1[text()="The Element Object"]').waitForDisplayed();
    expect(
      await $('//h1[text()="The Element Object"]').getText(),
    ).to.equal('The Element Object');
  });
});
