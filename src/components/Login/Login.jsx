import React, { useState } from "react";
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../app/api";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

const handleLogin = async () => {
    try {
      const data = await login({ email, password }).unwrap();
      console.log('data: ', data);
      // localStorage.setItem("username", data.name);
      // localStorage.setItem("userid", data.userId);
      alert("Login successful!");
      navigate("/"); // change as needed
    } catch (err) {
      alert(err?.data?.msg || "Invalid email or password");
    }
  };

  return(
    <div className="login-box box">
      <div className="left-login">
      <div className="logo">Logo</div>
      <div className="login-description">Login To Edge</div>
      </div>
      <div className="login-info">
        <div className="email">
          <input
          type="text" id="email input-box" placeholder="Email" className="input-box" required
          value={email}
          onChange = {(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password">
          <input type="password" id="password input-box" placeholder="Password" className="input-box" required
          value={password}
          onChange = {(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className="login-button" onClick={handleLogin}>Login</button>
        <div className="signup-link">
        <p>Don't have an account?</p>
        <Link to={`/signup`}>Sign up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;
