import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  UserActionTypes,
  UserState,
} from './types';

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        user: null,
        loading: true,
        error: null,
      };

    case FETCH_USER_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        error: null,
      };

    case FETCH_USER_FAILURE:
      return {
        user: null,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
