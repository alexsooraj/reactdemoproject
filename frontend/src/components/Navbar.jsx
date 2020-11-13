// rsf
import React from "react";
import { NavLink, Link } from "react-router-dom";

import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <div className="container px-2">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              DashBoard <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cars">
              Cars
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
