

import React from 'react'
import logo from '../assets/Cocacola_logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} width={130} alt="Logo" />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Our Products</li>
        </Link>
        <Link to="contact">
          <li>Contact Us</li>
        </Link>
        <Link to="about">
          <li> About Us</li>
        </Link>
      </ul>
      <button>Get Started</button>
    </div>
  );
};

export default Navbar