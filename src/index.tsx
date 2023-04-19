/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { App } from './components/app/app';
import { appReducer } from './services/reducers/app';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const rootReducer = combineReducers({
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
