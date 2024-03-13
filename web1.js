let Titulo = "Nombre";

let cambio = document.querySelector(".Titulo")
cambio.innerHTML = Titulo;

let tex_ver = cambio.innerText;
console.log(tex_ver);

document.querySelector(".Titulo").innerHTML = "Nombre"

if (tex_ver == "Nombre"){
    cambio.innerHTML = "CV";
    console.log(cambio.innerHTML);
}

else{
    console.log("no se cumple");
}

let carrera = "Mecanico";
let rubro = "Analisis";
let tipo = "conjunto"

let parrafo = document.querySelector(".reseña2")

function campar(carrera, rubro, tipo){
    let contenido = `Ingeniero ${carrera}. Capacidad para el manejo de programas de ${rubro} y programación de diferentes campos, acostumbrado al trabajo en ${tipo} manteniendo un perfil de líder capaz de organizar un equipo de trabajo, participación en eventos y concursos. Proactivo, innovador, creativo, responsable con disposición al aprendizaje y adaptabilidad al medio.`

    return contenido;
}

parrafo.innerHTML = campar(carrera, rubro, tipo);

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});