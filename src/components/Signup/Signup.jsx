import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

function Signup() {
  return(
  <div className="signup-box box">
      <div className="left-signup">
      <div className="logo">Logo</div>
      <div className="signup-description">Sign Up For Edge</div>
      </div>
      <div className="signup-info">
        <div className="full-name">
          <input type="text" id="full-name input-box" placeholder="Full Name" className="input-box" required />
        </div>
        <div className="email">
          <input type="text" id="email input-box" placeholder="Email" className="input-box" required />
        </div>
        <div className="password">
          <input type="password" id="password input-box" placeholder="Password" className="input-box" required />
        </div>
        <button type="button" className="signup-button">Sign Up</button>
        <div className="login-link">
        <p>Already have an account?</p>
        <Link to={`/login`}>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Signup;
