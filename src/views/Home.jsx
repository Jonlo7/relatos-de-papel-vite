import React from "react";
import { useFilter } from "../hooks/useFilter";
import { useBooks } from "../hooks/useBooks";
import { BookList } from "../components/BookList";

export const Home = () => {
  const { searchTerm, setSearchTerm } = useFilter();
  const { books, loading } = useBooks();

  if (loading) {
    return <h1>Cargando libros...</h1>;
}

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <BookList bookArray={filteredBooks} />
    </div>
  );
};