const { Given, When, Then, BeforeAll } = require('cucumber');
const {By, Builder, Browser } = require('selenium-webdriver');
const assert = require("assert");

let driver;

BeforeAll(async () => {
    driver = await new Builder().forBrowser('firefox').build();
  });

Given('I visit Lennar homepage', {timeout: 2 * 8000}, async () => {

    await driver.get('https://lennar.okta.com/');
});

When('Type your email:', {timeout: 2 * 10000}, async () => {
  await driver.manage().setTimeouts({implicit: 5000});
    let username = await driver.findElement(By.name('identifier'));
    await username.sendKeys('alberto.anguianovaldivia@lennar.com');  
});

When('Click on the Next button', async () => {
    let btnNext = await driver.findElement(By.xpath("//input[@value='Next']"));
      await btnNext.click(); 
});

When('Type your password: *******', async () =>{
  await driver.manage().setTimeouts({implicit: 5000});
  let username = await driver.findElement(By.id('input60'));
  await username.sendKeys('Angui@no083');  
})

When ('Click on the Verify button', async () =>{
  await driver.manage().setTimeouts({implicit: 2000});
  let btnNext = await driver.findElement(By.xpath("//form[@id='form52']/div[2]/input"));
  await btnNext.click();
})

Then ('Validate the login success', {timeout: 2 * 10000},  async () =>{
  await driver.manage().setTimeouts({implicit: 10000});
  let lblName = await driver.findElement(By.id('dashboard-my-apps-title'));
  let value = await lblName.getText();
  assert.equal("My Apps", value);
})

Given ('Access to Application', async () =>{
  await driver.manage().setTimeouts({implicit: 2000});
  let lnkApp = await driver.findElement(By.xpath("//section[@id='main-content']/section/section/section/section/div[9]/a"));
  await lnkApp.click();
})

Then ('Validate the Application', {timeout: 2 * 20000},  async () =>{
  await driver.manage().setTimeouts({implicit: 20000});
  //let lnkApp = await driver.findElement(By.xpath("//span[5]/span/span"));
  //console.log(lnkApp);
  //assert.equal("Alberto Anguiano Valdivia", lnkApp.getText);
})
