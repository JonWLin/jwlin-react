import React from 'react';
import './styles/app.css';

import Navbar from './Navbar';
import Profile from './Profile';
import Blog from './Blog';
import Projects from './Projects';
import NavbarB from './NavbarB';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="App">
            <div className="container">
              <NavbarB />
              <Route exact path="/" component={Profile} />
              <Route path="/projects" component={Projects} />
              <Route path="/blog" component={Blog} />
            </div>
          </div>
        </Router>
    );
  }
}
