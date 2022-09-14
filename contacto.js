const form = document.querySelector("#formulario");

const enviarFormulario = (event) => {
    event.preventDefault();

    const {nombre, apellido, email, telefono, comentarios} = event.target
    console.log (
        nombre.value,
        apellido.value,
        email.value,
        telefono.value,
        comentarios.value
    );
};

form.addEventListener("submit" , enviarFormulario);