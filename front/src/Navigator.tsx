import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from './components/GlobalStyle';
import App from './containers/App';
import ButtonAppBar from '@/components/Header/NavBar';

// eslint-disable-next-line react/prop-types
export const Router = ({ path = '' }) => {
  return (
    <Switch>
      <Route exact path={`${path}/`} component={App} />
      <Route exact path={`${path}/test`} component={ButtonAppBar} />
    </Switch>
  );
};

const Navigator = () => (
  <StylesProvider injectFirst>
    <GlobalStyle />
    <HashRouter>
      <ButtonAppBar />
      <Router />
    </HashRouter>
  </StylesProvider>
);

export default Navigator;
