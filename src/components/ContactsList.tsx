import React from 'react';
import { IContactItem } from '../api/models';

interface IContactsList {
  list: IContactItem[];
}

const ContactsList: React.FC<IContactsList> = ({ list }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', border: '1px solid black' }}>
      <div style={{ width: '300px' }}>телефон</div>
      <div style={{ width: '300px' }}>ФИО</div>
    </div>
    {list.map((item, index) => (
      <div style={{ display: 'flex' }} key={index}>
        <div style={{ width: '300px' }}>{item.phone}</div>
        <div style={{ width: '300px' }}>{item.name}</div>
      </div>
    ))}
  </div>
);

export default ContactsList;
