import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../products";

function ProductScreen() {
  const { id } = useParams();
  console.log(id);

  const product = products.find((p) => p._id === id);
  console.log(product.name);

  return (
    <div>
      <h3>{product.name}</h3>
    </div>
  );
}

export default ProductScreen;
