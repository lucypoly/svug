import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <Navbar>
        <div className="copy">SVU © 2018</div>
      </Navbar>
    );
  }
}

export default Footer;
