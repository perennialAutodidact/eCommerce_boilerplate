import React from "react";

export default function ProductCard(props) {
  let { product } = props;
  return (
    <div>
      <div className="card">
        <img
          className="card-img-top"
          src={product.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <div className="card-text">{product.description}</div>
        </div>
      </div>
    </div>
  );
}
