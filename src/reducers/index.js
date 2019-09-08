import { combineReducers } from 'redux';
import socialAuth from './socialAuth'
import userOrdersCount from './userOrdersCount';
import userBalance from './userBalance'


const allReducers = combineReducers({
    socialAuth,
    userOrdersCount,
    userBalance,
});

export default allReducers;
