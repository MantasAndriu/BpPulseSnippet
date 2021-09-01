import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import SearchButton from '../SearchButton';

const props = {
    onClick: jest.fn(),
    title: "Search"
}

test('Button click triggers', () => {
  const tree = render(<SearchButton {...props}/>);
  const input = tree.getByText(/(Search)/i);
  fireEvent.click(input);
  expect(props.onClick.mock.calls.length).toBe(1);
});