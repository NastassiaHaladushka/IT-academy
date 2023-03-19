const {Builder, By, Key, until } = require("selenium-webdriver");
const {expect} = require('chai');

describe('WebDriver test', function () {
    let driver;
    before(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts( { implicit: 10000 } );
    });

    after(async () => {
        await driver.quit();
    });

    it('There should be a ChromeDriver text', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const title = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]'));
        expect(await title.getText()).to.contain('ChromeDriver');
    });

    
});