import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  Accueil from './Component/accueil/accueil';
import  Apropos from './Component/apropos/apropos';
import  Contact from './Component/contact/contact';
import   './Component/accueil/accueil.css';
import  './Component/apropos/apropos.css';
import  './Component/contact/contact.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <a><Link to="/">Accueil</Link></a>
                    </li>
                    <li>
                      <Link to="/about">Apropos</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <Route path="/" exact component={Accueil} />
                <Route path="/about" component={Apropos} />
                <Route path="/contact" component={Contact} />
                <footer>Footer</footer>
              </div>
        </Router>       
    );
  }
}

export default App;
