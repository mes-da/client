import React from "react";
import { Link } from "react-router-dom";
import products from "../products";

export default function Product({ product }) {
  return (
    <div className="col-md-3 m-5 card p-2">
      <div>
        <Link to={`products/${product.id} `}>
          <img src={product.image} alt="name" className="img-fluid" />
          <h1> {product.name}</h1>
          <h1> Rating: {product.rating}</h1>
          <h1> Price: {product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
