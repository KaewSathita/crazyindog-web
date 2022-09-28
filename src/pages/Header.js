import React from 'react'

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success">
    <div className="container-fluid">
      <a className="navbar-brand" to="/">
        Image
      </a>

      <div className="collapse navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          {localStorage.getItem('token') ? ( 
          <>
            <li className="nav-item">
              <a className="nav-link" to="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/" >
                Logout
              </a>
            </li>

          </>
          ) : (
          <>
            <li className="nav-item">
              <a className="nav-link" to="/login">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="/register">
                Register
              </a>
            </li>
            </>
          )}
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Header