import { put, all, call, takeEvery, select } from 'redux-saga/effects';

import addItem from '../api/add-item';
import takeFirst from './take-first';
import {
  REQUEST_ADD_ITEM,
  REQUEST_ADD_ITEM_SUCCESS,
  REQUEST_ADD_ITEM_ERROR,
  requestItems,
  requestAddItemSuccess,
  requestAddItemError,
} from '../actions';

const addLocationWorker = function* ({ item }) {
  try {
    const response = yield call(addItem, item);
    if (!response.data.success) {
      const { error: { message: error } } = response.data;
      throw error;
    }

    yield put(requestAddItemSuccess());
  } catch (error) {
    yield put(requestAddItemError(error));
  }
};

const addLocationSuccessWorker = function* () {
  // TODO: show success message
  const { listing: { page } } = yield select();
  yield put(requestItems(page));
};

const addLocationErrorWorker = function* ({ error }) {
  // TODO: show error message
  /* eslint require-yield: 0 */
  console.log(error);
  /* eslint require-yield: 1 */
};

const addLocationWatcher = function* () {
  yield all([
    takeFirst(REQUEST_ADD_ITEM, addLocationWorker),
    takeEvery(REQUEST_ADD_ITEM_SUCCESS, addLocationSuccessWorker),
    takeEvery(REQUEST_ADD_ITEM_ERROR, addLocationErrorWorker),
  ]);
};

export default addLocationWatcher;