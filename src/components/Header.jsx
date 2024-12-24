import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { Cart } from "./Cart";
import { useCart } from "../hooks/useCart";
import HomeIcon from "../assets/icons/home.png";
import UserIcon from "../assets/icons/user.png";
import CartIcon from "../assets/icons/cart.png";

import "../styles/Layout.css";

export const Header = () => {
    const [isCartVisible, setIsCartVisible] = useState(false);
    const { cart } = useCart();

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <header className="header">
            <h1 className="header-title">Relatos de Papel - Tienda online</h1>
            <div className="header-content">
                <div className="header-logo">
                    <Link to="/books">
                        <button className="header-button">
                            <img src={HomeIcon} alt ="Inicio"/>
                        </button>
                    </Link>
                </div>
                <SearchBar />
                <button className="header-button">
                    <img src={UserIcon} alt="Perfil" />
                </button>
                <button className="header-button" id="cart-num" onClick={toggleCartVisibility}>
                    <img src={CartIcon} alt="Carrito" />
                    {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                </button>
            </div>
            <Cart isVisible={isCartVisible} onClose={toggleCartVisibility} />
        </header>
    );
}