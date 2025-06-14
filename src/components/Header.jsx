import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo"><h2>DSA Pathway</h2></div>
      <nav className="nav-links">
        <a href="#home"><h3>Home</h3></a>
        <a href="#learn"><h3>Learn</h3></a>
        <a href="#contact"><h3>Contact</h3></a>
      </nav>
    </header>
  );
};

export default Header;
