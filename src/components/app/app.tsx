import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ProtectedRoute } from '../protected-route';
import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';

import 'normalize.css';
import './app.scss';

// TODO: добавить  <HelmetProvider>
export const App = () => {
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
            <HomePage />
          </Route>
        </Switch>
      </React.StrictMode>
    </Router>
  );
};
