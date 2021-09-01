import { IssuesState } from "../../types/types";
import reducer from "../homeReducer";

const initialState: IssuesState = {
  pending: false,
  issues: [],
  error: null,
};

describe("REDUCER", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, initialState)).toEqual(initialState);
  });
});
