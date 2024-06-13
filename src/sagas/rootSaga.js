import { all } from 'redux-saga/effects';
import companySaga  from './companySaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([
    ...companySaga,
    ...userSaga,
  ]);
}
