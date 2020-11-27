import React from "react";
import { useEffect, useState } from "react";
import { NotasCollection } from "../../api/NotasCollection";
import almacenNotas from "../datos/almacenNotas";

export const NuevaNota = props => {
    const { aula, onCierraFormulario } = props;
    const [valido, setValido] = useState(false);
    const notaVacia = {
        nombre: "",
        apellido: "",
        nota: 0,
        aula
    }
    const [nuevaNota, setNuevaNota] = useState(notaVacia);
    const enviaForm = e => {
        e.preventDefault();
        NotasCollection.insert({ ...nuevaNota, nota: +nuevaNota.nota });

        setNuevaNota(notaVacia);
        onCierraFormulario();
    }
    useEffect(() => {
        const { nombre, apellido, nota } = nuevaNota;
        setValido(nombre && apellido && nota !== "");
    }, [nuevaNota]);

    return (
        <div className="card">
            <div className="card-header">
                <span>Nueva nota aula {aula}</span>
                <i onClick={onCierraFormulario} className="fa fa-minus-circle"></i>
            </div>
            <form className="card-body" onSubmit={enviaForm}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        value={nuevaNota.nombre}
                        onChange={e => setNuevaNota({ ...nuevaNota, nombre: e.target.value.trim() })}
                        className="form-control"
                        id="nombre"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellidos">Apellidos:</label>
                    <input
                        type="text"
                        value={nuevaNota.apellido}
                        onChange={e => setNuevaNota({ ...nuevaNota, apellido: e.target.value.trim() })}
                        className="form-control"
                        id="apellidos"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nota">Nota:</label>
                    <input
                        type="number"
                        value={nuevaNota.nota}
                        onChange={e => setNuevaNota({ ...nuevaNota, nota: e.target.value >= 10 ? 10 : (e.target.value <= 0 ? 0 : e.target.value) })}
                        className="form-control form-control-sm"
                        id="nota"
                        required
                    />
                </div>
                <button className="btn btn-primary" disabled={!valido}>añadir</button>
            </form>
            <pre>{JSON.stringify(nuevaNota, null, 2)}</pre>
        </div>
    )
}