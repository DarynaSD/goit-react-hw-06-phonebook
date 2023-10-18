// import { nanoid } from 'nanoid';
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import {
//   createContactAction,
//   deleteContactAction,
//   filterContactAction,
// } from 'redux/slice';
import Form from './Form';
import ContactList from './ContactList';
import Filter from './Filter';
import { Section, FormWrapper, ListWrapper } from './styled/Parts.styled';

const App = () => {
  // const store = useSelector((store) => store)
  // const contacts = useSelector(store => store.contactsHandler.contacts);
  // const filter = useSelector(store => store.contactsHandler.filter);
  // console.log("store in App >>", store)
  // console.log('store in App contacts>>', contacts);
  // console.log('store in App filter>>', filter);

  // const dispatch = useDispatch();

  // const createContact = (contactName, number) => {
  //   const alreadyExist = contacts.find(
  //     item => item.contactName === contactName
  //   );
  //   if (alreadyExist) return alert(`Contact '${contactName}' already exist`);

  //   const newContact = {
  //     id: nanoid(),
  //     contactName,
  //     number,
  //   };
  //   dispatch(createContactAction(newContact));
  // };

  // // delete
  // const handleDelete = id => {
  //   dispatch(deleteContactAction(id));
  // };

  // //filter
  // const filterContacts = filterQuery => {
  //   dispatch(filterContactAction(filterQuery));
  // };

  return (
    <Section>
      <FormWrapper>
        <Form />
      </FormWrapper>
      <ListWrapper>
        <Filter />
        <ContactList />
      </ListWrapper>
    </Section>
  );
};

export default App;
