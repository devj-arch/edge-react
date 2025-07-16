import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="nav">
        <div>
          <li><Link to="/">Logo</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products/M">Men</Link></li>
          <li><Link to="/products/W">Women</Link></li>
          <li><Link to="/products/K">Kids</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/saved">Saved</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/checkout">Cart</Link></li>
        </div>
        <div className="search">
          <input type="search" placeholder="Search for products..." />
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
