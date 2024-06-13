import { put, takeLatest, call } from 'redux-saga/effects';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
} from '../actions/userActions';
import { fetchUsers, registerUser } from '../api';

function* fetchUsersSaga() {
  try {
    const users = yield call(fetchUsers);
    yield put({ type: FETCH_USERS_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, payload: error.message });
  }
}

function* registerUserSaga(action) {
  try {
    const newUser = yield call(registerUser, action.payload);
    yield put({ type: REGISTER_USER_SUCCESS, payload: newUser });
  } catch (error) {
    yield put({ type: REGISTER_USER_FAILURE, payload: error.message });
  }
}

function* userSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
  yield takeLatest(REGISTER_USER_REQUEST, registerUserSaga);
}

export default userSaga;

