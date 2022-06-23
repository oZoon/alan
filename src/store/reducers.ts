import { createReducer } from '@reduxjs/toolkit';
import { IContactItem } from '../api/models';
import { AppAction } from './types';
import { receiveContacts } from './actions';
import records from '../api/records';
import { KEY } from '../constants/localstorage';

interface IStateContactsList {
  list: IContactItem[];
}

const initialStateContactsList: IStateContactsList = {
  list: records.getRecord(KEY),
};

export const contactList = createReducer<IStateContactsList>(
  initialStateContactsList,
  {
    [receiveContacts.type]: (state, action: AppAction<IContactItem[]>) => ({
      list: action.payload || state.list,
    }),
  }
);
