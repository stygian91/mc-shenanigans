import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">MC Shenanigans</p>
        <ul className="list-inline">
          <li className="list-inline-item"><Link to="#">Memes</Link></li>
          <li className="list-inline-item"><Link to="#">For</Link></li>
          <li className="list-inline-item"><Link to="#">Life</Link></li>
        </ul>
    </footer>
);
