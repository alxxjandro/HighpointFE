const crearTexto = (tag, texto, padre = null, clase = null) => {
  const div = document.createElement("div");
  const temp = document.createElement(tag);
  temp.innerText = texto;
  div.appendChild(temp);

  if (clase) {
    div.classList.add(clase);
  }
  if (padre) {
    padre.appendChild(div);
    return;
  }
  return div;
};

export const crearImg = (img, padre = null, clase = null) => {
  const div = document.createElement("div");
  div.appendChild(Object.assign(document.createElement("img"), { src: img }));

  if (clase) {
    div.classList.add(clase);
  }
  if (padre) {
    padre.appendChild(div);
    return;
  }

  return div;
};

export const crearTag = (
  tag,
  atributos = {},
  content = null,
  padre = null,
  clasePadre = null,
) => {
  const div = document.createElement("div");
  const elem = document.createElement(tag);
  div.appendChild(elem);

  for (const [key, value] of Object.entries(atributos)) {
    elem.setAttribute(key, value);
  }

  if (content) {
    elem.textContent = content;
  }
  if (clasePadre) {
    div.classList = clasePadre;
  }
  if (padre) {
    padre.appendChild(div);
    return;
  }

  return div;
};

export default crearTexto;
