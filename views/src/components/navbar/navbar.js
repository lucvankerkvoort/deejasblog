import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>FUN MASSALA</h1>
      </div>
      <div className="navbar-items">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/blog">
          <p>Blog</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
