import { createSlice, current } from '@reduxjs/toolkit';

import { INITAL } from './initialState';

export const contactSlice = createSlice({
  name: 'contactsRedux',
  initialState: INITAL,
  reducers: {
    createContactAction: (state, { payload }) => {
      const currentState = current(state)
      console.log(currentState)
      return {
        ...currentState,
        contacts: currentState.contacts.contacts ? [payload, ...currentState.contacts.contacts] : [payload],
      };
    },

    deleteContactAction: (state, { payload }) => {
      //const state = current(state)
      state.contacts = state.contacts.filter(el => el.id !== payload);
    },

    // filterContactAction: (state, { payload }) => {
    //   const currentState = current(state)
    //   if (payload.length) {
    //     currentState.filter = currentState.contacts.filter(one =>
    //       one.contactName.toLowerCase().includes(payload.toLowerCase())
    //     );
    //     } else
    // currentState.filter = null;
    // },
  },
});

export const contactReducer = contactSlice.reducer;
export const { createContactAction, deleteContactAction, filterContactAction } =
  contactSlice.actions;


