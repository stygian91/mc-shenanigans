import React from 'react';

import LocationsTable from './Table';
import Paging from './Paging';
import AddLocation from '../../containers/AddLocationContainer';

class ListLocations extends React.Component {
  componentDidMount() {
    this.requestCurrentPage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.page !== this.props.page) {
      this.requestCurrentPage();
    }
  }

  requestCurrentPage = () => {
    this.props.setCurrentPage(this.props.page);
    this.props.requestPage(this.props.page);
  };

  render() {
    return (
      <div className="listing">
        <h1 className="title text-center">Location Listing</h1>

        <LocationsTable requestDeleteItem={this.props.requestDeleteItem} items={this.props.items} />

        <Paging page={this.props.page} totalPages={this.props.totalPages} />

        <AddLocation />
      </div>
    );
  }
}

export default ListLocations;
