import React from 'react';
import axios from 'axios';

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
        console.log(this.state);
    };

    onChange = key => ({target: {value}}) => this.setState({...this.state, [key]: value});

    // onSubmit = () => {
    //     if (this.state.loading) {
    //         return;
    //     }

    //     const name = this.inputs.name.value;
    //     const coords = {};
    //     for (let coord of ['x', 'y', 'z']) {
    //         coords[coord] = parseFloat(this.inputs[coord].value);
    //         if (Number.isNaN(coords[coord])) {
    //             this.showModal('Error', `Invalid value for ${coord.toUpperCase()}`)
    //             return;
    //         }
    //     }

    //     this.setState({...this.state, loading: true})
    //     axios(
    //         {
    //             url: `/api/locations/${name}`,
    //             method: 'POST',
    //             data: coords,
    //         }
    //     ).then(() => this.showModal('Success', 'Location added successfully.'))
    //     .catch(error => {
    //         const modalText = (error.response.status === 409) ? 'Duplicate name' : 'Error while performing request';
    //         this.showModal('Error', modalText);
    //     })
    //     .finally(() => this.setState({...this.state, loading: false}));
    // };

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
