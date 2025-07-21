import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useSignupMutation } from "../app/api";

function Signup() {
  const navigate = useNavigate();
  const [signup, { isLoading }] = useSignupMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignup = async () => {
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await signup({ name, email, password }).unwrap();
      alert("Signup successful!");
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      alert(err?.data?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="signup-box box">
      <div className="left-signup">
        <div className="logo">Logo</div>
        <div className="signup-description">Sign Up For Edge</div>
      </div>
      <div className="signup-info">
        <div className="full-name">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="input-box"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="email">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input-box"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="input-box"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="button"
          className="signup-button"
          onClick={handleSignup}
          disabled={isLoading}
        >
          {isLoading ? "Signing up..." : "Sign Up"}
        </button>
        <div className="login-link">
          <p>Already have an account?</p>
          <Link to={`/login`}>Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
