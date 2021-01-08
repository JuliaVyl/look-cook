export interface Recipe {
  id: string;
  title: string;
  serves: number;
  time: number;
  level: string;
  description: string;
  category: string;
  image: string;
}

export interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
  error: any;
  filterText: string;
  filterCategory: string;
}

// ALL RECIPES
export const FETCH_ALL_RECIPES_REQUEST = 'FETCH_ALL_RECIPES_REQUEST';
export const FETCH_ALL_RECIPES_SUCCESS = 'FETCH_ALL_RECIPES_SUCCESS';
export const FETCH_ALL_RECIPES_FAILURE = 'FETCH_ALL_RECIPES_FAILURE';

export interface RequestRecipesAction {
  type: typeof FETCH_ALL_RECIPES_REQUEST;
}
export interface LoadRecipesAction {
  type: typeof FETCH_ALL_RECIPES_SUCCESS;
  payload: Recipe[];
}
export interface ErrorRecipesAction {
  type: typeof FETCH_ALL_RECIPES_FAILURE;
  payload: any;
}

// FILTER RECIPES
export const FILTER_RECIPES_BY_CATEGORY = 'FILTER_RECIPES_BY_CATEGORY';
export const FILTER_RECIPES_BY_TEXT = 'FILTER_RECIPES_BY_TEXT';

export interface filterByCategoryAction {
  type: typeof FILTER_RECIPES_BY_CATEGORY;
  payload: string;
}
export interface filterByTextAction {
  type: typeof FILTER_RECIPES_BY_TEXT;
  payload: string;
}

export type RecipesActionTypes =
  | filterByCategoryAction
  | filterByTextAction
  | RequestRecipesAction
  | LoadRecipesAction
  | ErrorRecipesAction;
