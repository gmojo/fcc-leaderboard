import React, { Component } from 'react';
import '../App.css';
import Navbar from 'react-bootstrap/lib/Navbar';

class NavComponent extends Component {

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="https://garethmoger.com/">GarethMoger.com</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default NavComponent;
