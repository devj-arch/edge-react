import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGetUserProfileQuery, useLogoutMutation } from "../app/api";
import CONFIG from "../../config";

function Navbar() {
  const navigate = useNavigate();
  const [logout] = useLogoutMutation();
  const {
    data: user,
    isLoading,
    isError,
  } = useGetUserProfileQuery();

  const handleLogout = async () => {
  try {
    const response = await logout().unwrap();
    console.log("Logout response:", response); // Should log { msg: "Logged out successfully" }
    navigate("/login");
  } catch (error) {
    console.error("Logout error:", error); // Log any errors
  }
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
          <li><Link to="/wishlist">Wishlist</Link></li>
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
              <li>Hello, {user?.name}</li>
              <li><Link to="/checkout">Cart</Link></li>
              <li>
                <Link
                  // to="/login" // Optional: Set the link destination
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
            </>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
