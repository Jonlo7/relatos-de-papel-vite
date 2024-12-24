import React from 'react';
import { useParams } from 'react-router-dom';
import { AddCartButton } from '../components/AddCartButton';
import { useBooks } from '../hooks/useBooks';

import '../styles/Book.css';

export const BookDetail = () => {
    const { ISBN } = useParams();
    const { books, loading }  = useBooks();
    const book = books.find(book => book.ISBN === ISBN);

    if (loading) {
        return <h1>Cargando libro...</h1>; 
    }

    if (!book) {
        return <h1>Libro no encontrado</h1>;
    }

    return (
        <div className="book-detail">
            <div className="book-detail-content">
                <div className="book-detail-image">
                    <img src={book.img} alt={book.title} />
                </div>
                <div className="book-detail-info">
                    <h2>{book.title}</h2>
                    <p><strong>Autor:</strong> {book.author}</p>
                    <p><strong>ISBN:</strong> {book.ISBN}</p>
                    <p><strong>Género:</strong> {book.genre}</p>
                    <p><strong>Precio:</strong> {book.price} €</p>
                    <p><strong>Rating:</strong> {book.rating} / 5</p>
                    <AddCartButton book={book} />
                </div>
            </div>
            <div className="book-detail-sinopsis">
                <h3>Sinopsis:</h3>
                <p>{book.sinapsis}</p>
            </div>
            <div className="book-detail-reviews">
                <h3>Reseñas:</h3>
                <div className="reviews-container">
                    <div className="review">Reseña 1</div>
                    <div className="review">Reseña 2</div>
                    <div className="review">Reseña 3</div>
                </div>
            </div>
        </div>
    );
};