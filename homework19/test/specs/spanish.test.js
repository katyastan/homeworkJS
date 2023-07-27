const { expect } = require('chai');

describe('Localization', function() {
  it('Check translate to Spanish language', async function() {
    await browser.url('https://webdriver.io/');
    await $('//a[@class="navbar__link"]').click();
    await $('//a[@lang="es"]').waitForDisplayed();
    await $('//a[@lang="es"]').click();
    await $("//a[@href='/es/docs/gettingstarted' and contains(@class,'navbar__item')]").waitForDisplayed();
    expect(
      await $("//a[@href='/es/docs/gettingstarted' and contains(@class,'navbar__item')]").getText(),
    ).to.equal('Documentos');
  });
});
