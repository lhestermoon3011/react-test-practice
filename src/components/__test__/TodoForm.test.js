import React from 'react';
import { shallow } from 'enzyme';
import TodoForm from '../TodoForm';

describe('TodoForm', () => {
  let component;
  let props;

  beforeEach(() => {
    props = { 
      todoData: '',
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
    };
    component = shallow(<TodoForm {...props} />);
  })

  it('matches its snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders correct structure', () => {
    expect(component.is('div')).toBe(true);
  })
});
