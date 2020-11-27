import React from "react";

import { Link, NavLink } from "react-router-dom"

export const Navegacion = props => {
    return (
        <header className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <h1 className="navbar-brand">Notas App</h1>
                </div>
                <nav className="nav navbar-nav navbar-right menu">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                            <NavLink to="/notas" activeClassName="activo">Listado de notas</NavLink>
                        </li>
                        <li className="list-inline-item">
                            <NavLink to="/estadisticas" activeClassName="activo">Estadísticas</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}