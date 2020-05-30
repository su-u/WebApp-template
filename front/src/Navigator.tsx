import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import styled from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import { GlobalStyle } from './components/GlobalStyle';
import { NavBar } from '@/components/header/NavBar';
import { App } from '@/containers/App';
import { AuthApp } from '@/containers/AuthApp';
import ToDoApp from '@/containers/TodoApp';
import { AuthOnly } from '@/components/AuthOnly';

export const Router: React.FC<{ path: string }> = ({ path = '' }) => {
  return (
    <Switch>
      <Route exact path={`${path}/`} component={App} />
      <Route exact path={`${path}/todo`} component={ToDoApp} />
      <Route exact path={`${path}/auth`} component={AuthApp} />
      <AuthOnly>
        <Route exact path={`${path}/appbar`} component={NavBar} />
      </AuthOnly>
    </Switch>
  );
};

export const Navigator: React.FC = () => (
  <StylesProvider injectFirst>
    <GlobalStyle />
    <HashRouter>
      <MainContent>
        <Router path="" />
      </MainContent>
    </HashRouter>
  </StylesProvider>
);

const MainContent = styled.div`
  margin-top: 64px;
`;
