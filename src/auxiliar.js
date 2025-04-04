
const crearTexto = (tag, texto, padre = null, clase = null) =>{
    const div = document.createElement("div");

    const temp = document.createElement(tag);
    temp.innerText = texto;
    div.appendChild(temp);

    if(clase){ div.classList.add(clase) };
    if(padre){
        padre.appendChild(div);
        return;
    } 
    return div;

}
export default crearTexto;