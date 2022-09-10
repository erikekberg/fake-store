import React from "react";
import ShopItem from "./ShopItem";

function Shop({ products }) {
  return (
    <div className="shop">
      {products.map((product) => (
        <ShopItem
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
}

export default Shop;
