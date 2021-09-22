import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <h1>Math Magicians</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className="nav-item">
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
