Feature: Añadir libro al carrito
  Como usuario de la tienda
  Quiero poder añadir un libro al carrito
  Para poder comprarlo más adelante

  Scenario: El usuario añade "El principito" al carrito
    Given que el usuario está en la página de libros
    When el usuario hace clic en el botón "Añadir al carrito" del libro "El principito"
    Then el contador del carrito debe mostrar "1"