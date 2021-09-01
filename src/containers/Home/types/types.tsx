import { issuesTypes } from "../constants/actionTypes";

export interface IssuesState {
  pending: boolean;
  issues: any[];
  error: string | null;
}

export interface FetchIssuesSuccessPayload {
  issues: any[];
}

export interface FetchIssuesFailurePayload {
  error: string;
}

export interface FetchIssuesRequest {
  type: typeof issuesTypes.FETCH_ISSUES_REQUEST;
  org: string;
  repo: string;
}

export type FetchIssuesSuccess = {
  type: typeof issuesTypes.FETCH_ISSUES_SUCCESS;
  payload: FetchIssuesSuccessPayload;
};

export type FetchIssuesFailure = {
  type: typeof issuesTypes.FETCH_ISSUES_FAILURE;
  payload: FetchIssuesFailurePayload;
};

export type IssuesActions =
  | FetchIssuesRequest
  | FetchIssuesSuccess
  | FetchIssuesFailure;
