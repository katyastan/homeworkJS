const { expect } = require('chai');

describe('Who is using WebdriverIO?', function() {
  it('Check if Google logo specified among users of WebdriverIO', async function() {
    await browser.url('https://webdriver.io/');
    expect(
      await $('//div[@class="companyUsage_ByZM"]//*[@src="/img/logos/google.png"]').isExisting(),
    ).to.equal(true);
  });
  it('Check if Microsoft logo specified among users of WebdriverIO', async function() {
    await browser.url('https://webdriver.io/');
    expect(
      await $('//div[@class="companyUsage_ByZM"]//*[@src="/img/logos/microsoft.svg"]').isExisting(),
    ).to.equal(true);
  });
});
