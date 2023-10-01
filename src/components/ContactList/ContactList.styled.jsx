import styled from 'styled-components';

export const ListStyled = styled.ul`
  width: 100%;
  font-size: 18px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 5px;
  }
`;

export const ListItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  &:hover {
    color: teal;
  }
`;

export const ItemInfoStyled = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  justify-content: space-between;
  border-bottom: 1px dotted #000;
`;

export const ButtonStyled = styled.button`
  width: 100px;
  font-size: 0.8rem;
  text-transform: uppercase;
  border-radius: 5px;
  &:hover {
    background-color: teal;
    color: white;
  }
`;
