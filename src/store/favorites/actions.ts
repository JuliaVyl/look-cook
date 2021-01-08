import {
  AddFavoriteRecipeAction,
  AddUnfavoriteRecipeAction,
  ErrorFavoriteRecipeAction,
  ErrorShowAllFavoritesAction,
  ErrorUnfavoriteRecipeAction,
  Favorite,
  FETCH_FAVORITE_RECIPE_FAILURE,
  FETCH_FAVORITE_RECIPE_REQUEST,
  FETCH_FAVORITE_RECIPE_SUCCESS,
  FETCH_SHOW_ALL_FAVORITES_FAILURE,
  FETCH_SHOW_ALL_FAVORITES_REQUEST,
  FETCH_SHOW_ALL_FAVORITES_SUCCESS,
  FETCH_UNFAVORITE_RECIPE_FAILURE,
  FETCH_UNFAVORITE_RECIPE_REQUEST,
  FETCH_UNFAVORITE_RECIPE_SUCCESS,
  LoadShowAllFavoritesAction,
  RequestFavoriteRecipeAction,
  RequestShowAllFavoritesAction,
  RequestUnfavoriteRecipeAction,
} from './types';

import { RootState } from '../types';

import firebase from 'firebase/app';
import 'firebase/firestore';

import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

// SHOW ALL FAVORITE RECIPES
export const showAllFavoritesRequested = (): RequestShowAllFavoritesAction => ({
  type: FETCH_SHOW_ALL_FAVORITES_REQUEST,
});
export const showAllFavoritesLoaded = (
  favorites: Favorite[]
): LoadShowAllFavoritesAction => ({
  type: FETCH_SHOW_ALL_FAVORITES_SUCCESS,
  payload: favorites,
});
export const showAllFavoritesError = (
  error: any
): ErrorShowAllFavoritesAction => ({
  type: FETCH_SHOW_ALL_FAVORITES_FAILURE,
  payload: error,
});

export const fetchShowAllFavorites = (
  userId: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  dispatch(showAllFavoritesRequested());
  try {
    const db = firebase.firestore();
    const favoritesRef = db.collection('favorites');
    const snapshot = await favoritesRef.where('user', '==', userId).get();
    if (snapshot.empty) {
      console.log('No matching documents.');
    }
    const favorites: Favorite[] = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      } as Favorite;
    });
    dispatch(showAllFavoritesLoaded(favorites));
  } catch (e) {
    dispatch(showAllFavoritesError(e));
  }
};

// ADD FAVORITE RECIPE
export const favoriteRecipeRequested = (): RequestFavoriteRecipeAction => ({
  type: FETCH_FAVORITE_RECIPE_REQUEST,
});

export const favoriteRecipeLoaded = (
  favorite: Favorite
): AddFavoriteRecipeAction => ({
  type: FETCH_FAVORITE_RECIPE_SUCCESS,
  payload: favorite,
});

export const favoriteRecipeError = (error: any): ErrorFavoriteRecipeAction => ({
  type: FETCH_FAVORITE_RECIPE_FAILURE,
  payload: error,
});

export const fetchAddFavorite = (
  favId: string,
  userId: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  dispatch(favoriteRecipeRequested);
  try {
    const db = firebase.firestore();
    const resp = await db.collection('favorites').add({
      favoriteId: favId,
      user: userId,
    });
    dispatch(
      favoriteRecipeLoaded({
        id: resp.id,
        favoriteId: favId,
        user: userId,
      })
    );
  } catch (e) {
    dispatch(favoriteRecipeError(e));
  }
};

// DELETE FAVORITE RECIPE

export const unfavoriteRecipeRequested = (
  id: string
): RequestUnfavoriteRecipeAction => ({
  type: FETCH_UNFAVORITE_RECIPE_REQUEST,
  payload: id,
});
export const unfavoriteRecipeLoaded = (
  status: boolean
): AddUnfavoriteRecipeAction => ({
  type: FETCH_UNFAVORITE_RECIPE_SUCCESS,
  payload: status,
});
export const unfavoriteRecipeError = (
  error: any
): ErrorUnfavoriteRecipeAction => ({
  type: FETCH_UNFAVORITE_RECIPE_FAILURE,
  payload: error,
});

export const fetchDeleteFavorite = (
  id: string,
  user: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch
) => {
  dispatch(unfavoriteRecipeRequested(id));
  try {
    const db = firebase.firestore();
    await db
      .collection('favorites')
      .where('favoriteId', '==', id)
      .where('user', '==', user)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          db.collection('favorites').doc(doc.id).delete();
        });
      });
    dispatch(unfavoriteRecipeLoaded(true));
    dispatch(fetchShowAllFavorites(user));
  } catch (e) {
    dispatch(unfavoriteRecipeError(e));
  }
};
