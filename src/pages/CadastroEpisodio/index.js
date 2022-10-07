import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { CadastroForm } from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import history from '../../services/history';

export default function CadastroEpisodio() {
  const [nome, setNome] = useState('');
  const [numeroEpisodio, setEpisodio] = useState('');
  const [animeEp, setAnimeEp] = useState('');
  const [video, setVideo] = useState('');
  const [animes, setAnime] = useState([]);

  React.useEffect(() => {
    async function getIdAnime() {
      const response = await axios.get('/listagem');
      setAnime(response.data);
    }
    getIdAnime();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post('/cadastrar_episodio', {
        arquivo: video,
        anime_id: animeEp,
        numero_episodio: numeroEpisodio,
        nome,
      });
      const anime = animes.filter((a) => a.id === animeEp);
      toast.success(`Episódio de ${anime[0].titulo}`);
      history.push(`/anime/${animeEp}`);
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <CadastroForm onSubmit={handleSubmit}>
        <h1>Cadastro de Episódios</h1>
        <h2>Nome do Episódio:</h2>
        <label htmlFor="nome">
          <input
            type="text"
            value={nome}
            placeholder="Digite o nome do anime..."
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <h2>Número do Episódio:</h2>
        <label htmlFor="numero_episodio">
          <input
            type="number"
            value={numeroEpisodio}
            placeholder="Digite o número do Episódio..."
            onChange={(e) => setEpisodio(e.target.value)}
          />
        </label>
        <h2>Anime referente ao episódio</h2>
        <label htmlFor="anime_episodio">
          <select onChange={(e) => setAnimeEp(e.target.value)}>
            <option>Anime referente ao episódio</option>
            {animes.map((anime) => (
              <option value={anime.id}>{anime.titulo}</option>
            ))}
          </select>
        </label>
        <h2>Upload do Episódio:</h2>
        <label htmlFor="video">
          <input
            type="file"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </label>
        <br />
        <p>OBS: Apenas arquivos .mp4 são permitios</p>
        <button type="submit">Cadastrar Episódio</button>
      </CadastroForm>
    </Container>
  );
}
