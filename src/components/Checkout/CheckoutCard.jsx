// CheckoutCard.jsx
import React from 'react';
import "./CheckoutCard.css";

function CheckoutCard({ item }) {
  const { productId, quantity } = item;
  const subtotal = productId.price * quantity;

  // Shorten description to 100 characters
  const shortenDescription = (description, maxLength = 100) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + '...';
  };

  return (
    <div className="cart-item">
      <div className='basic-details-right'>
        <h3>{productId.name}</h3>
        <p>{shortenDescription(productId.description)}</p>
      </div>
      <div className='price-quantity-subTotal'>
        <p>Price: ₹{productId.price.toFixed(2)}</p>
        <p>Quantity: {quantity}</p>
        <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default CheckoutCard;
