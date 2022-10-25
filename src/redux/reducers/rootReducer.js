import {combineReducers} from 'redux';
import authReducer from './authReducer';
import userTypeReducer from './userTypeReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userTypeReducer,
});

export default rootReducer;
