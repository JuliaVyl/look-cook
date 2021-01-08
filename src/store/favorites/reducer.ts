import {
  FavoritesState,
  FavoriteRecipeActionTypes,
  FETCH_FAVORITE_RECIPE_REQUEST,
  FETCH_FAVORITE_RECIPE_SUCCESS,
  FETCH_FAVORITE_RECIPE_FAILURE,
  FETCH_SHOW_ALL_FAVORITES_REQUEST,
  FETCH_SHOW_ALL_FAVORITES_FAILURE,
  FETCH_SHOW_ALL_FAVORITES_SUCCESS,
  FETCH_UNFAVORITE_RECIPE_REQUEST,
  FETCH_UNFAVORITE_RECIPE_SUCCESS,
  FETCH_UNFAVORITE_RECIPE_FAILURE,
} from './types';

const initialState: FavoritesState = {
  favorites: [],
  status: false,
  loading: false,
  error: null,
};

export const favoritesReducer = (
  state = initialState,
  action: FavoriteRecipeActionTypes
): FavoritesState => {
  switch (action.type) {
    case FETCH_SHOW_ALL_FAVORITES_REQUEST:
      return {
        favorites: [],
        status: false,
        loading: true,
        error: null,
      };
    case FETCH_SHOW_ALL_FAVORITES_SUCCESS:
      return {
        favorites: action.payload,
        status: true,
        loading: false,
        error: null,
      };
    case FETCH_SHOW_ALL_FAVORITES_FAILURE:
      return {
        favorites: [],
        status: false,
        loading: false,
        error: action.payload,
      };
    case FETCH_FAVORITE_RECIPE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_FAVORITE_RECIPE_SUCCESS:
      return {
        favorites: [...state.favorites, action.payload],
        status: true,
        loading: false,
        error: null,
      };
    case FETCH_FAVORITE_RECIPE_FAILURE:
      return {
        favorites: [...state.favorites],
        status: false,
        loading: false,
        error: action.payload,
      };
    case FETCH_UNFAVORITE_RECIPE_REQUEST:
      return {
        favorites: [...state.favorites],
        status: false,
        loading: true,
        error: null,
      };
    case FETCH_UNFAVORITE_RECIPE_SUCCESS:
      return {
        favorites: [...state.favorites],
        status: true,
        loading: false,
        error: null,
      };
    case FETCH_UNFAVORITE_RECIPE_FAILURE:
      return {
        favorites: [],
        status: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
