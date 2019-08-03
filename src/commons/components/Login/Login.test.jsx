/* eslint-disable no-undef */
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from './index';
import { Provider } from 'react-redux';
import store from '../../../Mainstore/Store';

const props = {
    getArticles: jest.fn(),
    items: [{ slug: "slug" }]
  };
// test
describe('<Login> Component', () => {
  it('should match the snapshot', () => {
    const component = shallow(
    <Provider store={store}><Login {...props} /></Provider>);

    expect(toJson(component)).toMatchSnapshot();
  });
});
// describe('Login ', () => {
//   let wrapper;
//   const loginprops = {
//     handleSubmit: jest.fn(),
//     onChange: jest.fn(),
//     email: '',
//     isLoggingIn: false,
//     password: '',
//     errors: {},
//   };
//   it('renders the login page', () => {
//     wrapper = shallow(<Login {...loginprops} />);
//   });
//   it('matches snapshot', () => {
//     expect(toJson(wrapper)).toMatchSnapshot();
//   });
// });
// describe('login Component', () => {
//   const props = {
//     onChange: jest.fn(),
//     handleSubmit: jest.fn(),
//     checkValidEmail: jest.fn(),
//     propsLoginAction: jest.fn(),
//     isLoading: false,
//     isLoggingIn: false,
//     loginFailed: false,
//   };

//   const event = {
//     preventDefault: () => {},
//     target: {
//       name: 'email',
//       value: 'abc',
//     },
//   };
//   const wrapper = mount(<Login {...props} />);

//   it('matches snapshot', () => {
//     expect(toJson(wrapper)).toMatchSnapshot();
//   });

//   it('should call an onChange function', () => {
//     const component = shallow(
//       <Login {...props} />,
//     );
//     component.setState({ email: 'email' });
//     component.instance().onChange(event);
//     expect(component.instance().state.email).toBe('abc');
//   });

//   it('should call handleSubmit', () => {
//     const component = shallow(
//       <Login {...props} />,
//     );
//     component.setState({ email: 'jane@us.com', password: '' });
//     component.instance().handleSubmit(event);
//     expect(component.state('errors').userPassword).toBe('Password field is required');
//   });

//   it('should call a submit a form', () => {
//     wrapper.setState({
//       email: 'jennyj',
//     });
//     const userEmail = {
//       match: jest.fn(),
//     };
//     const instance = wrapper.instance();
//     const checkValidEmail = jest.spyOn(instance, 'checkValidEmail');
//     checkValidEmail(userEmail);
//     instance.handleSubmit({ preventDefault: jest.fn() });
//     expect(checkValidEmail).toHaveBeenCalled();
//   });

//   it('Valid Email', () => {
//     wrapper.setState({
//       email: 'jenny@gmail.com',
//     });
//     const userEmail = {
//       match: jest.fn(),
//     };
//     const instance = wrapper.instance();
//     const checkValidEmail = jest.spyOn(instance, 'checkValidEmail');
//     instance.handleSubmit({ preventDefault: jest.fn() });
//     checkValidEmail(userEmail);
//     expect(checkValidEmail).toHaveBeenCalled();
//   });

//   it('should call submit form', () => {
//     wrapper.setState({
//       email: 'jennyj',
//     });
//     const userEmail = {
//       match: jest.fn(),
//     };
//     const instance = wrapper.instance();
//     const checkValidEmail = jest.spyOn(instance, 'checkValidEmail');
//     instance.handleSubmit({ preventDefault: jest.fn() });
//     checkValidEmail(userEmail);
//     expect(checkValidEmail).toHaveBeenCalled();
//   });

//   it('should validate an empty password', () => {
//     const instance = wrapper.instance();
//     instance.handleSubmit({ preventDefault: jest.fn() });
//     expect('Password field is required').toEqual(instance.state.errors.userPassword);
//   });

//   it('should call loginAction when handling submit', () => {
//     wrapper.setState({
//       email: 'jennyzalwango12@gmail.com',
//       password: 'password',
//       errors: {},
//     });
//     const instance = wrapper.instance();
//     instance.handleSubmit({ preventDefault: jest.fn() });
//     props.propsLoginAction();
//     expect(props.propsLoginAction).toHaveBeenCalled();
//   });

//   it('should load the component', () => {
//     expect(wrapper).toHaveLength(1);
//   });
// });
