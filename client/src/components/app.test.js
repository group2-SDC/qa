import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App.jsx';

describe('<App />', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<App />)})
  it('renders a div', () => {
    expect(wrapper.find('div').text()).toContain('Hello World!');
  });
  it('contains one div with class test', () => {
    expect(wrapper.find('div.test')).to.have.lengthof(1);
  })
});