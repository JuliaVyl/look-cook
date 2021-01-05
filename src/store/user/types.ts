export interface User {
  id: string;
  name: string;
  email: string;
  photoUrl: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: any;
}

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export interface RequestUserAction {
  type: typeof FETCH_USER_REQUEST;
}

export interface LoadedUserAction {
  type: typeof FETCH_USER_SUCCESS;
  payload: User;
}

export interface ErrorUserAction {
  type: typeof FETCH_USER_FAILURE;
  payload: any;
}

export type UserActionTypes =
  | RequestUserAction
  | LoadedUserAction
  | ErrorUserAction;
