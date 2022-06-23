import { createAction } from '@reduxjs/toolkit';
import { lsAddContact } from '../api/localStorageAddContact';
import { IContactItem } from '../api/models';
import { AppDispatch } from './index';

export const CONTACTS = 'CONTACTS';

export const RECEIVE_CONTACTS = `${CONTACTS}/RECEIVE`;

export const receiveContacts = createAction<IContactItem[]>(RECEIVE_CONTACTS);

export const addContact = (data: IContactItem) => (dispatch: AppDispatch) => {
  const newData = lsAddContact(data);
  dispatch(receiveContacts(newData));
};
