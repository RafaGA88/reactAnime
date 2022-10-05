import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Title, LoginForm, ContainerLogin } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as userActions from '../../store/modules/user/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(userActions.clicaBotao());
  }

  return (
    <Container>
      <ContainerLogin>
        <Title>
          <h1>Login</h1>
        </Title>
        <LoginForm>
          <form>
            <h2>Email:</h2>
            <input type="text" name="email" placeholder="Seu email..." />
            <h2>Senha:</h2>
            <input type="password" name="senha" placeholder="Sua senha..." />
            <button onClick={handleClick} type="submit">
              Login
            </button>
            <br />
            <p>Não possui cadastro ?</p>
            <Link to="/cadastro">Cadastre já !</Link>
          </form>
        </LoginForm>
      </ContainerLogin>
    </Container>
  );
}
