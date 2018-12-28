import React from 'react';

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
  }

  displayRow = () => {
    const {
      item: {
        name,
        x,
        y,
        z,
      },
      requestDeleteItem,
    } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{x}</td>
        <td>{y}</td>
        <td>{z}</td>
        <td className="row-actions">
          <button
            className="btn btn-primary"
            onClick={() => { this.setState({ isEditing: true }); }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => requestDeleteItem(name)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }

  editRow = () => {
    const {
      item: {
        name,
        x,
        y,
        z,
      },
    } = this.props;

    return (
      <tr>
        <td>{name}</td>
        <td>{x}</td>
        <td>{y}</td>
        <td>{z}</td>
        <td className="row-actions">
          <button className="btn btn-primary">Save</button>
          <button
            className="btn btn-danger"
            onClick={() => { this.setState({ isEditing: false }); }}
          >
            Cancel
          </button>
        </td>
      </tr>
    );
  }

  render() {
    const { isEditing } = this.state;
    return isEditing ? this.editRow(this.props) : this.displayRow();
  }
}

export default Row;
