import { MouseEventHandler } from 'react';

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

export type TTable = {
  contacts: TContacts;
};

export type TButton = {
  children?: string;
  color?: 'black' | 'yellow' | 'white';
  onClick?: MouseEventHandler;
  htmlType: 'button' | 'submit' | 'reset';
};
