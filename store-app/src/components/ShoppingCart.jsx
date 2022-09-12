import React from "react";
import { useState } from "react";
import CartItem from "./CartItem";

function ShoppingCart({ cart }) {
  const [key, setKey] = useState(1);

  return (
    <div className="shopping-cart">
      <h1>Your Cart</h1>

      <div className="cart-list">
        {cart.map((item) => (
          <CartItem key={key} item={item} />
        ))}
      </div>

      <h1>
        total: ${cart.reduce((prev, current) => (prev += current.price), 0)}
      </h1>
      <button>Checkout</button>
    </div>
  );
}

export default ShoppingCart;
