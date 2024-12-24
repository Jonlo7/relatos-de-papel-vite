import React, { useState } from "react";

import "../styles/SearchBar.css";

export const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchInput(value);
    onSearch(value); // Llama a la función de búsqueda proporcionada
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar libros por título..."
        value={searchInput}
        onChange={handleInputChange}
      />
    </div>
  );
};