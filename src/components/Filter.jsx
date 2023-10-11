import React from 'react'

import {InputLabelWrapper, Input} from './styled/Parts.styled'

const Filter = ({ filterContacts }) => {
	const handleChangeFilter = ({ target: { value } }) => {
		filterContacts(value)
    }
    
	return (
		<InputLabelWrapper>
			<label htmlFor='filterInput'>
				Find contact by name
			</label>
            <Input
                name='name'
                type='text'
                onChange={handleChangeFilter}
                id='filterInput'
			/>
		</InputLabelWrapper>
	)
}

export default Filter