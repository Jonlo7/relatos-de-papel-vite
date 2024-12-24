import React, { createContext, useContext, useState } from "react";

// Crear el contexto de filtrado
const FilterContext = createContext();

// Proveedor del contexto de filtrado
export const FilterProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <FilterContext.Provider value={{ searchTerm, setSearchTerm }}>
            {children}
        </FilterContext.Provider>
    );
};

// Hook personalizado para usar el contexto de filtrado
export const useFilter = () => {
    return useContext(FilterContext);
};