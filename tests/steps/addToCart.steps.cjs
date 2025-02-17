const { When, Then } = require('@cucumber/cucumber');
const { getDriver } = require('./commonSteps.cjs');
const { By, until } = require('selenium-webdriver');
const assert = require('assert');

When('el usuario hace clic en el botón "Añadir al carrito" del libro {string}', async function (bookTitle) {
  const driver = getDriver();
  const bookTitleElement = await driver.findElement(
    By.xpath(`//div[contains(@class, "book-details")]/h2[text()="${bookTitle}"]`)
  );
  const bookContainer = await bookTitleElement.findElement(
    By.xpath('./ancestor::div[contains(@class, "book")]')
  );
  const addButton = await bookContainer.findElement(
    By.xpath('.//div[contains(@class, "book-actions")]//button[contains(text(), "Añadir al carrito")]')
  );
  await addButton.click();
});

Then('el contador del carrito debe mostrar {string}', async function (expectedCount) {
  const driver = getDriver();
  const cartCountElement = await driver.wait(
    until.elementLocated(By.css('.cart-count')),
    5000
  );
  const text = await cartCountElement.getText();
  assert.strictEqual(text, expectedCount);
});
