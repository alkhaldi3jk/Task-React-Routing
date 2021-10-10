import React from "react";
import { Redirect, useParams } from "react-router";
import products from "../products";

function Detail() {
  const slug = useParams().productSlug;
  const product = products.find((product) => product.slug === slug);
  if (!product) return <Redirect path="/" />;

  return (
    <div className="detail">
      <h5>{product.name}</h5>
      <img src={product.image} alt="product" />
      <p>{product.price} KD</p>
      <p>{product.description}</p>
    </div>
  );
}

export default Detail;
