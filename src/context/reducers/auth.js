
import {
    CHECK_USER,
    CHECK_USER_SUCCESS,
    CHECK_USER_FAILURE,
    USER_SIGN_IN,
    USER_SIGN_IN_SUCCESS,
    USER_SIGN_IN_FAILURE,
    USER_SIGN_UP,
    USER_SIGN_UP_SUCCESS,
    USER_SIGN_UP_FAILURE,
    USER_CONFIRM_SIGN_IN,
    USER_CONFIRM_SIGN_IN_SUCCESS,
    USER_CONFIRM_SIGN_IN_FAILURE,
    USER_CONFIRM_SIGN_UP,
    USER_CONFIRM_SIGN_UP_SUCCESS,
    USER_CONFIRM_SIGN_UP_FAILURE,
    CHANGE_SCREEN
} from '../actions/auth'

export const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: true,
  isError: false,
  error: null,
  screen: 'SIGN_IN'
};

export const authReducer = (state, action) => {
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
        isLoading: false,
        isError: true,
        error: action.payload
      }
    case USER_SIGN_IN:
      return {
        ...state      
      }
    case USER_SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      }
    case USER_SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      }
    case USER_CONFIRM_SIGN_IN:
      return {
        ...state      
      }
    case USER_CONFIRM_SIGN_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload
      }
    case USER_CONFIRM_SIGN_IN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      }
    case USER_SIGN_UP:
      return {
        ...state      
      }
    case USER_SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload
      }
    case USER_SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      }
    case USER_CONFIRM_SIGN_UP:
      return {
        ...state      
      }
    case USER_CONFIRM_SIGN_UP_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        user: action.payload
      }
    case USER_CONFIRM_SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload
      }
    case CHANGE_SCREEN:
      return {
        ...state,
        screen: action.payload
      }

    default:
      return state;
  }
};
