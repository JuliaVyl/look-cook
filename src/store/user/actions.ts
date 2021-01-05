import {
  ErrorUserAction,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  LoadedUserAction,
  RequestUserAction,
  User,
} from './types';

export const userRequested = (): RequestUserAction => ({
  type: FETCH_USER_REQUEST,
});

export const userLoaded = (user: User): LoadedUserAction => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const userError = (error: any): ErrorUserAction => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});
