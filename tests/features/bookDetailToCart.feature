Feature: Operaciones avanzadas de compra (Vista de detalle)

  Scenario: Añadir un libro desde la vista de detalle e incrementar unidades
    Given que el usuario está en la página de libros
    When el usuario hace clic en el libro "Cien años de soledad"
    And el usuario hace clic en el botón "Añadir al carrito" en la vista de detalle
    And el usuario abre el carrito
    And el usuario incrementa la cantidad del libro "Cien años de soledad" en 2
    And el usuario hace clic en el botón "Finalizar compra"
    Then el usuario debería ver la página de Checkout