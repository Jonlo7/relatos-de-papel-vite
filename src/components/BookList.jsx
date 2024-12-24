import React from "react";
import { useCart } from "../hooks/useCart";
import { useFilter } from "../hooks/useFilter";
import { AddCartButton } from "./AddCartButton";
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
              <div key={book.ISBN} className="book-wrapper">
                <div className="book">
                  <div className="book-cover">
                    <img src={book.img} alt={book.title} />
                  </div>
                  <div className="book-details">
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <h3>{book.price} €</h3>
                    <div className="book-actions">
                      <Link to={`/books/${book.ISBN}`}>
                        <button>Ver detalles</button>
                      </Link>
                      <AddCartButton book={book} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="no-books-message">No se encontraron libros</h1> // Mensaje estilizado
          )}
        </div>
      );
};