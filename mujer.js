alert("Ingrese el producto que desea llevar, para salir ingrese 0")
let productos = ['1 Bossa $2500', '2 Capa $3000', '3 Cardigan $4500', '4 Polera $3500', '5 Pashmina $2500', '6 Saco $5000', '7 Sweter $2800'];
let seleccionarProductos = Number(prompt(productos.join(' - ')))
let seleccionarCantidad;
let carrito = { cantidad: 0, productos: [], total: 0 }
//let total = 0;
while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:

            seleccionarCantidad = Number(prompt("El producto seleccionado es Bossa, indique la cantidad"))
            carrito['productos'].push(seleccionarCantidad + ' Bossa')
            carrito['total'] += cantidad(seleccionarCantidad, 2500)
            break;
        case 2:
            seleccionarCantidad = Number(prompt("El producto seleccionado es Capa, indique la cantidad"))
            carrito['productos'].push(seleccionarCantidad + ' Capa')
            carrito['total'] += cantidad(seleccionarCantidad, 3000)
            break;
        case 3:
            seleccionarCantidad = Number(prompt("El producto seleccionado es Cardigan, indique la cantidad"))
            carrito['productos'].push(seleccionarCantidad + ' Cardigan')
            carrito['total'] += cantidad(seleccionarCantidad, 4500)
            break;
        case 4:

            seleccionarCantidad = Number(prompt("El producto seleccionado es Polera, indique la cantidad"))
            carrito['productos'].push(seleccionarCantidad + ' Polera')
            carrito['total'] += cantidad(seleccionarCantidad, 3500)
            break;
        case 5:
            seleccionarCantidad = Number(prompt("El producto seleccionado es Pashmina, indique la cantidad"))
            carrito['productos'].push(seleccionarCantidad + ' Pashmina')
            carrito['total'] += cantidad(seleccionarCantidad, 2500)
            break;
        case 6:
            seleccionarCantidad = Number(prompt("El producto seleccionado es Saco, indique la cantidad"))
            carrito['productos'].push(seleccionarCantidad + ' Saco')
            carrito['total'] += cantidad(seleccionarCantidad, 5000)
            break;
        case 7:
            seleccionarCantidad = Number(prompt("El producto seleccionado es Sweter, indique la cantidad"))
            carrito['productos'].push(seleccionarCantidad + ' Sweter')
            carrito['total'] += cantidad(seleccionarCantidad, 2800)
            break;
        default:
            break;
    }
    seleccionarProductos = Number(prompt(productos.join(' - ')))
}

alert("El total de su compra es de " + carrito['total'] + "\n Productos : " + carrito['productos'].join(' - '))

function cantidad(cantidad, precio) {
    return cantidad * precio
}

const envio = () => {
    if (carrito['total'] >= 10000) {
        alert("El envío es gratuito")
    } else {
        carrito['total'] += 1000
        alert("El costo de envío es de $1000, el total es " + carrito['total'])
    }
}

envio()