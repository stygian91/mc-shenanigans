/**
 * External Dependencies:
 */
import { put, all, call, takeLatest, takeEvery } from 'redux-saga/effects';

/**
 * Internal Dependencies:
 */
import {
  REQUEST_ITEMS,
  REQUEST_ITEMS_SUCCESS,
  REQUEST_ITEMS_ERROR,
  requestItemsSuccess,
  requestItemsError,
  setItems,
  setTotalPages,
} from '../actions';
import getLocations from '../api/get-locations';

const requestLocationsWorker = function* ({ page }) {
  try {
    const response = yield call(getLocations, { page });
    const locations = response.data.locations || [];
    const totalPages = parseInt(response.data.totalPages) || 1;
    yield put(requestItemsSuccess(locations, totalPages));
  } catch (error) {
    yield put(requestItemsError(error));
  }
};

const requestItemsErrorWorker = function* ({ error }) {
  // TODO: show error message
  /* eslint require-yield: 0 */
  console.log(error);
  /* eslint require-yield: 1 */
};

const requestItemsSuccessWorker = function* ({ locations, totalPages }) {
  yield all([
    put(setItems(locations)),
    put(setTotalPages(totalPages)),
  ]);
};

const requestLocationsWatcher = function* () {
  yield all([
    takeLatest(REQUEST_ITEMS, requestLocationsWorker),
    takeEvery(REQUEST_ITEMS_SUCCESS, requestItemsSuccessWorker),
    takeEvery(REQUEST_ITEMS_ERROR, requestItemsErrorWorker),
  ]);
};

export default requestLocationsWatcher;
