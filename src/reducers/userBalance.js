import * as actionsTypes from '../actions/nav/actionTypes';
import updateObject from '../helpers/storeObject';

const initialState = {
  balanceLoading: null,
  balanceError: null,
  balanceResponse: null,
  baLanceSuccess: null,
};


/**
 * @description - Dispatches when start
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const userBalanceStart = {
    balanceLoading: true,
}

/**
 * @description - Dispatches when user balance
 * @param {object} state
 * @returns {object} - An updated state
 */
const userBalanceFail = (state, action) => (
  updateObject(state, {
    balanceLoading: null,
    balanceError: action.payload,
    baLanceSuccess: false,
  })
);

/**
 * @description - Dispatches when user balance succeeds
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
const userBalanceSuccess = (state, action) => (
  updateObject(state, {
    balanceLoading: false,
    balanceError: false,
    baLanceSuccess: true,
    balanceResponse: action.payload,
  })
);

/**
 * @description - function that dispatches the necessary actions
 * @param {object} state
 * @param {object} action
 * @returns {object} - An updated state
 */
export const userBalance = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.GET_USER_BALANCE_LOADING:
      return updateObject(initialState, userBalanceStart);
    case actionsTypes.GET_USER_BALANCE_SUCCESS:
        return userBalanceSuccess(state, action);
    case actionsTypes.GET_USER_BALANCE_FAIL:
      return userBalanceFail(state, action);
    default:
      return state;
  }
};

export default userBalance;
