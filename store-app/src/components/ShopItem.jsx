import React from "react";

function ShopItem({ name, image, price, description }) {
  return (
    <div className="shop-item">
      <h3>{name}</h3>
      <img src={image} alt="picture of item" />
      <h4>${price}</h4>
      <p>{description}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default ShopItem;
