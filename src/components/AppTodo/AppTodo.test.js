import React from 'react';
import { shallow } from 'enzyme';
import AppTodo from './AppTodo';

it('the page renders', () => {
  const wrapper = shallow(<AppTodo todoCount={jest.fn()} />);
  expect(wrapper).toBeDefined();
});
