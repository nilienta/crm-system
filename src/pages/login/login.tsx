import React, { useCallback, useRef, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Logo } from '../../components/icons/index';
import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';

import { useForm } from '../../services/hooks/use-form';
import { signIn } from '../../services/actions/app';
import {
  useAppDispatch,
  useAppSelector,
  TState,
} from '../../services/types/types';
import { users } from '../../services/mocks/mocks';

import styles from './login.module.scss';

export const LoginPage: React.FC = () => {
  const { isAuth } = useAppSelector((state: TState) => state.app);
  const dispatch = useAppDispatch();
  const { values, handleInputChange, setValues } = useForm({
    email: '',
    password: '',
  });

  const form = useRef(null);
  useEffect(() => {
    const formData = new FormData(form.current as HTMLFormElement);
    setValues({
      email: String(formData.get('email')),
      password: String(formData.get('password')),
    });
  }, []);

  const login = useCallback(
    (evt: React.SyntheticEvent) => {
      evt.preventDefault();
      users.forEach((user) => {
        if (user.email === values.email) {
          if (user.password === values.password) {
            dispatch(signIn(values));
          }
        }
      });
    },
    [values, dispatch]
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
        className={styles['login-page__form']}
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
          <Button color="black" htmlType="submit" text="Sign In" />
        </div>
      </form>
    </main>
  );
};
