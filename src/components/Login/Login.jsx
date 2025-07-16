import React from "react";
import "./Login.css"

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
        <button type="button" className="Login-button">Login</button>
        <div className="signup-link">
        <p>Don't have an account?</p>
        <a href="#signup">Sign up</a>
        </div>
      </div>
    </div>
  )
}

export default Login;
