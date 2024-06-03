import "./App.css";

import { Route, Routes } from "react-router-dom";

import Cart from "./pages/cart";
import Header from "./components/header/Header";
import Home from "./pages/home";
import React from "react";
import SingleCart from "./pages/SingleCart";
import Wishlist from "./pages/wishlist";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<SingleCart />} />
      </Routes>
    </div>
  );
};

export default App;
