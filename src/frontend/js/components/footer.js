import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">© 2017-2018 Company Name</p>
        <ul className="list-inline">
          <li className="list-inline-item"><Link to="#">Privacy</Link></li>
          <li className="list-inline-item"><Link to="#">Terms</Link></li>
          <li className="list-inline-item"><Link to="#">Support</Link></li>
        </ul>
    </footer>
);
