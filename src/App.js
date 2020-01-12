import React, { Component } from 'react';
import './App.css';
import {
  Switch,
  Route,
  Link,
  Router
} from "react-router-dom";
import List from './components/list/List';
import Show from './components/show_details/Show';
import Episode from './components/episode_details/Episode';
import Header from './components/shared/header/Header';
import Footer from './components/shared/footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/show" component={Show} />
          <Route exact path="/episode" component={Episode} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
