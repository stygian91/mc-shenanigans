import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default props => (
    <div className="wrap">
        <Header />

        <div className="main container">
            {props.children}
        </div>

        <Footer />
    </div>
);
