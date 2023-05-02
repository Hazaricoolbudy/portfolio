import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Protfolio</h1>
      </Link>
    </div>
  );
};

export default Navbar;
