import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Navbar.css';
import data from './data';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    const {location} = this.props;
    return (
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link href="/" to="/"><img className="logo" alt="logo" src={logo}/></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem componentClass={Link} href="/" to="/" active={location.pathname === '/'}>Главная</NavItem>
            <NavDropdown title="Услуги" id="dropdown-size-medium" onSelect={this.selectItem}>
              {data.map(item =>
                <MenuItem
                  key={item.id}
                  eventKey={item.title}
                  componentClass={Link}
                  href={`/services/${item.id}`}
                  to={`/services/${item.id}`}
                >{item.title}
                </MenuItem>
              )}
            </NavDropdown>
            <NavItem componentClass={Link} href="/portfolio" to="/portfolio"
                     active={location.pathname === '/portfolio'}>Портфолио</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem componentClass={Link} href="/order" to="/order" active={location.pathname === '/order'}>Заказ
              онлйан</NavItem>
            <NavItem componentClass={Link} href="/contacts" to="/contacts" active={location.pathname === '/contacts'}>Контакты</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default withRouter(NavBar);
