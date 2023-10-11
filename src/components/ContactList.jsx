import React from 'react'

import ContactItem from './ContactItem'
import {List} from './styled/Parts.styled'

const ContactList = ({contacts, handleDelete, filter}) => {
  return (
    <List>
          {(filter ?? contacts).map((oneCont) => (
              <ContactItem item={oneCont} key={oneCont.id} handleDelete={ handleDelete}/>
      ))}
    </List>
  )
}

export default ContactList

				// <ul className='list-group'>
				// 	{(this.state.filteredTodo ?? this.state.todo).map((el) => (
				// 		<Todo todo={el} key={el.id} handleDelete={this.handleDelete} />
				// 	))}
				// </ul>
