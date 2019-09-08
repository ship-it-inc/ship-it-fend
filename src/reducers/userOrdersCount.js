import * as actionsTypes from '../actions/dashboard/actionTypes';
import updateObject from '../helpers/storeObject';

const initialState = {
  isLoading: null,
  error: null,
  response: null,
  success: null,
};


/**
 * @description - Dispatches when social authentication is successful
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const ordersCountStart = {
    isLoading: true,
}

/**
 * @description - Dispatches when order counts fail
 * @param {object} state
 * @returns {object} - An updated state
 */
const ordersCountFail = (state, action) => (
  updateObject(state, {
    isLoading: null,
    error: action.payload,
    success: false,
  })
);

/**
 * @description - Dispatches when order count succeeds
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const ordersCountSuccess = (state, action) => (
  updateObject(state, {
    isLoading: false,
    error: action.payload,
    success: true,
    response: action.payload,
  })
);

/**
 * @description - function that dispatches the userOrderCount actions
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
export const userOrdersCount = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_ORDERS_COUNT_LOADING:
      return updateObject(initialState, ordersCountStart);
    case actionsTypes.GET_ORDERS_COUNT_SUCCESS:
        return ordersCountSuccess(state, action);
    case actionsTypes.GET_ORDERS_COUNT_FAIL:
      return ordersCountFail(state, action);
    default:
      return state;
  }
};

export default userOrdersCount
