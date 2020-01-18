import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import App from './containers/App';
import HeaderComponent from '@/components/HeaderComponent';

export const Router = ({ path = '' }) => {
  return (
    <Switch>
      <Route exact path={`${path}/`} component={App} />
    </Switch>
  );
};

const Navigator = () => (
  <>
    <GlobalStyle />
    <HashRouter>
      <HeaderComponent />
      <Router />
    </HashRouter>
  </>
);

export default Navigator;
