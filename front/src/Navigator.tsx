import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import App from './containers/App';
import NavigationHeader from '@/components/Header/NavigationHeader';

// eslint-disable-next-line react/prop-types
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
