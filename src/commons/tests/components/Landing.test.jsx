/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Landing from '../../components/Landing';

// test
describe('<Landing> Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(<Landing />);

    expect(toJson(component)).toMatchSnapshot();
  });
});
