import { combineReducers } from 'redux';
import searchReducer from './searchReducer.js';
import dataReducer from './dataReducer.js';
import dayReducer from './dayReducer.js';

const rootReducer = combineReducers({
    searchReducer,
    dataReducer,
    dayReducer,
});

export default rootReducer;