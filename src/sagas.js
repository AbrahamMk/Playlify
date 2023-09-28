import { takeEvery, put } from 'redux-saga/effects';
import * as types from './types';
import * as actions from './actions';


export function* addSongSaga(action) {
  
  yield put(actions.addSong(action.payload));
}

export function* deleteSongSaga(action) {
 
  yield put(actions.deleteSong(action.payload));
}

export function* rootSaga() {
  yield takeEvery(types.ADD_SONG, addSongSaga);
  yield takeEvery(types.DELETE_SONG, deleteSongSaga);
}