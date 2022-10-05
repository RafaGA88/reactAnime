import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, DivLoginLogout, Title } from './styled';

export default function Header() {
  return (
    <Nav>
      <Title>
        <NavLink to="/">My Tomatoes List</NavLink>
      </Title>
      <NavLink to="/cadastrar_episodio">Cadastrar Episódio</NavLink>
      <NavLink to="/cadastrar_anime">Cadastrar Anime</NavLink>
      <DivLoginLogout>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/cadastro">Cadastro</NavLink>
      </DivLoginLogout>
    </Nav>
  );
}
