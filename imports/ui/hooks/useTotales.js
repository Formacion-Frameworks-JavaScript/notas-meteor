import { useEffect, useState } from "react";

export const useTotales = notas => {
    const [totales, setTotales] = useState({
        media: 0,
        maxima: 0,
        nAprobados: 0,
        pAprobados: 0,
        nSuspensos: 0,
        pSuspensos: 0
    });
    useEffect(() => {
        const media = notas.reduce((acc, nota) => acc + nota.nota, 0) / notas.length;
        const maxima = notas.reduce((acc, nota) => nota.nota > acc ? nota.nota : acc, 0);
        const nAprobados = notas.filter(nota => nota.nota >= 5).length;
        const pAprobados = nAprobados / notas.length * 100;
        const nSuspensos = notas.length - nAprobados;
        const pSuspensos = 100 - pAprobados;
        setTotales({ media, maxima, nAprobados, pAprobados, nSuspensos, pSuspensos });
    }, [notas]);
    return totales;
}