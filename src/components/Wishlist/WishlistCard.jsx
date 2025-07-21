import React from 'react';
import "./WishlistCard.css"
import { useAddToCartMutation, useRemoveFromWishlistMutation } from '../app/api';

function WishlistCard({ item, refetchWishlist }) {
  const {productId} = item;
  const [removeFromWishlist, {isLoading}] = useRemoveFromWishlistMutation();
  const [addToCart, {isLoading: isLoadingCart}] = useAddToCartMutation();

  const handleRemove = async () => {
    try {
      await removeFromWishlist(item.productId._id || item.productId).unwrap();
      // Optionally: trigger a refetch or update UI optimistically
      refetchWishlist()
    } catch (err) {
      console.error("Failed to remove from wishlist:", err);
    }
  };

  const handleAddToCart = async () => {
    try {
      await addToCart({ productId: item.productId._id || item.productId, quantity: 1 }).unwrap();
      // Optionally show a toast or success indicator
      alert("Product added to cart succesfully!");
    } catch (err) {
      console.error("Add to cart error:", err);
      alert("There was an error adding to cart. Pls try again!");
    }
  };

  return (
    <div className="wishlist-item">
      <div className='wishlist-image'>
        <img src={productId.image1} alt='poductImage'></img>
      </div>
      <div className='wishlist-details'>
        <h3>{productId.name}</h3>
        <p>₹{productId.price.toFixed(2)}</p>
      </div>
      <div className='wishlist-add-remove'>
        <button className='add-to-cart' onClick={handleAddToCart} disabled={isLoadingCart}>{isLoadingCart ? 'ADDING...' : 'ADD TO CART'}</button>
        <button className='remove' onClick={handleRemove} disabled={isLoading}>{isLoading ? 'REMOVING...' : 'REMOVE'}</button>
      </div>
    </div>
  )
}

export default WishlistCard;
