import { useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { Section, FormWrapper, ListWrapper } from './styled/Parts.styled';

import React from 'react';

import store from '../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { createContactAction, deleteContactAction, filterContactAction } from 'store/slice';


const App = () => {
  // const INITAL = useMemo(
  //   () => [
  //     { id: 'id-1', contactName: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', contactName: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', contactName: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', contactName: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   []
  // );

  // const [contacts, setContacts] = useState(INITAL);

  // const [filter, setFilter] = useState(null);
  const store = useSelector((store) => store)
  console.log("store in App >>", store)
  console.log('store in App contacts>>', store.contacts.contacts);
  console.log('store in App filter>>', store.contacts.filter);

  const dispatch = useDispatch();
  //side effects
  // useEffect(() => {
  //   const storageContacts = JSON.parse(localStorage.getItem('contacts'));
  //   storageContacts ?? setContacts(storageContacts);
  // }, []);

  // useEffect(() => {
  //   if (contacts !== INITAL)
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts, INITAL]);

  //create new contact
  const createContact = (contactName, number) => {
    const alreadyExist = store.contacts.contacts.find(
      item => item.contactName === contactName
    );
    if (alreadyExist) return alert(`Contact '${contactName}' already exist`);

    const newContact = {
      id: nanoid(),
      contactName,
      number,
    };
    dispatch(createContactAction(newContact));
  };

  // delete
  const handleDelete = id => {
dispatch(deleteContactAction(id));
  };

  //filter
    const filterContacts = filterQuery => {
      dispatch(filterContactAction(filterQuery));
    };

  return (
    <Section>
      <FormWrapper>
        <Form createContact={createContact} />
      </FormWrapper>
      <ListWrapper>
        <Filter filterContacts={filterContacts} />
        <ContactList
          contacts={store.contacts.contacts}
          handleDelete={handleDelete}
          filter={store.contacts.filter}
        />
      </ListWrapper>
    </Section>
  );
};

export default App;
