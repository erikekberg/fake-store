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
        <li>Shopping Cart</li>
      </ul>
    </div>
  );
}

export default Header;
