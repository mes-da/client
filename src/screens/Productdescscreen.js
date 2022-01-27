import React from "react";
import { useParams } from "react-router-dom";
import products from "../products";

export default function Productdescscreen() {
  const { id } = useParams();
  const product = products.find((product) => (product = product.id));
  console.log(id);
  return (
    <div>
      <div className="row">
        <div className=" col-md-6">
          <div className="card">
            <h1> {product.name} </h1>
            <img src={product.image} />
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
