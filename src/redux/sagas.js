// src/redux/sagas.js
import { takeEvery, call, all,put } from 'redux-saga/effects';
import { REGISTER_REQUEST, LOGIN_REQUEST } from './actionTypes';
import { registerSuccess, registerFailure, loginSuccess, loginFailure } from './actions';
import { registerUserApi, loginUserApi } from '../Api/authApi'; // Create API functions

// Worker Saga for Registration
function* registerSaga(action) {
  try {
    const user = yield call(registerUserApi, action.payload); // Call the register API
    yield put(registerSuccess(user)); // Dispatch success action with the user data
  } catch (error) {
    yield put(registerFailure(error.message)); // Dispatch failure action if there's an error
  }
}

// Worker Saga for Login
function* loginSaga(action) {
  try {
    const user = yield call(loginUserApi, action.payload); // Call the login API
    yield put(loginSuccess(user)); // Dispatch success action with the user data
  } catch (error) {
    yield put(loginFailure(error.message)); // Dispatch failure action if there's an error
  }
}

// Watcher Sagas: Watch for the corresponding actions
function* watchRegisterRequest() {
  yield takeEvery(REGISTER_REQUEST, registerSaga);
}

function* watchLoginRequest() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}

// Root Saga to combine all the watchers
export default function* rootSaga() {
  yield all([watchRegisterRequest(), watchLoginRequest()]);
}
