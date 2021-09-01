import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchIssuesFailure,
  fetchIssuesSuccess
} from "../actions/homeActions";
import { issuesTypes } from "../constants/actionTypes";

const getIssues = (props) =>
  axios.get(`https://api.github.com/repos/${props.org}/${props.repo}/issues`);

export function* fetchIssuesSaga(action) {
  try {
    const response = yield call(getIssues, {org: action.org, repo: action.repo});
    yield put(
      fetchIssuesSuccess({
        issues: response.data
      })
    );
  } catch (e) {
    yield put(
      fetchIssuesFailure({
        error: e.message
      })
    );
  }
}

function* homeWatcher() {
  yield (takeLatest(issuesTypes.FETCH_ISSUES_REQUEST, fetchIssuesSaga));
}

export default homeWatcher;