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

// if it's react-related, enzyme's documentation is what we are looking at
// shallow does not render the children of a <div>

// mocking functions:

// you don't actually need to render the child component of an onclick event
// you just need the function that is invoked on clicking
//look at screenshots from Joel's presentation