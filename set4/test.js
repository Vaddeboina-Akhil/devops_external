const {Builder, By} = require('selenium-webdriver');

(async function(){
let driver = await new Builder().forBrowser('chrome').build();

// open your form (change path)
await driver.get('file:///C:/Users/akhil/Downloads/devops_external/set1/index.html');

// fill inputs
await driver.findElement(By.name('name')).sendKeys('Akhil'); // or use xpath if no name
await driver.findElement(By.xpath('//input[@placeholder="Email"]')).sendKeys('test@gmail.com');

// click submit
await driver.findElement(By.tagName('button')).click();

await driver.quit();
})();