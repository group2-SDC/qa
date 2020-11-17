import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Questions from './Questions.jsx';

describe('Tests for questions component', () => {
  it('responds to click event for adding answer', () => {
    const testCallback = jest.fn();
    const button = shallow(<Questions onClick={testCallback}></Questions>)
    button.find('button').simulate('click');
    expect(testCallback.mock.calls.length).toEqual(1);
  })
})