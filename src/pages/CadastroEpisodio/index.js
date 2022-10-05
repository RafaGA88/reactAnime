import React from 'react';
import { CadastroForm } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function CadastroEpisodio() {
  return (
    <Container>
      <CadastroForm>
        <h1>Cadastro de Episódios</h1>
        <form>
          <h2>Nome do Episódio:</h2>
          <input
            type="text"
            name="teste"
            placeholder="Digite o nome do anime..."
          />
          <h2>Número do Episódio:</h2>
          <input
            type="number"
            name="teste"
            placeholder="Digite o número do Episódio..."
          />
          <h2>Anime referente ao episódio</h2>
          <select>
            <option value="acao">Referencia Anime 1</option>
            <option value="aventura">Referencia Anime 2</option>
            <option value="ficcao">Referencia Anime 3</option>
            <option value="romance">Referencia Anime 4</option>
            <option value="terror">Referencia Anime 5</option>
          </select>
          <h2>Upload do Episódio:</h2>
          <input type="file" name="video" />
          <br />
          <p>OBS: Apenas arquivos .mp4 são permitios</p>
          <button type="submit">Cadastrar Episódio</button>
        </form>
      </CadastroForm>
    </Container>
  );
}
