import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';

import Page404 from '../pages/Page404/index';
import Login from '../pages/Login/index';
import CadastroAnimes from '../pages/CadastroAnimes';
import CadastroEpisodio from '../pages/CadastroEpisodio';
import Cadastro from '../pages/Cadastro';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/login" component={Login} />
      <MyRoute path="/cadastrar_anime" component={CadastroAnimes} />
      <MyRoute path="/cadastrar_episodio" component={CadastroEpisodio} />
      <MyRoute path="/cadastrar" component={Cadastro} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
