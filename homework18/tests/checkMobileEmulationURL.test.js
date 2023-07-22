// Test to check the 'Mobile Emulation' URL
const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const siteURL = 'https://chromedriver.chromium.org/home';

let opts = new chrome.Options()
opts.setBrowserVersion('114')

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(opts)
    .build();

jest.setTimeout(30000)

// Write jest tests
describe('WebDriver second test', () => {
    test('Check Search with Driver', async () => {
        await driver.get(siteURL);

        // 1. Открыть в меню ""Дополнительно""
        await driver.get(siteURL);
        const menuMore = await driver.findElement(By.xpath('//a[text()="More"]'))
        await menuMore.click();

        // 2. Нажать ""Mobile Emulation""
        const mobileEmulationLink = await driver.wait(until.elementLocated(By.xpath('//a[text()="Mobile Emulation" and @data-level="2"]')));
        await mobileEmulationLink.click();

        // 3. Проверить что url содержит /mobile-emulation
        const mobileEmulationURL = await driver.getCurrentUrl();
        expect(mobileEmulationURL.includes('/mobile-emulation')).toBe(true);

        await driver.quit();
    })
});
