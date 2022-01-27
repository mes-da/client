import React from "react";
import products from "../products";

export default function Productdescscreen({ match }) {
  const productid = match.params.id;
  return (
    <div>
      <h1> Product Description</h1>
      <h1> The Product is: {productid}</h1>
    </div>
  );
}
