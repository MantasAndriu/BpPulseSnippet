import { takeLatest } from 'redux-saga/effects';
import '../../../../setupTests';
import { issuesTypes } from '../../constants/actionTypes';
import homeWatcher, { fetchIssuesSaga } from '../homeSaga';

describe('SAGAS', () => {
  it('should dispatch action "FETCH_ISSUES_REQUEST" ', () => {
    const generator = homeWatcher();
    expect(generator.next().value).toEqual(
      takeLatest(issuesTypes.FETCH_ISSUES_REQUEST, fetchIssuesSaga)
    );
    expect(generator.next().done).toBeTruthy();
  });
});