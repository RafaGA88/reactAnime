import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Title, LoginForm, ContainerLogin } from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post('/cadastro/', {
        nome,
        password,
        email,
      });
      toast.success('Cadastro Realizado');
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <ContainerLogin>
        <Title>Cadastro</Title>
        <LoginForm onSubmit={handleSubmit}>
          <label htmlFor="nome">
            <h2>Nome:</h2>
            <input
              type="text"
              value={nome}
              placeholder="Seu nome..."
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            <h2>Email:</h2>
            <input
              type="text"
              value={email}
              placeholder="Seu email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            <h2>Senha:</h2>
            <input
              type="password"
              value={password}
              placeholder="Sua senha..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Cadastrar</button>
        </LoginForm>
      </ContainerLogin>
    </Container>
  );
}
