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

var producto1 = new producto ("vaqueta azul", 2368);
var producto2 = new producto("vaqueta marron chocolate" , 2368);
var producto3 = new producto("vaqueta fuccia", 2368);
var producto4 = new producto("vaqueta marron borgoña", 2368);
var producto5 = new producto("vaqueta negro" ,2368);
var producto6 = new producto("vaqueta suela", 2700);
var producto7 = new producto("calabaza cuero gris", 2800);
var producto8 = new producto("calabaza cuero siena", 2800);
var producto9 = new producto("calabaza cuero verde musgo", 3200);
var producto10 = new producto("vaqueta suela", 2700);
var producto11 = new producto("vaqueta suela", 2700);
var producto12 = new producto("Base cuero de chivo tiento trenzado virola de aluminio", 4500);
var producto13 = new producto("porito cuero azul", 3035);
var producto14 = new producto("porito cuero marron cafe", 3035);
var producto15 = new producto("porito cuero marron caoba", 3035);
var producto16 = new producto("vaqueta suela", 2700);
var producto17 = new producto("Matera canasta suela", 2700);
var producto18 = new producto("Mochila Matera Cordura y Cuero para Stanley", 4190);
var producto19 = new producto("Matera suela bolsillo", 3600);
var producto20 = new producto("Matera suela clásica", 3300);
var producto21 = new producto("Matera suela para stanley", 3300);
var producto22 = new producto("Matera suela con tapa", 5000);
var producto23 = new producto("vaqueta suela", 2700);
var producto24 = new producto("Billetera Búfalo Simple Bordada o c/Costura", 450)
var producto25 = new producto("Billetera Cuero Combinada c/Volante", 450);
var producto26 = new producto("Billetera Cuero Crudo Simple Bordada o c/Costura", 450);
var producto27 = new producto("Billetera Cuero Simple c/doble Costura", 450);
var producto28 = new producto("Billetera Graneada Combinada", 450);
var producto29 = new producto("Billetera Mozo", 450);
var producto30 = new producto("Fichero al corte de Cuero c/Presilla", 450);
var producto31 = new producto("Fichero Cuero Combinado c/Presilla", 450);
var producto32 = new producto("Fichero Fileteado Cuero Combinado Triple", 450);
var producto33 = new producto("Llavero Alpaca", 450);
var producto34 = new producto("Llavero Alpaca con Asta", 450);
var producto35 = new producto("Llavero con Base", 450);
var producto36 = new producto("Llavero Chico Bordado o c/Aplique Cuero o Crudo", 450);
var producto37 = new producto("Llavero Crudo con Dije de Alpaca", 450);
var producto38 = new producto("Llavero Estribo", 450);
var producto39 = new producto("Llavero Medallón", 450);
var producto40 = new producto("Llavero Mosquetón Anzuelo Cuero", 450);
var producto41 = new producto("Llavero Mosquetón Vigilante Cuero", 450);
var producto42 = new producto("Cinto Búfalo con Costura", 2500);
var producto43 = new producto("Cinto Crudo Bordado", 2500);
var producto44 = new producto("Cinto Suela Calado", 2500);
var producto45 = new producto("Cinto Suela Ancho con Agujeritos", 2500);
var producto46 = new producto("Cinto Suela Bordado Completo", 2500);
var producto47 = new producto("Cinto Suela Liso", 2500);
var producto48 = new producto("Cinto Vestir Sport con Costura", 2500);
var producto49 = new producto("Cinto Vestir Reversible", 2500);
var producto50 = new producto("Cinto Soga con Puntera de Cuero", 2500);
var producto51 = new producto("Campera con codera de punto", 2500);
var producto52 = new producto("Campera de cuero con hombros", 2500);
var producto53 = new producto("Campera desagujada", 2500);
var producto54 = new producto("Campera lisa con bolsillos", 2500);
var producto55 = new producto("Campera medio cierre con codera de punto", 2500);
var producto56 = new producto("Polera", 2500);
var producto57 = new producto("Bossa con detalle", 2500);
var producto58 = new producto("Sweater E/V de lana merino patagónica manga larga", 2500);
var producto59 = new producto("Sweater E/V manga larga", 2500);
var producto60 = new producto("Bossa básico", 2500);
var producto61 = new producto("Capa polera con botones", 3000);
var producto62 = new producto("Cardigan con ochos y bolsillos", 4500);
var producto63 = new producto("Media polera con ochos", 3500);
var producto64 = new producto("Pashmina de lana de llama andina con bolsillos", 2500);
var producto65 = new producto("Polera perlada con ochos", 3500);
var producto66 = new producto("Saco", 5000);
var producto67 = new producto("Polera con cuello", 3500);
var producto68 = new producto("sweter rosa", 2800);
var producto69 = new producto("Puñal Regional Ac.Carbono 10cm", 2800);
var producto70 = new producto("Puñal Regional Ac.Carbono 14cm", 2800);
var producto71 = new producto("Puñal Regional Ac.Carbono 16cm", 2800);
var producto72 = new producto("Puñal Trenzado Ac.Carbono 12cm", 2800);
var producto73 = new producto("Puñal Trenzado Ac.Carbono 14cm", 2800);
var producto74 = new producto("Puñal Trenzado Ac.Carbono 16cm", 2800);
var producto75 = new producto("Puñal Regional Ac.Inox 14cm", 2800);
var producto76 = new producto("Puñal Trenzado Ac.Inox 14cm", 2580);
var producto77 = new producto("Puñal Madera y Alpaca Ac.Inox 14cm", 2800);
var producto78 = new producto("Puñal Ciervo de volteo Ac.Inox 14cm", 2800);
var producto79 = new producto("Facón Alpaca y Picaso Ac.Inox 14cm", 2800);
var producto80 = new producto("Puñal Trenzado Fino Ac.Inox 14cm", 2800);
var producto81 = new producto("Agenda Chica c/Cierre Cuero", 2500);
var producto82 = new producto("Agenda Clásica c/Cierre Búfalo", 2500);
var producto83 = new producto("Agenda Clásica c/Cierre Cuero", 2500);
var producto84 = new producto("Agenda Clásica c/Cierre Crudo", 2500);
var producto85 = new producto("Agenda Sintético Simple c/Cierre", 2500);
var producto86 = new producto("Agenda Doble con Cierre Búfalo con repuesto y Bolsillo", 2500);
var producto87 = new producto("Agenda Simil Doble con Cierre", 2500);
var producto88 = new producto("Agenda Doble con Cierre Cuero con repuesto", 2500);
var producto89 = new producto("Agenda Clásica con Cierre CP con repuesto", 2500);


