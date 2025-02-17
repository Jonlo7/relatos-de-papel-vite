const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const assert = require('assert');

let driver;

// 1. Escenario: Añadir un libro desde la vista de detalle e incrementar unidades

Given('que el usuario está en la página de libros', async function () {
  const serviceBuilder = new chrome.ServiceBuilder(chromedriver.path);
  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeService(serviceBuilder)
    .build();

  // Ajusta la URL a la de tu app
  await driver.get('http://localhost:5173/books');
  await driver.wait(until.elementLocated(By.css('.book-list')), 10000);
});

When('el usuario hace clic en el libro {string}', async function (bookTitle) {
  // Localiza el título del libro en la lista de libros
  const bookElement = await driver.findElement(
    By.xpath(`//div[contains(@class, "book-details")]//h2[text()="${bookTitle}"]`)
  );
  // Haz clic para ir a la vista de detalle
  await bookElement.click();
});

When('el usuario hace clic en el botón "Añadir al carrito" en la vista de detalle', async function () {
  // Localiza y haz clic en el botón "Añadir al carrito" en la vista de detalle
  const addButton = await driver.wait(
    until.elementLocated(By.xpath(`//button[contains(text(), "Añadir al carrito")]`)),
    5000
  );
  await addButton.click();
});

When('el usuario abre el carrito', async function () {
  // Asumiendo que el icono del carrito tiene el id="cart-num"
  const cartButton = await driver.findElement(By.css('#cart-num'));
  await cartButton.click();
  // Espera a que aparezca el overlay del carrito
  await driver.wait(until.elementLocated(By.css('.cart-overlay')), 5000);
});

When('el usuario incrementa la cantidad del libro {string} en {int}', async function (bookTitle, increment) {
  // Localiza el cart-item que contiene el título del libro
  const cartItem = await driver.findElement(
    By.xpath(`//div[contains(@class, "cart-item-details")]//h2[text()="${bookTitle}"]/ancestor::div[contains(@class, "cart-item")]`)
  );
  // Botón "+"
  const plusButton = await cartItem.findElement(By.xpath(`.//button[text()="+"]`));
  
  // Haz clic 'increment' veces
  for (let i = 0; i < increment; i++) {
    await plusButton.click();
  }
});

When('el usuario hace clic en el botón "Finalizar compra"', async function () {
  const finalizeButton = await driver.findElement(
    By.xpath(`//button[contains(text(), "Finalizar compra")]`)
  );
  await finalizeButton.click();
});

Then('el usuario debería ver la página de Checkout', async function () {
  // Verifica que la URL contenga "/checkout"
  await driver.wait(until.urlContains('/checkout'), 5000);
  
  // Opcional: verifica el título de la página Checkout
  const checkoutTitle = await driver.wait(
    until.elementLocated(By.css('.checkout h1')),
    5000
  );
  const titleText = await checkoutTitle.getText();
  assert.strictEqual(titleText, 'Checkout');
});

// Cierra el navegador al final de cada escenario
After(async function () {
  if (driver) {
    await driver.quit();
  }
});
