import { Dispatch } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { contacts } from '../mocks/mocks';
import { TContacts } from '../types/types';

export const GET_CONTACTS_SUCCESS = 'GET_CONTACTS_SUCCESS';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const LOGOUT = 'LOGOUT';

export interface IGetContactsAction {
  readonly type: typeof GET_CONTACTS_SUCCESS;
  readonly contacts: TContacts;
}

export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}
export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly user: { email: string; password: string };
  readonly accessToken: string;
}
export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
  readonly textError: string;
}
export interface ILogoutAction {
  readonly type: typeof LOGOUT;
}

export type TLoginActions =
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginFailedAction;

export type TAppAction = IGetContactsAction | TLoginActions | ILogoutAction;

export const getContacts = () => {
  return (dispatch: Dispatch<TAppAction>) => {
    dispatch({
      type: GET_CONTACTS_SUCCESS,
      contacts,
    });
  };
};

export const signIn = (form: { email: string; password: string }) => {
  return (dispatch: Dispatch<TLoginActions>) => {
    const accessToken = uuidv4();
    dispatch({
      type: LOGIN_REQUEST,
    });

    try {
      dispatch({
        type: LOGIN_SUCCESS,
        user: form,
        accessToken,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error.';
      dispatch({
        type: LOGIN_FAILED,
        textError: message,
      });
    }
  };
};
