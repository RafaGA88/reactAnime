import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { get } from 'lodash';
import { Title, LoginForm, ContainerLogin } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as actions from '../../store/modules/auth/actions';

export default function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const prevPath = get(props, 'location.state.prevPath', '/');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(actions.loginRequest({ email, password, prevPath }));
  }

  return (
    <Container>
      <ContainerLogin>
        <Title>Login</Title>
        <LoginForm onSubmit={handleSubmit}>
          <h2>Email:</h2>
          <label htmlFor="email">
            <input
              type="text"
              value={email}
              placeholder="Seu email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <h2>Senha:</h2>
          <label htmlFor="senha">
            <input
              type="password"
              value={password}
              placeholder="Sua senha..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Login</button>
          <br />
          <p>Não possui cadastro ?</p>
          <Link to="/cadastrar">Cadastre já !</Link>
        </LoginForm>
      </ContainerLogin>
    </Container>
  );
}
