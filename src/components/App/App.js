import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Home from '../Home/Home';
import Contacts from '../Contacts/Contacts';
import Portfolio from '../Portfolio/Portfolio';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar/>

        <Route exact path="/" component={Home}/>
        <Route path="/contacts" component={Contacts}/>
        <Route path="/portfolio" component={Portfolio}/>

        <Footer/>
      </div>
    )
  }
}

export default withRouter(App);
