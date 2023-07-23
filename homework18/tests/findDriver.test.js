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

describe('Find "driver"', () => {
    test("Test for find the 'driver' in the Search", async () => {
        await driver.get(siteURL);

        // 1. Перейти на страницу поиска
        const openSearchBar = await driver.findElement(By.xpath('//*[@aria-label="Open search bar"]'));
        await openSearchBar.click();

        // 2. Ввести driver в поиск
        const searchField = await driver.findElement(By.xpath('//*[@aria-label="Search this site"]'));
        await searchField.sendKeys('driver');
        const searchButton = await driver.findElement(By.xpath('//*[@role="button" and @aria-label="Search"]'));
        await searchButton.click();

        // 3. Проверить что первая ссылка содержит слово driver
        const firstFoundLink = await driver.wait(until.elementLocated(By.xpath('//*[text()="Results from this site"]/following-sibling::div/div[1]//b'), 10000))
        expect(await firstFoundLink.getText()).toEqual('driver')
    })
    afterAll(() => {
        driver.quit();    
    })
});
