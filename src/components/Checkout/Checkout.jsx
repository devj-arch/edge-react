// Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetCartQuery, usePlaceOrderMutation } from '../app/api';
import CheckoutGrid from './CheckoutGrid';
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import ErrorScreen from "../ErrorScreen/ErrorScreen";
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetCartQuery();
  const [placeOrder, { isLoading: isPlacingOrder }] = usePlaceOrderMutation();
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    country: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expiration: '',
    cvv: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleCompletePurchase = async (e) => {
    e.preventDefault();
    // Basic validation
    if (
      !billingDetails.firstName ||
      !billingDetails.lastName ||
      !billingDetails.address ||
      !billingDetails.country ||
      !billingDetails.state ||
      !billingDetails.zipCode ||
      !billingDetails.cardName ||
      !billingDetails.cardNumber ||
      !billingDetails.expiration ||
      !billingDetails.cvv
    ) {
      alert('Please fill out all required fields.');
      return;
    }

    try {
      await placeOrder({ billingDetails }).unwrap();
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Place order error:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  if (isLoading) return <LoadingScreen />;
  if (isError) return <ErrorScreen />;

  const { cart, cartTotal } = data || { cart: [], cartTotal: 0 };

  return (
    <>
      <div className="title">
        <div className="logo">Logo</div>
        <div className="secure-checkout">Secure Checkout</div>
      </div>
      <div className="checkout-confirm">
        <div className="billing-details">
          <h2>Billing Details</h2>
          <form className="checkout-form" onSubmit={handleCompletePurchase}>
            <div className="basic-details">
              <div className="full-name">
                <div className="first-name">
                  <label className="firstName form-label">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={billingDetails.firstName}
                    onChange={handleInputChange}
                    className="input-box"
                    required
                  />
                </div>
                <div className="last-name">
                  <label className="lastName form-label">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={billingDetails.lastName}
                    onChange={handleInputChange}
                    className="input-box"
                    required
                  />
                </div>
              </div>
              <div className="address">
                <label className="mainAddress form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  value={billingDetails.address}
                  onChange={handleInputChange}
                  className="input-box"
                  required
                />
              </div>
              <div className="address2">
                <div className="country">
                  <label className="maincountry form-label">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={billingDetails.country}
                    onChange={handleInputChange}
                    className="input-box"
                    required
                  />
                </div>
                <div className="state">
                  <label className="mainState form-label">State</label>
                  <input
                    type="text"
                    name="state"
                    value={billingDetails.state}
                    onChange={handleInputChange}
                    className="input-box"
                    required
                  />
                </div>
                <div className="zip-code">
                  <label className="mainAddress form-label">Zip Code</label>
                  <input
                    type="number"
                    name="zipCode"
                    value={billingDetails.zipCode}
                    onChange={handleInputChange}
                    className="input-box"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="payment-details">
              <h2>Payment</h2>
              <div className="front-card-details">
                <div className="card-name">
                  <label className="cardName form-label">Name on Card</label>
                  <input
                    type="text"
                    name="cardName"
                    value={billingDetails.cardName}
                    onChange={handleInputChange}
                    className="input-box"
                    required
                  />
                </div>
                <div className="card-number">
                  <label className="cardNumber form-label">Credit/Debit Card Number</label>
                  <input
                    type="number"
                    name="cardNumber"
                    value={billingDetails.cardNumber}
                    onChange={handleInputChange}
                    className="input-box"
                    required
                  />
                </div>
              </div>
              <div className="back-card-details">
                <div className="expiration">
                  <label className="expiration-date form-label">Expiration</label>
                  <input
                    type="text"
                    name="expiration"
                    value={billingDetails.expiration}
                    onChange={handleInputChange}
                    className="input-box"
                    required
                  />
                </div>
                <div className="cvv">
                  <label className="cvv-code form-label">CVV</label>
                  <input
                    type="number"
                    name="cvv"
                    value={billingDetails.cvv}
                    onChange={handleInputChange}
                    className="input-box"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="complete-purchase"
                disabled={isPlacingOrder || cart.length === 0}
              >
                {isPlacingOrder ? 'Processing...' : 'Complete Purchase'}
              </button>
            </div>
          </form>
        </div>
        <div className="cart">
          <h2>Your Cart</h2>
          <div className='cart-box'>
          <CheckoutGrid cart={cart} />
          <h3 className='total'>Total: ₹{cartTotal.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
