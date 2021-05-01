import { takeEvery, put, call } from 'redux-saga/effects';
import { getData } from '../../services/api';
import { LOAD_DATA, putData } from '../actions';

function fetchData() {
  return getData();
}

function* workerLoadData(): any {
  const data = yield call(fetchData);

  yield put(putData(data));
}

export default function* watchLoadData() {
  yield takeEvery(LOAD_DATA, workerLoadData);
}
