const agregarAlcarrito = document.querySelectorAll (".btn");
agregarAlcarrito.forEach ((añadir) => {
    añadir.addEventListener ("click", tarjetaClick);
});
let arrayParseado = JSON.parse(localStorage.getItem("arrayProductos"))|| []
function tarjetaClick (event) {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agregado  al carrito',
        showConfirmButton: false,
        timer: 1500
      })
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

function producto (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    console.log (producto);
    
};

let productos=[]

fetch('./data/products.json').then(respuesta => respuesta.json())
.then(respuesta => {
    
    respuesta.products.forEach(element => {
       //let producto =new producto (element.name, element.price)
       productos.push({nombre:element.name,precio:element.price})
    });
    localStorage.setItem("arrayProductos",JSON.stringify(productos));
    arrayParseado = JSON.parse(localStorage.getItem("arrayProductos"))|| []
    console.log(arrayParseado)
    console.log(productos)
});




 