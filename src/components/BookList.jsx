import React from "react";
import { useCart } from "../hooks/useCart";
import { useFilter } from "../hooks/useFilter";
import { AddCartButton } from "./AddCartButton";
import { Book } from "./Book";
import { Link } from "react-router-dom";

import "../styles/BookList.css";

export const BookList = ({ bookArray }) => {

  const { loading } = useCart();
  const { searchTerm } = useFilter();

  const filteredBooks = bookArray.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <h1>Cargando libro...</h1>;
  }

  if (!Array.isArray(bookArray)) {
    return <div><h1>No hay libros disponibles</h1></div>;
  }

  return (
    <div className="book-list">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <div key={book.ISBN} className="book-list-wrapper">
            <Book {...book}>
              <Link to={`/books/${book.ISBN}`}>
                <button>Ver detalles</button>
              </Link>
              <AddCartButton book={book} />
            </Book>
          </div>
        ))
      ) : (
        <h1 className="no-books-message">No se encontraron libros</h1>
      )}
    </div>
  );
};