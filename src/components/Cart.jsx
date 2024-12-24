import React from "react";
import { useCart } from "../hooks/useCart";

import "../styles/Cart.css";

export const Cart = ({ isVisible, onClose }) => {
    const { cart, updateQuantity, removeFromCart } = useCart();

    if (!isVisible) {
        return null;
    }

return (
        <div className="cart-overlay">
            <div className="cart">
                <button className="cart-close" onClick={onClose}>X</button>
                <h2>Tu carrito</h2>
                {cart.map((item) => (
                    <div key={item.ISBN} className="cart-item">
                        <img src={item.img} alt={item.title} />
                        <div className="cart-item-details">
                            <h3>{item.title}</h3>
                            <p>{item.author}</p>
                            <p>${item.price}</p>
                            <div className="cart-quantity">
                                <button onClick={() => updateQuantity(item.ISBN, item.quantity - 1)}>
                                    -
                                </button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.ISBN, item.quantity + 1)}>
                                    +
                                </button>
                            </div>
                            <button onClick={() => removeFromCart(item.ISBN)}>Eliminar</button>
                        </div>
                    </div>
                ))}
                <div className="cart-total">
                    <h3>
                        Total: $
                        {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                    </h3>
                </div>
            </div>
        </div>
    );
};