alert ("Ingrese el producto que desea llevar, para salir ingrese 0")
let seleccionarProductos = Number(prompt ("1-Bossa $2500 2-Capa $ 3000 3-Cardigan $4500 4-Polera $3500 5-Pashmina $2500 6-Saco $5000 7-Sweter $2800"))
let seleccionarCantidad;
let total = 0;
while (seleccionarProductos != 0) {
    switch (seleccionarProductos) {
        case 1:
            seleccionarCantidad = Number(prompt ("El producto seleccionado es Bossa, indique la cantidad"))
            total += cantidad (seleccionarCantidad, 2500)
            break;
            case 2:
                seleccionarCantidad = Number(prompt ("El producto seleccionado es Capa, indique la cantidad"))
                total += cantidad (seleccionarCantidad, 3000)
            break;
            case 3:
                seleccionarCantidad = Number(prompt ("El producto seleccionado es Cardigan, indique la cantidad"))
                total += cantidad (seleccionarCantidad, 4500)
            break;
            case 4:
                seleccionarCantidad = Number(prompt ("El producto seleccionado es Polera, indique la cantidad"))
                total += cantidad (seleccionarCantidad, 3500)
            break;
            case 5:
                seleccionarCantidad = Number(prompt ("El producto seleccionado es Pashmina, indique la cantidad"))
                total += cantidad (seleccionarCantidad, 2500)
            break;
            case 6:
                seleccionarCantidad = Number(prompt ("El producto seleccionado es Saco, indique la cantidad"))
                total += cantidad (seleccionarCantidad, 5000)
            break;
            case 7:
                seleccionarCantidad = Number(prompt ("El producto seleccionado es Sweter, indique la cantidad"))
                total += cantidad (seleccionarCantidad, 2800)
            default:
            break;
    }
    seleccionarProductos = Number(prompt ("1-Bossa $2500 2-Capa $ 3000 3-Cardigan $4500 4-Polera $3500 5-Pashmina $2500 6-Saco $5000 7-Sweter $2800"))
}

alert ("El total de su compra es de " + total)

function cantidad (cantidad, precio) {
    return cantidad * precio
}

const envio = () => {
    if (total >= 10000) {
        alert ("El envío es gratuito")
    }else{
        total += 1000
        alert ("El costo de envío es de $1000, el total es " + total)
    }
}

envio ()