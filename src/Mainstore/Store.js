import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../redux/reducers/loginReducer';
import signupReducer from '../redux/reducers/signupReducer';
import mailReducer from '../redux/reducers/mailReducer';

const reducers = combineReducers({
  loginReducer,
  signupReducer,
  mailReducer,
});

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
const store = createStore(
  reducers, enhancers,
);
export default store;
