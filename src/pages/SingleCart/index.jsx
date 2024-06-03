import "./singleCart.scss";

import React, { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa6";
import axios from "../../api";
import { useParams } from "react-router-dom";

const SingleCart = () => {
  const [product, setProduct] = useState(null);
  console.log(product);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="product__single container">
      <div className="product__single__card">
        <div className="product__single__card__img">
          <img src={product?.images[0]} alt="" />
        </div>
        <div className="product__single__card__info">
          <h3>{product?.title}</h3>
          <h4>Category: {product?.category}</h4>
          <p>{product?.price}$</p>
          <p>
            Rating: {product?.rating} <FaStar />
          </p>
          <p>Info: {product?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
