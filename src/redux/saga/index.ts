import { takeEvery, put, call } from 'redux-saga/effects';
import { getData } from '../../services/api';
import { LOAD_DATA, putData } from '../actions';

function fetchData() {
    return getData()
}

function* workerLoadData() {
    const data = yield call(fetchData)

    yield put(putData(data))
}

export function* watchLoadData() {
    yield takeEvery(LOAD_DATA, workerLoadData)
}