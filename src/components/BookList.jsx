import React from "react";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";

import "../styles/BookList.css";

export const BookList = ({ bookArray }) => {
    
    const { loading, addToCart } = useCart();

    if (loading) {
        return <h1>Cargando libro...</h1>;
    }

    if (!Array.isArray(bookArray)) {
        return <div><h1>No hay libros disponibles</h1></div>;
    }

    return (
        <div className="book-list">
            {bookArray.map((book, index) => (
                <div key={index} className="book-wrapper">
                    <div  className="book">
                        <div className="book-cover">
                          <img src={book.img} alt={book.title} />
                        </div>
                        <div className="book-details">
                            <h3>{book.title}</h3>
                            <h4>{book.author}</h4>
                            <h4>{book.price} € </h4>
                            <div className="book-actions">
                             <Link to={`/books/${book.ISBN}`}>
                                    <button>Ver detalles</button>
                                </Link>
                                <button onClick={() => addToCart(book)}>Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            ))}
        </div>
    );
};