import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {
        setCart((prevCart) => {
            if (prevCart.find((item) => item.ISBN === book.ISBN)) {
                console.log("Item already in cart");
                return prevCart;
            }
            console.log("Item added to cart");
            return [...prevCart, { ...book, quantity: 1 }];
        });
    };

    const updateQuantity = (ISBN, quantity) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.ISBN === ISBN ? { ...item, quantity: Math.max(1, quantity) } : item
            )
        );
    };

    const removeFromCart = (ISBN) => {
        setCart((prevCart) => prevCart.filter((item) => item.ISBN !== ISBN));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};