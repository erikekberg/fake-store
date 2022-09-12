import React from "react";
import CartItem from "./CartItem";

function ShoppingCart({ cart }) {
  return (
    <div className="shopping-cart">
      <h1>Your Cart</h1>

      <div className="cart-list">
        {cart.map((item) => (
          <CartItem item={item} />
        ))}
      </div>

      <h1>
        total: ${cart.reduce((prev, current) => (prev += current.price), 0)}
      </h1>
    </div>
  );
}

export default ShoppingCart;
