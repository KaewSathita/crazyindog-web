import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useLoading } from '../context/LoadingContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Navbar() {
  const { user, logout } = useAuth();
  const { startLoading, stopLoading } = useLoading();
  const navigate = useNavigate();

  const handleLogout = async e => {
    try {
      startLoading();
      await logout();

      navigate("/");
      toast.success('success logout');
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  }

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <NavLink className="nav-link" to="/">
          <img className="crazyindog-logo2" src="https://res.cloudinary.com/crazyindog/image/upload/v1664351088/crazyindog/1663515867348_fgwvrn.png" alt="Crazy in Dog"/>
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
            { user ? (
              <li className="nav-item">
                <NavLink className="nav-link" to="/writeReview">เขียนรีวิว</NavLink>
              </li>
            ) : '' }
          </ul>
          { !user ? (
          <ul className="navbar-nav mb-2 mb-lg-0 float-end">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                <button className="btn btn-light">Login</button>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                <button className="btn btn-light">Register</button>
              </NavLink>
            </li>
          </ul>
           ) : (
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                { user.penName } 
              </button>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/editProfile">Edit Profile</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" onClick={handleLogout}>Log out</a></li>
              </ul>
            </div>
              )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;