Feature: Entrar en vista de detalle de un libro

  Scenario: Añadir un libro desde la vista de detalle e incrementar unidades
    Given que el usuario está en la página de libros
    When el usuario hace clic en el libro "El principito"
    Then el usuario debería ver la vista de detalle del libro "El principito"
