import React, { Component } from 'react';
import './App.css';
import './components/headNav/headnav.css';
import './components/headNav/HomeComp.css';
import './components/headNav/sliderz.css';
import './components/headNav/loginstyle.css';
import './components/headNav/contactstyle.css';
import './components/headNav/aboutstyle.css';
import './components/headNav/magazinestyle.css';
import Navbar from './components/headNav/Navbar';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import Home from './components/headNav/Home';
import About from './components/headNav/About';
import Contact from './components/headNav/Contact';
import Magazine from './components/headNav/Magazine';
import Login from './components/headNav/Login';
import Footer from './components/headNav/footer';


// constructor (props) {
//   super(props);
//   this.state = {isToggleOn: false;}
//
//   this.handleClick = this.handleClick.bind(this);
// }
//
// handleClick () {
//   this.setState(prevState => ({
//     isToggleOn: !prevState.isToggleOn
//   }));
// }
//
// let anyNameHere = this.state.isToggleOn ? 'is-active' : '',
// <div className={'nave-toggle'+anyNameHere}></div>

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <div>
        <div>
        <Router>
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/magazine" component={Magazine} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Footer />
        </Router>
        </div>
      </div>
    </React.Fragment>
    )
  }
}

export default App;
