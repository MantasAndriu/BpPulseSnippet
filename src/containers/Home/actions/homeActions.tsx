import { issuesTypes } from "../constants/actionTypes";
import {
  FetchIssuesFailure,
  FetchIssuesFailurePayload,
  FetchIssuesRequest,
  FetchIssuesSuccess,
  FetchIssuesSuccessPayload,
} from "../types/types";

export const fetchIssuesRequest = (
  org: string,
  repo: string
): FetchIssuesRequest => ({
  type: issuesTypes.FETCH_ISSUES_REQUEST,
  org,
  repo,
});

export const fetchIssuesSuccess = (
  payload: FetchIssuesSuccessPayload
): FetchIssuesSuccess => ({
  type: issuesTypes.FETCH_ISSUES_SUCCESS,
  payload,
});

export const fetchIssuesFailure = (
  payload: FetchIssuesFailurePayload
): FetchIssuesFailure => ({
  type: issuesTypes.FETCH_ISSUES_FAILURE,
  payload,
});
