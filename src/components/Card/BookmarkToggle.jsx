import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useAddToWishlistMutation, useGetUserProfileQuery, useRemoveFromWishlistMutation } from "../app/api";


const BookmarkToggle = ({ productId, initiallyWishlisted = false }) => {
  const [wishlisted, setWishlisted] = useState(initiallyWishlisted);
  const navigate = useNavigate();

  const { data: user, isLoading } = useGetUserProfileQuery();
  const [addToWishlist] = useAddToWishlistMutation();
  const [removeFromWishlist] = useRemoveFromWishlistMutation();

  useEffect(() => {
    setWishlisted(initiallyWishlisted);
  }, [initiallyWishlisted]);

  const handleClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user || user.error) {
      // Not logged in
      navigate("/wishlist");
      return;
    }

    try {
      if (wishlisted) {
        await removeFromWishlist( productId ).unwrap();
        setWishlisted(false);
      } else {
        await addToWishlist( productId ).unwrap();
        setWishlisted(true);
      }
    } catch (err) {
      console.error("Wishlist toggle error:", err);
      alert("Something went wrong. Try again!");
    }
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.6rem",
        color: wishlisted ? "black" : "black",
        transition: "color 0.2s ease",
      }}
      title={wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
    >
      {wishlisted ? <FaBookmark /> : <FaRegBookmark />}
    </button>
  );
};

export default BookmarkToggle;
