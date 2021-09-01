import { all, fork } from "redux-saga/effects";
import homeWatcher from "../../containers/Home/sagas/homeSaga";

export const rootSaga = function* root() {
  yield all([fork(homeWatcher)]);
};
