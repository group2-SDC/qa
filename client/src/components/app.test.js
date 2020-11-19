import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json';
import 'jest-styled-components';

import App from './App.jsx';

describe('<App />', () => {
  it('renders the app', () => {
    shallow(<App />)
  });

  //it adds a question to the list of questions

  //it adds an answer to the proper question
});