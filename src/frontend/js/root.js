import React from 'react';
import createHistory from 'history/createHashHistory';
import { Route, Link, Switch } from "react-router-dom";
import { ConnectedRouter } from 'react-router-redux';

import Layout from './components/Layout';
import Home from './components/Home';
import ListLocationsContainer from './containers/ListLocationsContainer';
import NotFound from './components/NotFound';

const history = createHistory();

export default props => (
    <ConnectedRouter history={history}>
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/list/:page?" component={ListLocationsContainer} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </ConnectedRouter>
);
