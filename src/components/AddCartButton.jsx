import React, { useState } from "react";
import { useCart } from "../hooks/useCart";

export const AddCartButton = ({ book }) => {
    const { addToCart } = useCart();
    const {quantity} = useState(1);

    return (
        <div className="add-cart-button">
            <button onClick={() => addToCart({ ...book, quantity })}>Añadir al carrito</button>
        </div>
    );
};

