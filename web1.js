// =========================
// TITULO
// =========================

let titulo = "Nombre";

let cambio = document.querySelector(".Titulo");

cambio.innerHTML = titulo;

let tex_ver = cambio.innerText;

if (tex_ver == "Nombre") {

    cambio.innerHTML = "CV";

} else {

    console.log("No se cumple");
}

// =========================
// RESEÑA
// =========================

let carrera = "Mecatrónico";

let rubro = "diseño";

let tipo = "equipo";

let parrafoResena = document.querySelector(".reseña2");

function campar(carrera, rubro, tipo){

    let contenido = `
    Ingeniero ${carrera}. Capacidad para el manejo de programas de ${rubro} y programación de diferentes campos, acostumbrado al trabajo en ${tipo} manteniendo un perfil de líder capaz de organizar un equipo de trabajo, participación en eventos y concursos. Proactivo, innovador, creativo, responsable con disposición al aprendizaje y adaptabilidad al medio.
    `;

    return contenido;
}

parrafoResena.innerHTML = campar(carrera, rubro, tipo);

// =========================
// FORMULARIO
// =========================

const form = document.getElementById("form");

const nombre = document.getElementById("nombre");

const alertas = document.getElementById("alertas");

// VALIDAR

function validarFormulario(){

    let warnings = "";

    let valido = true;

    alertas.innerHTML = "";

    // VALIDAR NOMBRE

    if(nombre.value.trim().length < 4){

        warnings += "El nombre debe contener más de 4 caracteres";

        valido = false;
    }

    // MOSTRAR MENSAJE

    if(!valido){

        alertas.innerHTML = warnings;

        alertas.style.color = "red";

    }else{

        alertas.innerHTML = "Formulario enviado correctamente";

        alertas.style.color = "green";
    }

    return valido;
}

// EVENTO SUBMIT

form.addEventListener("submit", (e) => {

    e.preventDefault();

    if(validarFormulario()){

        form.submit();
    }
});
