import React from "react";

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div>
      <span>
        {item.name} ${item.price.toFixed(2)} x {item.quantity} = $
        {(item.price * item.quantity).toFixed(2)}
      </span>
      <button onClick={() => removeFromCart(item.id)}> x </button>
    </div>
  );
};

export default CartItem;
