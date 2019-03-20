import {combineReducers} from 'redux';

import pageHeaderReducer from './pageHeader.js';
import userReducer from './userReducer';

const appReducer = combineReducers({
    pageHeaderReducer,
    userReducer,
});
export default appReducer;