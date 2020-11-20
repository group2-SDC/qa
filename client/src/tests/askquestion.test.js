import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import AskQuestion from '../Components/AskQuestion.jsx';

describe('<AskQuestion />', () => {
  test('it should invoke the showModal function when SubmitQButton is clicked', () => {
    const mockSubmitHandler = jest.fn();
    const wrapper = shallow(<AskQuestion />);
    wrapper.instance().showModal = mockSubmitHandler;
    wrapper.instance().forceUpdate();
    wrapper.find('SubmitQButton').simulate('click');
    expect(mockSubmitHandler).toHaveBeenCalled();
  })

  // FUTURE TESTS:

  //it adds a question to the list of questions

  //it adds an answer to the proper question
});