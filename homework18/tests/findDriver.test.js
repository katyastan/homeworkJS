/* 1. Перейти на страницу поиска;
   2. Ввести driver в поиск;
   3. Проверить что первая ссылка содержит слово driver */

const { Builder, By, until} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

let opts = new chrome.Options()
opts.setBrowserVersion('114')
let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(opts)
    .build();
const actions = driver.actions({async: true});
const siteURL = 'https://chromedriver.chromium.org/home';

jest.setTimeout(60000)

// Write jest tests
describe('WebDriver second test', () => {
    test('Check Search with Driver', async () => {
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
        const firstFoundLink = await driver.wait(until.elementLocated(By.xpath('//*[@class="DLXGJd"]/div/div[1]/div[1]/div[1]/b'), 10000))
        expect(await firstFoundLink.getText()).toEqual('driver')

        await driver.quit();
    })
});
