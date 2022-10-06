import React from 'react';
import { Title, LoginForm, ContainerLogin } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Cadastro() {
  return (
    <Container>
      <ContainerLogin>
        <Title>
          <h1>Cadastro</h1>
        </Title>
        <LoginForm>
          <form>
            <h2>Nome:</h2>
            <input type="text" name="nome" placeholder="Seu nome..." />
            <h2>Email:</h2>
            <input type="text" name="email" placeholder="Seu email..." />
            <h2>Senha:</h2>
            <input type="password" name="senha" placeholder="Sua senha..." />
            <h2>Confirmar Senha:</h2>
            <input
              type="password"
              name="senha-confirm"
              placeholder="Confirmar senha..."
            />
            <button type="submit">Cadastrar</button>
            <br />
            <p>Não possui cadastro ?</p>
          </form>
        </LoginForm>
      </ContainerLogin>
    </Container>
  );
}
