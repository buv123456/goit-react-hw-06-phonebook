import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactFofm } from './ContactFofm/ContactFofm';
import { Layout, WrapperStyled, Header } from './App.styled';
import Phonebook from './Phonebook/Phonebook';
import { load, save } from 'helpers/storage';
import { Toaster } from 'react-hot-toast';

const savedContacts = load('contacts');

export function App() {
  const [contacts, setContacts] = useState(savedContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    save('contacts', contacts);
  }, [contacts]);

  const addContact = ({ name, number }) => {
    name = name.trim();
    number = number.trim();
    const isInList = contacts.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );
    isInList
      ? alert(name + ' is already in contacts list!')
      : setContacts(prev => [...prev, { name, number, id: nanoid() }]);
  };

  const changeFilter = filterStr => setFilter(filterStr);

  const deleteContact = idForDel => {
    setContacts(prev => prev.filter(({ id }) => id !== idForDel));
  };

  const filteredContacts = contacts.filter(({ name, number }) =>
    (name + number).toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Layout>
      <WrapperStyled>
        <Header>Phonebook</Header>
        <ContactFofm addContact={addContact} />
      </WrapperStyled>
      {!!contacts.length && (
        <Phonebook
          filter={filter}
          onChangeFilter={changeFilter}
          filteredContacts={filteredContacts}
          onDelete={deleteContact}
        />
      )}
      <Toaster position="top-right" reverseOrder={false} gutter={8} />
    </Layout>
  );
}
// }
