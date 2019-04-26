
import {
    CHECK_USER,
    CHECK_USER_SUCCESS,
    CHECK_USER_FAILURE,
    USER_SIGN_IN,
    USER_SIGN_IN_SUCCESS,
    USER_SIGN_IN_FAILURE
} from '../actions/auth'

export const initialState = {
  user: 'test',
  isLoggedIn: false,
  isLoading: true,
  isError: false
};

export const authReducer = async (state, action) => {
  switch (action.type) {
    case CHECK_USER:
      return {
        ...state
      }
    case CHECK_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isLoading: false
      }
    case CHECK_USER_FAILURE:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: false,
        isLoading: false
      }
    case USER_SIGN_IN:
      return {
        ...state      
      }
    case USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false
      }
    case USER_SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true
      }

    default:
      return state;
  }
};
