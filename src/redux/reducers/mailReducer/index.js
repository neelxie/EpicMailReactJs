import {
    IS_PROCESSING,
    GET_MAIL_SUCCESS,
    GET_MAIL_FAILED
  } from '../../actions/actionTypes';
  
  const initialState = {
    isProcessing: false,
    errorMessage: "",
    userMsg: ""
  }
  
  const mailReducer = (state = initialState, action) => {
    switch (action.type) {
      case IS_PROCESSING:
        return {
          ...state,
          isProcessing: true,
        };
      case GET_MAIL_SUCCESS:
        return {
          ...state,
          isProcessing: false,
          userMsg: action.payload.message
  
        };
      case GET_MAIL_FAILED:
        return {
          ...state,
          isProcessing: false,
          errorMessage: action.payload
        };
      default:
        return state;
  
    }
  }
  export default mailReducer;