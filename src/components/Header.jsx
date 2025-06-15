import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo"><h2>DSA Pathway</h2></div>
      <nav className="nav-links">
        <Link to="/"><h3>Home</h3></Link>
        <Link to="/learn"><h3>Learn</h3></Link>
        <Link to="/contact"><h3>Contact</h3></Link>
      </nav>
    </header>
  );
};

export default Header;
