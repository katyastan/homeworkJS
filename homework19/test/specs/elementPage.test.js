/* 1. Настроить фреймворк WebdriverIO для запуска тестов.
2. Подготовить 3-5 тестовых сценария проходящих по официальному сайту фреймворка;
3. Автоматизировать сценарии с использованием выбранного фреймворка используя:
- API выбранного фреймворка;
- структуру одного из фреймворков: Jasmine, Mocha;
4. Добавить eslint и репортер. */

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
