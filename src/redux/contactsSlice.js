import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(contacts, action) {
      contacts.push(action.payload);
    },
    deleteContact(contacts, action) {
      return contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
