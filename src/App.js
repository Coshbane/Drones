import React, { Component } from 'react';
import './App.css';
import './components/headNav/headnav.css';
import './components/headNav/HomeComp.css';
import Navbar from './components/headNav/Navbar';
import { BrowserRouter as Router, Route, NavLink, Link, Redirect } from 'react-router-dom';
import Home from './components/headNav/Home';
import About from './components/headNav/About';
import Contact from './components/headNav/Contact';
import Portfolio from './components/headNav/Portfolio';
import Login from './components/headNav/Login';



class App extends Component {
  render() {
    return (
      <div>
        <div>
        <Router>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
        </Router>
        </div>
      </div>
    )
  }
}

export default App;
