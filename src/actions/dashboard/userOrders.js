import axios from 'axios';

import * as actionTypes from './actionTypes';


const orderCountSuccess = payload => ({
  type: actionTypes.GET_ORDERS_COUNT_SUCCESS,
  payload,
});

const orderCountStart = () => ({
  type: actionTypes.GET_ORDERS_COUNT_LOADING,
});

export const ordersCountFail = error => ({
  type: actionTypes.GET_ORDERS_COUNT_FAIL,
  payload: error,
});


export const userOrdersCount = () => async (dispatch) => {
  dispatch(orderCountStart());
  const token = localStorage.getItem('token');
  const url = `${process.env.SERVER_API}/orders-count`;
  try {
    const response = await axios.get(url, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    dispatch(orderCountSuccess(response.data.ordersCount));
  } catch (error) {
      dispatch(ordersCountFail(error.response.data));
  }
};

export default userOrdersCount;
