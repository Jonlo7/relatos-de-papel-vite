import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

import "../styles/Layout.css";

export const Layout = ({children}) => {
    return (
        <div className="container" >
            <Header />
            {children}
            <Footer />
        </div>
    );
}