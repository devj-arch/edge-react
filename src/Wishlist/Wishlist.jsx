import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Wishlist.css";

function Wishlist() {
  const navigate = useNavigate();
  return(
    <div className="box">
    <div className="wishlist-content">
      <h2>PLEASE LOG IN</h2>
      <p>Login to view items in your wishlist.</p>
      <img className="wishlistLogin-icon" src="https://cdn-icons-png.flaticon.com/512/868/868517.png" alt="Wishlist Login Icon"></img>
      <button className="wishlistLogin-button" onClick={() => navigate('/login')}>LOGIN</button>
    </div>
    </div>
  )
}

export default Wishlist;
