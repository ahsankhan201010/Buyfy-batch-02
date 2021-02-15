import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className="navItemContainer">
        <div className="navItem">
          <Link to="/categories">
            <h3>Categories</h3>
          </Link>
        </div>

        <div className="navItem">
          <Link to="/authentication">
            <h3>Auth</h3>
          </Link>
        </div>
        <div className="navItem">
          <Link to="/test">
            <h3>Test</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
