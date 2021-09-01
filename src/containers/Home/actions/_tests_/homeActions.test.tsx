import { issuesTypes } from "../../constants/actionTypes";
import { fetchIssuesRequest } from "../homeActions";

describe("ACTIONS", () => {
  it("should create an action with correct type", () => {
    const expectedAction = {
      type: issuesTypes.FETCH_ISSUES_REQUEST,
      org: "org",
      repo: "repo",
    };
    expect(fetchIssuesRequest("org", "repo")).toEqual(expectedAction);
  });
});
