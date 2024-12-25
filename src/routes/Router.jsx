import React from "react";
import { Landing } from "../views/Landing";
import { Layout } from "../components/Layout";
import { NotFound } from "../views/NotFound";
import { BookDetail } from "../views/BookDetail";
import { Home } from "../views/Home";
import { CheckOut } from "../views/CheckOut";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FilterProvider } from "../hooks/useFilter";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <FilterProvider>
        <Routes>
          <Route path="/" element={<Layout><Landing /></Layout>} />
          <Route path="/books" element={<Layout><Home /></Layout>} />
          <Route path="/books/:ISBN" element={<Layout><BookDetail /></Layout>} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </FilterProvider>
    </BrowserRouter>
  );
}

