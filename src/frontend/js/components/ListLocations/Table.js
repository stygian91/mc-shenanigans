import React from 'react';

// TODO: show confirmation popup on delete
const Table = (props) => {
  const rows = props.items.map(item => (
    <tr key={item.name}>
      <td>{item.name}</td>
      <td>{item.x}</td>
      <td>{item.y}</td>
      <td>{item.z}</td>
      <td className="row-actions">
        <button className="btn btn-primary">Edit</button>
        <button
          className="btn btn-danger"
          onClick={() => props.requestDeleteItem(item.name)}
        >
          Delete
        </button>
      </td>
    </tr>
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
