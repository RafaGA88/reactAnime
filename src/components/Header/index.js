import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Nav, DivLoginLogout, Title } from './styled';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    dispatch(actions.loginFailure());
    toast.success('Deslogado com sucesso');
    history.push('/');
  }

  return (
    <Nav>
      <Title>
        <NavLink to="/">My Tomatoes List</NavLink>
      </Title>
      <NavLink to="/cadastrar_episodio">Cadastrar Episódio</NavLink>
      <NavLink to="/cadastrar_anime">Cadastrar Anime</NavLink>
      <DivLoginLogout>
        {!isLoggedIn ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/cadastrar">Cadastro</NavLink>
          </>
        ) : (
          <NavLink onClick={handleClick} to="/logout">
            Logout
          </NavLink>
        )}
      </DivLoginLogout>
    </Nav>
  );
}
