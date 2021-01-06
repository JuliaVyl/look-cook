export interface User {
  name: string;
  email: string;
  photoUrl: string;
}

export interface UserState {
  user: User | null;
}

export const LOAD_USER = 'LOAD_USER';

export interface LoadUserAction {
  type: typeof LOAD_USER;
  payload: any;
}

export type UserActionTypes = LoadUserAction;
