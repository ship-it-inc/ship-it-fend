import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LoginPage } from './login/login-page'
import './app.scss';

const Router = ({ user }) => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={props => <LoginPage />} />
    </Switch>
  </BrowserRouter>

);

export default Router;
