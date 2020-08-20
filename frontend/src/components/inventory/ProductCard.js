import React from "react";

export default function ProductCard(props) {
  let { product } = props;
  return (
    <div className="product-card mb-4">
      <div className="card p-4">
        <img
          className="card-img-top align-self-center"
          src={product.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <div className="card-text">{product.description}</div>
          <p className="pt-3">
            <strong>$ {(product.price_per / 100).toFixed(2)}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
