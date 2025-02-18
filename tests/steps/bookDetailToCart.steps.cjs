const { When, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { getDriver } = require('./commonSteps.cjs');


When('el usuario hace clic en el libro {string}', async function (bookTitle) {
    const driver = getDriver();
    const bookTitleElement = await driver.findElement(
      By.xpath(`//div[contains(@class, "book-details")]/h2[text()="${bookTitle}"]`)
    );
    const bookContainer = await bookTitleElement.findElement(
      By.xpath('./ancestor::div[contains(@class, "book")]')
    );
    const verDetalles = await bookContainer.findElement(
      By.xpath('.//div[contains(@class, "book-actions")]//button[contains(text(), "Ver detalles")]')
    );
    await verDetalles.click();
  });;


Then('el usuario debería ver la vista de detalle del libro {string}', async function (bookTitle) {
  const driver = getDriver();
  const isbn = "978-3-16-148410-0";
  await driver.wait(until.urlContains(`/books/${isbn}`), 10000);
});
