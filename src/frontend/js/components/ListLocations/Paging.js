import React from 'react';
import { Link } from 'react-router-dom';

const renderPrev = (page, totalPages) => {
  if (page > totalPages) {
    return (<Link className="list-paging__prev" to={`/list/${totalPages}`}>&lt; Last</Link>);
  }

  if (page <= 1) {
    return null;
  }

  return (
    <Link className="list-paging__prev" to={`/list/${page - 1}`}>&lt; Previous</Link>
  );
};

const renderNext = (page, totalPages) => {
  if (page >= totalPages) {
    return null;
  }

  return (
    <Link className="list-paging__next" to={`/list/${page + 1}`}>Next &gt;</Link>
  );
};

export default ({ page, totalPages }) => (
  <div className="list-paging">
    {renderPrev(page, totalPages)}
    {renderNext(page, totalPages)}
  </div>
);
