import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginPage } from './containers/login/login-page'
import store from './store';

const Router = ({ user }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={props => <LoginPage {...props} user={user} />} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

Router.propTypes = {
  user: PropTypes.any,
};

export default Router;
