import React from 'react';
import { CadastroForm } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function CadastroAnimes() {
  return (
    <Container>
      <CadastroForm>
        <h1>Cadastro de Animes</h1>
        <form>
          <h2>Nome do Anime:</h2>
          <input
            type="text"
            name="teste"
            placeholder="Digite o nome do anime..."
          />
          <h2>Categoria:</h2>
          <select>
            <option value="acao">Ação</option>
            <option value="aventura">Aventura</option>
            <option value="ficcao">Ficção</option>
            <option value="romance">Romance</option>
            <option value="terror">Terror</option>
            <option value="suspense">Suspente</option>
          </select>
          <h2>Data de Lançamento:</h2>
          <input type="date" name="teste" />
          <h2>Descrição:</h2>
          <textarea placeholder="Digite a descrição do anime..." />
          <button type="submit">Cadastrar Anime</button>
        </form>
      </CadastroForm>
    </Container>
  );
}
