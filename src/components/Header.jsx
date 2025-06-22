import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="main-header">
      <div className="logo">
        <h2>DSA Pathway</h2>
      </div>

      <div
        className="hamburger"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-links ${isMenuOpen ? "mobile-active" : ""}`}>
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/learn">
          <h3>Learn</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
