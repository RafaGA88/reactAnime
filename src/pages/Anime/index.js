import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import {
  Comentario,
  ContainerEp,
  Title,
  ContainerComentarios,
  ContainerComent,
} from './styled';
import history from '../../services/history';

export default function Anime() {
  const [anime, setAnime] = useState({});
  const [episodios, setEpisodios] = useState([]);
  const [rate, setRate] = useState('');
  const [review, setReview] = useState('');
  const [comentarios, setComentarios] = useState([]);
  const { id } = useParams();

  React.useEffect(() => {
    async function getAnime() {
      const ani = await axios.get(`/animes/${id}`);
      const epi = await axios.get(`/episodio/byFk/${id}`);
      setAnime(ani.data);
      setEpisodios(epi.data);
      const coment = await axios.get(`/comentario/${id}`);
      setComentarios(coment.data);
    }
    getAnime();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('/comentario', {
        rate,
        review,
        anime_id: id,
      });
      toast.success('Comentario realizado!');
      history.push(`/anime/${id}`);
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

  const contStyle = {
    display: 'block',
  };

  return (
    <Container style={contStyle}>
      <Title>
        <h1>{anime.titulo} </h1>
        <h2>Categoria: {anime.categoria}</h2>
        <h3>Data de Lançamento: {anime.data_lancamento}</h3>
        <span>Descrição: {anime.descricao}</span>
      </Title>
      <ContainerEp>
        <ContainerEp style={contStyle}>
          <h2>Episódios</h2>
          {episodios.map((episodio) => (
            <Link key={String(episodio.id)} to={`/episodio/${episodio.id}`}>
              <br />
              Episódio {episodio.numero_episodio} - {episodio.nome.split('"')}
            </Link>
          ))}
        </ContainerEp>
      </ContainerEp>
      <Comentario onSubmit={handleSubmit}>
        <h2>Comentarios</h2>
        <label htmlFor="rate">
          <span>Rate:</span>
          <select onChange={(e) => setRate(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>
        <br />
        <label htmlFor="review">
          <span>Comentario: </span>
          <br />
          <textarea
            type="textarea"
            placeholder="Digite seu comentario..."
            rows="3"
            onChange={(e) => setReview(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar Comentario</button>
      </Comentario>
      <ContainerComentarios>
        <h2>Comentarios sobre {anime.titulo}</h2>
        {comentarios.map((comentario) => (
          <ContainerComent key={String(comentario.id)}>
            <br />
            <span key={String(comentario.id + 1)}>Nota: {comentario.rate}</span>
            <br />
            <span key={String(comentario.id + 2)}>{comentario.review}</span>
          </ContainerComent>
        ))}
      </ContainerComentarios>
    </Container>
  );
}
