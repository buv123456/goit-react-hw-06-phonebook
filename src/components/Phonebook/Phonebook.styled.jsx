import styled from 'styled-components';

export const PhonebookStyled = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: inset 0 0 30px teal, 3px 3px 10px black;
`;

export const BtnDelAllStyled = styled.button`
  width: fit-content;
  font-size: 0.8rem;
  text-transform: uppercase;
  position: relative;
  bottom: 5px;
  padding: 0 4px;
  margin-top: auto;
  border-radius: 5px;
  &:hover {
    background-color: red;
    color: white;
  }
`;
