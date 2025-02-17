const { When } = require('@cucumber/cucumber');
const { getDriver } = require('./commonSteps.cjs');
const { By, until } = require('selenium-webdriver');

When('el usuario hace clic en el libro {string}', async function (bookTitle) {
  const driver = getDriver();
  const bookElement = await driver.findElement(
    By.xpath(`//div[contains(@class, "book-details")]/h2[text()="${bookTitle}"]`)
  );
  await bookElement.click();
});

When('el usuario hace clic en el botón "Añadir al carrito" en la vista de detalle', async function () {
  const driver = getDriver();
  const addButton = await driver.wait(
    until.elementLocated(By.xpath(`//button[contains(text(), "Añadir al carrito")]`)),
    5000
  );
  await addButton.click();
});

When('el usuario incrementa la cantidad del libro {string} en {int}', async function (bookTitle, increment) {
  const driver = getDriver();
  const cartItemLocator = By.xpath(`//div[contains(@class, "cart-item-details")]//h2[normalize-space(text())="${bookTitle}"]/ancestor::div[contains(@class, "cart-item")]`);
  await driver.wait(until.elementLocated(cartItemLocator), 5000);
  const cartItem = await driver.findElement(cartItemLocator);
  const plusButton = await cartItem.findElement(By.css('.plus-button'));
  for (let i = 0; i < increment; i++) {
    await plusButton.click();
    await driver.sleep(500);
  }
});

When('el usuario hace clic en el botón "Finalizar compra"', async function () {
  const driver = getDriver();
  const finalizeButton = await driver.findElement(
    By.xpath(`//button[contains(text(), "Finalizar compra")]`)
  );
  await finalizeButton.click();
});
