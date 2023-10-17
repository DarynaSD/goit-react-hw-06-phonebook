import { nanoid } from 'nanoid';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  createContactAction,
  deleteContactAction,
  filterContactAction,
} from 'redux/slice';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { Section, FormWrapper, ListWrapper } from './styled/Parts.styled';
import { store } from 'redux/store';

const App = () => {
  // //const store = useSelector((store) => store)
  // const {contacts} = useSelector(store => store.contacts);
  // const filterArr = contacts.filter;
  // const contactsArr = contacts.contacts;
  // //console.log("store in App >>", store)
  // console.log('store in App contactsArr>>', contactsArr);
  // console.log('store in App filter>>', filterArr);

  
  // const freshStore = useSelector(store => store.contactsHandler);
  // const { filter } = freshStore;
  // const {contacts} = freshStore;

  const contacts = useSelector(store => store.contactsHandler.contacts);
   const filter = useSelector(store => store.contactsHandler.filter);
  console.log('store in App >>', store);
  console.log('store in App contactsArr>>', contacts);
  console.log('store in App filter>>', filter);
  console.log(
    'handler in App >>', useSelector(store => store.contactsHandler)
  );
  console.log('state in App:>>', store.getState());


  const dispatch = useDispatch();

  const createContact = (contactName, number) => {
    const alreadyExist = contacts.contacts.find(
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
  // const filterContacts = filterQuery => {
  //   dispatch(filterContactAction(filterQuery));
  // };

  return (
    <Section>
      <FormWrapper>
        <Form createContact={createContact} />
      </FormWrapper>
      <ListWrapper>
        <Filter  />
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
