// OrderConfirmation.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "./OrderConfirmation.css"

function OrderConfirmation() {
  return (
    <div className='order-confirm-box box'>
      <div className='order-confirm'>Order Placed Successfully! 🎉</div>
      <p>Thank you for your purchase.</p>
      <Link to="/" className='return'>Return to Home</Link>
    </div>
  );
}

export default OrderConfirmation;
