import { LOAD_USER, UserActionTypes, UserState } from './types';

const initialState: UserState = {
  user: null,
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case LOAD_USER:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
};
