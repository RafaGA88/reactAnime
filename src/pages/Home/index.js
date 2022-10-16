import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { Table, Title, ContainerBlock } from './styled';

export default function Home() {
  const [animes, setAnimes] = useState([]);

  React.useEffect(() => {
    async function getAnimes() {
      const response = await axios.get('/listagem');
      setAnimes(response.data);
    }
    getAnimes();
  }, []);

  return (
    <Container>
      <ContainerBlock>
        <Title>Página Principal</Title>
        <Table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Data de Lançamento</th>
              <th>Categoria</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {animes.map((anime) => (
              <tr key={String(anime.id)}>
                <td key={String(anime.id + 4)}>
                  <Link to={{ pathname: `/anime/${anime.id}` }}>
                    {anime.titulo}
                  </Link>
                </td>
                <td key={String(anime.id + 3)}>
                  {anime.data_lancamento.replaceAll('-', '/')}
                </td>
                <td key={String(anime.id + 1)}>{anime.categoria}</td>
                <td key={String(anime.id + 2)}>{anime.descricao}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ContainerBlock>
    </Container>
  );
}
