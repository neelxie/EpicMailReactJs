/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Signup from './index';
import { Provider } from 'react-redux';
import store from '../../../Mainstore/Store';

const props = {
    getArticles: jest.fn(),
    items: [{ slug: "slug" }]
  };
// test
describe('<Signup> Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(
    <Provider store={store}><Signup {...props} /></Provider>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
