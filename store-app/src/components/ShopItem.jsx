import React from "react";

function ShopItem({ product, addToCart }) {
  return (
    <div className="shop-item">
      <h3>{product.name}</h3>
      <img src={product.image} alt="picture of item" />
      <h4>${product.price}</h4>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

export default ShopItem;
