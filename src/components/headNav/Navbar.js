import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-menu">
    <Link to="/" className='logo'></Link>
      <div className='container'>
        <ul className="main-links">
          <li><Link to="/" className='home-link'>Home</Link></li>
          <li><Link to="/magazine" className='port-link'>Magazine</Link></li>
          <li><Link to="/about" className="about-link">About</Link></li>
          <li><Link to="/contact" className='contact-link'>Contact</Link></li>
          <li><Link to="/login" className='login-link'>Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
