import { connect } from 'react-redux';

import { requestItems, requestDeleteItem, setPage } from '../actions';
import ListLocations from '../components/ListLocations';

const mapStateToProps = (state, { match: { params } }) => {
  let page = parseInt(params.page);
  if (Number.isNaN(page) || page < 1) {
    page = 1;
  }

  return {
    items: state.listing.items,
    page,
    totalPages: state.listing.totalPages,
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentPage: page => dispatch(setPage(page)),
  requestPage: page => dispatch(requestItems(page)),
  requestDeleteItem: name => dispatch(requestDeleteItem(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListLocations);
