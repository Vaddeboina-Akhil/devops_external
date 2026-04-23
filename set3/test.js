const {Builder, By} = require('selenium-webdriver');

(async function(){
let driver = await new Builder().forBrowser('chrome').build();

await driver.get('https://www.google.com');

let title = await driver.getTitle();
console.log(title);

await driver.quit();
})();