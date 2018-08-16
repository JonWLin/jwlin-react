/* eslint-disable */
import React from 'react';
import './styles/app.css';

import Navbar from './Navbar';
import Profile from './Profile';
import Blog from './Blog';
import Projects from './Projects';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="App">
            <div className="container">
              <Navbar />
              <Switch>
                <Route exact path="/" component={Profile} />
                <Route path="/projects" component={Projects} />
                <Route path="blog" component={Blog} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}
