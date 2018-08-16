/* eslint-disable */
import React, { Component } from 'react';
import Menu from 'semantic-ui-react/dist/es/collections/Menu';
import Icon from 'semantic-ui-react/dist/es/elements/Icon';
import './styles/navbar.css';

import Profile from './Profile';
import Blog from './Blog';
import Projects from './Projects';


// import route Components here
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { activeItem: null };
  }

  handleItemClick(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary icon vertical id="navbar">
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            <Icon name="home" size="large" />
          </Menu.Item>
        </ Link>

        <Link to="/projects">
          <Menu.Item
            name="Projects"
            active={activeItem === 'project'}
            onClick={this.handleItemClick}
          >
          </Menu.Item>
        </ Link>

        <Link to="/blog">
          <Menu.Item
            name="Blog"
            active={activeItem === 'blog'}
            onClick={this.handleItemClick}
          >
          </Menu.Item>
        </Link>

        <a target="_blank" href="https://www.kaggle.com/jwlin17">
          <Menu.Item
            name="Kaggle"
            active={activeItem === 'kaggle'}
            onClick={this.handleItemClick}
          ></Menu.Item>
        </a>

        <a target="_blank" href="https://github.com/jwlin17">
          <Menu.Item
            name="Github"
            active={activeItem === 'github'}
            onClick={this.handleItemClick}
          >
          </Menu.Item>
        </a>

        <a target="_blank" href="https://linkedin.com/in/xjonathan">
          <Menu.Item
            name="LinkedIn"
            active={activeItem === 'linkedin'}
            onClick={this.handleItemClick}
          >
          </Menu.Item>
        </a>
      </Menu>
    );
  }
}
