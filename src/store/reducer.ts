import { combineReducers } from 'redux';
import { userReducer } from './user/reducer';

export const reducer = combineReducers({
  user: userReducer,
});
