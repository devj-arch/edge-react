import React from 'react';
import WishlistCard from './WishlistCard';
import "./WishlistGrid.css";

function WishlistGrid({wishlist}) {
  return (
    <div className='wishlist-grid'>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        wishlist.map((item, index) => (
          <WishlistCard key = {item.productId._id ||index} item = {item} />
        ))
      )}
    </div>
  );
}

export default WishlistGrid;
