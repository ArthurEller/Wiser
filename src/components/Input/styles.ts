import styled from 'styled-components';

export const Container = styled.div `
  background: transparent;
  color: #383E71;
  border-radius: 8px;
  border: 1px solid #989FDB;
  margin-top: 8px;
  margin-bottom: 16px;
  padding: 16px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
      flex: 1;
      border: none;
      background-color: transparent;

      &::placeholder {
         color: #989FDB;
      }

    }

  svg {
    color: red;
  }

  @media(max-width: 525px) {


      background: transparent;
      color: #383E71;
      border-radius: 8px;
      border: 1px solid #989FDB;
      margin-top: 8px;
      margin-bottom: 16px;
      padding: 16px;
      width: 256px;


      &::placeholder {
        color: #989FDB;
      }


    }

`
