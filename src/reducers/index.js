import {combineReducers} from 'redux';

import pageHeaderReducer from './pageHeader.js';
// import aaReducer from './aa.js';

const appReducer = combineReducers({
    pageHeaderReducer,
    //aaReducer,
});
export default appReducer;