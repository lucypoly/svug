import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <Navbar>
        <Nav className="inline-block">
          <NavItem className="inline-block">
            SVU © 2018
          </NavItem>
        </Nav>
        <Nav pullRight className="inline-block my-nav">
          <NavItem rel="nofollow" target="_blank"
                   className="inline-block"
                   href="http://www.facebook.com/sharer.php?u=http://svug.com.ua/&amp;t=&amp;src=sp"
                   title="Поделиться в Facebook">
            <i className="fa fa-facebook fa-2x fa-inverse" aria-hidden="true"></i>
          </NavItem>
          <NavItem rel="nofollow" target="_blank"
                   className="inline-block"
                   href="http://vkontakte.ru/share.php?url=http://svug.com.ua/"
                   title="Поделиться во Вконтакте">
            <i className="fa fa-vk fa-2x fa-inverse" aria-hidden="true"></i>
          </NavItem>
          <NavItem rel="nofollow" target="_blank"
                   className="inline-block"
                   href="http://www.odnoklassniki.ru/dk?st.cmd=addShare&amp;st.s=1&amp;st._surl=http://svug.com.ua/&amp;st.comments="
                   title="Поделиться в Одноклассниках">
            <i className="fa fa-odnoklassniki fa-2x fa-inverse" aria-hidden="true"></i>
          </NavItem>
          <NavItem rel="nofollow" target="_blank"
                   className="inline-block"
                   href="https://plus.google.com/share?url=http://svug.com.ua/"
                   title="Поделиться в Google+">
            <i className="fa fa-google-plus fa-2x fa-inverse" aria-hidden="true"></i>
          </NavItem>
          <NavItem rel="nofollow" target="_blank"
                   className="inline-block"
                   href="http://twitter.com/share?url=http://svug.com.ua/&text="
                   title="Поделиться в Twitter">
            <i className="fa fa-twitter fa-2x fa-inverse" aria-hidden="true"></i>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;
