import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoute from './MyRoute';

import Page404 from '../pages/Page404/index';
import Login from '../pages/Login/index';
import CadastroAnimes from '../pages/CadastroAnimes';
import CadastroEpisodio from '../pages/CadastroEpisodio';
import Cadastro from '../pages/Cadastro';
import Anime from '../pages/Anime/index';
import Home from '../pages/Home/index';
import Episodio from '../pages/Episodio/index';

export default function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/episodio/:id" component={Episodio} />
      <MyRoute exact path="/anime/:id" component={Anime} />
      <MyRoute exact path="/login" component={Login} />
      <MyRoute path="/cadastrar_anime" component={CadastroAnimes} isLoggedIn />
      <MyRoute
        path="/cadastrar_episodio"
        component={CadastroEpisodio}
        isLoggedIn
      />
      <MyRoute path="/cadastrar" component={Cadastro} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
