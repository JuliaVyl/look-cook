import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../types';
import {
  // AddFavoriteRecipeAction,
  // ErrorAddRecipeAction,
  // ErrorDeleteRecipeAction,
  // ErrorEditRecipeAction,
  // ErrorFavoriteRecipeAction,
  ErrorRecipesAction,
  // ErrorUserRecipesAction,
  // FETCH_ADD_RECIPE_FAILURE,
  // FETCH_ADD_RECIPE_REQUEST,
  // FETCH_ADD_RECIPE_SUCCESS,
  FETCH_ALL_RECIPES_FAILURE,
  FETCH_ALL_RECIPES_REQUEST,
  FETCH_ALL_RECIPES_SUCCESS,
  // FETCH_DELETE_RECIPE_FAILURE,
  // FETCH_DELETE_RECIPE_REQUEST,
  // FETCH_DELETE_RECIPE_SUCCESS,
  // FETCH_EDIT_RECIPE_FAILURE,
  // FETCH_EDIT_RECIPE_REQUEST,
  // FETCH_EDIT_RECIPE_SUCCESS,
  // FETCH_FAVORITE_RECIPE_FAILURE,
  // FETCH_FAVORITE_RECIPE_REQUEST,
  // FETCH_FAVORITE_RECIPE_SUCCESS,
  // FETCH_USER_RECIPES_FAILURE,
  // FETCH_USER_RECIPES_REQUEST,
  // FETCH_USER_RECIPES_SUCCESS,
  // LoadAddRecipeAction,
  // LoadDeleteRecipeAction,
  // LoadEditRecipeAction,
  LoadRecipesAction,
  Recipe,
  // LoadUserRecipesAction,
  // RequestAddRecipeAction,
  // RequestDeleteRecipeAction,
  // RequestEditRecipeAction,
  // RequestFavoriteRecipeAction,
  RequestRecipesAction,
  // RequestUserRecipesAction,
} from './types';
import firebase from 'firebase/app';
import 'firebase/firestore';

// ALL RECIPES
export const recipesRequested = (): RequestRecipesAction => ({
  type: FETCH_ALL_RECIPES_REQUEST,
});
export const recipesLoaded = (recipes: Recipe[]): LoadRecipesAction => ({
  type: FETCH_ALL_RECIPES_SUCCESS,
  payload: recipes,
});
export const recipesError = (error: any): ErrorRecipesAction => ({
  type: FETCH_ALL_RECIPES_FAILURE,
  payload: error,
});

export const fetchRecipes = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch) => {
  dispatch(recipesRequested());
  try {
    const db = firebase.firestore();
    const recipesRef = db.collection('recipes');
    const snapshot = await recipesRef.get();
    if (snapshot.empty) {
      console.log('No matching documents.');
    }
    const recipes: Recipe[] = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      } as Recipe;
    });

    dispatch(recipesLoaded(recipes));
  } catch (err) {
    dispatch(recipesError(err));
  }
};

// //USER RECIPES
// export const userRecipesRequested = (): RequestUserRecipesAction => ({
//   type: FETCH_USER_RECIPES_REQUEST,
// });
// export const userRecipesLoaded = (recipes: Recipes): LoadUserRecipesAction => ({
//   type: FETCH_USER_RECIPES_SUCCESS,
//   payload: recipes,
// });
// export const userRecipesError = (error: any): ErrorUserRecipesAction => ({
//   type: FETCH_USER_RECIPES_FAILURE,
//   payload: error,
// });

// //USER ADD RECIPE
// export const userAddRecipeRequested = (
//   recipe: Recipe
// ): RequestAddRecipeAction => ({
//   type: FETCH_ADD_RECIPE_REQUEST,
//   payload: recipe,
// });
// export const userAddRecipeLoaded = (): LoadAddRecipeAction => ({
//   type: FETCH_ADD_RECIPE_SUCCESS,
// });
// export const userAddRecipesError = (error: any): ErrorAddRecipeAction => ({
//   type: FETCH_ADD_RECIPE_FAILURE,
//   payload: error,
// });

// //USER EDIT RECIPE
// export const userEditRecipeRequested = (
//   recipe: Recipe
// ): RequestEditRecipeAction => ({
//   type: FETCH_EDIT_RECIPE_REQUEST,
//   payload: recipe,
// });
// export const userEditRecipeLoaded = (): LoadEditRecipeAction => ({
//   type: FETCH_EDIT_RECIPE_SUCCESS,
// });
// export const userEditRecipesError = (error: any): ErrorEditRecipeAction => ({
//   type: FETCH_EDIT_RECIPE_FAILURE,
//   payload: error,
// });

// //USER DELETE RECIPE
// export const userDeleteRecipeRequested = (
//   recipe: Recipe
// ): RequestDeleteRecipeAction => ({
//   type: FETCH_DELETE_RECIPE_REQUEST,
//   payload: recipe,
// });
// export const userDeleteRecipeLoaded = (): LoadDeleteRecipeAction => ({
//   type: FETCH_DELETE_RECIPE_SUCCESS,
// });
// export const userDeleteRecipesError = (
//   error: any
// ): ErrorDeleteRecipeAction => ({
//   type: FETCH_DELETE_RECIPE_FAILURE,
//   payload: error,
// });

// //USER FAVORITE RECIPE
// export const userDFavoriteRecipeRequested = (
//   id: string
// ): RequestFavoriteRecipeAction => ({
//   type: FETCH_FAVORITE_RECIPE_REQUEST,
//   payload: id,
// });
// export const userFavoriteRecipeLoaded = (): AddFavoriteRecipeAction => ({
//   type: FETCH_FAVORITE_RECIPE_SUCCESS,
// });
// export const userDFavoriteRecipesError = (
//   error: any
// ): ErrorFavoriteRecipeAction => ({
//   type: FETCH_FAVORITE_RECIPE_FAILURE,
//   payload: error,
// });
