import records from './records';
import { KEY } from '../constants/localstorage';
import { IContactItem } from './models';

export const lsAddContact = (data: IContactItem): IContactItem[] => {
  try {
    const response = records.getRecord(KEY);
    const result = response.concat(data);
    records.setRecord(KEY, result);

    return result;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('lsAddContact error: ', error);
    return [];
  }
};
