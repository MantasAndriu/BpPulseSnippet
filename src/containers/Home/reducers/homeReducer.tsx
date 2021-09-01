import { issuesTypes } from "../constants/actionTypes";
import { IssuesActions, IssuesState } from "../types/types";

const initialState: IssuesState = {
  pending: false,
  issues: [],
  error: null
};

export default (state = initialState, action: IssuesActions) => {
  switch (action.type) {
    case issuesTypes.FETCH_ISSUES_REQUEST:
      return {
        ...state,
        pending: true
      };
    case issuesTypes.FETCH_ISSUES_SUCCESS:
      return {
        ...state,
        pending: false,
        issues: action.payload.issues,
        error: null
      };
    case issuesTypes.FETCH_ISSUES_FAILURE:
      return {
        ...state,
        pending: false,
        issues: [],
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
};
