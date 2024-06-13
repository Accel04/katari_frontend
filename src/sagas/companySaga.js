import { put, takeLatest, call } from 'redux-saga/effects';
import {
  FETCH_COMPANIES_REQUEST,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAILURE,
} from '../actions/companyActions';
import { fetchCompanies } from '../api/index';

function* fetchCompaniesSaga() {
  try {
    const companies = yield call(fetchCompanies);
    yield put({ type: FETCH_COMPANIES_SUCCESS, payload: companies });
  } catch (error) {
    yield put({ type: FETCH_COMPANIES_FAILURE, payload: error.message });
  }
}

export default function* companySaga() {
  yield takeLatest(FETCH_COMPANIES_REQUEST, fetchCompaniesSaga);
}
