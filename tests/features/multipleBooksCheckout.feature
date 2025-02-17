Feature: Operaciones avanzadas de compra (Múltiples libros)

  Scenario: Añadir un ejemplar de cada libro y confirmar compra
    Given que el usuario está en la página de libros
    When el usuario añade un ejemplar de cada libro al carrito
    And el usuario abre el carrito
    And el usuario hace clic en el botón "Finalizar compra"
    Then el usuario debería ver la página de Checkout
    When el usuario hace clic en el botón "Confirmar Compra"
    Then el usuario debería ver el mensaje de pedido realizado