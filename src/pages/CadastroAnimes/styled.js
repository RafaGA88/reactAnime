import styled from 'styled-components';

export const CadastroForm = styled.form`
  display: block;
  width: 100%;

  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    font-size: 40px;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 12px 20px;
    margin: 8px 0px;
    border-radius: 4px;
  }

  select {
    width: 100%;
    height: 40px;
    padding: 12px 20px;
    margin: 8px 0px;
    border-radius: 4px;
  }

  button {
    display: block;
    margin-top: 15px;
  }

  h2 {
    font-size: 18px;
  }

  textarea {
    width: 100%;
    height: 110px;
    padding: 12px 20px;
    margin: 8px 0px;
    border-radius: 4px;
  }
`;
