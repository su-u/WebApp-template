import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import App from './containers/App';
import SimpleHeader from '@/components/Header/SimpleHeader';
import NavigationHeader from '@/components/Header/NavigationHeader';

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
      <NavigationHeader />
      <Router />
    </HashRouter>
  </>
);

export default Navigator;
