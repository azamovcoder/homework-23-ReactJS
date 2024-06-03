import "./cartWrapper.scss";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  decreaseAmount,
  increaseAmount,
  remove,
} from "../../context/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import React from "react";
import { like } from "../../context/slice/wishlistSlice";

const CartWrapper = ({ data }) => {
  const wishlistData = useSelector((state) => state.wishlist.value);
  const dispatch = useDispatch();
  const cartData = data?.map((el) => (
    <div className="cart__wrapper" key={el.id}>
      <NavLink to={`/product/${el.id}`}>
        <img src={el.images[0]} alt={el.title} width={200} height={200} />
      </NavLink>
      <div className="cart__wrapper__buttons">
        <button
          disabled={el.amount < 2}
          onClick={() => dispatch(decreaseAmount(el))}
        >
          -
        </button>
        <button>{el.amount}</button>
        <button
          disabled={el.amount === el.stock}
          onClick={() => dispatch(increaseAmount(el))}
        >
          +
        </button>
      </div>
      <div className="cart__wrapper__price">
        <p>Total Price: {el.amount * el.price} $</p>
        <p>Price: {el.price} $</p>
      </div>
      <div className="cart__wrapper__optional__buttons">
        <button
          className="product__item__like-btn"
          onClick={() => dispatch(like(el))}
        >
          {wishlistData.some((element) => element.id === el.id) ? (
            <FaHeart color="crimson" />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button
          className="cart__wrapper__remove-btn"
          onClick={() => dispatch(remove(el))}
        >
          Remove
        </button>
      </div>
    </div>
  ));
  return (
    <div className="cart">
      <div className="cart__left">{cartData}</div>
      <div className="cart__right">
        <div className="cart__coupon">
          <h3>Have coupon</h3>
          <div className="cart__coupon__input">
            <input placeholder="Coupon  code" type="text" />
            <button>Apply</button>
          </div>
        </div>
        <div className="cart__right__prices">
          <p>
            <span>Total price: </span> <span>$329.00</span>
          </p>
          <p>
            <span>Discount: </span> <span>-$69.00</span>
          </p>
          <p>
            <span>Tax </span> <span>$14.00</span>
          </p>
          <hr />
          <p>
            <span>Total:</span> <span>$357.00</span>
          </p>
          <button>Make Purchase</button>
          <button>Back to shop</button>
        </div>
      </div>
    </div>
  );
};

export default CartWrapper;
