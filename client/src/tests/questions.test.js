import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import Questions from '../Components/Questions.jsx';

// These tests are not passing, I may have to pass in mock data for the questions props?

describe('<Questions />', () => {
  test('it should call a function when the previous page button is clicked', () => {
    const mockSubmitHandler = jest.fn();
    const wrapper = shallow(<Questions questions={{}}/>);
    wrapper.instance().nextPage = mockSubmitHandler;
    wrapper.instance().forceUpdate();
    wrapper.find('PrevButton').simulate('click');
    expect(mockSubmitHandler).toHaveBeenCalled();
  })
  test('it should call a function when the next page button is clicked', () => {
    const mockSubmitHandler = jest.fn();
    const wrapper = shallow(<Questions questions={{}}/>);
    wrapper.instance().prevPage = mockSubmitHandler;
    wrapper.instance().forceUpdate();
    wrapper.find('NextButton').simulate('click');
    expect(mockSubmitHandler).toHaveBeenCalled();
  })
});