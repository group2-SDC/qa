import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AskQuestion from './AskQuestion.jsx';
import TextField from './AskQuestion.jsx';

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
  it('it should correctly update the state when a change event is emitted', () => {
    const wrapper = shallow(<AskQuestion />);
    wrapper.find('textarea').simulate('change', { target: { name: 'question', value: 'test'}})
    expect(wrapper.instance().state.question).toBe('test')
  });

  //it adds a question to the list of questions

  //it adds an answer to the proper question
});