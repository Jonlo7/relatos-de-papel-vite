import React from "react";
import { Link } from "react-router-dom";

import "../styles/NotFound.css";

export const NotFound = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <Link to="/">
                <button className="not-found-button">Volver a la página principal</button>
            </Link>
        </div>
    );
}