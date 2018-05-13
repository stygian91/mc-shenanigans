import { put, all, call, takeLatest } from 'redux-saga/effects';

import { REQUEST_ITEMS, setItems, setTotalPages } from '../actions';
import getLocations from '../api/get-locations';

const requestLocationsWorker = function *({page}) {
    const response = yield call(getLocations, { page });
    const locations = response.data.locations || [];
    const totalPages = response.data.totalPages || 1;
    yield all([
        put(setItems(locations)),
        put(setTotalPages(totalPages)),
    ]);
};

const requestLocationsWatcher = function* () {
    yield takeLatest(REQUEST_ITEMS, requestLocationsWorker);
};

export default requestLocationsWatcher;
