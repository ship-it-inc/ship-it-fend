import * as actionsTypes from '../actions/authactions/actionTypes';
import updateObject from '../helpers/storeObject';

const initialState = {
  isAuthenticated: null,
  error: null,
  isNewUser: null,
};

/**
 * @description - Dispatches when social authentication fail
 * @param {object} state
 * @returns {object} - An updated state
 */
const socialAuthFail = (state, action) => (
  updateObject(state, {
    isAuthenticated: false,
    error: action.payload,
  })
);

/**
 * @description - Dispatches when social authentication is successful
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const socialAuthSuccess = (state, action) => (
  updateObject(state, {
    isAuthenticated: true,
    isNewUser: action.newUser,
  })
);

const socialAuth = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GOOGLE_AUTH_FAIL:
      return socialAuthFail(state, action);
    case actionsTypes.GOOGLE_AUTH_SUCCESS:
      return socialAuthSuccess(state, action);
    default:
      return state;
  }
};

export default socialAuth;
