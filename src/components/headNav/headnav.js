import React, { Component } from 'react';
import Navbar from './components/headNav/Navbar';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect } from 'react-router-dom';



class HeadNav extends Component {
  render() {
    return (
      <div>
        <Navbar />
        </div>
    );
  }
}

export default HeadNav;
