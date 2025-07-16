import React from "react";
import "./Checkout.css";

function Checkout() {
  return(
    <>
    <div className="title">
      <div className="logo">Logo</div>
      <div className="secure-checkout">Secure Checkout</div>
    </div>
    <div className="checkout-confirm">
      <div className="billing-details">
        <h2>Billing Details</h2>
        <form className="checkout-form">
          <div className="basic-details">
            <div className="full-name">
              <div className="first-name">
                <label className="firstName form-label">First Name</label>
                <input type="text" id="first-name input-box" className="input-box" required />
              </div>
              <div className="last-name">
                <label className="lastName form-label">Last Name</label>
                <input type="text" id="last-name input-box" className="input-box" required />
              </div>
            </div>

            <div className="address">
              <label className="mainAddress form-label">Address</label>
              <input type="text" id="address input-box" className="input-box" required />
            </div>
            <div className="address2">
              <div className="country">
                <label className="maincountry form-label">Country</label>
                <input type="text" id="country input-box" className="input-box" required />
              </div>
              <div className="state">
                <label className="mainState form-label">State</label>
                <input type="text" id="state input-box" className="input-box" required />
              </div>
              <div className="zip-code">
                <label className="mainAddress form-label">Zip Code</label>
                <input type="number" id="zip-code input-box" className="input-box" required />
              </div>
            </div>
          </div>
          <div className="payment-details">
            <h2>Payment</h2>
            <div className="front-card-details">
              <div className="card-name">
                <label className="cardName form-label">Name on Card</label>
                <input type="text" id="card-name input-box" className="input-box" required />
              </div>
              <div className="card-number">
                <label className="cardNumber form-label">Credit/Debit Card Number</label>
                <input type="number" id="card-number input-box" className="input-box" required />
              </div>
            </div>
            <div className="back-card-details">
              <div className="expiration">
                <label className="expiration-date form-label">Expiration</label>
                <input type="text" id="card-name input-box" className="input-box" required />
              </div>
              <div className="cvv">
                <label className="cvv-code form-label">CVV</label>
                <input type="number" id="cvv-number input-box" className="input-box" required />
              </div>
            </div>
            <button className="complete-purchase">Complete Purchase</button>

          </div>
        </form>
      </div>

      <div className="cart">
        <h2>Your Cart</h2>

      </div>
    </div>
    </>
  )
}

export default Checkout;
