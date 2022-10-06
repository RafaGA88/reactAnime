import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { Table } from './styled';

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
      <Table>
        <h1>Página Principal</h1>
        <table>
          <tr>
            <th>Título</th>
            <th>Data de Lançamento</th>
            <th>Categoria</th>
            <th>Descrição</th>
          </tr>
          {animes.map((anime) => (
            <tr>
              <td key={String(anime.id)}>
                <Link to={{ pathname: `/anime/${anime.id}` }}>
                  {anime.titulo}
                </Link>
              </td>
              <td key={String(anime.id)}>
                {anime.data_lancamento.replaceAll('-', '/')}
              </td>
              <td key={String(anime.id)}>{anime.categoria}</td>
              <td key={String(anime.id)}>{anime.descricao}</td>
            </tr>
          ))}
        </table>
      </Table>
    </Container>
  );
}
