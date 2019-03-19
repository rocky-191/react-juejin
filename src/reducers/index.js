import {combineReducers} from 'redux';

import pageHeaderReducer from './pageHeader.js';
import imageUserReducer from './userImage';

const appReducer = combineReducers({
    pageHeaderReducer,
    imageUserReducer,
});
export default appReducer;