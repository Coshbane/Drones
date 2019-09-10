import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-menu">
    <Link to="/" className='logo'></Link>
      <div className='container'>
        <ul className="main-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/magazine">Magazine</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
