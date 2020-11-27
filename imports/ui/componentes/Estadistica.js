import React from "react";
export const Estadistica = props => {
    const { titulo, dato, porcentaje, conIcono, truncado } = props;
    const clasesIconos = () => `fa-${dato >= 5 ? "smile" : "frown"} icono-${dato >= 5 ? "ok" : "no-ok"}`;
    return (
        <div className="card">
            <div className="card-header">{titulo}</div>
            <div className="card-body numbers">
                {truncado ? dato.toFixed(2) : dato}
                {
                    porcentaje && ` (${porcentaje.toFixed(2)}%)`
                }
            </div>
            { conIcono && <i className={`fa icono-status ${clasesIconos()}`}></i>}
        </div>
    )
}