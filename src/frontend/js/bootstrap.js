import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../sass/bootstrap.scss';

import Layout from './components/layout';
import Home from './pages/home';
import ListLocations from './pages/list-locations';
import NotFound from './pages/not-found';

const App = () => (
    <Router>
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/list/:page?" component={ListLocations} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </Router>
);

ReactDOM.render(
  <App />,
  document.querySelector('.app-root')
);
