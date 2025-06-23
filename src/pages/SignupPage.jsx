import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./SignupPage.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    "confirm-password": "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData["confirm-password"]) {
      alert("Passwords don't match!");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        emailRedirectTo: "https://dsapathway.vercel.app/login", // ✅ Update this
      },
    });

    if (error) {
      if (error.message.toLowerCase().includes("user already registered")) {
        alert("This email is already registered. Please login instead.");
      } else {
        alert(error.message);
      }
    } else {
      alert("Signup successful! Check your email to confirm.");
      window.location.href = "/login";
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="eye-icon"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                name="confirm-password"
                value={formData["confirm-password"]}
                onChange={handleChange}
                required
              />
              <span
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="eye-icon"
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="btn-primary">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
