import "./productItem.scss";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { IoCart } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import React from "react";
import { add } from "../../context/slice/cartSlice";
import { like } from "../../context/slice/wishlistSlice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const wishlistData = useSelector((state) => state.wishlist.value);
  const cartData = useSelector((state) => state.cart.value);
  return (
    <div className="product__item">
      <NavLink to={`/product/${product.id}`}>
        <img src={product.images[0]} width={200} alt="" />
      </NavLink>
      <h3>{product.title}</h3>
      <div className="product__item__buttons">
        <button
          className="product__item__like-btn"
          onClick={() => dispatch(like(product))}
        >
          {wishlistData.some((el) => el.id === product.id) ? (
            <FaHeart color="crimson" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button
          className="product__item__add-btn"
          disabled={cartData?.some((el) => el.id === product.id)}
          onClick={() => dispatch(add(product))}
        >
          {cartData?.some((el) => el.id === product.id) ? (
            <span>Added</span>
          ) : (
            <span>Add to Cart</span>
          )}
          <IoCart />
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
