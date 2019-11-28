import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import App from '@/App';
import Top from '@/container/Top';
import GlobalStyle from "@/components/GlobalStyle";
import HeaderComponent from "@/components/Header";

export default () => (
    <>
        <GlobalStyle />
        <HashRouter>
            <HeaderComponent/>
            <Switch>
                <Route exact path={'/'} component={Top} />
                <Route path={'/:name'} component={App} />
            </Switch>
        </HashRouter>
    </>
);
