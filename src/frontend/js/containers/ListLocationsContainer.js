import React from 'react';
import { connect } from 'react-redux';

import { requestItems } from '../actions';
import ListLocations from '../components/ListLocations';

const mapStateToProps = (state, { match: { params: params } }) => {
    const page = parseInt(params.page) || 1;

    return {
        items: state.listing.items,
        page,
        totalPages: state.listing.totalPages,
    };
};

const mapDispatchToProps = dispatch => ({
    requestPage: page => dispatch(requestItems(page)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListLocations);
