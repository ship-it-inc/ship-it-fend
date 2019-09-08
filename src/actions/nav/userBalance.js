import axios from 'axios';

import * as actionTypes from './actionTypes';


const userBalanceSuccess = payload => ({
  type: actionTypes.GET_USER_BALANCE_SUCCESS,
  payload,
});

const userBalanceStart = () => ({
  type: actionTypes.GET_USER_BALANCE_LOADING,
});

export const userBalanceFail = error => ({
  type: actionTypes.GET_USER_BALANCE_FAIL,
  payload: error,
});


export const userBalance = () => async (dispatch) => {
  dispatch(userBalanceStart());
  const token = localStorage.getItem('token');
  const url = 'http://localhost:3000/api/v1/balance';
  try {
    const response = await axios.get(url, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    dispatch(userBalanceSuccess(response.data.userBalance));
  } catch (error) {
    console.log(error)
      dispatch(userBalanceFail(error.response.data));
  }
};

export default userBalance;
