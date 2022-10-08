/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { Video } from './styled';

export default function Episodio() {
  const [episodio, setEpisodio] = useState({});
  const { id } = useParams();

  React.useEffect(() => {
    async function getEpByPk() {
      const response = await axios.get(`/episodio/${id}`);
      setEpisodio(response.data);
    }
    getEpByPk();
  }, [id]);

  const contStyle = {
    display: 'block',
  };

  return (
    <Container style={contStyle}>
      <h1>
        Episódio {episodio.numero_episodio}:{episodio.nome}
      </h1>
      <Video>
        <video src={episodio.url} width="100%" height="600" controls />
      </Video>
    </Container>
  );
}
