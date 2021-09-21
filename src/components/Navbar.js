import React, { Component } from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <h1>Math Magicians</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a href="#calculator">Calculator</a>
          </li>
          <li className="nav-item">
            <a href="#quote">Quote</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
