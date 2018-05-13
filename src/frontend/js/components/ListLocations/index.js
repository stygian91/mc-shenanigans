import React from 'react';
import axios from 'axios';

import LocationsTable from './Table';
import Paging from './Paging';
import AddLocation from './AddLocation';

class ListLocations extends React.Component {
    componentDidMount() {
        this.requestCurrentPage();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.page !== this.props.page) {
            this.requestCurrentPage();
        }
    }

    requestCurrentPage = () => {
        this.props.requestPage(this.props.page);
    }

    render() {
        return (
            <div className="listing">
                <h1 className="title text-center">Location Listing</h1>

                <LocationsTable items={this.props.items}/>

                <Paging page={this.props.page} totalPages={this.props.totalPages}/>

                <AddLocation />
            </div>
        );
    }
}

export default ListLocations;
