import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import List from './list/List';
import Show from './show_details/Show';
import Episode from './episode_details/Episode';

export default function AppRouter() {
  return (
      <Router>
          <div>
              <Switch>
                  <Route path="/">
                      <List />
                  </Route>
                  <Route path="/show">
                      <Show />
                  </Route>
                  <Route path="/episode">
                      <Episode />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}