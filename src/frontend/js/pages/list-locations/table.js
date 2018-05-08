import React from 'react';

export default props => {
  const rows = props.items.map((item, index) => (
    <tr key={index}>
      <td>{item.name}</td>
      <td>{item.x}</td>
      <td>{item.y}</td>
      <td>{item.z}</td>
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
        </tr>
      </thead>

      <tbody>
        {rows}
      </tbody>
    </table>
  );
}
