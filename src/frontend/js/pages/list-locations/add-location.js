import React from 'react';
import axios from 'axios';

import Modal from '../../components/modal';

class AddLocation extends React.Component {
    constructor(props) {
        super(props);
        this.inputs = {};
        this.state = {
            loading: false,
            modalText: '',
            modalTitle: '',
        };
    }

    inputRef = name => element => {
        this.inputs[name] = element;
    };

    modalRef = element => {
        this.modal = element;
    }

    showModal = (modalTitle, modalText) => {
        this.setState({...this.state, modalText, modalTitle});
        this.modal.open();
    };

    onSubmit = () => {
        if (this.state.loading) {
            return;
        }

        const name = this.inputs.name.value;
        const coords = {};
        for (let coord of ['x', 'y', 'z']) {
            coords[coord] = parseFloat(this.inputs[coord].value);
            if (Number.isNaN(coords[coord])) {
                this.showModal('Error', `Invalid value for ${coord.toUpperCase()}`)
                return;
            }
        }

        this.setState({...this.state, loading: true})
        axios(
            {
                url: `/api/locations/${name}`,
                method: 'POST',
                data: coords,
            }
        ).then(() => this.showModal('Success', 'Location added successfully.'))
        .catch(error => {
            const modalText = (error.response.status === 409) ? 'Duplicate name' : 'Error while performing request';
            this.showModal('Error', modalText);
        })
        .finally(() => this.setState({...this.state, loading: false}));
    };

    render() {
        return (
            <div className="form-add-location">
                <h5>Add a location</h5>

                <div className="row">
                    <div className="col-6">
                        <label>
                            Name
                            <input type="text" ref={this.inputRef('name')} className="form-control"/>
                        </label>
                    </div>

                    <div className="col-2">
                        <label>
                            X
                            <input type="text" ref={this.inputRef('x')} className="form-control"/>
                        </label>
                    </div>

                    <div className="col-2">
                        <label>
                            Y
                            <input type="text" ref={this.inputRef('y')} className="form-control"/>
                        </label>
                    </div>

                    <div className="col-2">
                        <label>
                            Z
                            <input type="text" ref={this.inputRef('z')} className="form-control"/>
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Add</button>
                    </div>
                </div>

                <Modal title={this.state.modalTitle} ref={this.modalRef} >
                    {this.state.modalText}
                </Modal>
            </div>
        );
    }
}

export default AddLocation;
