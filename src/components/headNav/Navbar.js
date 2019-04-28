import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-menu">
    <Link to="/" className='logo'></Link>
      <div className='container'>
        <ul className="main-links">
          <li><Link to="/" className='home-link'>Home</Link><hr className="nav-one" /></li>
          <li><Link to="/portfolio" className='port-link'>Portfolio</Link><hr className="nav-two" /></li>
          <li><Link to="/about" className="about-link">About</Link><hr className="nav-three" /></li>
          <li><Link to="/contact" className='contact-link'>Contact</Link><hr className="nav-four" /></li>
          <li><Link to="/login" className='login-link'>Login</Link><hr className="nav-five" /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
