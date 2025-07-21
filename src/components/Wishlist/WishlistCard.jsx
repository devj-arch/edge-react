import React from 'react';
import "./WishlistCard.css"
import { useRemoveFromWishlistMutation } from '../app/api';

function WishlistCard({ item }) {
  const {productId} = item;
  const [removeFromWishlist, {isLoading}] = useRemoveFromWishlistMutation();

  const handleRemove = async () => {
    try {
      await removeFromWishlist(item.productId._id || item.productId).unwrap();
      // Optionally: trigger a refetch or update UI optimistically
      window.location.reload();
    } catch (err) {
      console.error("Failed to remove from wishlist:", err);
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
        <button className='add-to-cart'>ADD TO CART</button>
        <button className='remove' onClick={handleRemove} disabled={isLoading}>{isLoading ? 'REMOVING...' : 'REMOVE'}</button>
      </div>
    </div>
  )
}

export default WishlistCard;
