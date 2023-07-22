/* Настроить Selenium Webdriver  и с помощью selenium-webdriver написать 3 теста:

1. Перейти на страницу поиска;
2. Ввести driver в поиск;
3. Проверить что первая ссылка содержит слово driver;

1. Открыть в меню ""Дополнительно""
2. Нажать ""Mobile Emulation""
3. Проверить что url содержит /mobile-emulation */

const { Builder, By} = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
// const {expect} = require('chai');

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
describe('WebDriver', () => {
    test('Check Title content on site', async () => {

        // 1. зайти на сайт https://chromedriver.chromium.org/home;
        await driver.get(siteURL);

        // 2. проверить текст основного тайтла ""ChromeDriver"";
        const mainTitle = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]'))
        expect(await mainTitle.getText()).toEqual('ChromeDriver')

        // 3. кликнуть в хедере на пункт ""Chrome Extensions"";
        const headerChromeExtensions = await driver.findElement(By.xpath("//a[text()='Chrome Extensions' and contains(@class,'dk90Ob jgXgSe')]"));
        await headerChromeExtensions.click();

        // 4. сделать хайлайт для нового основного тайтла;
        const newMainTitle = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]/span'));
        await actions.doubleClick(newMainTitle).perform();

        // 5. проверить что новый тайтл стал ""Chrome Extensions"";
        expect(await newMainTitle.getText()).toEqual('Chrome Extensions')
       
        await driver.quit();
    })
});
