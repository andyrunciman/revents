import { combineReducers } from 'redux';
import { testReducer } from './testReducer';
import eventReducer from '../features/events/eventReducer';
export default combineReducers({
  test: testReducer,
  events: eventReducer
});
