import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import Home from './components/home/Home';
import Show from './components/show/Show';
import Episode from './components/episode/Episode';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div class="container">
          <br />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/show" component={Show} />
            <Route exact path="/episode" component={Episode} />
          </Switch>
          <br />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
