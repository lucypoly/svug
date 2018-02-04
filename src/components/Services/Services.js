import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';
import Service from './../Service/Service';
import data from './data';

import './Services.css';

class Services extends Component {
  selectItem = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <ButtonToolbar>
            <DropdownButton title="Выбирите услугу" id="dropdown-size-medium" onSelect={this.selectItem}>
              <MenuItem header>Наружная реклама</MenuItem>
              {data.map(item =>
                item.out && <MenuItem
                  eventKey={item.id}
                  componentClass={Link}
                  href={`/services/${item.id}`}
                  to={`/services/${item.id}`}
                >{item.title}
                </MenuItem>
              )}
              <MenuItem divider/>
              <MenuItem header>Интерьерная реклама</MenuItem>
              {data.map(item =>
                !item.out && <MenuItem
                  eventKey={item.id}
                  componentClass={Link}
                  href={`/services/${item.id}`}
                  to={`/services/${item.id}`}
                >{item.title}
                </MenuItem>
              )}
            </DropdownButton>
          </ButtonToolbar>
        </div>
        <Route path="/services/:id" component={Service}/>
      </div>
    )
  }
}

export default withRouter(Services);
