import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";
import { supabase } from "../supabaseClient";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    "confirm-password": "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (formData.password !== formData['confirm-password']) {
    alert("Passwords don't match!");
    return;
  }

  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      emailRedirectTo: 'http://localhost:5173/login'
      // emailRedirectTo: 'https://your-vercel-domain.vercel.app/login'
    }
  });

  if (error) {
    alert(error.message);
  } else {
    alert('Signup successful! Check your email to confirm.');
    window.location.href = '/login';
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
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={formData["confirm-password"]}
              onChange={handleChange}
              required
            />
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
