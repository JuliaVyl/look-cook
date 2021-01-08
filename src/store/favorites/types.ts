export interface Favorite {
  id: string;
  favoriteId: string;
  user: string;
}

export interface FavoritesState {
  favorites: Favorite[];
  status: boolean;
  loading: boolean;
  error: any;
}

// SHOW ALL FAVORITE RECIPES
export const FETCH_SHOW_ALL_FAVORITES_REQUEST =
  'FETCH_SHOW_ALL_FAVORITES_REQUEST';
export const FETCH_SHOW_ALL_FAVORITES_SUCCESS =
  'FETCH_SHOW_ALL_FAVORITES_SUCCESS';
export const FETCH_SHOW_ALL_FAVORITES_FAILURE =
  'FETCH_SHOW_ALL_FAVORITES_FAILURE';

export interface RequestShowAllFavoritesAction {
  type: typeof FETCH_SHOW_ALL_FAVORITES_REQUEST;
}
export interface LoadShowAllFavoritesAction {
  type: typeof FETCH_SHOW_ALL_FAVORITES_SUCCESS;
  payload: Favorite[];
}
export interface ErrorShowAllFavoritesAction {
  type: typeof FETCH_SHOW_ALL_FAVORITES_FAILURE;
  payload: any;
}

// USER FAVORITE RECIPE
export const FETCH_FAVORITE_RECIPE_REQUEST = 'FETCH_FAVORITE_RECIPE_REQUEST';
export const FETCH_FAVORITE_RECIPE_SUCCESS = 'FETCH_FAVORITE_RECIPE_SUCCESS';
export const FETCH_FAVORITE_RECIPE_FAILURE = 'FETCH_FAVORITE_RECIPE_FAILURE';

export interface RequestFavoriteRecipeAction {
  type: typeof FETCH_FAVORITE_RECIPE_REQUEST;
}
export interface AddFavoriteRecipeAction {
  type: typeof FETCH_FAVORITE_RECIPE_SUCCESS;
  payload: Favorite;
}
export interface ErrorFavoriteRecipeAction {
  type: typeof FETCH_FAVORITE_RECIPE_FAILURE;
  payload: any;
}

// USER UNFAVORITE RECIPE
export const FETCH_UNFAVORITE_RECIPE_REQUEST =
  'FETCH_UNFAVORITE_RECIPE_REQUEST';
export const FETCH_UNFAVORITE_RECIPE_SUCCESS =
  'FETCH_UNFAVORITE_RECIPE_SUCCESS';
export const FETCH_UNFAVORITE_RECIPE_FAILURE =
  'FETCH_UNFAVORITE_RECIPE_FAILURE';

export interface RequestUnfavoriteRecipeAction {
  type: typeof FETCH_UNFAVORITE_RECIPE_REQUEST;
  payload: string;
}
export interface AddUnfavoriteRecipeAction {
  type: typeof FETCH_UNFAVORITE_RECIPE_SUCCESS;
  payload: boolean;
}
export interface ErrorUnfavoriteRecipeAction {
  type: typeof FETCH_UNFAVORITE_RECIPE_FAILURE;
  payload: any;
}

export type FavoriteRecipeActionTypes =
  | RequestShowAllFavoritesAction
  | LoadShowAllFavoritesAction
  | ErrorShowAllFavoritesAction
  | RequestFavoriteRecipeAction
  | AddFavoriteRecipeAction
  | ErrorFavoriteRecipeAction
  | RequestUnfavoriteRecipeAction
  | AddUnfavoriteRecipeAction
  | ErrorUnfavoriteRecipeAction;
