export const SET_ITEMS = 'SET_ITEMS';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const ADD_ITEM = 'ADD_ITEM';

export const setItems = items => ({
    type: SET_ITEMS,
    items,
});

export const requestItems = page => ({
    type: REQUEST_ITEMS,
    page
});

export const setTotalPages = totalPages => ({
    type: SET_TOTAL_PAGES,
    totalPages
});

export const addItem = item => ({
    type: ADD_ITEM,
    item
});
