import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { SET_ITEMS, SET_PAGE, SET_TOTAL_PAGES } from '../actions';

const defaultState = {
  items: [],
  totalPages: 1,
  page: 1,
};

const listingReducer = (state = defaultState, {
  type, items, page, totalPages,
}) => {
  switch (type) {
    case SET_ITEMS:
      return { ...state, items: items.slice() };

    case SET_TOTAL_PAGES:
      return { ...state, totalPages };

    case SET_PAGE:
      return { ...state, page };

    default:
      return state;
  }
};

export default combineReducers({
  listing: listingReducer,
  router: routerReducer,
});
