import React from 'react';
import axios from 'axios';

import LocationsTable from './table';
import Paging from './paging';

class ListLocations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: this.getPage(),
            items: [],
        };

        this.updatePage();
    }

    getPage = () => {
        const page = parseInt(this.props.match.params.page) || 1;
        if (page < 1) {
            return 1;
        }

        return page;
    };

    updatePage = () => {
        const page = this.getPage();
        axios.get(`/api/locations/?page=${page}`)
            .then(response => {
                const { locations: items, totalPages } = response.data;
                this.setState({...this.state, items, totalPages});
            })
            .catch(console.error);
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.page !== this.props.match.params.page) {
            this.updatePage();
            this.setState({...this.state, page: this.getPage()});
        }
    }

    render() {
        return (
            <div className="listing">
                <h1 className="title text-center">Location Listing</h1>

                <LocationsTable items={this.state.items}/>

                <Paging page={this.state.page} totalPages={this.state.totalPages}/>
            </div>
        );
    }
}

export default ListLocations;
