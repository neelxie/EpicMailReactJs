import axios from 'axios';
import {
  IS_PROCESSING,
  GET_MAIL_SUCCESS,
  GET_MAIL_FAILED
} from '../actionTypes';

const isGettingMail = () => ({
  type: IS_PROCESSING,
});

const isGettingMailSuccess = resp => ({
  type: GET_MAIL_SUCCESS,
  payload: resp.data
});

const isGettingMailFailed = error => ({
  type: GET_MAIL_FAILED,
  payload: error.response.data.error
});

const mailActions = (userLoginData) => dispatch => {
  dispatch(isGettingMail());
  return axios.post('https://my-epic-mail.herokuapp.com/api/v2/messages', userLoginData)
    .then((resp) => {
      dispatch(isGettingMailSuccess(resp));
    }).catch((error) => {
      dispatch(isGettingMailFailed(error));
    });
}
export default mailActions;
