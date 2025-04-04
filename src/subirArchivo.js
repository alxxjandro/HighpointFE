import crearTexto from "./auxiliar";

export const crearModulo = () =>{
    const div = document.createElement("div");
    const titulo = crearTexto("H1","Subir un archivo");
    return div;
}

const subirArchivo = () =>{
    const div = document.createElement("div");
    div.appendChild(Object.assign(document.createElement("h1"), { textContent: "Hi!" }));
    return div;
}

export default subirArchivo;