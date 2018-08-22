import React, { Component } from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';

import Profile from './Profile';
import Blog from './Blog';
import Projects from './Projects';

import {
  Link,
} from 'react-router-dom';

export default class NavDropdownExample extends Component {
  handleSelect(eventKey, event) {
    event.preventDefault();
    alert(`selected ${eventKey}`);
  }

  render() {
    return (
      <Nav bsStyle="tabs" activeKey="1" onSelect={k => this.handleSelect(k)}>
        <NavItem eventKey="1" href="/~jwlin">
          <Link to='/'>Profile</Link>
        </NavItem>
        <NavItem name="Projects" eventKey="2" title="Item" href="/projects">
          <Link to ='/projects'>Projects</Link>
        </NavItem>
        <NavItem eventKey="3" href="/blog">
          <Link to='/blog'>Blog</Link>
        </NavItem>
        <NavDropdown eventKey="4" title="Dropdown" id="nav-dropdown">
          <MenuItem eventKey="4.1" href="https://github.com/jwlin17">Github</MenuItem>
          <MenuItem eventKey="4.2" href="https://linkedin.com/in/xjonathan">LinkedIn</MenuItem>
          <MenuItem eventKey="4.3" href="https://kaggle.com/jwlin17">Kaggle</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4.4">Separated link</MenuItem>
        </NavDropdown>
      </Nav>
    );
  }
}
