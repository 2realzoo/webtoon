import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import dataReducer from './dataReducer';
import dayReducer from './dayReducer';

const rootReducer = combineReducers({
    searchReducer,
    dataReducer,
    dayReducer,
});

export default rootReducer;