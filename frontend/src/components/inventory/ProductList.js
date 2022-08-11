import React, { useContext } from "react";

import InventoryContext from "../../context/inventory/InventoryContext";

import ProductCard from "./ProductCard";

const ProductList = () => {
  const inventoryContext = useContext(InventoryContext);

    console.log(InventoryContext);

  const { products, categories } = inventoryContext;

  return (
    <div className="p-4">
      <div className="row">
        {products.map((product) => (
          <div className="col col-12 col-lg-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
