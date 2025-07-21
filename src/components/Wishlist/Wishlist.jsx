import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetWishlistQuery, useGetUserProfileQuery } from "../app/api";
import WishlistGrid from "./WishlistGrid";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

import "./Wishlist.css";

function Wishlist() {
  const navigate = useNavigate();

  // Check if user is logged in
  const { data: user, isLoading: userLoading, error: userError } = useGetUserProfileQuery();
  const isLoggedIn = !!user && !userError;

  // Fetch wishlist only if user is logged in
  const {
    data: wishlistData,
    isLoading: wishlistLoading,
    error: wishlistError,
  } = useGetWishlistQuery(undefined, {
    skip: !isLoggedIn,
  });

  // Show loading while checking auth status
  if (userLoading) return <LoadingScreen />

  // Show login prompt if user is not logged in
  if (!isLoggedIn) {
    return (
      <div className="box">
        <div className="wishlist-content">
          <h2>PLEASE LOG IN</h2>
          <p>Login to view items in your wishlist.</p>
          <img
            className="wishlistLogin-icon"
            src="https://cdn-icons-png.flaticon.com/512/868/868517.png"
            alt="Wishlist Login Icon"
          />
          <button
            className="wishlistLogin-button"
            onClick={() => navigate("/login")}
          >
            LOGIN
          </button>
        </div>
      </div>
    );
  }

  // Show loading or error if needed
  if (wishlistLoading) return <LoadingScreen />
  if (wishlistError) return <p>Error loading wishlist. Please try again.</p>;

  const wishlist = wishlistData?.wishlist || [];

  return (
    <div className="wishlist-page">
      <h2>Your Wishlist</h2>
      <WishlistGrid wishlist={wishlist} />
    </div>
  );
}

export default Wishlist;
