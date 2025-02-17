const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const assert = require('assert');

let driver;

// Configuramos el servicio de ChromeDriver usando la ruta instalada por npm
chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

Given('que el usuario está en la página de libros', async function () {
  // Inicia el driver y navega a la URL de la página de libros (usando Vite)
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('http://localhost:5173/books');

  // Espera a que se renderice la lista de libros usando la clase ".book-list"
  await driver.wait(until.elementLocated(By.css('.book-list')), 5000);
});

When('el usuario hace clic en el botón "Añadir al carrito" del libro {string}', async function (bookTitle) {
  // Localiza el elemento del título del libro dentro del contenedor de detalles (".book-details")
  const bookTitleElement = await driver.findElement(
    By.xpath(`//div[contains(@class, "book-details")]/h2[text()="${bookTitle}"]`)
  );
  
  // Sube hasta el contenedor principal del libro (".book")
  const bookContainer = await bookTitleElement.findElement(
    By.xpath('./ancestor::div[contains(@class, "book")]')
  );
  
  // Dentro del contenedor, busca la sección de acciones (".book-actions") y el botón con el texto "Añadir al carrito"
  const addButton = await bookContainer.findElement(
    By.xpath('.//div[contains(@class, "book-actions")]//button[contains(text(), "Añadir al carrito")]')
  );
  
  // Hace clic en el botón para añadir el libro al carrito
  await addButton.click();
});

Then('el contador del carrito debe mostrar {string}', async function (expectedCount) {
  // Espera a que se localice el contador del carrito (".cart-count") en el header
  const cartCountElement = await driver.wait(
    until.elementLocated(By.css('.cart-count')),
    5000
  );
  
  // Obtiene el texto del contador y lo compara con el valor esperado
  const text = await cartCountElement.getText();
  assert.strictEqual(text, expectedCount);
});

// Hook para cerrar el navegador después de cada escenario
After(async function () {
  if (driver) {
    await driver.quit();
  }
});
