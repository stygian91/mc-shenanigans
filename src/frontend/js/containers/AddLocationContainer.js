import { connect } from 'react-redux';

import AddLocation from '../components/ListLocations/AddLocation';
import { requestAddItem } from '../actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  requestAddItem: item => dispatch(requestAddItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLocation);
