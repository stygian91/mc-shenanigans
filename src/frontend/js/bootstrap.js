import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => (
    <h1>We're home boyos.</h1>
);

const NotFound = () => (
    <h1>Path not found.</h1>
);

const App = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(
  <App />,
  document.querySelector('.app-root')
);