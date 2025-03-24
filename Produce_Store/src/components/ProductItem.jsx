import React from "react";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div>
      <span>
        {product.name} ${product.price.toFixed(2)}
      </span>
      <button onClick={() => addToCart(product)}> + </button>
    </div>
  );
};

export default ProductItem;
