import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { SET_ITEMS, SET_TOTAL_PAGES } from '../actions';

const defaultState = {
    items: [],
    totalPages: 1,
};

const listingReducer = (state = defaultState, {type, items, totalPages}) => {
    switch(type) {
        case SET_ITEMS:
            return {...state, items: items.slice()};

        case SET_TOTAL_PAGES:
            return {...state, totalPages};

        default:
            return state;
    }
};

export default combineReducers({
    listing: listingReducer,
    router: routerReducer,
});
