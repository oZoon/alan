import { IContactItem } from './models';

class Records {
  setRecord(key: string, record: IContactItem[]) {
    localStorage.setItem(key, JSON.stringify(record));
  }

  getRecord(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }
}

export default new Records();
