// CheckoutGrid.jsx
import React from 'react';
import CheckoutCard from './CheckoutCard';

function CheckoutGrid({ cart }) {
  return (
    <div className="checkout-grid" style={{ margin: '20px 0' }}>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <CheckoutCard key={item.productId._id || index} item={item} />
        ))
      )}
    </div>
  );
}

export default CheckoutGrid;
