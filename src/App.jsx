import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ProtectedRoute } from './helpers/protected'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './containers/home/HomePage'
import VerifyAuth from './containers/home/verifyAuth';
import UserBoard from './containers/dashboard/UserBoard';
import store from './store';

const Router = ({ user }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={props => <HomePage {...props} user={user} />} />
        <Route exact path='/auth/google' render={props => <VerifyAuth {...props} user={user} />} />
        <ProtectedRoute exact path='/dashboard' user={user} component={UserBoard} />} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

Router.propTypes = {
  user: PropTypes.any,
};

export default Router;
