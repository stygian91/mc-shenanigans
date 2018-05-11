import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <header className="header d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">
            <Link to="/">Shenanigans</Link>
        </h5>

        <nav className="my-2 my-md-0 mr-md-3">
            <Link className="p-2 text-dark" to="/list">List Locations</Link>
        </nav>

        <Link className="btn btn-outline-primary" to="#">Sign up</Link>
    </header>
);
