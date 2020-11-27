import React from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import { Navegacion } from "./componentes/Navegacion";
import { PaginaEstadisticas } from "./componentes/PaginaEstadisticas";
import { PaginaNotas } from "./componentes/PaginaNotas";
import { NotFound } from "./componentes/NotFound";

export const App = () => (
  <>
    <Navegacion />
    <Switch>
      <Route path="/notas">
        <PaginaNotas />
      </Route>
      <Route path="/estadisticas">
        <PaginaEstadisticas />
      </Route>
      <Route path="/" exact>
        <Redirect to="/notas" />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </>
);
