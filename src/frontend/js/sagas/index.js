import { all } from 'redux-saga/effects';

import requestLocationsWatcher from './request-locations';
// import addLocationWatcher from './add-location';

const rootSaga = function*() {
    yield all([
        requestLocationsWatcher(),
    ]);
}

export default rootSaga;
