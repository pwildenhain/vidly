import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span class="navbar-brand">Vidly</span>
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/movies">
          Movies <span className="sr-only">(current)</span>
        </NavLink>
        <NavLink className="nav-item nav-link" to="/customers">
          Customers
        </NavLink>
        <NavLink className="nav-item nav-link" to="/rentals">
          Rentals
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
