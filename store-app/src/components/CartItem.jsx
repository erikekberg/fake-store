import React from "react";

function CartItem({ item }) {
  return (
    <div className="cart-item">
      <div>
        <img src={item.image} alt="image of item" />
        <div>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <p>
            <em>${item.price}</em>
          </p>
        </div>
      </div>
      <h1>+ 1 -</h1>
    </div>
  );
}

export default CartItem;
