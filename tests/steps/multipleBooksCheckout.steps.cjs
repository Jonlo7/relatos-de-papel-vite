const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const assert = require('assert');

let driver;

// 2. Escenario: Añadir un ejemplar de cada libro y confirmar compra

Given('que el usuario está en la página de libros', async function () {
  const serviceBuilder = new chrome.ServiceBuilder(chromedriver.path);
  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeService(serviceBuilder)
    .build();

  await driver.get('http://localhost:5173/books');
  await driver.wait(until.elementLocated(By.css('.book-list')), 10000);
});

When('el usuario añade un ejemplar de cada libro al carrito', async function () {
  // Selecciona todos los contenedores de libros
  const books = await driver.findElements(By.css('.book'));
  for (const book of books) {
    // Busca el botón "Añadir al carrito" dentro de cada .book
    const addButton = await book.findElement(
      By.xpath(`.//div[contains(@class, "book-actions")]//button[contains(text(), "Añadir al carrito")]`)
    );
    await addButton.click();
  }
});

When('el usuario abre el carrito', async function () {
  const cartButton = await driver.findElement(By.css('#cart-num'));
  await cartButton.click();
  await driver.wait(until.elementLocated(By.css('.cart-overlay')), 5000);
});

When('el usuario hace clic en el botón "Finalizar compra"', async function () {
  const finalizeButton = await driver.findElement(
    By.xpath(`//button[contains(text(), "Finalizar compra")]`)
  );
  await finalizeButton.click();
});

Then('el usuario debería ver la página de Checkout', async function () {
  await driver.wait(until.urlContains('/checkout'), 5000);
  const checkoutTitle = await driver.wait(
    until.elementLocated(By.css('.checkout h1')),
    5000
  );
  const titleText = await checkoutTitle.getText();
  assert.strictEqual(titleText, 'Checkout');
});

When('el usuario hace clic en el botón "Confirmar Compra"', async function () {
  // Botón "Confirmar Compra" en la página de Checkout
  const confirmButton = await driver.findElement(
    By.xpath(`//button[contains(text(), "Confirmar Compra")]`)
  );
  await confirmButton.click();
});

Then('el usuario debería ver el mensaje de pedido realizado', async function () {
  // Verificamos un alert con el texto "Pedido realizado. Gracias por tu compra."
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

// Cierra el navegador al final de cada escenario
After(async function () {
  if (driver) {
    await driver.quit();
  }
});
