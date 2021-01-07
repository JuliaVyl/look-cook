import {
  FETCH_ALL_RECIPES_FAILURE,
  FETCH_ALL_RECIPES_REQUEST,
  FETCH_ALL_RECIPES_SUCCESS,
  RecipesActionTypes,
  RecipesState,
} from './types';

const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: null,
};

export const recipesReducer = (
  state = initialState,
  action: RecipesActionTypes
): RecipesState => {
  switch (action.type) {
    case FETCH_ALL_RECIPES_REQUEST:
      return {
        recipes: [],
        loading: true,
        error: null,
      };
    case FETCH_ALL_RECIPES_SUCCESS:
      return {
        recipes: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_ALL_RECIPES_FAILURE:
      return {
        recipes: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
