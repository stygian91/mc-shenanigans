import React from 'react';

import Header from './header';
import Footer from './footer';

export default props => (
    <div className="wrap">
        <Header />

        <div className="main container">
            {props.children}
        </div>

        <Footer />
    </div>
);
