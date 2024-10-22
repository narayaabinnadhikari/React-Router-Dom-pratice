
import logo from '../assets/Cocacola_logo.png'
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()


  return (
    <div className="navbar">
      <img src={logo} width={130} alt="Logo" />
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/products">
          <li>Our Products</li>
        </NavLink>
        <NavLink to="contact">
          <li>Contact Us</li>
        </NavLink>
        <NavLink to="about">
          <li> About Us</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate('/contact', {replace:true})}>Get Started</button>
    </div>
  );
};

export default Navbar