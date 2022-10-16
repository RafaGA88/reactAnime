import styled from 'styled-components';

export const Title = styled.h1`
  color: black;
  padding-bottom: 50px;
  display: flex;
  font-size: 35px;
  justify-content: center;
`;

export const LoginForm = styled.form`
  color: black;

  input {
    padding: 12px 20px;
    margin: 8px 0px;
    width: 250px;
  }
  button {
    margin-top: 8px;
    display: block;
  }
`;

export const ContainerLogin = styled.div`
  padding: 70px;
  background-color: #fff;
  margin: 90px;
  border-radius: 10px;
  border: 2px solid yellow;
`;
