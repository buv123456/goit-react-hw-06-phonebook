import { PhonebookStyled } from './Phonebook.styled';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

function Phonebook() {
  return (
    <PhonebookStyled>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </PhonebookStyled>
  );
}

export default Phonebook;
