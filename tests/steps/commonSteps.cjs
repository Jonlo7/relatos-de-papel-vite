const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const assert = require('assert');

let driver;

function getDriver() {
  return driver;
}

function setDriver(d) {
  driver = d;
}

Given('que el usuario está en la página de libros', async function () {
  const serviceBuilder = new chrome.ServiceBuilder(chromedriver.path);
  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeService(serviceBuilder)
    .build();

  await driver.get('http://localhost:5173/books');
  await driver.wait(until.elementLocated(By.css('.book-list')), 10000);
  setDriver(driver);
});

When('el usuario abre el carrito', async function () {
  const d = getDriver();
  const cartButton = await d.findElement(By.css('#cart-num'));
  await cartButton.click();
  await d.wait(until.elementLocated(By.css('.cart-overlay')), 5000);
});

Then('el usuario debería ver la página de Checkout', async function () {
  const d = getDriver();
  await d.wait(until.urlContains('/checkout'), 5000);

  const checkoutTitle = await d.wait(
    until.elementLocated(By.css('.checkout h1')),
    5000
  );
  const titleText = await checkoutTitle.getText();
  assert.strictEqual(titleText, 'Checkout');
});

After(async function () {
  if (driver) {
    await driver.quit();
  }
});

module.exports = { getDriver, setDriver };
