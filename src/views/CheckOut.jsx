import React from "react";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";

import "../styles/CheckOut.css";

export const CheckOut = () => {
    const { cart, clearCart } = useCart(); 
    const navigate = useNavigate();

    const handleConfirmPurchase = () => {
        alert("Pedido realizado. Gracias por tu compra."); 
        clearCart(); 
        navigate("/books"); 
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="checkout">
            <h1>Checkout</h1>
            <div className="checkout-list">
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div key={item.ISBN} className="checkout-item">
                            <img src={item.img} alt={item.title} />
                            <div className="checkout-item-details">
                                <h3>{item.title}</h3>
                                <p>Autor: {item.author}</p>
                                <p>Precio: {item.price} €</p>
                                <p>Cantidad: {item.quantity}</p>
                                <p>Total: {(item.price * item.quantity).toFixed(2)} €</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No tienes artículos en el carrito.</p>
                )}
            </div>
            <div className="checkout-summary">
                <h2>Total a pagar: {totalPrice.toFixed(2)} €</h2>
                <div className="checkout-actions">
                    <button className="back-button" onClick={() => window.history.back()}>
                        Volver
                    </button>
                    {cart.length > 0 && (
                        <button className="confirm-button" onClick={handleConfirmPurchase}>
                            Confirmar Compra
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};