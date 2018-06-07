/**
 * External Dependencies:
 */
import { put, call, takeEvery, all, select } from 'redux-saga/effects';

/**
 * Internal Dependencies:
 */
import {
  REQUEST_DELETE_ITEM,
  REQUEST_DELETE_ITEM_SUCCESS,
  REQUEST_DELETE_ITEM_ERROR,
  requestDeleteItemSuccess,
  requestDeleteItemError,
  requestItems,
} from '../actions';
import deleteItem from '../api/delete-item';
import takeFirst from './take-first';

const deleteWorker = function* ({ name }) {
  try {
    const response = yield call(deleteItem, name);
    if (!response.data.success) {
      const { error: { message: error } } = response.data;
      throw error;
    }

    yield put(requestDeleteItemSuccess());
  } catch (error) {
    yield put(requestDeleteItemError(error));
  }
};

const deleteSuccessWorker = function* () {
  const { listing: { page } } = yield select();
  yield put(requestItems(page));
};

const deleteErrorWorker = function* (error) {
  yield console.error(error);
};

const deleteWatcher = function* () {
  yield all([
    takeFirst(REQUEST_DELETE_ITEM, deleteWorker),
    takeEvery(REQUEST_DELETE_ITEM_SUCCESS, deleteSuccessWorker),
    takeEvery(REQUEST_DELETE_ITEM_ERROR, deleteErrorWorker),
  ]);
};

export default deleteWatcher;
