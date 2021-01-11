import { LoadUserAction, LOAD_USER, User } from './types';

export const userLoaded = (user: User | null): LoadUserAction => ({
  type: LOAD_USER,
  payload: user,
});
