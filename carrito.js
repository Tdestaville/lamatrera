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

function producto (nombre, precio){
    this. nombre = nombre;
    this .precio = precio;
    console.log (producto);
};

let producto1 = new producto ("vaqueta azul", 2368);
let producto2 = new producto("vaqueta marron chocolate" , 2368);
let producto3 = new producto("vaqueta fuccia", 2368);
let producto4 = new producto("vaqueta marron borgoña", 2368);
let producto5 = new producto("vaqueta negro" ,2368);
let producto6 = new producto("vaqueta suela", 2700);
let producto7 = new producto("calabaza cuero gris", 2800);
let producto8 = new producto("calabaza cuero siena", 2800);
let producto9 = new producto("calabaza cuero verde musgo", 3200);
let producto10 = new producto("vaqueta suela", 2700);
let producto11 = new producto("vaqueta suela", 2700);
let producto12 = new producto("Base cuero de chivo tiento trenzado virola de aluminio", 4500);
let producto13 = new producto("porito cuero azul", 3035);
let producto14 = new producto("porito cuero marron cafe", 3035);
let producto15 = new producto("porito cuero marron caoba", 3035);
let producto16 = new producto("vaqueta suela", 2700);
let producto17 = new producto("Matera canasta suela", 2700);
let producto18 = new producto("Mochila Matera Cordura y Cuero para Stanley", 4190);
let producto19 = new producto("Matera suela bolsillo", 3600);
let producto20 = new producto("Matera suela clásica", 3300);
let producto21 = new producto("Matera suela para stanley", 3300);
let producto22 = new producto("Matera suela con tapa", 5000);
let producto23 = new producto("vaqueta suela", 2700);
let producto24 = new producto("Billetera Búfalo Simple Bordada o c/Costura", 450)
let producto25 = new producto("Billetera Cuero Combinada c/Volante", 450);
let producto26 = new producto("Billetera Cuero Crudo Simple Bordada o c/Costura", 450);
let producto27 = new producto("Billetera Cuero Simple c/doble Costura", 450);
let producto28 = new producto("Billetera Graneada Combinada", 450);
let producto29 = new producto("Billetera Mozo", 450);
let producto30 = new producto("Fichero al corte de Cuero c/Presilla", 450);
let producto31 = new producto("Fichero Cuero Combinado c/Presilla", 450);
let producto32 = new producto("Fichero Fileteado Cuero Combinado Triple", 450);
let producto33 = new producto("Llavero Alpaca", 450);
let producto34 = new producto("Llavero Alpaca con Asta", 450);
let producto35 = new producto("Llavero con Base", 450);
let producto36 = new producto("Llavero Chico Bordado o c/Aplique Cuero o Crudo", 450);
let producto37 = new producto("Llavero Crudo con Dije de Alpaca", 450);
let producto38 = new producto("Llavero Estribo", 450);
let producto39 = new producto("Llavero Medallón", 450);
let producto40 = new producto("Llavero Mosquetón Anzuelo Cuero", 450);
let producto41 = new producto("Llavero Mosquetón Vigilante Cuero", 450);
let producto42 = new producto("Cinto Búfalo con Costura", 2500);
let producto43 = new producto("Cinto Crudo Bordado", 2500);
let producto44 = new producto("Cinto Suela Calado", 2500);
let producto45 = new producto("Cinto Suela Ancho con Agujeritos", 2500);
let producto46 = new producto("Cinto Suela Bordado Completo", 2500);
let producto47 = new producto("Cinto Suela Liso", 2500);
let producto48 = new producto("Cinto Vestir Sport con Costura", 2500);
let producto49 = new producto("Cinto Vestir Reversible", 2500);
let producto50 = new producto("Cinto Soga con Puntera de Cuero", 2500);
let producto51 = new producto("Campera con codera de punto", 2500);
let producto52 = new producto("Campera de cuero con hombros", 2500);
let producto53 = new producto("Campera desagujada", 2500);
let producto54 = new producto("Campera lisa con bolsillos", 2500);
let producto55 = new producto("Campera medio cierre con codera de punto", 2500);
let producto56 = new producto("Polera", 2500);
let producto57 = new producto("Bossa con detalle", 2500);
let producto58 = new producto("Sweater E/V de lana merino patagónica manga larga", 2500);
let producto59 = new producto("Sweater E/V manga larga", 2500);
let producto60 = new producto("Bossa básico", 2500);
let producto61 = new producto("Capa polera con botones", 3000);
let producto62 = new producto("Cardigan con ochos y bolsillos", 4500);
let producto63 = new producto("Media polera con ochos", 3500);
let producto64 = new producto("Pashmina de lana de llama andina con bolsillos", 2500);
let producto65 = new producto("Polera perlada con ochos", 3500);
let producto66 = new producto("Saco", 5000);
let producto67 = new producto("Polera con cuello", 3500);
let producto68 = new producto("sweter rosa", 2800);
let producto69 = new producto("Puñal Regional Ac.Carbono 10cm", 2800);
let producto70 = new producto("Puñal Regional Ac.Carbono 14cm", 2800);
let producto71 = new producto("Puñal Regional Ac.Carbono 16cm", 2800);
let producto72 = new producto("Puñal Trenzado Ac.Carbono 12cm", 2800);
let producto73 = new producto("Puñal Trenzado Ac.Carbono 14cm", 2800);
let producto74 = new producto("Puñal Trenzado Ac.Carbono 16cm", 2800);
let producto75 = new producto("Puñal Regional Ac.Inox 14cm", 2800);
let producto76 = new producto("Puñal Trenzado Ac.Inox 14cm", 2580);
let producto77 = new producto("Puñal Madera y Alpaca Ac.Inox 14cm", 2800);
let producto78 = new producto("Puñal Ciervo de volteo Ac.Inox 14cm", 2800);
let producto79 = new producto("Facón Alpaca y Picaso Ac.Inox 14cm", 2800);
let producto80 = new producto("Puñal Trenzado Fino Ac.Inox 14cm", 2800);
let producto81 = new producto("Agenda Chica c/Cierre Cuero", 2500);
let producto82 = new producto("Agenda Clásica c/Cierre Búfalo", 2500);
let producto83 = new producto("Agenda Clásica c/Cierre Cuero", 2500);
let producto84 = new producto("Agenda Clásica c/Cierre Crudo", 2500);
let producto85 = new producto("Agenda Sintético Simple c/Cierre", 2500);
let producto86 = new producto("Agenda Doble con Cierre Búfalo con repuesto y Bolsillo", 2500);
let producto87 = new producto("Agenda Simil Doble con Cierre", 2500);
let producto88 = new producto("Agenda Doble con Cierre Cuero con repuesto", 2500);
let producto89 = new producto("Agenda Clásica con Cierre CP con repuesto", 2500);

let productos= [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,
producto11,producto12,producto13,producto14,producto15,producto16,producto17,producto18,producto19,producto20,
producto21,producto22,producto23,producto24,producto25,producto26,producto27,producto28,producto29,producto30,
producto31,producto32,producto33,producto34,producto35,producto36,producto37,producto38,producto39,producto40,
producto41,producto42,producto43,producto44,producto45,producto46,producto47,producto48,producto49,producto50,
producto51,producto52,producto53,producto54,producto55,producto56,producto57,producto58,producto59,producto60,
producto61,producto62,producto63,producto64,producto65,producto66,producto67,producto68,producto69,producto70,
producto71,producto72,producto73,producto74,producto75,producto76,producto77,producto78,producto79,producto80,
producto81,producto82,producto83,producto84,producto85,producto86,producto87,producto88,producto89];
localStorage.setItem("arrayProductos",JSON.stringify(productos));

let arrayParseado = JSON.parse(localStorage.getItem("arrayProductos"));






 