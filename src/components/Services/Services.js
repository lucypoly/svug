import React, { Component } from 'react';
import { SplitButton, MenuItem } from 'react-bootstrap';
import './Services.css';

class Services extends Component {
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <SplitButton title="Dropdown right" pullRight id="split-button-pull-right">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3">Something else here</MenuItem>
            <MenuItem divider/>
            <MenuItem eventKey="4">Separated link</MenuItem>
          </SplitButton>
        </div>
      </div>
    )
  }
}

export default Services;
