import React from 'react';
import { PhonebookStyled } from './Phonebook.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

function Phonebook({ filter, filteredContacts, onDelete, onChangeFilter }) {
  return (
    <PhonebookStyled>
      <h2>Contacts</h2>
      <Filter filter={filter} onChangeFilter={onChangeFilter} />
      <ContactList filteredContacts={filteredContacts} onDelete={onDelete} />
    </PhonebookStyled>
  );
}

export default Phonebook;
