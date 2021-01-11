import {
  FETCH_ALL_RECIPES_FAILURE,
  FETCH_ALL_RECIPES_REQUEST,
  FETCH_ALL_RECIPES_SUCCESS,
  FILTER_RECIPES_BY_CATEGORY,
  FILTER_RECIPES_BY_TEXT,
  RecipesActionTypes,
  RecipesState,
} from './types';

const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: null,
  filterText: '',
  filterCategory: 'All',
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
        filterText: '',
        filterCategory: 'All',
      };
    case FETCH_ALL_RECIPES_SUCCESS:
      return {
        recipes: action.payload,
        loading: false,
        error: null,
        filterText: '',
        filterCategory: 'All',
      };
    case FETCH_ALL_RECIPES_FAILURE:
      return {
        recipes: [],
        loading: false,
        error: action.payload,
        filterText: '',
        filterCategory: 'All',
      };
    case FILTER_RECIPES_BY_TEXT:
      return {
        ...state,
        filterText: action.payload.trim().toLowerCase(),
      };

    case FILTER_RECIPES_BY_CATEGORY:
      const category = action.payload;
      return {
        ...state,
        filterCategory: category,
      };
    default:
      return state;
  }
};
