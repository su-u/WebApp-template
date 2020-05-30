import React from 'react';
import { Provider } from 'react-redux';
import { Navigator } from './Navigator';

export const Root = ({ store }: any) => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
