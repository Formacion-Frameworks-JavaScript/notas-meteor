import React from "react";
import { useEffect, useState } from "react";
import { Aula } from "./Aula";
import almacenNotas from "../datos/almacenNotas";
import { NuevaNota } from "./NuevaNota";
import { Loading } from "./Loading";
import { useTracker } from "meteor/react-meteor-data";
import { NotasCollection } from "../../api/NotasCollection";

export const PaginaNotas = () => {
    const [cargando, setCargando] = useState(true);
    const [muestraFormulario, setMuestraFormulario] = useState("");
    const [notas, setNotas] = useState([]);
    const letrasAulas = useTracker(() => {
        const handler = Meteor.subscribe("notas");
        if (handler.ready()) {
            setCargando(false);
        }
        return NotasCollection.find().fetch().map(nota => nota.aula)
            .filter((letra, i, arr) => arr.indexOf(letra) === i);
    }, []);
    const cierraFormulario = () => setMuestraFormulario("");
    const abreFormulario = aula => setMuestraFormulario(aula);
    return (
        <>
            <main className="container">
                <div className="row form-nueva">
                    <div className="col-12 col-lg-8 offset-lg-2">
                        {muestraFormulario && <NuevaNota aula={muestraFormulario} onCierraFormulario={cierraFormulario} />}
                    </div>
                </div>
                <div className="row">
                    {
                        letrasAulas.map(letraAula =>
                            <Aula
                                letra={letraAula}
                                key={letraAula}
                                muestraFormulario={muestraFormulario}
                                onAbreFormulario={abreFormulario}
                            />
                        )
                    }
                </div>
            </main>
            {
                cargando && <Loading />
            }
        </>
    );
}
