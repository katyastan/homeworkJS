const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const siteURL = 'https://chromedriver.chromium.org/home';

let opts = new chrome.Options()
opts.setBrowserVersion('114')

let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(opts)
    .build();

jest.setTimeout(30000)

describe('Titles test', () => {
    test('Test for checking titles', async () => {

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
        await driver.executeScript("arguments[0].style.backgroundColor = 'yellow'", newMainTitle);

        // 5. проверить что новый тайтл стал ""Chrome Extensions"";
        expect(await newMainTitle.getText()).toEqual('Chrome Extensions')
    })
    afterAll(() => {
        driver.quit();    
    })
});
