import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ProtectedRoute } from '../protected-route';
import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';

import { getContacts } from '../../services/actions/app';
import { useAppDispatch } from '../../services/types/types';

import 'normalize.css';
import './app.scss';

export const App = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <React.StrictMode>
        <Switch>
          <ProtectedRoute path="/" exact>
            <HomePage />
          </ProtectedRoute>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route>
            <LoginPage />
          </Route>
        </Switch>
      </React.StrictMode>
    </Router>
  );
};
