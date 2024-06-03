import "./Header.scss";

import { IoCart, IoHeart, IoHome, IoSearchSharp } from "react-icons/io5";

import { NavLink } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

// useSelector - input

const Header = () => {
  let count = useSelector((state) => state.counter.value);
  let wishlistCount = useSelector((state) => state.wishlist.value).length;
  let CartCount = useSelector((state) => state.cart.value).length;
  return (
    <header className="header ">
      <h2>RichEcom</h2>
      <div className="header__search">
        <input type="text" />
        <button>
          <IoSearchSharp />
        </button>
      </div>
      <ul className="header__list">
        <li>
          <NavLink to={"/"}>
            <div className="header__item">
              <IoHome />
              Home
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/wishlist"}>
            <div className="header__item">
              <IoHeart />
              <span>
                Wishlist
                {wishlistCount ? <sup>{wishlistCount}</sup> : <></>}
              </span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>
            <div className="header__item">
              <IoCart />
              <span>
                My Cart
                {CartCount ? <sup>{CartCount}</sup> : <></>}
              </span>
            </div>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
