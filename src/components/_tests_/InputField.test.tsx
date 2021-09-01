import { fireEvent, render } from "@testing-library/react";
import React from "react";
import InputField from "../InputField";

const props = {
  placeholder: "Enter Organization",
  value: "a",
  setValue: jest.fn(),
  label: "Organization",
};

test("InputField changes the text input", () => {
  const tree = render(<InputField {...props} />);
  const input = tree.getByPlaceholderText(/(Enter Organization)/i);
  fireEvent.change(input, { target: { value: "octocat" } });
  expect(props.setValue.mock.calls.length).toBe(1);
});
