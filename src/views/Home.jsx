import React from "react";
import { useBooks } from "../hooks/useBooks";
import { BookList } from "../components/BookList";
import { Loader } from "../components/Loader";

import "../styles/Home.css"; 

export const Home = () => {
  const { books, loading } = useBooks();

  if (loading) {
    return (
      <div className="book-detail">
        <div className="loader-container">
          <Loader />
        </div>
        <h1>Cargando libros...</h1>
      </div>
    );
  }

  return (
    <div>
      <BookList bookArray={books} />
    </div>
  );
};