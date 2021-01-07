import {
  FavoritesState,
  FavoriteRecipeActionTypes,
  FETCH_FAVORITE_RECIPE_REQUEST,
  FETCH_FAVORITE_RECIPE_SUCCESS,
  FETCH_FAVORITE_RECIPE_FAILURE,
  FETCH_SHOW_ALL_FAVORITES_REQUEST,
  ShowAllFavoritesActionTypes,
  FETCH_SHOW_ALL_FAVORITES_FAILURE,
  FETCH_SHOW_ALL_FAVORITES_SUCCESS,
} from './types';

const initialState: FavoritesState = {
  favorites: [],
  status: false,
  loading: false,
  error: null,
};

export const addFavoriteReducer = (
  state = initialState,
  action: FavoriteRecipeActionTypes
): FavoritesState => {
  switch (action.type) {
    case FETCH_FAVORITE_RECIPE_REQUEST:
      return {
        favorites: [...state.favorites],
        status: false,
        loading: true,
        error: null,
      };
    case FETCH_FAVORITE_RECIPE_SUCCESS:
      return {
        favorites: [...state.favorites],
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
    default:
      return state;
  }
};

export const showFavoritesReducer = (
  state = initialState,
  action: ShowAllFavoritesActionTypes
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
    default:
      return state;
  }
};
