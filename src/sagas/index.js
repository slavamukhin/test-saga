import {put, takeEvery, all, call} from 'redux-saga/effects';
import {askServer}                     from '../api';
import {errorAction, initialLogin, page} from '../action';
import store from '../store';

function* userAsync() {
	console.log('__ store.getState()', store.getState())
	try {
		yield put(initialLogin());
		const data = yield call(() => {
				return askServer(store.getState().form)
					.then(res => res);
			},
		);
		yield put(page(data));
	} catch (error) {
		yield put(errorAction(error));
	}
}

function* watchUserAsync() {
	console.log('__ Async');
	yield takeEvery('LOGIN', userAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
	yield all([
		watchUserAsync(),
	])
}