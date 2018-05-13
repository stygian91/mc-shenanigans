import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import RootComponent from './root';
import store from './store';
import '../sass/bootstrap.scss';

const App = () => (
    <Provider store={store}>
        <RootComponent />
    </Provider>
);

ReactDOM.render(
  <App />,
  document.querySelector('.app-root')
);
