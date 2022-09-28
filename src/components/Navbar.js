
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

  return (
    <div className="navbar">
      <NavLink end to="/" >Home</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/profile">profile</NavLink>
      {/* <NavLink to="/login">Login</NavLink> */}

    </div>
  );
}

export default Navbar;