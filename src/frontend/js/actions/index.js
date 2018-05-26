export const SET_ITEMS = 'SET_ITEMS';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const REQUEST_ITEMS_SUCCESS = 'REQUEST_ITEMS_SUCCESS';
export const REQUEST_ITEMS_ERROR = 'REQUEST_ITEMS_ERROR';
export const SET_PAGE = 'SET_PAGE';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const REQUEST_ADD_ITEM = 'REQUEST_ADD_ITEM';
export const REQUEST_ADD_ITEM_SUCCESS = 'REQUEST_ADD_ITEM_SUCCESS';
export const REQUEST_ADD_ITEM_ERROR = 'REQUEST_ADD_ITEM_ERROR';
export const REQUEST_DELETE_ITEM = 'REQUEST_DELETE_ITEM';
export const REQUEST_DELETE_ITEM_SUCCESS = 'REQUEST_DELETE_ITEM_SUCCESS';
export const REQUEST_DELETE_ITEM_ERROR = 'REQUEST_DELETE_ITEM_ERROR';

export const setItems = items => ({
  type: SET_ITEMS,
  items,
});

export const requestItems = page => ({
  type: REQUEST_ITEMS,
  page,
});

export const requestItemsSuccess = (locations, totalPages) => ({
  type: REQUEST_ITEMS_SUCCESS,
  locations,
  totalPages,
});

export const requestItemsError = error => ({
  type: REQUEST_ITEMS_ERROR,
  error,
});

export const setPage = page => ({
  type: SET_PAGE,
  page,
});

export const setTotalPages = totalPages => ({
  type: SET_TOTAL_PAGES,
  totalPages,
});

export const requestAddItem = item => ({
  type: REQUEST_ADD_ITEM,
  item,
});

export const requestAddItemSuccess = () => ({
  type: REQUEST_ADD_ITEM_SUCCESS,
});

export const requestAddItemError = error => ({
  type: REQUEST_ADD_ITEM_ERROR,
  error,
});

export const requestDeleteItem = name => ({
  type: REQUEST_DELETE_ITEM,
  name,
});

export const requestDeleteItemSuccess = () => ({
  type: REQUEST_DELETE_ITEM_SUCCESS,
});

export const requestDeleteItemError = error => ({
  type: REQUEST_DELETE_ITEM_ERROR,
  error,
});
