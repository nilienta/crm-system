/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
import React from 'react';

import { Table } from '../table/table';

import styles from './contacts.module.scss';

interface TContactsInterface
  //   // TODO разобраться со строчкой extends Omit<
  extends Omit<React.HTMLProps<HTMLInputElement>, 'size'> {
  props?: string;
}

export const Contacts: React.FC<TContactsInterface> = () => {
  return (
    <main className={styles.contacts}>
      <Table
        contacts={[
          {
            id: 100000,
            name: 'Cheese',
            number: 490000,
            year: '2016-11-22T17:14:00',
            ard: '2016-11-22T17:14:00',
            companyId: 123456689,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 200000,
            name: 'Milk',
            number: 190000,
            year: '2016-11-22T17:14:00',
            ard: '2016-11-22T17:14:00',
            companyId: 123456789,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 300000,
            name: 'Yoghurt',
            number: 240000,
            year: '2016-11-22T17:10:00',
            ard: '2010-11-22T17:14:00',
            companyId: 123457789,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 400000,
            name: 'Heavy Cream',
            number: 390000,
            year: '2016-10-20T17:14:00',
            ard: '2010-11-22T17:14:00',
            companyId: 123456788,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 500000,
            name: 'Butter',
            number: 900000,
            year: '2016-10-22T17:14:00',
            ard: '2010-11-22T17:14:00',
            companyId: 123456689,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 600000,
            name: 'Sour Cream ',
            number: 290000,
            year: '2010-11-22T17:14:00',
            ard: '2016-10-22T17:14:00',
            companyId: 123453489,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 700000,
            name: 'Fancy French Cheese 🇫🇷',
            number: 190999,
            year: '2006-11-22T17:10:00',
            ard: '2006-10-22T17:10:00',
            companyId: 343456789,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 800000,
            name: 'Fancy French Cheese 🇫🇷',
            number: 199990,
            year: '2016-11-22T17:14:00',
            ard: '2016-11-22T17:20:00',
            companyId: 123456734,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 900000,
            name: 'Fancy French Cheese 🇫🇷',
            number: 199000,
            year: '2006-10-22T17:10:00',
            ard: '2006-10-22T17:10:00',
            companyId: 123456789,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 100001,
            name: 'Fancy French Cheese 🇫🇷',
            number: 190990,
            year: '2006-11-22T17:10:00',
            ard: '2016-10-22T17:14:00',
            companyId: 123456789,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 110000,
            name: 'Fancy French Cheese 🇫🇷',
            number: 199000,
            year: '2017-11-22T17:14:00',
            ard: '2017-11-22T17:14:00',
            companyId: 123456789,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 120000,
            name: 'Fancy French Cheese 🇫🇷',
            number: 190090,
            year: '2010-11-22T17:14:00',
            ard: '2010-11-22T17:14:00',
            companyId: 123456789,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 130000,
            name: 'Fancy French Cheese 🇫🇷',
            number: 199000,
            year: '2017-11-22T17:14:00',
            ard: '2012-11-22T17:14:00',
            companyId: 123456789,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 140000,
            name: 'Fancy French Cheese 🇫🇷',
            number: 190090,
            year: '2018-11-22T17:14:00',
            ard: '2012-11-22T17:14:00',
            companyId: 123456789,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
          {
            id: 150000,
            name: 'Fancy French Cheese 🇫🇷',
            number: 190900,
            year: '2015-11-22T17:14:00',
            ard: '2013-11-22T17:14:00',
            companyId: 123456789,
            email: 'emaill1234@gmail.com',
            phoneNumber: 7674822811,
            companyAddress: '10 Name Street',
          },
        ]}
      />
    </main>
  );
};
