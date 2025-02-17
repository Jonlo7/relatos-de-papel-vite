const { When, Then } = require('@cucumber/cucumber');
const { getDriver } = require('./commonSteps.cjs');
const { By } = require('selenium-webdriver');
const { until } = require('selenium-webdriver');
const assert = require('assert');

When('el usuario añade un ejemplar de cada libro al carrito', async function () {
  const driver = getDriver();
  const books = await driver.findElements(By.css('.book'));
  for (const book of books) {
    const addButton = await book.findElement(
      By.xpath(`.//div[contains(@class, "book-actions")]//button[contains(text(), "Añadir al carrito")]`)
    );
    await addButton.click();
  }
});

When('el usuario hace clic en el botón "Confirmar Compra"', async function () {
  const driver = getDriver();
  const confirmButton = await driver.findElement(
    By.xpath(`//button[contains(text(), "Confirmar Compra")]`)
  );
  await confirmButton.click();
});

Then('el usuario debería ver el mensaje de pedido realizado', async function () {
  const driver = getDriver();
  let alertText = '';
  try {
    const alert = await driver.switchTo().alert();
    alertText = await alert.getText();
    await alert.accept();
  } catch (error) {
    assert.fail('No se encontró la alerta de pedido realizado');
  }
  assert.strictEqual(alertText, 'Pedido realizado. Gracias por tu compra.');
});
