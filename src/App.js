import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import  Accueil from './composant/accueil/accueil';
import  Apropos from './composant/apropos/apropos';
import  Contact from './composant/contact/contact';
import   './composant/accueil/accueil.css';
import  './composant/apropos/apropos.css';
import  './composant/contact/contact.css';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Accueil</Link>
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
