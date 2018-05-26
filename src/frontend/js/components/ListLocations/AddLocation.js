import React from 'react';

class AddLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      x: '',
      y: '',
      z: '',
    };
  }

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.state.name.length) {
      return;
    }

    for (const coord of ['x', 'y', 'z']) {
      if (Number.isNaN(parseInt(this.state[coord]))) {
        return;
      }
    }

    this.props.requestAddItem(this.state);
  };

  onChange = key => ({ target: { value } }) => this.setState({ ...this.state, [key]: value });

  render() {
    return (
      <div className="form-add-location">
        <h5>Add a location</h5>

        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="col-6">
              <label>
              Name
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  onChange={this.onChange('name')}
                />
              </label>
            </div>

            <div className="col-2">
              <label>
                X
                <input
                  type="text"
                  className="form-control"
                  value={this.state.x}
                  onChange={this.onChange('x')}
                />
              </label>
            </div>

            <div className="col-2">
              <label>
                Y
                <input
                  type="text"
                  className="form-control"
                  value={this.state.y}
                  onChange={this.onChange('y')}
                />
              </label>
            </div>

            <div className="col-2">
              <label>
                Z
                <input
                  type="text"
                  className="form-control"
                  value={this.state.z}
                  onChange={this.onChange('z')}
                />
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-3">
              <button type="submit" className="btn btn-primary">Add</button>
            </div>
          </div>
        </form>

      </div>
    );
  }
}

export default AddLocation;
