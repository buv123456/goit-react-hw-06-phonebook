import { ContactFofm } from './ContactFofm/ContactFofm';
import { Layout, WrapperStyled, Header } from './App.styled';
import Phonebook from './Phonebook/Phonebook';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

export function App() {
  const contactsList = useSelector(state => state.contacts);

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
