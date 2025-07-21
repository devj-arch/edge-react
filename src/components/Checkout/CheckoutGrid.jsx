// CheckoutGrid.jsx
import React from 'react';
import CheckoutCard from './CheckoutCard';
import "./CheckoutGrid.css";

function CheckoutGrid({ cart }) {
  return (
    <div className="checkout-grid" >
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
