import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

//importando os componentes
import Sobre from "./componentes/sobre/Sobre";
import Referencias from "./componentes/referencias/Referencias";
import { Contato } from "./componentes/contato/Contato";
import Portfolio from "./componentes/portfolio/Portfolio";
import { Experiencia } from "./componentes/experiencia/Experiencia";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* O exact força a aplicação pesquisar a rota exata. Sem o exact, a aplicação pesquisa a rota considerando a / */}
        <Route exact component={Sobre} path="/" />
        <Route component={Referencias} path="/referencias" />
        <Route component={Contato} path="/contato" />
        <Route component={Portfolio} path="/portfolio" />
        <Route component={Experiencia} path="/experiencia" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
