import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import Navbar from './components/navbar';
import Home from './components/home';
import AddImage from './components/addImage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path = "/" component= {Home} />
          <Route path = "/addImage" component= {AddImage} />
        </Switch>
      </div>
    );
  }
}

export default App;
