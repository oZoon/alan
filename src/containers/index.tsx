import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useContactsList } from '../store/selectors';
import { IContactItem } from '../api/models';
import { addContact } from '../store/actions';
import ContactsList from '../components/ContactsList';
import Form from '../components/Form';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const contactsList: IContactItem[] =
    useSelector(useContactsList).contactList.list;

  const handleAddContact = useCallback(
    (data: IContactItem) => {
      dispatch(addContact(data));
    },
    [dispatch]
  );

  return (
    <div style={{ display: 'flex' }}>
      <ContactsList list={contactsList} />
      <Form onAddContact={handleAddContact} />
    </div>
  );
};

export default HomePage;
