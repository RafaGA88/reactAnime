import React, { useState } from 'react';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import { CadastroForm } from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import history from '../../services/history';

export default function CadastroAnimes() {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [dataLancamento, setData] = useState('');
  const [descricao, setDescricao] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post('/cadastrar_animes', {
        titulo,
        categoria,
        data_lancamento: dataLancamento,
        descricao,
      });

      toast.success('Anime cadastrado com sucesso');
      history.push('/');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.map((error) => toast.error(error));
    }
  }

  return (
    <Container>
      <CadastroForm onSubmit={handleSubmit}>
        <h1>Cadastro de Animes</h1>
        <h2>Nome do Anime:</h2>
        <label htmlFor="titulo">
          <input
            type="text"
            value={titulo}
            placeholder="Digite o nome do anime..."
            onChange={(e) => setTitulo(e.target.value)}
          />
        </label>
        <h2>Categoria:</h2>
        <label htmlFor="categoria">
          <select onChange={(e) => setCategoria(e.target.value)}>
            <option>Escolher Categoria</option>
            <option value="Ação">Ação</option>
            <option value="Aventura">Aventura</option>
            <option value="Ficção">Ficção</option>
            <option value="Romance">Romance</option>
            <option value="Terror">Terror</option>
            <option value="Suspense">Suspense</option>
          </select>
        </label>
        <h2>Data de Lançamento:</h2>
        <label htmlFor="data_lancamento">
          <input
            type="date"
            value={dataLancamento}
            onChange={(e) => setData(e.target.value)}
          />
        </label>
        <h2>Descrição:</h2>
        <label htmlFor="descricao">
          <textarea
            value={descricao}
            placeholder="Digite a descrição do anime..."
            onChange={(e) => setDescricao(e.target.value)}
          />
        </label>
        <button type="submit">Cadastrar Anime</button>
      </CadastroForm>
    </Container>
  );
}
