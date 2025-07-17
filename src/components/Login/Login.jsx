import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";

function Login() {
  return(
    <div className="login-box box">
      <div className="left-login">
      <div className="logo">Logo</div>
      <div className="login-description">Login To Edge</div>
      </div>
      <div className="login-info">
        <div className="email">
          <input type="text" id="email input-box" placeholder="Email" className="input-box" required />
        </div>
        <div className="password">
          <input type="password" id="password input-box" placeholder="Password" className="input-box" required />
        </div>
        <button type="button" className="login-button">Login</button>
        <div className="signup-link">
        <p>Don't have an account?</p>
        <Link to={`/signup`}>Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;
