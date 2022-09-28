
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <NavLink className="nav-link" to="/">
          <img className="crazyindog-logo2" src="https://res.cloudinary.com/fakebuck12/image/upload/v1664351088/crazyindog/1663515867348_fgwvrn.png" alt="Crazy in Dog"/>
        </NavLink>
        <a className="navbar-brand" href="#"></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/review">รีวิวโรงแรมสัตว์เลี้ยงพักได้</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/review">รีวิวที่เที่ยวสัตว์เลี้ยงเข้าได้</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/writeReview">เขียนรีวิว</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0 float-end">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                <button className="btn btn-light">Login</button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                <button className="btn btn-dark">Register</button>
              </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;