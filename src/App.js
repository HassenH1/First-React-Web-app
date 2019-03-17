import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
}  from 'react-router-dom';



import Header from './components/headerComponent/header';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';


import './Assets/css/default.min.css';

//const BrowserRouter = require("react-router-dom").BrowserRouter;
//const Route = require("react-router-dom").Route;
//const Link = require("react-router-dom").Link;


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      <Header />

        <Route exact path='/' component={Homepage} />

        <Route exact path='/Products' component={Products} />

      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
