import React from "react";
import {NavLink } from "react-router-dom";

// Navbar It is
const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
      <NavLink className="navbar-brand" to="">Curd Application</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
          {/* List of links starts here */}
            <li className="nav-item">
              <NavLink className="nav-link"  to="/student">
                Student
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/class">
                Class
              </NavLink>
            </li>
          </ul> 
        </div>
      </div>
    </nav>
  );
};

export default Menu;