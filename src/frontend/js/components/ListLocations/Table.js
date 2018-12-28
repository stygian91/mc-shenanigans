import React from 'react';

import Row from './Row';

// TODO: show confirmation popup on delete
const Table = (props) => {
  const rows = props.items.map(item => (
    <Row item={item} requestDeleteItem={props.requestDeleteItem} key={item.name} />
  ));

  return (
    <table className="table table-hover table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">X</th>
          <th scope="col">Y</th>
          <th scope="col">Z</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default Table;
