import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../types';
import {
  ErrorRecipesAction,
  FETCH_ALL_RECIPES_FAILURE,
  FETCH_ALL_RECIPES_REQUEST,
  FETCH_ALL_RECIPES_SUCCESS,
  filterByCategoryAction,
  filterByTextAction,
  FILTER_RECIPES_BY_CATEGORY,
  FILTER_RECIPES_BY_TEXT,
  LoadRecipesAction,
  Recipe,
  RequestRecipesAction,
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

//FILTER RECIPES
export const filterRecipesByCategory = (
  category: string
): filterByCategoryAction => {
  return {
    type: FILTER_RECIPES_BY_CATEGORY,
    payload: category,
  };
};

export const filterRecipesByText = (text: string): filterByTextAction => {
  return {
    type: FILTER_RECIPES_BY_TEXT,
    payload: text,
  };
};
