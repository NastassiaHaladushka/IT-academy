const { expect } = require('chai');

describe('Checking the web site webdriver.io', () => {

  it('Should be found on the page Boilerplate and check the text amiya-pattnaik/webdriverIO-with-mochaBDD', async () => {
    await browser.url('https://webdriver.io/');
    await $('//*[@class="navbar__brand"]').click();
    await $('.DocSearch-Button-Container').click();
    await $('//*[@id="docsearch-input"]').setValue('Boilerplate Projects');
    await browser.setTimeout({ 'script': 5000 })
    await $('//*[@id="docsearch-item-0"]').click();
    await expect(await $('//*[@id="amiya-pattnaikwebdriverio-with-mochabdd"]').getText()).to.contain('amiya-pattnaik/webdriverIO-with-mochaBDD');
  });

  it('Should be a dark version of the site', async () => {
    await $('//*[@class="toggle_vylO colorModeToggle_DEke"]').click();
    await browser.setTimeout({ 'script': 2000 });
    await $('//*[@class="toggle_vylO colorModeToggle_DEke"]').click();
  });

  it('Should be follow the link to GitHub', async () => {
    await $('//*[@class="navbar__brand"]').click();
    await $('.navbar__item.navbar__link.header-github-link').click();

  });


});