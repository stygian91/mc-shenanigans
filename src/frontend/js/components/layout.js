import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <div className="wrap">
    <Header />

    <div className="main container">
      {props.children}
    </div>

    <Footer />
  </div>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
