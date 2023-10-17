import React from 'react';

import ContactItem from './ContactItem';
import { List } from './styled/Parts.styled';

const ContactList = ({ contacts, handleDelete, filter }) => {
  // console.log('ContactList :>>', contacts);
  // console.log('ContactList :>>', filter);
  return (
    <List>
      {(filter ?? contacts).map(oneCont => (
        <ContactItem
          item={oneCont}
          key={oneCont.id}
          handleDelete={handleDelete}
        />
      ))}
    </List>
  );
};

export default ContactList;
