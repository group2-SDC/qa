import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
// import styled from 'styled-components';
// import toJson from 'enzyme-to-json';
// import 'jest-enzyme';
// import 'jest-styled-components';
import AskQuestion from './AskQuestion.jsx';
// import TextField from './AskQuestion.jsx';

//MIGHT I NEED TO IMPORT JEST-STYLED-COMPONENTS TO TEST STYLED COMPONENTS?

// const mockEventGenerator = (input) => {
//   return {
//     target: {
//       name: "question",
//       value: input
//     },
//     preventDefault: () => {},
//   };
// };
describe('<AskQuestion />', () => {
  test('it should correctly update the state when a change event is emitted', () => {
    const wrapper = shallow(<AskQuestion />);
    wrapper.find('TextField').simulate('change', { target: { name: 'question', value: 'test'}})
    expect(wrapper.instance().state.question).toBe('test')
  });

  test('it should invoke the correct method when a submit event is emitted', () => {
    const mockSubmitHandler = jest.fn();
    const wrapper = shallow(<AskQuestion />);
    wrapper.instance().handleSubmit = mockSubmitHandler;
    wrapper.instance().forceUpdate();
    wrapper.find('SubmitQButton').simulate('click');
    expect(mockSubmitHandler).toHaveBeenCalled();
  })
  //it adds a question to the list of questions

  //it adds an answer to the proper question
});