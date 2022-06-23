import { combineReducers } from 'redux';
import { contactList } from './reducers';

export const contacts = combineReducers({
  contactList,
});
