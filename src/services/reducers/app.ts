/* eslint-disable @typescript-eslint/default-param-last */
import type { TAppInitialState } from '../types/types';
import { setCookie, deleteCookie } from '../../utils/cookie';
import {
  GET_CONTACTS_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
  TAppAction,
} from '../actions/app';

export const initialState: TAppInitialState = {
  contacts: [],
  loader: false,
  fail: false,
  textError: '',
  isAuth: false,
  user: null,
  accessToken: null,
};

export const appReducer = (
  state: TAppInitialState = initialState,
  action: TAppAction
): TAppInitialState => {
  switch (action.type) {
    case GET_CONTACTS_SUCCESS: {
      return {
        ...state,
        contacts: action.contacts,
      } as TAppInitialState;
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        loader: true,
        fail: false,
        textError: '',
      } as TAppInitialState;
    }
    case LOGIN_SUCCESS: {
      setCookie('accessToken', action.accessToken);
      return {
        ...state,
        loader: false,
        fail: false,
        isAuth: true,
        user: action.user,
        accessToken: action.accessToken,
      } as TAppInitialState;
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        fail: true,
        textError: action.textError,
        isAuth: false,
        loader: false,
      } as TAppInitialState;
    }
    case LOGOUT: {
      deleteCookie('accessToken');
      return {
        ...state,
        user: null,
        accessToken: null,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
