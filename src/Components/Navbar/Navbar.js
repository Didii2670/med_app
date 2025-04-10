import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem('auth-token');
  const userName = sessionStorage.getItem('name');

  const handleClick = () => {
    // Add your click handler logic here
  };

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          StayHealthy 
          <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 1000 1000" style={{fill: "#3685fb"}}>
            {/* ... SVG paths remain the same ... */}
          </svg>
        </Link>
        <span>.</span>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className="fa fa-times fa fa-bars"></i>
      </div>

      <ul className="nav__links active">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/appointments">Appointments</Link>
        </li>
        {!authToken ? (
          <>
            <li className="link">
              <Link to="/Sign_Up">
                <button className="btn1">Sign Up</button>
              </Link>
            </li>
            <li className="link">
              <Link to="/login">
                <button className="btn1">Login</button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="link">
              <span style={{ color: '#2190FF' }}>Welcome, {userName}</span>
            </li>
            <li className="link">
              <button className="btn1" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;