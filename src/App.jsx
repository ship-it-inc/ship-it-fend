import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './containers/login/HomePage'
import VerifyAuth from './containers/login/verifyAuth';
import DashBoard from './containers/dashBoard';
import store from './store';

const Router = ({ user }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={props => <HomePage {...props} user={user} />} />
        <Route exact path='/auth/google' render={props => <VerifyAuth {...props} user={user} />} />
        <Route exact path='/dashboard' render={props => <DashBoard {...props} user={user} />} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

Router.propTypes = {
  user: PropTypes.any,
};

export default Router;
