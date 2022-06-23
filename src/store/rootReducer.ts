import { combineReducers } from 'redux';
import { contacts } from './reducer';

const rootReducer = combineReducers({
  contacts,
});

export default rootReducer;
