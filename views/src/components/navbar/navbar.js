import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>FUN MASSALA</h1>
      </div>
      <div className="navbar-items">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p className="navbar-home">Home</p>
        </Link>
        <Link to="/lifestyle" style={{ textDecoration: "none" }}>
          <p className="navbar-lifestyle">Lifestyle</p>
        </Link>
        <Link to="/fashion" style={{ textDecoration: "none" }}>
          <p className="navbar-fashion">Fashion</p>
        </Link>
        <Link to="/fandd" style={{ textDecoration: "none" }}>
          <p className="navbar-fandd">Food & Drinks</p>
        </Link>
        <Link to="/travel" style={{ textDecoration: "none" }}>
          <p className="navbar-travel">Travel</p>
        </Link>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <p className="navbar-about">About</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
