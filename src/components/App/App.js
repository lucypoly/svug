import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Home from '../Home/Home';
import Contacts from '../Contacts/Contacts';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import NavBar from '../Navbar/Navbar';
import Order from '../Order/Order';
import Footer from '../Footer/Footer';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="body">
        <div className="App">
          <NavBar/>

          <Route exact path="/" component={Home}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/order" component={Order}/>
          <Route path="/services" component={Services}/>

          <div className="push"> </div>
        </div>
        <Footer className="footer"/>
      </div>
    )
  }
}

export default withRouter(App);
