import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import Modal from '../Components/Modal.jsx';

describe('<Modal />', () => {
  test('it should correctly update the state when a change event is emitted', () => {
    const wrapper = shallow(<Modal />);
    wrapper.find('TextFieldExpanded').simulate('change', { target: { name: 'question', value: 'test'}})
    expect(wrapper.instance().state.question).toBe('test')
  });
  test('it should call a function when the submit button is clicked', () => {
    const mockSubmitHandler = jest.fn();
    const wrapper = shallow(<Modal />);
    wrapper.instance().handleSubmit = mockSubmitHandler;
    wrapper.instance().forceUpdate();
    wrapper.find('SubmitAButton').simulate('click');
    expect(mockSubmitHandler).toHaveBeenCalled();
  })
  test('it should call hideModal when the Cancel button is clicked', () => {
    const mockSubmitHandler = jest.fn();
    const wrapper = shallow(<Modal hideModal={() => {}}/>);
    wrapper.instance().hideModal = mockSubmitHandler;
    //Not passing, I think because when submitqbutton is pressed it immediately runs a function passed through props
    wrapper.instance().forceUpdate();
    wrapper.find('SubmitQButton').simulate('click');
    expect(mockSubmitHandler).toHaveBeenCalled();
  })
});