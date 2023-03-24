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
    
    it('There should be a Chrome Extensions text', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const menuChromeExtensions = await driver.findElements(By.xpath('//*[@id="WDxLfe"]/ul/li[3]'));
        await menuChromeExtensions[0].click();
        let titleColor = driver.findElement(By.xpath('//h1'));
        await driver.executeScript("arguments[0].style.background='red'", titleColor)
        const titleText = await driver.findElement(By.xpath('//h1'));
        expect(await titleText.getText()).to.equal('Chrome Extensions');

    });
 
    it('There should be that the first link contains the word driver', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const menuSearch = await driver.findElements(By.xpath('//*[@aria-label="Открыть поле поиска"]'));
        await menuSearch[0].click();
        const search = await driver.findElement(By.xpath('//*[@aria-label="Поиск по сайту"]'));
        await search.sendKeys("driver");
        await driver.actions().sendKeys(Key.ENTER).perform();
        const linksDriver = await driver.findElements(By.xpath('//*[@jscontroller="U720xd"]/div[1]'));
        expect(await linksDriver[0].getText()).to.contain('driver');
    
    });

    it('There should be that url contains /mobile-emulation', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const menuDop = await driver.findElements(By.xpath('//li[@class="VsJjtf oXBWEc"]'));
        await menuDop[0].click();
        const menuMobile = await driver.findElements(By.xpath('//ul[@class="VcS63b"]//li[10]'));
        await menuMobile[0].click();
        const urlMobile = await driver.getCurrentUrl();
        expect(urlMobile).to.contain('/mobile-emulation');
        
    });

});