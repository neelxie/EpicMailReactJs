/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Profile from './index';
import { Provider } from 'react-redux';
import store from '../../../Mainstore/Store';

const props = {
    getArticles: jest.fn(),
    items: [{ slug: "slug" }]
  };
// test
describe('<Profile> Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(
    <Provider store={store}><Profile {...props} /></Provider>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
