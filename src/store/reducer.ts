import { combineReducers } from 'redux';

import { favoritesReducer } from './favorites/reducer';
import { recipesReducer } from './recipes/reducer';
import { userReducer } from './user/reducer';

export const reducer = combineReducers({
  user: userReducer,
  recipes: recipesReducer,
  favorites: favoritesReducer,
});
