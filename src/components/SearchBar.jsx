import React from "react";
import { useFilter } from "../hooks/useFilter";

import "../styles/SearchBar.css";

export const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useFilter();

  const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar">
        <input
            type="text"
            placeholder="Buscar libros por título..."
            value={searchTerm}
            onChange={handleInputChange}
        />
    </div>
);
};