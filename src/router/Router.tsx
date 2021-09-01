import React from 'react';
import HomeContainer from '../containers/Home/HomeContainer';
// import ExchangeContainer from '../containers/Exchange/ExchangeContainer';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../history';

export default function AppRouter() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <HomeContainer />
        </Route>
      </Switch>
    </Router>
  );
}