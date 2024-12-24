import React from 'react';
import { useParams } from 'react-router-dom';
import { useBooks } from '../hooks/useBooks';
import { Book } from '../components/Book';
import '../styles/Book.css';

export const BookDetail = () => {
    const { ISBN } = useParams();
    const { books, loading }  = useBooks();
    const book = books.find(book => book.ISBN === ISBN);
    if (loading) {
        return <h1>Cargando libro...</h1>; // Muestra un mensaje de carga
    }

    if (!book) {
        return <h1>Libro no encontrado</h1>;
    }

    return (
        <div className="book-detail">
            <Book
                title={book.title}
                ISBN={book.ISBN}
                author={book.author}
                genre={book.genre}
                sinapsis={book.sinapsis}
                price={book.price}
                rating={book.rating}
                img={book.img}
            />
        </div>
    );
};