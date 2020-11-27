import React from "react";
import { useTotales } from "../hooks/useTotales";
import { Estadistica } from "./Estadistica";

export const Totales = props => {
    const { notas } = props;
    const totales = useTotales(notas);
    return (
        <div className="card-footer totales">
            <div className="row">
                <div className="col">
                    <Estadistica titulo="Nota media" dato={totales.media} conIcono truncado />
                </div>
                <div className="col">
                    <Estadistica titulo="Máxima nota" dato={totales.maxima} conIcono />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <Estadistica titulo="Aprobados" dato={totales.nAprobados} porcentaje={totales.pAprobados} />
                </div>
                <div className="col">
                    <Estadistica titulo="Suspensos" dato={totales.nSuspensos} porcentaje={totales.pSuspensos} />
                </div>
            </div>
        </div>
    )
}