const { expect } = require('chai');

describe('Community links', function() {
  it('Ensure that Github icon at the top contains link to https://github.com/webdriverio/webdriverio', async function() {
    await browser.url('https://webdriver.io/');
    expect(
      await $('//a[contains(@class,"header-github-link")]').getAttribute('href'),
    ).to.equal('https://github.com/webdriverio/webdriverio');
  });
});
