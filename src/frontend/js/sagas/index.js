import { all } from 'redux-saga/effects';

import requestLocationsWatcher from './request-locations';
import addLocationWatcher from './add-location';
import deleteLocationWatcher from './delete-location';

const rootSaga = function* () {
  yield all([
    requestLocationsWatcher(),
    addLocationWatcher(),
    deleteLocationWatcher(),
  ]);
};

export default rootSaga;
