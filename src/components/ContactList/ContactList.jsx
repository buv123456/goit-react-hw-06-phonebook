import {
  ButtonStyled,
  ItemInfoStyled,
  ListItemStyled,
  ListStyled,
} from './ContactList.styled';

export function ContactList({ filteredContacts, onDelete }) {
  return (
    <ListStyled>
      {filteredContacts.map(({ name, number, id }) => (
        <ListItemStyled key={id} name={name}>
          <ItemInfoStyled>
            <span>{name}:</span>
            <span> {number}</span>
          </ItemInfoStyled>
          <ButtonStyled type="button" name={id} onClick={e => onDelete(id)}>
            delete
          </ButtonStyled>
        </ListItemStyled>
      ))}
    </ListStyled>
  );
}
