import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from './components/GlobalStyle';
import ButtonAppBar from '@/components/Header/NavBar';
import App from '@/containers/App';
import AuthApp from '@/containers/AuthApp';

// eslint-disable-next-line react/prop-types
export const Router = ({ path = '' }) => {
  return (
    <Switch>
      <Route exact path={`${path}/`} component={App} />
      <Route exact path={`${path}/test`} component={ButtonAppBar} />
      <Route exact path={`${path}/auth`} component={AuthApp} />
    </Switch>
  );
};

const Navigator = () => (
  <StylesProvider injectFirst>
    <GlobalStyle />
    <HashRouter>
      <ButtonAppBar />
      <MainContent>
        <Router />
      </MainContent>
    </HashRouter>
  </StylesProvider>
);

const MainContent = styled.div`
  margin-top: 64px;
`;

export default Navigator;
