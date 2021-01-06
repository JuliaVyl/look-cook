import { LoadUserAction, LOAD_USER, User } from './types';

export const userLoaded = (user: User): LoadUserAction => ({
  type: LOAD_USER,
  payload: user,
});
