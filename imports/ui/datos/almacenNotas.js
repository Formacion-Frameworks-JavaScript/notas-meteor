const urlAPI = "https://server-notas-api.herokuapp.com/notas/";
let notas = [];
let suscripciones = [];

const avisa = () => suscripciones.forEach(cb => cb(notas));

const loadNotas = async () => {
    const resp = await fetch(urlAPI);
    if (resp.status === 200) {
        notas = await resp.json();
        avisa();
    }
}

const suscribirse = cb => {
    suscripciones.push(cb);
    cb(notas);
    return cb;
}

const desuscribirse = cb => {
    suscripciones = suscripciones.filter(f => f !== cb);
}

const borraNota = async nota => {
    const resp = await fetch(urlAPI + nota.id, { method: "DELETE" });
    if (resp.status === 200) {
        loadNotas();
        notas = notas.filter(n => n !== nota);
        avisa();
    }
}

const modificaNota = async (id, nota) => {
    const resp = await fetch(urlAPI + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nota })
    });
    if (resp.status === 200) {
        loadNotas();
        notas = notas.map(n => {
            if (n.id === id) {
                return {
                    ...n,
                    nota
                }
            } else {
                return n;
            }
        });
        avisa();
    }
}

const creaNota = async nota => {
    const resp = await fetch(urlAPI, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nota)
    });
    if (resp.status === 201) {
        loadNotas();
        const notaCreada = await resp.json();
        nota.id = notaCreada.id;
        notas = [...notas, nota];
        avisa();
    }
}

loadNotas();

export default {
    notas,
    suscribirse,
    desuscribirse,
    borraNota,
    modificaNota,
    creaNota
}