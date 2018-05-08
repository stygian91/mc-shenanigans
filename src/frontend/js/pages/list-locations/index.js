import React from 'react';

import LocationsTable from './table';
import axios from 'axios';

class ListLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            items: [
            ],
        };
    }

    componentDidMount() {
        axios.get(`/api/locations/?page=${this.state.page}`)
            .then(response => {
                this.setState({...this.state, items: response.data.locations});
            })
            .catch(console.error);
    }

    render() {
        return (
            <div className="listing">
                <h1 className="title text-center">Location Listing</h1>

                <LocationsTable items={this.state.items}/>
            </div>
        );
    }
}

export default ListLocations;
