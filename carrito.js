const agregarAlcarrito = document.querySelectorAll (".btn");
agregarAlcarrito.forEach ((añadir) => {
    añadir.addEventListener ("click", tarjetaClick);
});

function tarjetaClick (event) {
    const button = event.target;
    const card = button.closest (".card");

    const cardtitle = card.querySelector ( ".card-title").textContent;
    const precio = card.querySelector (".precio").textContent;
    const imagen = card.querySelector (".unisex").src;

    agregarItemcarrito (cardtitle, precio, imagen);
}

function agregarItemcarrito (cardtitle, precio, imagen){
console.log(cardtitle, precio, imagen);
}

