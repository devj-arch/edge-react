import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetUserProfileQuery } from "../app/api";

function Navbar() {
  const navigate = useNavigate();
  const { data: user, isLoading, isError } = useGetUserProfileQuery();

  const handleLogout = async () => {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    // Refresh to update state (or use invalidation logic)
    window.location.reload();
  };

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
        </div>

        <div className="search">
          <input type="search" placeholder="Search for products..." />
        </div>

        <div className="right-side">
          {isLoading ? (
            <li>Loading...</li>
          ) : isError ? (
            <li><Link to="/login">Login</Link></li>
          ) : (
            <>
              <li><Link to="/checkout">Cart</Link></li>
              <li>Hello, {user.name}</li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
