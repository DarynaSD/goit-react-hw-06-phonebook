import React from 'react'

import {ContactName, ContactNumber, DeleteBtn} from './styled/Parts.styled'

const ContactItem = ({item, handleDelete}) => {
  return (
    <li style={{marginBottom: 20,}}>
          <ContactName>{item.contactName}</ContactName>
          <ContactNumber>{item.number}</ContactNumber>
          <DeleteBtn type="button" onClick={() => handleDelete(item.id)}>✖ Delete</DeleteBtn>
    </li>
  )
}

export default ContactItem
