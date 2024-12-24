import React from "react";
"../styles/Book.css";


export const Book = ({ title, ISBN, author, genre, sinapsis, price, rating, img }) => {

  return (
    <div className="book">
      <div className="book-cover">
        <img src={img} alt={title} />
      </div>
      <div className="book-details">
        <h2>{title}</h2>
        <p className="book-details-text"><strong>Autor:</strong> {author}</p>
        <p className="book-details-text"><strong>ISBN:</strong> {ISBN}</p>
        <p className="book-details-text"><strong>Género:</strong> {genre}</p>
        <p className="book-details-text"><strong>Precio:</strong> ${price}</p>
        <p className="book-details-text"><strong>Sinopsis:</strong> {sinapsis}</p>
        <p className="book-details-text"><strong>Rating:</strong> {rating} / 5</p>
      </div>
    </div>
  );
};