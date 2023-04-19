import React from 'react';
import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';
import { getCookie } from '../utils/cookie';
import { useAppSelector, TState } from '../services/types/types';

export const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const { isAuth } = useAppSelector((state: TState) => state.app);
  const location = useLocation();
  const isAccessToken = getCookie('accessToken');

  if (!isAuth && !isAccessToken) {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      </Route>
    );
  }

  return <Route {...rest}>{children}</Route>;
};
