import React from 'react';

import ContactItem from './ContactItem';
import { List } from './styled/Parts.styled';
import { useSelector } from 'react-redux';

const ContactList = () => {
  // console.log('ContactList :>>', contacts);
  // console.log('ContactList :>>', filter);
  const contacts = useSelector((store => store.contactsHandler.contacts));
  const filter = useSelector((store => store.contactsHandler.filter));

  console.log('ContactList :>>', contacts);
  console.log('ContactList :>>', filter);


  const filteredContacts = () => {
    if (filter) {
      const filtered = contacts.filter(one =>
        one.contactName.toLowerCase().includes(filter.toLowerCase())
      );
      return filtered;
    } else return contacts;
  };

  const newContArr = filteredContacts();

  return (
    <List>
      {newContArr.map(oneCont => (
        <ContactItem item={oneCont} key={oneCont.id} />
      ))}
    </List>
  );
};

export default ContactList;
