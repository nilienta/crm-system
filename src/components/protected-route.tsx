import React, { FC } from 'react';
// import { Route, Redirect, useLocation, RouteProps } from 'react-router-dom';
import { Route, RouteProps } from 'react-router-dom';

// import { getCookie } from '../utils/cookie';
// import { Loader } from '../pages/loader/loader';
// import { useAppSelector } from '../services/types/types';
// TODO: раскомитить
export const ProtectedRoute: FC<RouteProps> = ({ children, ...rest }) => {
  //   const { isAuth, loader } = useAppSelector((state) => state.auth);
  //   const location = useLocation();
  //   const isAccessToken = getCookie('accessToken');

  //   if (!isAuth && !isAccessToken) {
  //     return (
  //       <Route {...rest}>
  //         <Redirect to={{ pathname: '/login', state: { from: location } }} />
  //       </Route>
  //     );
  //   }

  //   if (!isAuth && isAccessToken) {
  //     return <Loader />;
  //   }

  //   if (loader) {
  //     return <Loader />;
  //   }

  return <Route {...rest}>{children}</Route>;
};
