const form = document.querySelector("#formulario");

const enviarFormulario = (event) => {
    Swal.fire({
        title: 'Estás seguro que querés enviar el formulario?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, enviar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Enviado!',
          )
        }
      })
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