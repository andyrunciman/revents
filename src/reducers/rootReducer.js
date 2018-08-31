import { combineReducers } from 'redux';
import { testReducer } from './testReducer';
import { reducer as formReducer } from 'redux-form';
import eventReducer from '../features/events/eventReducer';
export default combineReducers({
  test: testReducer,
  events: eventReducer,
  form: formReducer
});
