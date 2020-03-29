import axios from 'axios';
import {
  IS_PROCESSING,
  IS_LOGIN_SUCCESS,
  IS_LOGIN_FAILED
} from '../actionTypes';
import { Link } from 'react-router-dom';

const isLoggingIn = () => ({
  type: IS_PROCESSING,
});

const isLoginSuccess = resp => ({
  type: IS_LOGIN_SUCCESS,
  payload: resp.data
});

const isLoginFailed = error => ({
  type: IS_LOGIN_FAILED,
  payload: error.response.data.error
});

const loginActions = (userLoginData) => dispatch => {
  dispatch(isLoggingIn());
  return axios.post('https://my-epic-mail.herokuapp.com/api/v2/auth/login', userLoginData)
    .then((resp) => {
      dispatch(isLoginSuccess(resp));
      localStorage.setItem('token', resp.data.token);
      window.location = 'https://epicmailreact.herokuapp.com/profile';
    }).catch((error) => {
      dispatch(isLoginFailed(error));
    });
}
export default loginActions;
