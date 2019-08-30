import { combineReducers } from 'redux';
import socialAuth from './socialAuth'


const allReducers = combineReducers({
    socialAuth,
});

export default allReducers;
