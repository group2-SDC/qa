import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App.jsx';

describe('<App />', () => {
  it('renders a span with text Hello World!', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('div.test').text()).toContain('Hello World!');
  });
  // it('contains one div within div of class parent', () => {
  //   const wrapperTwo = shallow(<App />)
  //   expect(wrapperTwo.find('div.parent')).to.have.lengthOf(1);
  // })
});