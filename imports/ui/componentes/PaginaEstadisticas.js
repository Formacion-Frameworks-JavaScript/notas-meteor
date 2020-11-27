import React from "react";
import { useEffect, useState } from "react";
import almacenNotas from "../datos/almacenNotas";
import { useTotales } from "../hooks/useTotales";
import { Estadistica } from "./Estadistica"
import { useTracker } from "meteor/react-meteor-data";
import { NotasCollection } from "../../api/NotasCollection";

export const PaginaEstadisticas = () => {
    const notas = useTracker(() => {
        Meteor.subscribe("notas");
        return NotasCollection.find().fetch();
    }, []);
    const totales = useTotales(notas);
    return (
        <>
            <main className="container">
                <div className="row totales">
                    <div className="col">
                        <div className="card">
                            <div className="header">
                                <h2>Estadísticas</h2>
                            </div>
                            <div className="card-body row">
                                <div className="col">
                                    <Estadistica titulo="Nota media" dato={totales.media} truncado conIcono />
                                </div>
                                <div className="col">
                                    <Estadistica titulo="Maxima nota" dato={totales.maxima} conIcono />
                                </div>
                                <div className="col">
                                    <Estadistica titulo="Aprobados" dato={totales.nAprobados} porcentaje={totales.pAprobados} />
                                </div>
                                <div className="col">
                                    <Estadistica titulo="Suspensos" dato={totales.nSuspensos} porcentaje={totales.pSuspensos} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="loading" hidden>
                <img src="img/loading.svg" alt="cargando" />
            </div>
        </>
    )
}