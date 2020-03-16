import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import GlobalStyle from './components/GlobalStyle';
import ButtonAppBar from '@/components/header/NavBar';
import App from '@/containers/App';
import AuthApp from '@/containers/AuthApp';
import ToDoApp from '@/containers/TodoApp';
import AuthOnly from '@/components/AuthOnly';

// eslint-disable-next-line react/prop-types
export const Router = ({ path = '' }) => {
  return (
    <Switch>
      <Route exact path={`${path}/`} component={App} />
      <Route exact path={`${path}/todo`} component={ToDoApp} />
      <Route exact path={`${path}/auth`} component={AuthApp} />
      <AuthOnly>
        <Route exact path={`${path}/appbar`} component={ButtonAppBar} />
      </AuthOnly>
    </Switch>
  );
};

const Navigator = () => (
  <StylesProvider injectFirst>
    <GlobalStyle />
    <HashRouter>
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
