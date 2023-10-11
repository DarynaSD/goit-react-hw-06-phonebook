import { useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { Section, FormWrapper, ListWrapper } from './styled/Parts.styled';

import React from 'react';

const App = () => {
  const INITAL = useMemo(
    () => [
      { id: 'id-1', contactName: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', contactName: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', contactName: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', contactName: 'Annie Copeland', number: '227-91-26' },
    ],
    []
  );

  const [contacts, setContacts] = useState(INITAL);

  const [filter, setFilter] = useState(null);

  //side effects
  useEffect(() => {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    storageContacts ?? setContacts(storageContacts);
  }, []);

  useEffect(() => {
    if (contacts !== INITAL)
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts, INITAL]);

  //create new contact
  const createContact = (contactName, number) => {
    const alreadyExist = contacts.find(
      item => item.contactName === contactName
    );
    if (alreadyExist) return alert(`Contact '${contactName}' already exist`);

    const newContact = {
      id: nanoid(),
      contactName,
      number,
    };

    setContacts([newContact, ...contacts]);
  };

  // delete
  const handleDelete = id => {
    const newContacts = contacts.filter(one => one.id !== id);
    setContacts(newContacts);

    if (filter) {const newFiltered = filter.filter(one => one.id !== id);
    setFilter(newFiltered);}
  };

  //filter
  const filterContacts = filterQuery => {
    if (filterQuery.length) {
      const filtered = contacts.filter(one =>
        one.contactName.toLowerCase().includes(filterQuery.toLowerCase())
      );
      setFilter(filtered);
    } else setFilter(null);
  };

  return (
    <Section>
      <FormWrapper>
        <Form createContact={createContact} />
      </FormWrapper>
      <ListWrapper>
        <Filter filterContacts={filterContacts} />
        <ContactList
          contacts={contacts}
          handleDelete={handleDelete}
          filter={filter}
        />
      </ListWrapper>
    </Section>
  );
};

export default App;
