import React from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../index';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type TContact = {
  id: number;
  name: string;
  number: number;
  year: string;
  ard: string;
  companyId: number;
  email: string;
  phoneNumber: number;
  companyAddress: string;
};

export type TContacts = Array<TContact>;

export type TButton = {
  text: string;
  color?: 'black' | 'yellow' | 'white';
  onClick?: () => void;
  htmlType: 'button' | 'submit' | 'reset';
  extraClass?: string;
  icon?: React.ReactNode;
  iconLocation?: 'left' | 'right';
};

export type TCardContact = {
  contact: TContact;
  rowsState: TContacts;
  setRowsState: React.Dispatch<React.SetStateAction<TContacts>>;
};

export type TNavigationLink = {
  text: string;
  link: string;
  last?: boolean;
  exact?: boolean;
  children?: React.ReactNode;
};

export type TSearch = {
  request?: string;
};

export type TUserCard = {
  avatar?: string;
};

export type TTablePagination = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (value: React.SetStateAction<number>) => void;
};

export type TCellTable = {
  isEditMode: boolean;
  rowIDToEdit: number;
  contact: TContact;
  option: string;
  type: string;
  disabled?: boolean;
};

export type TConfig = { key: string; direction: string } | null;

export type TCellHeader = {
  text: string;
  isButtonNeed: boolean;
  name?: string;
  onClickButton?: (nameCell: string) => void;
  contacts?: TContacts;
  setSortList?: React.Dispatch<React.SetStateAction<TContacts>>;
};

export type TAppInitialState = {
  contacts: TContacts | undefined;
  user: { email: string; password: string } | null;
  accessToken: string | null;

  isAuth: boolean;
  loader: boolean;
  fail: boolean;
  textError: string;
};

export type TState = {
  app: TAppInitialState;
};
