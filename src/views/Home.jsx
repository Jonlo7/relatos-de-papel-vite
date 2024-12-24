import React from "react";
import { useBooks } from "../hooks/useBooks";
import { BookList } from "../components/BookList";

export const Home = () => {
  const { books, loading } = useBooks();

  if (loading) {
    return <h1>Cargando libros...</h1>;
}

  return (
    <div>
      <BookList bookArray={books} />
    </div>
  );
};