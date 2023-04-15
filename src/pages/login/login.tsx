/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable no-constant-condition */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Logo } from '../../components/icons/index';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';

import { useForm } from '../../services/hooks/use-form';

import styles from './login.module.scss';

const users = [
  {
    email: 'Petrov@gmail.com',
    password: 'password1!',
  },
];

export const LoginPage: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { values, handleInputChange, setValues } = useForm({
    email: '',
    password: '',
  });

  const form = useRef(null);
  useEffect(() => {
    const formData = new FormData(form.current);
    setValues({
      email: String(formData.get('email')),
      password: String(formData.get('password')),
    });
  }, []);

  // TODO вынести функцию checkUser
  const login = useCallback(
    (evt: React.SyntheticEvent) => {
      evt.preventDefault();
      users.forEach((user) => {
        if (user.email === values.email) {
          setIsAuth(user.password === values.password);
          console.log(user.password === values.password);
        }
      });
    },
    [values]
  );

  if (isAuth) {
    return (
      <Route>
        <Redirect to="/" />
      </Route>
    );
  }

  return (
    <main className={styles['login-page']}>
      <div className={styles['login-page__logo']}>
        <Logo />
      </div>
      <form
        className={styles.form}
        onSubmit={login}
        encType="multipart/form-data"
        method="post"
        ref={form}
      >
        <h1 className={styles['login-page__title']}>
          Welcome To CRM System Sign In To Your Account
        </h1>
        <Input
          value="Petrov@gmail.com"
          type="email"
          name="email"
          placeholder="Login"
          onChange={handleInputChange}
        />
        <Input
          value="password1!"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
        />
        <div className={styles['login-page__btn']}>
          <Button color="black" htmlType="submit">
            Sign In
          </Button>
        </div>
      </form>
    </main>
  );
};
