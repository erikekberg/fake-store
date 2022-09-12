import React from "react";
import "../app.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>Logo</h1>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/cart"}>Shopping Cart</Link>
      </ul>
    </div>
  );
}

export default Header;
