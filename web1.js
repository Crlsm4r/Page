// BOTON ANIMACION

const boton = document.getElementById("btnAnimar");

const cubo = document.querySelector(".cubo");

boton.addEventListener("click", () => {

    cubo.style.animation = "none";

    setTimeout(() => {

        cubo.style.animation = "rotar 1s infinite linear";

    }, 100);
});

// FORMULARIO

const formulario = document.getElementById("formulario");

const nombre = document.getElementById("nombre");

const alerta = document.getElementById("alerta");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    if(nombre.value.trim().length < 4){

        alerta.innerHTML = "El nombre debe tener mínimo 4 caracteres";

        alerta.style.color = "red";

    }else{

        alerta.innerHTML = "Formulario enviado correctamente";

        alerta.style.color = "cyan";
    }
});
