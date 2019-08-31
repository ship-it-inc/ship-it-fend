import React, { Component, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions/authactions/social-auth';

/**
 * @description - component to verify user login
 * @function VerifyAuth
 * @param {object} - props. the props passed into the component
 */
const VerifyAuth = (props) => {

  useEffect(() => {
    const { history: { location: { search, pathname } } } = props;
    const socialToken = `${search}`;
    if (pathname.includes('google')) {
        props.socialAuth(socialToken);
    }
    if(props.isAuthenticated){
      window.location.replace('/dashboard');
    }
  })

    return (
      <Fragment>
        {props.isAuthenticated === true ? <Redirect to='/dashboard' /> : null }
        {props.isAuthenticated === false
          ? <Redirect to='/' /> : null }
      </Fragment>
    );
}

VerifyAuth.propTypes = {
  socialAuth: PropTypes.func,
  history: PropTypes.object,
  isAuthenticated: PropTypes.bool,
};

export const mapStateToProps = state => (
 {
    ...state.socialAuth,
  }
);

export const
  mapDispatchToProps = dispatch =>  bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAuth);
