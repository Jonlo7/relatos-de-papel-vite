import React from 'react';
import { useParams } from 'react-router-dom';
import { AddCartButton } from '../components/AddCartButton';
import { useBooks } from '../hooks/useBooks';
import { ReviewList } from "../components/ReviewList";
import { StarRating } from "../components/StarRating";

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
          <h1 className="book-detail-title">Detalles del Libro</h1>
          <div className="book-detail-container">
            {/* Imagen del libro */}
            <div className="book-detail-cover">
              <img src={book.img} alt={book.title} />
            </div>
            {/* Información del libro */}
            <div className="book-detail-info">
              <h2>{book.title}</h2>
              <p><strong>Autor:</strong> {book.author}</p>
              <p><strong>Género:</strong> {book.genre}</p>
              <p><strong>ISBN:</strong> {book.ISBN}</p>
              <p className="book-detail-price"><strong>Precio:</strong> {book.price} €</p>
              <p><strong>Rating:</strong></p>
                <StarRating rating={book.rating} />
              <div className="book-detail-actions">
                <AddCartButton book={book} />
              </div>
            </div>
          </div>
          {/* Sinopsis */}
          <div className="book-detail-synopsis">
            <h3>Sinopsis:</h3>
            <p>{book.sinapsis}</p>
          </div>
          {/* Reseñas */}
          <div className="book-detail-reviews">
            <h3>Reseñas:</h3>
            <ReviewList reviews={book.reviews} />
          </div>
        </div>
      );
    };