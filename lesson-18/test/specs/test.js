const { expect } = require('chai');

describe('Checking the web site webdriver.io', () => {
  beforeEach(async () => {
    await browser.url('https://webdriver.io/');
  });

  after(async () => {
    await browser.closeWindow();
  });

  it('Should be found on the page Boilerplate and check the text amiya-pattnaik/webdriverIO-with-mochaBDD', async () => {
    await $('.DocSearch-Button-Container').click();
    await $('//*[@id="docsearch-input"]').setValue('Boilerplate Projects');
    await $('//*[@id="docsearch-item-0"]').click();
    await expect(await $('//*[@id="amiya-pattnaikwebdriverio-with-mochabdd"]').getText()).to.contain('amiya-pattnaik/webdriverIO-with-mochaBDD');
  });

  it('Should be found on the page Selectors and check the text Tag Name', async () => {
    await $('//*[@class="navbar__brand"]').waitForClickable();
    await $('.DocSearch-Button-Container').click();
    await $('//*[@id="docsearch-input"]').setValue('Selectors');
    await $('//*[@id="docsearch-item-0"]').click();
    await expect(await $('//*[@id="tag-name"]').getText()).to.contain('Tag Name');
  });

  it('Should be follow the link to GitHub', async () => {
    await $('//*[@class="navbar__brand"]').click();
    await $('.navbar__item.navbar__link.header-github-link').click();
    
  });

});