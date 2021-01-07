import { FoodCategory } from '../../types';

export interface Recipe {
  id: string;
  title: string;
  serves: number;
  time: number;
  level: string;
  description: string;
  category: FoodCategory;
  image: string;
}

export interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
  error: any;
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

export type RecipesActionTypes =
  | RequestRecipesAction
  | LoadRecipesAction
  | ErrorRecipesAction;

// // USER RECIPES
// export const FETCH_USER_RECIPES_REQUEST = 'FETCH_USER_RECIPES_REQUEST';
// export const FETCH_USER_RECIPES_SUCCESS = 'FETCH_USER_RECIPES_SUCCESS';
// export const FETCH_USER_RECIPES_FAILURE = 'FETCH_USER_RECIPES_FAILURE';

// export interface RequestUserRecipesAction {
//   type: typeof FETCH_USER_RECIPES_REQUEST;
// }
// export interface LoadUserRecipesAction {
//   type: typeof FETCH_USER_RECIPES_SUCCESS;
//   payload: Recipes;
// }
// export interface ErrorUserRecipesAction {
//   type: typeof FETCH_USER_RECIPES_FAILURE;
//   payload: any;
// }

// export type UserRecipesActionTypes =
//   | RequestUserRecipesAction
//   | LoadUserRecipesAction
//   | ErrorUserRecipesAction;

// // USER ADD RECIPE
// export const FETCH_ADD_RECIPE_REQUEST = 'FETCH_ADD_RECIPE_REQUEST';
// export const FETCH_ADD_RECIPE_SUCCESS = 'FETCH_ADD_RECIPE_SUCCESS';
// export const FETCH_ADD_RECIPE_FAILURE = 'FETCH_ADD_RECIPE_SUCCESS';

// export interface RequestAddRecipeAction {
//   type: typeof FETCH_ADD_RECIPE_REQUEST;
// }
// export interface LoadAddRecipeAction {
//   type: typeof FETCH_ADD_RECIPE_SUCCESS;
// }
// export interface ErrorAddRecipeAction {
//   type: typeof FETCH_ADD_RECIPE_FAILURE;
//   payload: any;
// }

// export type UserAddRecipeActionTypes =
//   | RequestAddRecipeAction
//   | LoadAddRecipeAction
//   | ErrorAddRecipeAction;

// // USER EDIT RECIPE
// export const FETCH_EDIT_RECIPE_REQUEST = 'FETCH_EDIT_RECIPE_REQUEST';
// export const FETCH_EDIT_RECIPE_SUCCESS = 'FETCH_EDIT_RECIPE_SUCCESS';
// export const FETCH_EDIT_RECIPE_FAILURE = 'FETCH_EDIT_RECIPE_SUCCESS';

// export interface RequestEditRecipeAction {
//   type: typeof FETCH_EDIT_RECIPE_REQUEST;
//   payload: Recipe;
// }
// export interface LoadEditRecipeAction {
//   type: typeof FETCH_EDIT_RECIPE_SUCCESS;
// }
// export interface ErrorEditRecipeAction {
//   type: typeof FETCH_EDIT_RECIPE_FAILURE;
//   payload: any;
// }

// export type UserEditRecipeActionTypes =
//   | RequestEditRecipeAction
//   | LoadEditRecipeAction
//   | ErrorEditRecipeAction;

// // USER DELETE RECIPE
// export const FETCH_DELETE_RECIPE_REQUEST = 'FETCH_DELETE_RECIPE_REQUEST';
// export const FETCH_DELETE_RECIPE_SUCCESS = 'FETCH_DELETE_RECIPE_SUCCESS';
// export const FETCH_DELETE_RECIPE_FAILURE = 'FETCH_DELETE_RECIPE_SUCCESS';

// export interface RequestDeleteRecipeAction {
//   type: typeof FETCH_DELETE_RECIPE_REQUEST;
//   payload: string;
// }
// export interface LoadDeleteRecipeAction {
//   type: typeof FETCH_DELETE_RECIPE_SUCCESS;
// }
// export interface ErrorDeleteRecipeAction {
//   type: typeof FETCH_DELETE_RECIPE_FAILURE;
//   payload: any;
// }

// export type UserDeleteRecipeActionTypes =
//   | RequestDeleteRecipeAction
//   | LoadDeleteRecipeAction
//   | ErrorDeleteRecipeAction;
