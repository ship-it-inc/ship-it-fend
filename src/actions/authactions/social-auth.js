import axios from 'axios';

import * as actionTypes from './actionTypes';


const authSuccess = newUser => ({
    type: actionTypes.GOOGLE_AUTH_SUCCESS,
    newUser,
  });

export const authFail = error => ({
  type: actionTypes.GOOGLE_AUTH_FAIL,
  payload: error,
});


export
const socialAuth = (socialToken) => async (dispatch) => {
  const callbackUrl = process.env.GOOGLE_CALLBACK_URL;
  const url = `${callbackUrl}${socialToken}`;
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const newUser = false;
      await localStorage.setItem('token', response.data.token);
      return dispatch(authSuccess(newUser));
    }
    if (response.status === 201) {
      const newUser = true;
      localStorage.setItem('token', response.data.token);
      return dispatch(authSuccess(newUser));
    }
  } catch (error) {
    dispatch(authFail(error.response.data));
  }
};
