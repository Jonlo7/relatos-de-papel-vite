import React from "react";
import { Link } from "react-router-dom";
import useRedirection from "../hooks/useRedirection";

export const Landing = () => {
    useRedirection("/books", 3000); // Redireccionamo en 3 segundos

    return (
        <div className="landing">
            <h1>Relatos de Papel</h1>
            <Link to={"books"}>
                <h1>Bienvenidos a Relatos de Papel</h1>
            </Link>
        </div>
    );
};
