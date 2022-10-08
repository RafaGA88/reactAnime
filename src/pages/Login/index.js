import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Title, LoginForm, ContainerLogin } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as userActions from '../../store/modules/user/actions';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState({});

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = axios.post('/tokens', {
        email,
        password,
      });
      setToken(response.data.token);
      toast.success('Login Realizado');
      history.push('/');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <ContainerLogin>
        <Title>
          <h1>Login</h1>
        </Title>
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
