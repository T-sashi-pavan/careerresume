import React from 'react';
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <nav className="navbar navbar-light" style={{ background: 'lavender' }}>
      <div className="container-fluid">
        <ul className="navbar-nav d-flex flex-row justify-content-center w-100"> {/* Horizontal layout, centered */}
          {/* Horizontal Navigation Links with gap between each item */}
          <li className="nav-item mx-3">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/dashboard">Services
            </Link>
          </li>
         
          <li className="nav-item mx-3">
            <Link className="nav-link" to="/form">Form</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidenav;
