

import React from 'react'
import logo from '../assets/Cocacola_logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} width={130} alt='Logo' />
    <ul>
        <li>Home</li>
        <li>Our Products</li>
        <li>Contact Us</li>
        <li> About Us</li>
    </ul>
    <button>Get Started</button>
    </div>
  )
}

export default Navbar