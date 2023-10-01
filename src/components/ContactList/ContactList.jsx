import { useDispatch, useSelector } from 'react-redux';
import {
  ButtonStyled,
  ItemInfoStyled,
  ListItemStyled,
  ListStyled,
} from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

export function ContactList() {
  const dispatch = useDispatch();

  const contactsList = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contactsList.filter(({ name, number }) =>
    (name + number).toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ListStyled>
      {filteredContacts.map(({ name, number, id }) => (
        <ListItemStyled key={id} name={name}>
          <ItemInfoStyled>
            <span>{name}:</span>
            <span> {number}</span>
          </ItemInfoStyled>
          <ButtonStyled
            type="button"
            name={id}
            onClick={() => dispatch(deleteContact(id))}
          >
            delete
          </ButtonStyled>
        </ListItemStyled>
      ))}
    </ListStyled>
  );
}
