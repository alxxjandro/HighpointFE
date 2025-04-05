import crearTexto, { crearImg, crearTag } from "./auxiliar";
import imagenes from "./imagenes";
import "./styles/subirArchivo.css"


export const crearModulo = () =>{
    const div = document.createElement("div");
    div.className = "moduloUpload";

    const titulo = crearTexto("H1","Subir un archivo",div);
    const iconContainer = Object.assign(document.createElement("div"), { className: "iconContainer" });

    const icon = crearImg(imagenes.upload,iconContainer,"iconoSubir");
    const descripcion = crearTexto("p","Arrastra y suelta el archivo o seleccionalo.",iconContainer, "uploadDesc");
    const uploadBtn = crearTag("button",{}, "Seleccionar Archivo",iconContainer, "uploadBtn");
    console.log(uploadBtn)

    div.appendChild(iconContainer);
    return div;
}

const subirArchivo = () =>{
    const div = document.createElement("div");
    div.appendChild(Object.assign(document.createElement("h1"), { textContent: "Hi!" }));
    return div;
}

export default subirArchivo;