import React from "react";
import { StarRating } from "./StarRating";
import "../styles/Book.css";

export const Book = ({ title, author, price, img, rating, children }) => {
  return (
    <div className="book">
      <div className="book-cover">
        <img src={img} alt={title} />
      </div>
      <div className="book-details">
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{price} €</p>
        <StarRating rating={rating} />
        <div className="book-actions">{children}</div>
      </div>
    </div>
  );
};