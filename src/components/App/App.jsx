import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import Phonebook from '../Phonebook/Phonebook';
import { Layout, WrapperStyled, Header } from './App.styled';
import { ContactFofm } from '../ContactFofm/ContactFofm';
import { getContacts } from 'redux/selectors';

export function App() {
  const contactsList = useSelector(getContacts);

  return (
    <Layout>
      <WrapperStyled>
        <Header>Phonebook</Header>
        <ContactFofm />
      </WrapperStyled>
      {!!contactsList.length && <Phonebook />}
      <Toaster position="top-right" reverseOrder={false} gutter={8} />
    </Layout>
  );
}
