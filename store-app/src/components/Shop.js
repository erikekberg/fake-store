import React from "react";
import ShopItem from "./ShopItem";

function Shop({ products, addToCart }) {
  return (
    <div className="shop">
      {products.map((product) => (
        <ShopItem product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Shop;
